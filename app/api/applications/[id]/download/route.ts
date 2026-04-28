import { getContentApiBase } from "@/lib/contentApi";
import { buildPristupnicaPdf } from "@/lib/pristupnicaPdf";
import type { ApplicationSubmission } from "@/types/application";

function safeFilename(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[^\w\s.-]+/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80);
}

export async function GET(_request: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;

  const base = getContentApiBase();
  const url = `${base}/applications.php`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    return new Response(text || "Upstream error", { status: res.status });
  }

  const data = (await res.json().catch(() => [])) as ApplicationSubmission[] | unknown;
  const list = Array.isArray(data) ? (data as ApplicationSubmission[]) : [];
  const app = list.find((a) => a && typeof a === "object" && (a as any).id === id);

  if (!app) {
    return new Response("Not found", { status: 404 });
  }

  let pdfBytes: Uint8Array;
  try {
    pdfBytes = await buildPristupnicaPdf(app);
  } catch (err) {
    console.error("[pristupnica/download] PDF generation failed:", err);
    return new Response("PDF generation failed", { status: 500 });
  }
  const body = new Uint8Array(pdfBytes);
  const namePart = safeFilename((app as any).name || "pristupnica");
  const filename = `pristupnica-${namePart}-${id.slice(0, 8)}.pdf`;

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "no-store",
    },
  });
}


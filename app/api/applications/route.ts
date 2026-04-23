import { getContentApiBase } from "@/lib/contentApi";

async function proxy(request: Request, init?: RequestInit) {
  const base = getContentApiBase();
  const url = `${base}/applications.php`;
  const res = await fetch(url, {
    ...init,
    headers: {
      ...(init?.headers || {}),
      // Ensure upstream understands JSON bodies for PATCH/POST
      "Content-Type":
        (init?.headers as any)?.["Content-Type"] ||
        (init?.headers as any)?.["content-type"] ||
        "application/json",
    },
    cache: "no-store",
  });

  const body = await res.text();
  return new Response(body, {
    status: res.status,
    headers: {
      "Content-Type": res.headers.get("Content-Type") || "application/json; charset=utf-8",
    },
  });
}

export async function GET() {
  return proxy(new Request("http://localhost"));
}

export async function PATCH(request: Request) {
  const body = await request.text();
  return proxy(request, { method: "PATCH", body });
}

export async function POST(request: Request) {
  const body = await request.text();
  return proxy(request, { method: "POST", body });
}

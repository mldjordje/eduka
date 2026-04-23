import type { ApplicationSubmission } from "@/types/application";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

function safe(v?: string) {
  return (v ?? "").trim();
}

function fmtDate(d?: string) {
  if (!d) return "";
  const parsed = new Date(d);
  return Number.isNaN(parsed.getTime()) ? "" : parsed.toLocaleString("sr-RS");
}

type Row = { label: string; value: string };

export async function buildPristupnicaPdf(app: ApplicationSubmission) {
  const pdf = await PDFDocument.create();
  const page = pdf.addPage([595.28, 841.89]); // A4 (pt)
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdf.embedFont(StandardFonts.HelveticaBold);

  const marginX = 48;
  const topY = 800;
  let y = topY;

  const drawText = (text: string, x: number, y: number, size: number, bold = false) => {
    page.drawText(text, {
      x,
      y,
      size,
      font: bold ? fontBold : font,
      color: rgb(0.07, 0.07, 0.07),
    });
  };

  const drawLine = (x1: number, y1: number, x2: number, y2: number) => {
    page.drawLine({
      start: { x: x1, y: y1 },
      end: { x: x2, y: y2 },
      thickness: 1,
      color: rgb(0.85, 0.85, 0.85),
    });
  };

  const title = "PRISTUPNICA – podaci o podnosiocu";
  drawText(title, marginX, y, 16, true);
  y -= 22;
  drawText(`Datum prijave: ${fmtDate(app.createdAt)}`, marginX, y, 10, false);
  y -= 16;
  drawLine(marginX, y, 595.28 - marginX, y);
  y -= 18;

  const rows: Row[] = [
    { label: "Ime i prezime", value: safe(app.name) },
    { label: "Adresa", value: safe(app.address) },
    { label: "E-mail", value: safe(app.email) },
    { label: "Telefon", value: safe(app.phone) },
    { label: "JMBG", value: safe(app.jmbg) },
    { label: "Broj licence", value: safe(app.licenseNumber) },
    { label: "Licni broj", value: safe(app.idNumber) },
    { label: "Zanimanje", value: safe(app.profession) },
    { label: "Ustanova", value: safe(app.institution) },
    { label: "Godine staza", value: safe(app.yearsOfService) },
    { label: "Stepen obrazovanja", value: safe(app.educationLevel) },
    { label: "Komora", value: safe(app.chamber) },
    {
      label: "Opcija clanarine",
      value:
        app.membershipFeeOption === "monthly"
          ? "Odbijanje od plate (200 RSD mesecno)"
          : app.membershipFeeOption === "annual"
            ? "Godisnje (2.400 RSD)"
            : "",
    },
    { label: "Saglasnost", value: app.agreementAccepted ? "DA" : "NE" },
    { label: "Napomena (CMS)", value: safe(app.note) },
  ];

  const labelW = 170;
  const rowH = 18;
  const valueX = marginX + labelW + 12;
  const maxW = 595.28 - marginX - valueX;

  for (const r of rows) {
    if (y < 72) break;

    drawText(`${r.label}:`, marginX, y, 11, true);
    const v = r.value || "-";

    // crude wrap by words
    const words = v.split(/\s+/).filter(Boolean);
    const lines: string[] = [];
    let current = "";
    for (const w of words) {
      const next = current ? `${current} ${w}` : w;
      const width = font.widthOfTextAtSize(next, 11);
      if (width > maxW && current) {
        lines.push(current);
        current = w;
      } else {
        current = next;
      }
    }
    if (current) lines.push(current);

    const firstLineY = y;
    for (let i = 0; i < Math.max(1, lines.length); i++) {
      const line = lines[i] ?? "";
      drawText(line, valueX, firstLineY - i * rowH, 11, false);
    }

    const usedH = Math.max(1, lines.length) * rowH;
    y -= usedH;
    y -= 6;
    drawLine(marginX, y + 4, 595.28 - marginX, y + 4);
    y -= 8;
  }

  const bytes = await pdf.save();
  return bytes;
}


import { NextResponse } from "next/server";
import { readDataFile, writeDataFile } from "@/util/jsonStorage";
import type { GalleryImage } from "@/types/gallery";

const FILE_NAME = "gallery.json";

export async function GET() {
  const images = await readDataFile<GalleryImage[]>(FILE_NAME, []);
  return NextResponse.json(images);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.url) {
      return NextResponse.json({ message: "Nedostaje URL slike." }, { status: 400 });
    }
    const images = await readDataFile<GalleryImage[]>(FILE_NAME, []);
    const item: GalleryImage = {
      id: crypto.randomUUID(),
      url: body.url,
      name: body.name,
      createdAt: new Date().toISOString(),
    };
    const updated = [item, ...images];
    await writeDataFile(FILE_NAME, updated);
    return NextResponse.json(item, { status: 201 });
  } catch (e) {
    return NextResponse.json({ message: "Nevalidan zahtev." }, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ message: "Nedostaje ID slike." }, { status: 400 });
    }
    const images = await readDataFile<GalleryImage[]>(FILE_NAME, []);
    const idx = images.findIndex((it) => it.id === id);
    if (idx === -1) {
      return NextResponse.json({ message: "Slika nije pronađena." }, { status: 404 });
    }
    const [removed] = images.splice(idx, 1);
    await writeDataFile(FILE_NAME, images);
    try {
      // Best-effort removal of uploaded file if it’s a local upload
      if (removed?.url && /^\/?uploads\//.test(removed.url)) {
        const p = removed.url.replace(/^\//, "");
        const fsPath = require("path").join(process.cwd(), "public", p.replace(/^uploads\//, "uploads/"));
        const fs = require("fs").promises;
        await fs.unlink(fsPath).catch(() => {});
      }
    } catch {}
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ message: "Nevalidan zahtev." }, { status: 400 });
  }
}

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


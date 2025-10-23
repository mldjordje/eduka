import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    const file = form.get("file");
    if (!file || typeof file === "string") {
      return NextResponse.json({ message: "Fajl nije prosleđen." }, { status: 400 });
    }

    // @ts-ignore: File provided by web API
    const filename: string = (file.name as string) || `upload-${Date.now()}`;
    const safeName = filename.replace(/[^a-zA-Z0-9._-]/g, "_");
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = path.join(process.cwd(), "public", "uploads");
    await fs.mkdir(uploadDir, { recursive: true });
    const dest = path.join(uploadDir, safeName);
    await fs.writeFile(dest, buffer);

    const publicPath = `/uploads/${safeName}`;
    return NextResponse.json({ path: publicPath }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Greška pri uploadu." }, { status: 500 });
  }
}


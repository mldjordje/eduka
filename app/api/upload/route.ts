import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const API_BASE_URL = (process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.eduka.co.rs").replace(/\/+$/, "");
const DEFAULT_REMOTE_UPLOAD = `${API_BASE_URL}/upload.php`;

function resolveRemoteUploadUrl() {
  const rawEndpoint = process.env.NEXT_PUBLIC_UPLOAD_ENDPOINT?.trim();
  if (rawEndpoint) {
    if (/^https?:\/\//i.test(rawEndpoint)) {
      return rawEndpoint.replace(/\/+$/, "");
    }
    const isRelativeLocal = rawEndpoint.startsWith("/") && !rawEndpoint.startsWith("//");
    if (!isRelativeLocal) {
      return rawEndpoint.replace(/\/+$/, "");
    }
    if (process.env.NODE_ENV === "production") {
      return DEFAULT_REMOTE_UPLOAD;
    }
    return undefined;
  }
  return DEFAULT_REMOTE_UPLOAD;
}

const REMOTE_UPLOAD_URL = resolveRemoteUploadUrl();

async function proxyUploadToRemote(request: Request, errorContext: unknown) {
  if (!REMOTE_UPLOAD_URL) {
    console.warn("[upload] Remote upload endpoint unavailable:", errorContext);
    return NextResponse.json({ message: "Greška pri uploadu." }, { status: 500 });
  }
  try {
    const upstream = await fetch(REMOTE_UPLOAD_URL, {
      method: "POST",
      headers: request.headers,
      body: request.body,
    });
    const text = await upstream.text();
    try {
      const payload = JSON.parse(text);
      return NextResponse.json(payload, { status: upstream.status || 500 });
    } catch {
      return NextResponse.json({ message: text || "Greška pri uploadu." }, { status: upstream.status || 500 });
    }
  } catch (proxyError) {
    console.error("[upload] Proxy to remote failed:", proxyError, "original error:", errorContext);
    return NextResponse.json({ message: "Greška pri uploadu." }, { status: 502 });
  }
}

export const runtime = "nodejs";

export async function POST(request: Request) {
  const fallbackRequest = request.clone();
  try {
    const form = await request.formData();
    const file = form.get("file");
    if (!file || typeof file === "string") {
      return NextResponse.json({ message: "Fajl nije prosleŽ`en." }, { status: 400 });
    }

    // @ts-ignore: File provided by web API
    const filename: string = (file.name as string) || `upload-${Date.now()}`;
    const safeName = filename.replace(/[^a-zA-Z0-9._-]/g, "_");
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = path.join(process.cwd(), "public", "uploads");
    const dest = path.join(uploadDir, safeName);
    await fs.mkdir(uploadDir, { recursive: true });
    await fs.writeFile(dest, buffer);

    const publicPath = `/uploads/${safeName}`;
    return NextResponse.json({ path: publicPath }, { status: 201 });
  } catch (err) {
    return proxyUploadToRemote(fallbackRequest, err);
  }
}

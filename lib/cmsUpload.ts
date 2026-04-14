import { getContentApiBase } from "@/lib/contentApi";

export function getUploadInfo() {
  const API_BASE = getContentApiBase();
  const UPLOAD_URL = (
    process.env.NEXT_PUBLIC_UPLOAD_URL || `${getContentApiBase()}/upload.php`
  ).replace(/\/+$/, "");
  const UPLOAD_ORIGIN = /^https?:\/\//.test(UPLOAD_URL) ? new URL(UPLOAD_URL).origin : "";
  return { API_BASE, UPLOAD_URL, UPLOAD_ORIGIN };
}

export async function uploadFileWithFallback(file: File) {
  const { UPLOAD_URL, UPLOAD_ORIGIN } = getUploadInfo();
  try {
    const data = new FormData();
    data.append("file", file);
    const res = await fetch(UPLOAD_URL, { method: "POST", body: data });
    const body = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(body.message || `Upload nije uspeo (${UPLOAD_URL}).`);
    let url = body.url || body.path;
    if (!url) throw new Error("Upload nije vratio putanju fajla.");
    if (!/^https?:\/\//.test(url) && UPLOAD_ORIGIN) {
      const normalized = String(url).replace(/^\/+/, "");
      url = `${UPLOAD_ORIGIN}/${normalized}`;
    }
    return url as string;
  } catch (err: any) {
    throw err instanceof Error ? err : new Error("Upload nije uspeo.");
  }
}

const API_BASE = (process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.eduka.co.rs").replace(/\/+$/, "");
const UPLOAD_URL =
  (process.env.NEXT_PUBLIC_UPLOAD_URL || "https://api.eduka.co.rs/upload.php").replace(/\/+$/, "");

export function getUploadInfo() {
  return { API_BASE, UPLOAD_URL };
}

export async function uploadFileWithFallback(file: File) {
  const { UPLOAD_URL } = getUploadInfo();
  try {
    const data = new FormData();
    data.append("file", file);
    const res = await fetch(UPLOAD_URL, { method: "POST", body: data });
    const body = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(body.message || `Upload nije uspeo (${UPLOAD_URL}).`);
    const url = body.url || body.path;
    if (!url) throw new Error("Upload nije vratio putanju fajla.");
    return url as string;
  } catch (err: any) {
    throw err instanceof Error ? err : new Error("Upload nije uspeo.");
  }
}

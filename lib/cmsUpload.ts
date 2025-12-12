const API_BASE = (process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.eduka.co.rs").replace(/\/+$/, "");
const USE_PHP_API = Boolean(API_BASE);
const UPLOAD_URL = (process.env.NEXT_PUBLIC_UPLOAD_ENDPOINT || (API_BASE ? `${API_BASE}/upload.php` : "")).replace(/\/+$/, "");

export function getUploadInfo() {
  return { API_BASE, USE_PHP_API, UPLOAD_URL };
}

export async function uploadFileWithFallback(file: File) {
  const { UPLOAD_URL } = getUploadInfo();
  const endpoints: string[] = [];
  if (UPLOAD_URL) endpoints.push(UPLOAD_URL);
  if (!UPLOAD_URL || UPLOAD_URL !== "/api/upload") endpoints.push("/api/upload");

  let lastError: Error | null = null;
  for (const endpoint of endpoints) {
    try {
      const data = new FormData();
      data.append("file", file);
      const res = await fetch(endpoint, { method: "POST", body: data });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.message || `Upload nije uspeo (${endpoint}).`);
      const url = body.url || body.path;
      if (!url) throw new Error("Upload nije vratio putanju fajla.");
      return url as string;
    } catch (err: any) {
      lastError = err instanceof Error ? err : new Error("Upload nije uspeo.");
    }
  }
  throw lastError || new Error("Upload nije uspeo.");
}

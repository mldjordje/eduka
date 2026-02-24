import type { BlogPost, BlogDocument } from "@/types/blog";

const BASE = (process.env.NEXT_PUBLIC_API_BASE_URL || '').replace(/\/+$/,'');

function localBase() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/+$/,"");
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`.replace(/\/+$/,"");
  return "http://localhost:3000";
}

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    if (BASE) {
      const res = await fetch(`${BASE}/posts.php`, { cache: "no-store" });
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      return Array.isArray(data) ? data.map(normalizePost) : [];
    }
  } catch {}
  try {
    const res = await fetch(`${localBase()}/api/posts`, { cache: "no-store" });
    if (!res.ok) throw new Error("Local API error");
    const data = await res.json();
    return Array.isArray(data) ? data.map(normalizePost) : [];
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  try {
    if (BASE) {
      const res = await fetch(`${BASE}/posts.php?slug=${encodeURIComponent(slug)}`, { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        return normalizePost(data);
      }
      return undefined;
    }
  } catch {}
  try {
    const res = await fetch(`${localBase()}/api/posts/${encodeURIComponent(slug)}`, { cache: "no-store" });
    if (!res.ok) return undefined;
    const data = await res.json();
    return normalizePost(data);
  } catch {
    return undefined;
  }
}

function normalizeDocuments(raw: any): BlogDocument[] {
  if (Array.isArray(raw)) {
    return raw
      .filter((d: any) => d && typeof d === "object" && d.url)
      .map((d: any) => ({ url: String(d.url), name: String(d.name || d.url) }));
  }
  if (typeof raw === "string" && raw.trim()) {
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return normalizeDocuments(parsed);
    } catch {}
  }
  return [];
}

export async function getSimpozijumPosts(): Promise<BlogPost[]> {
  const all = await getAllPosts();
  return all.filter((p) => p.showOnSimpozijum);
}

function normalizePost(raw: any): BlogPost {
  if (!raw || typeof raw !== "object") return raw;
  const normalizedImages = Array.isArray(raw.images)
    ? raw.images.filter((item: any) => typeof item === "string" && item.trim().length > 0)
    : raw.image
    ? [raw.image]
    : [];

  const documents = normalizeDocuments(raw.documents ?? raw.documents_json ?? []);

  return {
    ...(raw as BlogPost),
    image: raw.image || normalizedImages[0] || "",
    images: normalizedImages.length ? normalizedImages : undefined,
    document: raw.document ?? "",
    documentName: raw.documentName ?? raw.document_name ?? "",
    documents: documents.length ? documents : undefined,
    showOnSimpozijum: Boolean(raw.show_on_simpozijum ?? raw.showOnSimpozijum ?? false),
  };
}

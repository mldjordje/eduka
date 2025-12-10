import type { BlogPost } from "@/types/blog";

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
      const res = await fetch(`${BASE}/post.php?slug=${encodeURIComponent(slug)}`, { cache: "no-store" });
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

function normalizePost(raw: any): BlogPost {
  if (!raw || typeof raw !== "object") return raw;
  const normalizedImages = Array.isArray(raw.images)
    ? raw.images.filter((item: any) => typeof item === "string" && item.trim().length > 0)
    : raw.image
    ? [raw.image]
    : [];
  return {
    ...(raw as BlogPost),
    image: raw.image || normalizedImages[0] || "",
    images: normalizedImages.length ? normalizedImages : undefined,
    document: raw.document ?? raw.document_name ?? "",
    documentName: raw.documentName ?? raw.document_name ?? "",
  };
}

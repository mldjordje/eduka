import type { BlogPost } from "@/types/blog";

const BASE = (process.env.NEXT_PUBLIC_API_BASE_URL || '').replace(/\/+$/,'');

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    if (BASE) {
      const res = await fetch(`${BASE}/posts.php`, { cache: "no-store" });
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      return Array.isArray(data) ? data.map(normalizePost) : [];
    }
  } catch {}
  // Fallback: empty list if external API nije dostupan
  return [];
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
  return undefined;
}

function normalizePost(raw: any): BlogPost {
  if (!raw || typeof raw !== "object") return raw;
  return {
    ...(raw as BlogPost),
    document: raw.document ?? raw.document_name ?? "",
    documentName: raw.documentName ?? raw.document_name ?? "",
  };
}

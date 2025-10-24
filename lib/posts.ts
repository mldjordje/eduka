import type { BlogPost } from "@/types/blog";

const BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    if (BASE) {
      const res = await fetch(`${BASE}/posts.php`, { cache: "no-store" });
      if (!res.ok) throw new Error("API error");
      return (await res.json()) as BlogPost[];
    }
  } catch {}
  // Fallback: empty list if external API nije dostupan
  return [];
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  try {
    if (BASE) {
      const res = await fetch(`${BASE}/post.php?slug=${encodeURIComponent(slug)}`, { cache: "no-store" });
      if (res.ok) return (await res.json()) as BlogPost;
      return undefined;
    }
  } catch {}
  return undefined;
}

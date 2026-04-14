import type { BlogPost, BlogDocument } from "@/types/blog";
import { getContentApiBase } from "@/lib/contentApi";
import { slugifyBlogValue } from "@/lib/slugify";

const BASE = getContentApiBase();

function localBase() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/+$/,"");
  if (process.env.SITE_URL) return process.env.SITE_URL.replace(/\/+$/,"");
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`.replace(/\/+$/,"");
  return "http://localhost:3000";
}

function getSlugCandidates(slug: string) {
  const candidates = new Set<string>();
  const normalized = typeof slug === "string" ? slug.trim() : "";

  if (normalized) {
    candidates.add(normalized);
    try {
      candidates.add(decodeURIComponent(normalized));
    } catch {}
  }

  return [...candidates];
}

function normalizeSlugLoose(value: string) {
  const trimmed = (value || "").toString().trim();
  if (!trimmed) return "";
  try {
    return slugifyBlogValue(decodeURIComponent(trimmed));
  } catch {
    return slugifyBlogValue(trimmed);
  }
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
  const candidates = getSlugCandidates(slug);

  try {
    for (const candidate of candidates) {
      const res = await fetch(`${BASE}/posts.php?slug=${encodeURIComponent(candidate)}`, { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        return normalizePost(data);
      }
    }
  } catch {}
  try {
    for (const candidate of candidates) {
      const res = await fetch(`${localBase()}/api/posts/${encodeURIComponent(candidate)}`, { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        return normalizePost(data);
      }
    }
  } catch {
  }

  // Fallback: if a post slug was changed/normalized differently, try a loose match.
  // This prevents sporadic 404s when the list shows a slug variant that doesn't match the detail endpoint exactly.
  try {
    const target = normalizeSlugLoose(slug);
    if (target) {
      const all = await getAllPosts();
      const found = all.find((p) => normalizeSlugLoose(p.slug) === target);
      if (found) return found;
    }
  } catch {}

  return undefined;
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

import type { BlogPost, BlogDocument } from "@/types/blog";
import { getContentApiBase } from "@/lib/contentApi";
import { slugifyBlogValue } from "@/lib/slugify";

const BASE = getContentApiBase();

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

async function fetchJsonWithTimeout(url: string, opts?: { timeoutMs?: number; retries?: number }) {
  const timeoutMs = opts?.timeoutMs ?? 8000;
  const retries = opts?.retries ?? 1;

  let lastErr: unknown;
  for (let attempt = 0; attempt <= retries; attempt++) {
    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const res = await fetch(url, { cache: "no-store", signal: controller.signal });
      return res;
    } catch (e) {
      lastErr = e;
      if (attempt < retries) await sleep(250 * (attempt + 1));
    } finally {
      clearTimeout(t);
    }
  }

  throw lastErr;
}

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
      const res = await fetchJsonWithTimeout(`${BASE}/posts.php`, { timeoutMs: 12000, retries: 1 });
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      return Array.isArray(data) ? data.map(normalizePost) : [];
    }
  } catch {}
  try {
    const res = await fetchJsonWithTimeout(`${localBase()}/api/posts`, { timeoutMs: 12000, retries: 1 });
    if (!res.ok) throw new Error("Local API error");
    const data = await res.json();
    return Array.isArray(data) ? data.map(normalizePost) : [];
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const candidates = getSlugCandidates(slug);
  let hadNetworkError = false;

  for (const candidate of candidates) {
    try {
      const res = await fetchJsonWithTimeout(`${BASE}/posts.php?slug=${encodeURIComponent(candidate)}`, {
        timeoutMs: 12000,
        retries: 1,
      });
      if (res.ok) {
        const data = await res.json();
        return normalizePost(data);
      }
    } catch {
      hadNetworkError = true;
    }
  }

  for (const candidate of candidates) {
    try {
      const res = await fetchJsonWithTimeout(`${localBase()}/api/posts/${encodeURIComponent(candidate)}`, {
        timeoutMs: 12000,
        retries: 1,
      });
      if (res.ok) {
        const data = await res.json();
        return normalizePost(data);
      }
    } catch {
      hadNetworkError = true;
    }
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

  // If we experienced a network/API issue, don't pretend the post doesn't exist (404).
  // Throwing will surface the actual problem (and avoids sporadic false 404s).
  if (hadNetworkError) {
    throw new Error("Posts API unavailable");
  }

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

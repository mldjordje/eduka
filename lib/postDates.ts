import type { BlogPost } from "@/types/blog";

type PostLike = Partial<BlogPost> & { created_at?: string };

function normalizeDateInput(value?: string | null): string | null {
  if (!value) return null;
  const trimmed = value.toString().trim();
  if (!trimmed) return null;
  return trimmed.includes("T") ? trimmed : trimmed.replace(" ", "T");
}

export function extractPostTimestamp(post: PostLike): number {
  const candidates = [post.created_at, post.date].filter(Boolean) as string[];
  for (const value of candidates) {
    const normalized = normalizeDateInput(value);
    if (!normalized) continue;
    const ts = Date.parse(normalized);
    if (!Number.isNaN(ts)) return ts;
  }
  return 0;
}

export function formatPostDate(post: PostLike, locale = "sr-RS"): string {
  const candidates = [post.date, post.created_at].filter(Boolean) as string[];
  for (const value of candidates) {
    const normalized = normalizeDateInput(value);
    if (!normalized) continue;
    const ts = Date.parse(normalized);
    if (!Number.isNaN(ts)) {
      return new Date(ts).toLocaleDateString(locale);
    }
    const firstPart = value.split(" ")[0];
    if (firstPart) return firstPart;
  }
  return "-";
}

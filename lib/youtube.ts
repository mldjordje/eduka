const YOUTUBE_HOSTS = new Set([
  "youtube.com",
  "www.youtube.com",
  "m.youtube.com",
  "youtu.be",
  "www.youtu.be",
  "youtube-nocookie.com",
  "www.youtube-nocookie.com",
]);

function normalizeCandidate(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "";
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

function sanitizeVideoId(value: string | null | undefined) {
  if (!value) return null;
  const cleaned = value.trim();
  return /^[a-zA-Z0-9_-]{11}$/.test(cleaned) ? cleaned : null;
}

export function extractYouTubeVideoId(input: string) {
  const candidate = normalizeCandidate(input);
  if (!candidate) return null;

  try {
    const parsed = new URL(candidate);
    const host = parsed.hostname.toLowerCase();

    if (!YOUTUBE_HOSTS.has(host)) {
      return null;
    }

    if (host.includes("youtu.be")) {
      return sanitizeVideoId(parsed.pathname.split("/").filter(Boolean)[0]);
    }

    const directParam = sanitizeVideoId(parsed.searchParams.get("v"));
    if (directParam) {
      return directParam;
    }

    const segments = parsed.pathname.split("/").filter(Boolean);
    const shortsIndex = segments.findIndex((segment) => segment === "shorts");
    if (shortsIndex >= 0) {
      return sanitizeVideoId(segments[shortsIndex + 1]);
    }

    const embedIndex = segments.findIndex((segment) => segment === "embed");
    if (embedIndex >= 0) {
      return sanitizeVideoId(segments[embedIndex + 1]);
    }
  } catch {
    return null;
  }

  return null;
}

export function buildYouTubeWatchUrl(videoId: string) {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

export function buildYouTubeEmbedUrl(videoId: string) {
  return `https://www.youtube-nocookie.com/embed/${videoId}`;
}

export function buildYouTubeThumbnailUrl(videoId: string) {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

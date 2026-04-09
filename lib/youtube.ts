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

export function getYouTubeVideoMeta(input: string) {
  const candidate = normalizeCandidate(input);
  if (!candidate) return null;

  try {
    const parsed = new URL(candidate);
    const host = parsed.hostname.toLowerCase();

    if (!YOUTUBE_HOSTS.has(host)) {
      return null;
    }

    if (host.includes("youtu.be")) {
      const videoId = sanitizeVideoId(parsed.pathname.split("/").filter(Boolean)[0]);
      return videoId ? { videoId, isShort: false } : null;
    }

    const directParam = sanitizeVideoId(parsed.searchParams.get("v"));
    if (directParam) {
      return { videoId: directParam, isShort: false };
    }

    const segments = parsed.pathname.split("/").filter(Boolean);
    const shortsIndex = segments.findIndex((segment) => segment === "shorts");
    if (shortsIndex >= 0) {
      const videoId = sanitizeVideoId(segments[shortsIndex + 1]);
      return videoId ? { videoId, isShort: true } : null;
    }

    const embedIndex = segments.findIndex((segment) => segment === "embed");
    if (embedIndex >= 0) {
      const videoId = sanitizeVideoId(segments[embedIndex + 1]);
      return videoId ? { videoId, isShort: false } : null;
    }
  } catch {
    return null;
  }

  return null;
}

export function extractYouTubeVideoId(input: string) {
  return getYouTubeVideoMeta(input)?.videoId ?? null;
}

export function isYouTubeShortUrl(input: string) {
  return Boolean(getYouTubeVideoMeta(input)?.isShort);
}

export function buildYouTubeWatchUrl(videoId: string) {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

export function buildYouTubeEmbedUrl(videoId: string, options?: { isShort?: boolean }) {
  const params = new URLSearchParams({
    autoplay: "0",
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    iv_load_policy: "3",
    cc_load_policy: "0",
  });

  if (options?.isShort) {
    params.set("loop", "1");
    params.set("playlist", videoId);
  }

  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
}

export function buildYouTubeThumbnailUrl(videoId: string) {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

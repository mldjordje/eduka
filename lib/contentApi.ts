const DEFAULT_API_BASE = "https://api.eduka.co.rs";

function trimTrailingSlash(value: string) {
  return value.replace(/\/+$/, "");
}

export function getContentApiBase() {
  return trimTrailingSlash(
    process.env.NEXT_PUBLIC_API_BASE_URL ||
      process.env.API_BASE_URL ||
      DEFAULT_API_BASE
  );
}

export function getUploadOrigin() {
  const uploadEndpoint =
    process.env.NEXT_PUBLIC_UPLOAD_ENDPOINT ||
    process.env.NEXT_PUBLIC_UPLOAD_URL ||
    `${getContentApiBase()}/upload.php`;

  if (/^https?:\/\//.test(uploadEndpoint)) {
    return trimTrailingSlash(new URL(uploadEndpoint).origin);
  }

  return getContentApiBase();
}

export function resolveStoredMediaUrl(raw?: string) {
  if (!raw) return "";

  if (/^https?:\/\//.test(raw)) {
    try {
      const parsed = new URL(raw);
      const knownOrigins = new Set([
        getUploadOrigin(),
        new URL(getContentApiBase()).origin,
      ]);

      if (knownOrigins.has(parsed.origin)) {
        return `/api/media${parsed.pathname}${parsed.search}`;
      }
    } catch {
      return raw;
    }

    return raw;
  }

  const normalized = raw.replace(/^\/+/, "");
  if (normalized.startsWith("uploads/")) {
    return `/api/media/${normalized}`;
  }

  return `/${normalized}`;
}

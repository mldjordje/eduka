import { getUploadOrigin } from "@/lib/contentApi";

interface MediaRouteProps {
  params: Promise<{ path: string[] }>;
}

function buildUpstreamUrl(path: string[], search: string) {
  const normalizedPath = path
    .filter(Boolean)
    .map((segment) => encodeURIComponent(segment))
    .join("/");

  return `${getUploadOrigin()}/${normalizedPath}${search}`;
}

export async function GET(request: Request, { params }: MediaRouteProps) {
  const { path } = await params;

  if (!path || path.length === 0) {
    return new Response("Missing media path.", { status: 400 });
  }

  const requestUrl = new URL(request.url);
  const upstreamUrl = buildUpstreamUrl(path, requestUrl.search);
  const upstream = await fetch(upstreamUrl, {
    headers: {
      Accept: request.headers.get("accept") || "*/*",
    },
    next: { revalidate: 3600 },
  });

  if (!upstream.ok) {
    return new Response(upstream.body, {
      status: upstream.status,
      headers: upstream.headers,
    });
  }

  const headers = new Headers();
  const passthroughHeaders = [
    "content-type",
    "content-length",
    "cache-control",
    "etag",
    "last-modified",
  ];

  for (const headerName of passthroughHeaders) {
    const value = upstream.headers.get(headerName);
    if (value) {
      headers.set(headerName, value);
    }
  }

  headers.set("Access-Control-Allow-Origin", "*");

  return new Response(upstream.body, {
    status: upstream.status,
    headers,
  });
}

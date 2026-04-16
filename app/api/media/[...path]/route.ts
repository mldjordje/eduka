import { getUploadOrigin } from "@/lib/contentApi";
import type { NextRequest } from "next/server";

export const runtime = "nodejs";

function buildUpstreamUrl(req: NextRequest, pathSegments: string[]) {
  const upstreamOrigin = getUploadOrigin().replace(/\/+$/, "");
  const joinedPath = pathSegments.map((s) => encodeURIComponent(s)).join("/");
  const upstream = new URL(`${upstreamOrigin}/${joinedPath}`);
  upstream.search = req.nextUrl.search;
  return upstream;
}

function pickHeaders(upstreamHeaders: Headers) {
  const h = new Headers();
  const allow = [
    "content-type",
    "content-length",
    "cache-control",
    "etag",
    "last-modified",
    "accept-ranges",
    "content-range",
    "content-disposition",
  ];
  for (const key of allow) {
    const v = upstreamHeaders.get(key);
    if (v) h.set(key, v);
  }
  return h;
}

async function proxy(req: NextRequest, ctx: { params: Promise<{ path: string[] }> }) {
  const { path } = await ctx.params;
  const upstreamUrl = buildUpstreamUrl(req, path || []);

  const upstreamRes = await fetch(upstreamUrl, {
    method: req.method,
    // Support PDFs/videos & large files.
    headers: {
      range: req.headers.get("range") || "",
    },
    cache: "no-store",
  });

  const headers = pickHeaders(upstreamRes.headers);
  if (!headers.get("cache-control")) {
    headers.set("cache-control", "public, max-age=31536000, immutable");
  }

  return new Response(upstreamRes.body, {
    status: upstreamRes.status,
    headers,
  });
}

export async function GET(req: NextRequest, ctx: { params: Promise<{ path: string[] }> }) {
  return proxy(req, ctx);
}

export async function HEAD(req: NextRequest, ctx: { params: Promise<{ path: string[] }> }) {
  return proxy(req, ctx);
}

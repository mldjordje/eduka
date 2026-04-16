import { getContentApiBase } from "@/lib/contentApi";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function apiUrl() {
  return `${getContentApiBase()}/applications.php`;
}

async function forward(req: NextRequest, method: string) {
  const url = apiUrl();
  const body =
    method === "GET" || method === "HEAD" ? undefined : await req.text().catch(() => undefined);

  const res = await fetch(url, {
    method,
    cache: "no-store",
    headers: {
      "Content-Type": req.headers.get("content-type") || "application/json",
    },
    body,
  });

  const text = await res.text();
  return new NextResponse(text, {
    status: res.status,
    headers: {
      "Content-Type": res.headers.get("content-type") || "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

export async function GET(req: NextRequest) {
  return forward(req, "GET");
}

export async function POST(req: NextRequest) {
  return forward(req, "POST");
}

export async function PATCH(req: NextRequest) {
  return forward(req, "PATCH");
}

import { NextResponse } from "next/server";
import type { BlogAttachment, BlogPost } from "@/types/blog";
import { readDataFile, writeDataFile } from "@/util/jsonStorage";

const FILE_NAME = "blogPosts.json";

function normalizeAttachments(input: unknown, fallback: BlogAttachment[] = []): BlogAttachment[] {
  if (!Array.isArray(input)) return fallback;

  return input
    .map((item) => {
      if (!item || typeof item !== "object") return null;
      const label = typeof (item as any).label === "string" ? (item as any).label.trim() : "";
      const url = typeof (item as any).url === "string" ? (item as any).url.trim() : "";
      if (!url) return null;
      return { label: label || url.split("/").pop() || url, url } as BlogAttachment;
    })
    .filter((item): item is BlogAttachment => Boolean(item?.url));
}

export async function GET(
  request: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;
  const posts = await readDataFile<BlogPost[]>(FILE_NAME, []);
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return NextResponse.json({ message: "Članak nije pronađen." }, { status: 404 });
  }

  return NextResponse.json(post);
}

export async function DELETE(
  request: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;
  const posts = await readDataFile<BlogPost[]>(FILE_NAME, []);
  const exists = posts.some((p) => p.slug === slug);
  if (!exists) {
    return NextResponse.json({ message: "Članak nije pronađen." }, { status: 404 });
  }
  const updated = posts.filter((p) => p.slug !== slug);
  await writeDataFile(FILE_NAME, updated);
  return NextResponse.json({ message: "Obrisano" }, { status: 200 });
}

export async function PUT(
  request: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;
  const body = await request.json().catch(() => ({}));
  const posts = await readDataFile<BlogPost[]>(FILE_NAME, []);
  const idx = posts.findIndex((p) => p.slug === slug);
  if (idx === -1) {
    return NextResponse.json({ message: "Članak nije pronađen." }, { status: 404 });
  }
  const current = posts[idx];
  const updated: BlogPost = {
    ...current,
    title: body.title ?? current.title,
    author: body.author ?? current.author,
    date: body.date ?? current.date,
    image: body.image ?? current.image,
    excerpt: body.excerpt ?? current.excerpt,
    content: body.content ?? current.content,
    tags: Array.isArray(body.tags)
      ? body.tags
      : typeof body.tags === "string"
      ? body.tags.split(",").map((t: string) => t.trim()).filter(Boolean)
      : current.tags,
    attachments: normalizeAttachments(body.attachments, current.attachments || []),
  };
  posts[idx] = updated;
  await writeDataFile(FILE_NAME, posts);
  return NextResponse.json(updated, { status: 200 });
}


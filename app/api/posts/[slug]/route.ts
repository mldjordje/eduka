import { NextResponse } from "next/server";
import type { BlogPost } from "@/types/blog";
import { readDataFile, writeDataFile } from "@/util/jsonStorage";

const FILE_NAME = "blogPosts.json";

function normalizeImages(input: unknown): string[] {
  if (Array.isArray(input)) {
    return input
      .map((item) => (typeof item === "string" ? item : ""))
      .map((item) => item.trim())
      .filter(Boolean);
  }
  if (typeof input === "string") {
    const trimmed = input.trim();
    return trimmed ? [trimmed] : [];
  }
  return [];
}

export async function GET(
  request: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;
  const posts = await readDataFile<BlogPost[]>(FILE_NAME, []);
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return NextResponse.json({ message: "ŽOlanak nije pronaŽ`en." }, { status: 404 });
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
    return NextResponse.json({ message: "ŽOlanak nije pronaŽ`en." }, { status: 404 });
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
    return NextResponse.json({ message: "ŽOlanak nije pronaŽ`en." }, { status: 404 });
  }
  const current = posts[idx];

  const incomingImages =
    typeof body.images !== "undefined" ? normalizeImages(body.images) : current.images || [];
  const imageField = typeof body.image === "string" ? body.image.trim() : "";
  const images =
    incomingImages.length > 0 ? incomingImages : normalizeImages(imageField || current.image);
  const coverImage = images[0] || imageField || current.image;

  const updated: BlogPost = {
    ...current,
    title: body.title ?? current.title,
    author: body.author ?? current.author,
    date: body.date ?? current.date,
    image: coverImage,
    images: images.length ? images : undefined,
    excerpt: body.excerpt ?? current.excerpt,
    content: body.content ?? current.content,
    tags: Array.isArray(body.tags)
      ? body.tags
      : typeof body.tags === "string"
      ? body.tags.split(",").map((t: string) => t.trim()).filter(Boolean)
      : current.tags,
    document: body.document ?? current.document,
    documentName: body.documentName ?? current.documentName,
  };
  posts[idx] = updated;
  await writeDataFile(FILE_NAME, posts);
  return NextResponse.json(updated, { status: 200 });
}


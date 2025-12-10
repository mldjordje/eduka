import { NextResponse } from "next/server";
import type { BlogPost } from "@/types/blog";
import { readDataFile, writeDataFile } from "@/util/jsonStorage";

const FILE_NAME = "blogPosts.json";

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-");
}

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

export async function GET() {
  const posts = await readDataFile<BlogPost[]>(FILE_NAME, []);
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.title || !body.content || !body.author) {
      return NextResponse.json({ message: "Naslov, sadr_aj i autor su obavezni." }, { status: 400 });
    }

    const posts = await readDataFile<BlogPost[]>(FILE_NAME, []);
    const slug = body.slug ? slugify(body.slug) : slugify(body.title);

    if (!slug) {
      return NextResponse.json({ message: "Slug nije validan." }, { status: 400 });
    }

    if (posts.some((post) => post.slug === slug)) {
      return NextResponse.json({ message: "Blog sa zadatim slug identifikatorom veŽØ postoji." }, { status: 409 });
    }

    const images = normalizeImages(body.images?.length ? body.images : body.image);
    const coverImage = images[0] || body.image || "assets/img/eduka/hero-5.jpg";

    const newPost: BlogPost = {
      slug,
      title: body.title,
      author: body.author,
      date: body.date || new Date().toISOString(),
      image: coverImage,
      images: images.length ? images : undefined,
      excerpt: body.excerpt || body.content.slice(0, 140).concat("..."),
      content: body.content,
      tags: Array.isArray(body.tags)
        ? body.tags
        : typeof body.tags === "string"
        ? body.tags
            .split(",")
            .map((tag: string) => tag.trim())
            .filter(Boolean)
        : [],
      document: body.document ?? "",
      documentName: body.documentName ?? "",
    };

    const updatedPosts = [newPost, ...posts];
    await writeDataFile(FILE_NAME, updatedPosts);

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Nevalidan zahtev." }, { status: 400 });
  }
}


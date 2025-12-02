import { NextResponse } from "next/server";
import type { BlogAttachment, BlogPost } from "@/types/blog";
import { readDataFile, writeDataFile } from "@/util/jsonStorage";

const FILE_NAME = "blogPosts.json";

function normalizeAttachments(input: unknown): BlogAttachment[] {
  if (!Array.isArray(input)) return [];

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

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-");
}

export async function GET() {
  const posts = await readDataFile<BlogPost[]>(FILE_NAME, []);
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.title || !body.content || !body.author) {
      return NextResponse.json({ message: "Naslov, sadržaj i autor su obavezni." }, { status: 400 });
    }

    const posts = await readDataFile<BlogPost[]>(FILE_NAME, []);
    const slug = body.slug ? slugify(body.slug) : slugify(body.title);

    if (!slug) {
      return NextResponse.json({ message: "Slug nije validan." }, { status: 400 });
    }

    if (posts.some((post) => post.slug === slug)) {
      return NextResponse.json({ message: "Blog sa zadatim slug identifikatorom već postoji." }, { status: 409 });
    }

    const newPost: BlogPost = {
      slug,
      title: body.title,
      author: body.author,
      date: body.date || new Date().toISOString(),
      image: body.image || "assets/img/eduka/hero-5.jpg",
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
      attachments: normalizeAttachments(body.attachments),
    };

    const updatedPosts = [newPost, ...posts];
    await writeDataFile(FILE_NAME, updatedPosts);

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Nevalidan zahtev." }, { status: 400 });
  }
}

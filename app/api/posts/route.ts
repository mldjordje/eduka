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
      image: body.image || "assets/img/blog/vl-blog-thumb-1.1.png",
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
    };

    const updatedPosts = [newPost, ...posts];
    await writeDataFile(FILE_NAME, updatedPosts);

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Nevalidan zahtev." }, { status: 400 });
  }
}

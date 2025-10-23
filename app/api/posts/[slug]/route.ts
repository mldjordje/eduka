import { NextResponse } from "next/server";
import type { BlogPost } from "@/types/blog";
import { readDataFile } from "@/util/jsonStorage";

const FILE_NAME = "blogPosts.json";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const posts = await readDataFile<BlogPost[]>(FILE_NAME, []);
  const post = posts.find((item) => item.slug === params.slug);

  if (!post) {
    return NextResponse.json({ message: "Članak nije pronađen." }, { status: 404 });
  }

  return NextResponse.json(post);
}

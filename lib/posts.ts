import { readDataFile } from "@/util/jsonStorage";
import type { BlogPost } from "@/types/blog";

const FILE_NAME = "blogPosts.json";

export async function getAllPosts(): Promise<BlogPost[]> {
  return readDataFile<BlogPost[]>(FILE_NAME, []);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug);
}

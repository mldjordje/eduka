export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  image: string;
  document?: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
  tags: string[];
  attachments?: BlogAttachment[];
}

export interface BlogAttachment {
  label: string;
  url: string;
}

export interface BlogDocument {
  url: string;
  name: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  image: string;
  images?: string[];
  excerpt: string;
  content: string;
  tags: string[];
  document?: string;
  documentName?: string;
  documents?: BlogDocument[];
  showOnSimpozijum?: boolean;
}

export interface GalleryImage {
  id: string;
  url: string;
  name?: string;
  createdAt: string;
  categoryId?: string;
}

export interface GalleryCategory {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
}

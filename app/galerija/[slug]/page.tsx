import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { GalleryCategory, GalleryImage } from "@/types/gallery";
import { getContentApiBase, getUploadOrigin } from "@/lib/contentApi";
import GalleryLightbox from "@/components/gallery/GalleryLightbox";

const API_ORIGIN = new URL(getContentApiBase()).origin;
const UPLOAD_ORIGIN = process.env.NEXT_PUBLIC_UPLOAD_ENDPOINT
  ? new URL(process.env.NEXT_PUBLIC_UPLOAD_ENDPOINT as string).origin
  : getUploadOrigin();

const resolveSrc = (raw: string) => {
  if (!raw) return "";
  if (/^https?:\/\//.test(raw)) return raw;
  const normalized = raw.replace(/^\//, "");
  if (normalized.startsWith("uploads/")) return `${UPLOAD_ORIGIN}/${normalized}`;
  return `/${normalized}`;
};

async function fetchJson<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

async function loadData() {
  const remoteBase = API_ORIGIN.replace(/\/+$/, "");
  const [imagesPayload, categoriesPayload] = await Promise.all([
    fetchJson<GalleryImage[]>(`${remoteBase}/gallery.php`),
    fetchJson<GalleryCategory[]>(`${remoteBase}/gallery_categories.php`),
  ]);
  const items = Array.isArray(imagesPayload) ? imagesPayload : [];
  const categories = Array.isArray(categoriesPayload) ? categoriesPayload : [];
  return { items, categories };
}

type Params = { slug: string };
type PageProps = { params: Promise<Params> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { categories } = await loadData();
  const category =
    slug === "ostalo"
      ? { name: "Ostalo", slug: "ostalo" }
      : categories.find((c) => c.slug === slug);
  if (!category) return { title: "Galerija" };
  return {
    title: `Galerija - ${category.name}`,
    description: `Fotografije za kategoriju ${category.name}`,
  };
}

export default async function GalerijaSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const { items, categories } = await loadData();
  const category =
    slug === "ostalo"
      ? { id: "", name: "Ostalo", slug: "ostalo" }
      : categories.find((c) => c.slug === slug);

  if (!category) notFound();

  const filtered =
    category.slug === "ostalo"
      ? items.filter((img) => !img.categoryId)
      : items.filter((img) => `${img.categoryId || ""}` === `${category.id}`);

  const lightboxItems = filtered.map((g) => {
    const src = resolveSrc(g.url);
    return {
      id: g.id,
      src,
      alt: g.name || category.name,
      name: g.name || "",
    };
  });

  return (
    <Layout>
      <SectionHeader title="Galerija" isGroup={false} linkGroup="" pageGroup="" current={category.name} />
      <section className="pt-60 pb-60">
        <div className="container">
          <h2 className="title pb-16">{category.name}</h2>
          {filtered.length === 0 && <p>Trenutno nema fotografija u ovoj kategoriji.</p>}
          {filtered.length > 0 && <GalleryLightbox items={lightboxItems} />}
        </div>
      </section>
    </Layout>
  );
}

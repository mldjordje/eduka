import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { GalleryCategory, GalleryImage } from "@/types/gallery";

const API_ORIGIN = process.env.NEXT_PUBLIC_API_BASE_URL
  ? new URL(process.env.NEXT_PUBLIC_API_BASE_URL as string).origin
  : "https://api.eduka.co.rs";
const UPLOAD_ORIGIN = process.env.NEXT_PUBLIC_UPLOAD_ENDPOINT
  ? new URL(process.env.NEXT_PUBLIC_UPLOAD_ENDPOINT as string).origin
  : API_ORIGIN;

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

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { categories } = await loadData();
  const category =
    params.slug === "ostalo"
      ? { name: "Ostalo", slug: "ostalo" }
      : categories.find((c) => c.slug === params.slug);
  if (!category) return { title: "Galerija" };
  return {
    title: `Galerija - ${category.name}`,
    description: `Fotografije za kategoriju ${category.name}`,
  };
}

export default async function GalerijaSlugPage({ params }: { params: Params }) {
  const { items, categories } = await loadData();
  const category =
    params.slug === "ostalo"
      ? { id: "", name: "Ostalo", slug: "ostalo" }
      : categories.find((c) => c.slug === params.slug);

  if (!category) notFound();

  const filtered =
    category.slug === "ostalo"
      ? items.filter((img) => !img.categoryId)
      : items.filter((img) => `${img.categoryId || ""}` === `${category.id}`);

  return (
    <Layout>
      <SectionHeader title="Galerija" isGroup={false} linkGroup="" pageGroup="" current={category.name} />
      <section className="pt-60 pb-60">
        <div className="container">
          <h2 className="title pb-16">{category.name}</h2>
          {filtered.length === 0 && <p>Trenutno nema fotografija u ovoj kategoriji.</p>}
          <div className="row">
            {filtered.map((g) => {
              const src = resolveSrc(g.url);
              return (
                <div className="col-sm-6 col-md-4 col-lg-3 mb-20" key={g.id}>
                  <div className="vl-blog-thumb image-anime">
                    <img className="w-100" src={src} alt={g.name || category.name} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import type { Metadata } from "next";
import { Suspense } from "react";
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

async function GalleryGrid() {
  const remoteBase = API_ORIGIN.replace(/\/+$/, "");
  const imagesUrl = `${remoteBase}/gallery.php`;
  const categoriesUrl = `${remoteBase}/gallery_categories.php`;

  const [imagesPayload, categoriesPayload] = await Promise.all([
    fetchJson<GalleryImage[]>(imagesUrl),
    fetchJson<GalleryCategory[]>(categoriesUrl),
  ]);

  const items = Array.isArray(imagesPayload) ? imagesPayload : [];
  const categories = Array.isArray(categoriesPayload) ? categoriesPayload : [];

  const grouped = categories.map((cat) => ({
    category: cat,
    items: items.filter((img) => (img.categoryId || "") === cat.id),
  }));

  const uncategorized = items.filter((img) => {
    if (!img.categoryId) return true;
    return !categories.some((cat) => cat.id === img.categoryId);
  });

  const hasAny = items.length > 0;

  return (
    <>
      {!hasAny && <p>Galerija je prazna.</p>}
      {grouped.map(({ category, items }) => {
        if (items.length === 0) return null;
        return (
          <div key={category.id} className="pb-30">
            <h3 className="title pb-16">{category.name}</h3>
            <div className="row">
              {items.map((g) => {
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
        );
      })}
      {uncategorized.length > 0 && (
        <div className="pb-10">
          <h3 className="title pb-16">Ostalo</h3>
          <div className="row">
            {uncategorized.map((g) => {
              const src = resolveSrc(g.url);
              return (
                <div className="col-sm-6 col-md-4 col-lg-3 mb-20" key={g.id}>
                  <div className="vl-blog-thumb image-anime">
                    <img className="w-100" src={src} alt={g.name || "galerija"} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default function GalerijaPage() {
  return (
    <Layout>
      <SectionHeader title="Galerija" isGroup={false} linkGroup="" pageGroup="" current="Galerija" />
      <section className="pt-60 pb-60">
        <div className="container">
          <Suspense fallback={<p>Učitavanje...</p>}>
            <GalleryGrid />
          </Suspense>
        </div>
      </section>
    </Layout>
  );
}

export const metadata: Metadata = {
  title: "Galerija",
  description: "Pogledajte fotografije i projekte udruženja Eduka.",
  alternates: { canonical: "/galerija" },
};

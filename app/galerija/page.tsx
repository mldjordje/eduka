import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
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

function CategoryCard({
  category,
  count,
  href,
}: {
  category: Pick<GalleryCategory, "name" | "slug">;
  count: number;
  href: string;
}) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-20">
      <Link href={href} className="d-block p-16 vl-off-white-bg br-12 h-100 text-decoration-none">
        <h4 className="title fs-18 pb-8">{category.name}</h4>
        <p className="mb-0 text-muted">{count} fotografija</p>
      </Link>
    </div>
  );
}

async function CategoriesList() {
  const remoteBase = API_ORIGIN.replace(/\/+$/, "");
  const imagesUrl = `${remoteBase}/gallery.php`;
  const categoriesUrl = `${remoteBase}/gallery_categories.php`;

  const [imagesPayload, categoriesPayload] = await Promise.all([
    fetchJson<GalleryImage[]>(imagesUrl),
    fetchJson<GalleryCategory[]>(categoriesUrl),
  ]);

  const items = Array.isArray(imagesPayload) ? imagesPayload : [];
  const categories = Array.isArray(categoriesPayload) ? categoriesPayload : [];

  const countsByCategory: Record<string, number> = {};
  items.forEach((img) => {
    const key = `${img.categoryId || ""}`;
    countsByCategory[key] = (countsByCategory[key] || 0) + 1;
  });

  const uncategorizedCount = countsByCategory[""] || 0;
  const hasAny = items.length > 0;

  return (
    <>
      {!hasAny && <p>Galerija je prazna.</p>}
      <div className="row">
        {categories.map((cat) => (
          <CategoryCard
            key={cat.id}
            category={cat}
            count={countsByCategory[`${cat.id}`] || 0}
            href={`/galerija/${cat.slug}`}
          />
        ))}
        <CategoryCard
          category={{ name: "Ostalo", slug: "ostalo" }}
          count={uncategorizedCount}
          href="/galerija/ostalo"
        />
      </div>
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
            <CategoriesList />
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

import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import type { Metadata } from "next";
import { Suspense } from "react";

async function GalleryGrid() {
  const BASE = (process.env.NEXT_PUBLIC_API_BASE_URL || "").replace(/\/+$/,'');
  const url = BASE ? `${BASE}/gallery.php` : "/api/gallery";
  const res = await fetch(url, { cache: "no-store" });
  const items = res.ok ? ((await res.json()) as { id: string; url: string; name?: string }[]) : [];
  return (
    <div className="row">
      {items.map((g) => {
        const src = g.url.startsWith("http") ? g.url : `/${g.url.replace(/^\//, "")}`;
        return (
          <div className="col-sm-6 col-md-4 col-lg-3 mb-20" key={g.id}>
            <div className="vl-blog-thumb image-anime">
              <img className="w-100" src={src} alt={g.name || "galerija"} />
            </div>
          </div>
        );
      })}
      {items.length === 0 && <p>Galerija je prazna.</p>}
    </div>
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
  description: "Fotografije i momenti sa događaja udruženja Eduka.",
  alternates: { canonical: "/galerija" },
};

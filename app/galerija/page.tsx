import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Link from "next/link";
import type { Metadata } from "next";
import { Suspense } from "react";
import { CategoriesNav } from "@/components/gallery/CategoriesNav";

export default function GalerijaPage() {
  return (
    <Layout>
      <SectionHeader title="Galerija" isGroup={false} linkGroup="" pageGroup="" current="Galerija" />
      <section className="pt-60 pb-60">
        <div className="container">
          <div className="vl-off-white-bg p-24 br-20 mb-30 d-flex justify-content-between align-items-center gap-3 flex-wrap">
            <div>
              <h3 className="title fs-24 mb-2">Video galerija</h3>
              <p className="mb-0">Pored fotografija sada možete pogledati i YouTube video klipove i Shorts sadržaj.</p>
            </div>
            <Link href="/video-galerija" className="vl-btn-primary">
              Otvori video galeriju
            </Link>
          </div>
          <Suspense fallback={<p>Učitavanje...</p>}>
            <CategoriesNav />
          </Suspense>
        </div>
      </section>
    </Layout>
  );
}

export const metadata: Metadata = {
  title: "Galerija",
  description: "Pogledajte fotografije, projekte i video sadržaj udruženja Eduka.",
  alternates: { canonical: "/galerija" },
};

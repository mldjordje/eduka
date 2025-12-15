import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import type { Metadata } from "next";
import { Suspense } from "react";
import { CategoriesNav } from "@/components/gallery/CategoriesNav";

export default function GalerijaPage() {
  return (
    <Layout>
      <SectionHeader title="Galerija" isGroup={false} linkGroup="" pageGroup="" current="Galerija" />
      <section className="pt-60 pb-60">
        <div className="container">
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
  description: "Pogledajte fotografije i projekte udruženja Eduka.",
  alternates: { canonical: "/galerija" },
};

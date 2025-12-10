import Layout from "@/components/layout/Layout";
import type { Metadata } from "next";
import Section1 from "@/components/sections/blog/Section1";
import SectionHeader from "@/components/layout/SectionHeader";
import Section9 from "@/components/sections/home-1/Section9";

export default function VestiPage() {
  return (
    <Layout>
      <SectionHeader title="Vesti" isGroup={false} linkGroup="" pageGroup="" current="Vesti" />
      <Section1 />
      <Section9 />
    </Layout>
  );
}

export const metadata: Metadata = {
  title: "Vesti",
  description: "Najnovije vesti i objave udruženja Eduka.",
  alternates: { canonical: "/vesti" },
  openGraph: {
    title: "Eduka | Vesti",
    description: "Najnovije vesti i objave udruženja Eduka.",
    url: "https://eduka.rs/vesti",
  },
};


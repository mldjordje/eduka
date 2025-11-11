import Layout from "@/components/layout/Layout";
import type { Metadata } from "next";
import Section1 from "@/components/sections/blog/Section1";
import SectionHeader from "@/components/layout/SectionHeader";
import Section9 from "@/components/sections/home-1/Section9";

export default function VestiPage() {
  return (
    <Layout>
      <SectionHeader title="Вести" isGroup={false} linkGroup="" pageGroup="" current="Вести" />
      <Section1 />
      <Section9 />
    </Layout>
  );
}

export const metadata: Metadata = {
  title: "Вести",
  description: "Новости и обавештења удружења Едука.",
  alternates: { canonical: "/vesti" },
  openGraph: {
    title: "Едука — Вести",
    description: "Новости и обавештења удружења Едука.",
    url: "https://eduka.rs/vesti",
  },
};

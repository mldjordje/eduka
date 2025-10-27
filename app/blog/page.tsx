import Layout from "@/components/layout/Layout";
import type { Metadata } from "next";
import Section1 from "@/components/sections/blog/Section1";
import SectionHeader from "@/components/layout/SectionHeader";
import Section9 from "@/components/sections/home-1/Section9";
export default function Home() {
  return (
    <>
      <Layout>
        <SectionHeader title="Blog" isGroup={false} linkGroup="" pageGroup="" current="Blog" />
        <Section1 />
        <Section9 />
      </Layout>
    </>
  );
}

export const metadata: Metadata = {
  title: "Blog",
  description: "Novosti, edukacije i saveti iz udruženja Eduka.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Eduka Blog",
    description: "Novosti, edukacije i saveti iz udruženja Eduka.",
    url: "https://eduka.rs/blog",
  },
};

import Layout from "@/components/layout/Layout";
import type { Metadata } from "next";
import Section1 from "@/components/sections/home-1/Section1";
import Section2 from "@/components/sections/home-1/Section2";
import Section3 from "@/components/sections/home-1/Section3";
import Section4 from "@/components/sections/home-1/Section4";
import Section5 from "@/components/sections/home-1/Section5";
import Section6 from "@/components/sections/home-1/Section6";
import Section7 from "@/components/sections/home-1/Section7";
import Section9 from "@/components/sections/home-1/Section9";
import NewsTeaser from "@/components/sections/home-1/NewsTeaser";

export default function Home() {
  return (
    <>
      <Layout>
        <Section1 />
        <NewsTeaser />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section2 />
        <Section9 />
      </Layout>
    </>
  );
}

export const metadata: Metadata = {
  title: "Почетна",
  description:
    "Удружење Едука окупља здравствене раднике и сараднике ради континуиране едукације, размене знања и заштите професионалних интереса у Нишавском округу.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Едука — Почетна",
    description:
      "Едука је место где се здравствени радници удружују, уче и заједнички подижу стандарде струке.",
    url: "https://eduka.rs/",
    images: [
      {
        url: "/assets/img/eduka/hero-4.jpg",
        width: 1200,
        height: 630,
        alt: "Едука — главни херој",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

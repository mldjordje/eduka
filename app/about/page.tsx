import Layout from "@/components/layout/Layout";
import type { Metadata } from "next";
import SectionHeader from "@/components/layout/SectionHeader";
import Section2Home1 from "@/components/sections/home-1/Section2";
import Section1 from "@/components/sections/about/Section1";
import Section2 from "@/components/sections/about/Section2";
import Section3 from "@/components/sections/about/Section3";
import Section6Home1 from "@/components/sections/home-1/Section6";
import Section4 from "@/components/sections/about/Section4";
import Section9 from "@/components/sections/home-1/Section9";
import Section7Home1 from "@/components/sections/home-1/Section7";
export default function About() {
  return (
    <>
      <Layout>
        <SectionHeader title="O nama" current="O nama" isGroup={false} linkGroup="" pageGroup="" />
        <Section2Home1 />
        <Section1 background="vl-off-white-bg" />
        <Section2 />
        <Section3 />
        <Section6Home1 />
        <section className="pt-40 pb-20">
          <div className="container">
            <h3 className="title pb-12">Hipokratova zakletva</h3>
            <p className="pb-12">[Ovde dodati puni tekst Hipokratove zakletve na srpskom jeziku]</p>
            <h3 className="title pb-12">Florens Najtingel zakletva</h3>
            <p className="pb-12">[Ovde dodati puni tekst zakletve medicinskih sestara – Florence Nightingale]</p>
          </div>
        </section>
        <Section4 />
        <Section7Home1 />
        <Section9 />
      </Layout>
    </>
  );
}

export const metadata: Metadata = {
  title: "O nama",
  description:
    "O udruženju Eduka – misija, vizija i aktivnosti usmerene na kontinuiranu edukaciju zdravstvenih radnika.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "O nama | Eduka",
    description:
      "Upoznajte udruženje Eduka i naše aktivnosti u oblasti edukacije i profesionalnog razvoja zdravstvenih radnika.",
    url: "https://eduka.rs/about",
  },
};

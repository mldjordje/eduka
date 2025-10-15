import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section2Home1 from "@/components/sections/home-1/Section2";
import Section1 from "@/components/sections/about/Section1";
import Section2 from "@/components/sections/about/Section2";
import Section3 from "@/components/sections/about/Section3";
import Section6Home1 from "@/components/sections/home-1/Section6";
import Section4 from "@/components/sections/about/Section4";
import Section9 from "@/components/sections/home-1/Section9";
import Section7Home1 from "@/components/sections/home-3/Section7";
export default function About() {
  return (
    <>
      <Layout>
        <SectionHeader title="About Us" current="About Us" isGroup={false} linkGroup="" pageGroup="" />
        <Section2Home1 />
        <Section1 background="vl-off-white-bg" />
        <Section2 />
        <Section3 />
        <Section6Home1 />
        <Section4 />
        <Section7Home1 text_2="text-2" />
        <Section9 />
      </Layout>
    </>
  );
}

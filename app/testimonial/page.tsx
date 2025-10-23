import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/testimonial/Section1";
import SectionHeader from "@/components/layout/SectionHeader";
import Section9 from "@/components/sections/home-1/Section9";
export default function Home() {
  return (
    <>
      <Layout>
        <SectionHeader title="Iskustva članova" isGroup={false} linkGroup="" pageGroup="" current="Iskustva članova" />
        <Section1 />
        <Section9 />
      </Layout>
    </>
  );
}

import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/service-details/Section1";
import Section2 from "@/components/sections/service-details/Section2";
import Section9 from "@/components/sections/home-1/Section9";
import SectionHeader from "@/components/layout/SectionHeader";
export default function Home() {
  return (
    <>
      <Layout>
        <SectionHeader title="Detalji edukacije" isGroup={true} linkGroup="/service" pageGroup="Edukacije" current="Detalji edukacije" />
        <Section1 />
        <Section2 />
        <Section9 />
      </Layout>
    </>
  );
}

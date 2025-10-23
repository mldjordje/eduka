import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/service-details/Section1";
import Section9 from "@/components/sections/home-1/Section9";
export default function Home() {
  return (
    <>
      <Layout>
        <SectionHeader title="Program edukacije" isGroup={true} linkGroup="/service" pageGroup="Edukacije" current="Program edukacije" />
        <Section1 single={true} />
        <Section9 />
      </Layout>
    </>
  );
}

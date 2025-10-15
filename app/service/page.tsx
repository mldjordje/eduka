import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/service/Section1";
import Section1Service from "@/components/sections/about/Section1";
import Section2 from "@/components/sections/service/Section2";
import Section9 from "@/components/sections/home-1/Section9";
export default function Home() {
  return (
    <>
      <Layout>
        <SectionHeader title="Our Service" current="Our Service" isGroup={false} linkGroup="" pageGroup="" />
        <Section1 />
        <Section1Service background="vl-off-white-bg" />
        <Section2 />
        <Section9 />
      </Layout>
    </>
  );
}

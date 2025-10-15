import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/blog-details/Section1";
import SectionHeader from "@/components/layout/SectionHeader";
import Section9 from "@/components/sections/home-1/Section9";
import Section2 from "@/components/sections/blog-details/Section2";
export default function Home() {
  return (
    <>
      <Layout>
        <SectionHeader title="Our Blog Details" isGroup={true} linkGroup="/blog" pageGroup="Our Blog" current="Our Blog Details" />
        <Section1 left={true} />
        <Section2 />
        <Section9 />
      </Layout>
    </>
  );
}

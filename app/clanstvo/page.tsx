import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import MembershipOptions from "@/components/sections/membership/Section1";
import MembershipSteps from "@/components/sections/membership/Section2";
import AboutHighlight from "@/components/sections/about/Section1";
import Section9 from "@/components/sections/home-1/Section9";
export default function Home() {
  return (
    <>
      <Layout>
        <SectionHeader title="Članstvo" isGroup={false} linkGroup="" pageGroup="" current="Članstvo" />
        <MembershipOptions />
        <MembershipSteps />
        <AboutHighlight background="vl-white-bg" />
        <Section9 />
      </Layout>
    </>
  );
}

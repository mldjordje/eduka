import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/home-4/Section1";
import Section2 from "@/components/sections/home-4/Section2";
import Section3 from "@/components/sections/home-4/Section3";
import Section4 from "@/components/sections/home-4/Section4";
import Section5 from "@/components/sections/home-4/Section5";
import Section6 from "@/components/sections/home-4/Section6";
import Section7 from "@/components/sections/home-4/Section7";
import Section8 from "@/components/sections/home-4/Section8";
import Section9 from "@/components/sections/home-4/Section9";
export default function Home() {
  return (
    <>
      <Layout headerStyle={4} footerStyle={4} offcanvas_bg="vl-offcanvas-bg-4" offcanvas_menu="vl-main-men4u" offcanvas_social="vl-footer-socia4l">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
      </Layout>
    </>
  );
}

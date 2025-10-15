import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/home-3/Section1";
import Section2 from "@/components/sections/home-3/Section2";
import Section3 from "@/components/sections/home-3/Section3";
import Section4 from "@/components/sections/home-3/Section4";
import Section5 from "@/components/sections/home-3/Section5";
import Section6 from "@/components/sections/home-3/Section6";
import Section7 from "@/components/sections/home-3/Section7";
import Section8 from "@/components/sections/home-3/Section8";
import Section9 from "@/components/sections/home-3/Section9";
import Section10 from "@/components/sections/home-3/Section10";
export default function Home() {
  return (
    <>
      <Layout headerStyle={3} footerStyle={3} offcanvas_bg="" offcanvas_menu="" offcanvas_social="" mainMenuStyle="one-page">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
      </Layout>
    </>
  );
}

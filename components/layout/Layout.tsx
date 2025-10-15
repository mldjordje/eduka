"use client";
import { DataBg } from "@/util/data-bg";
import { useAccordion } from "@/util/useAccordion";
import useTextAnimation2 from "@/util/useTextAnimation2";
import useTextAnimation3 from "@/util/useTextAnimation3";
import AOS from "aos";
import "aos/dist/aos.css";
import dynamic from "next/dynamic";
import type { FC } from "react";
import { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import Footer1 from "./footer/Footer1";
import Footer2 from "./footer/Footer2";
import Footer3 from "./footer/Footer3";
import Footer4 from "./footer/Footer4";
import Header1 from "./header/Header1";
import Header2 from "./header/Header2";
import Header3 from "./header/Header3";
import Header4 from "./header/Header4";
import { useRevealAnimation } from "../../util/useRevealAnimation";
// Define the props interface (same as above)
interface BootstrapComponentsProps {}

// Type the dynamic import
const BootstrapComponents = dynamic<BootstrapComponentsProps>(
  () => import("@/util/useBootstrap"),
  { ssr: false } // Disable SSR since this is client-side only
) as FC<BootstrapComponentsProps>;

interface LayoutProps {
  headerStyle?: Number;
  footerStyle?: Number;
  mainMenuStyle?: string;
  children?: React.ReactNode;
  offcanvas_bg?: any;
  offcanvas_menu?: any;
  offcanvas_social?: any;
}
export default function Layout({ headerStyle, footerStyle, mainMenuStyle, children, offcanvas_bg, offcanvas_menu, offcanvas_social }: LayoutProps) {
  const [scroll, setScroll] = useState<boolean>(false);

  // Mobile Menu
  const [isMobileMenu, setMobileMenu] = useState<boolean>(false);
  const handleMobileMenu = (): void => {
    setMobileMenu(!isMobileMenu);
    !isMobileMenu ? document.body.classList.add("mobile-menu-active") : document.body.classList.remove("mobile-menu-active");
  };

  useEffect(() => {
    AOS.init();
    const handleScroll = (): void => {
      const scrollCheck: boolean = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);
  useRevealAnimation();
  DataBg();
  useTextAnimation2();
  useTextAnimation3();
  useAccordion();
  return (
    <>
      <div id="top" />
      <BootstrapComponents />
      {!headerStyle && <Header1 mainMenuStyle={mainMenuStyle} scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} offcanvas_bg={offcanvas_bg} offcanvas_menu={offcanvas_menu} offcanvas_social={offcanvas_social} />}
      {headerStyle == 1 ? <Header1 mainMenuStyle={mainMenuStyle} scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} offcanvas_bg={offcanvas_bg} offcanvas_menu={offcanvas_menu} offcanvas_social={offcanvas_social} /> : null}
      {headerStyle == 2 ? <Header2 mainMenuStyle={mainMenuStyle} scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} offcanvas_bg={offcanvas_bg} offcanvas_menu={offcanvas_menu} offcanvas_social={offcanvas_social} /> : null}
      {headerStyle == 3 ? <Header3 mainMenuStyle={mainMenuStyle} scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} offcanvas_bg={offcanvas_bg} offcanvas_menu={offcanvas_menu} offcanvas_social={offcanvas_social} /> : null}
      {headerStyle == 4 ? <Header4 mainMenuStyle={mainMenuStyle} scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} offcanvas_bg={offcanvas_bg} offcanvas_menu={offcanvas_menu} offcanvas_social={offcanvas_social} /> : null}

      <main>{children}</main>
      {!footerStyle && <Footer1 />}
      {footerStyle == 1 ? <Footer1 /> : null}
      {footerStyle == 2 ? <Footer2 /> : null}
      {footerStyle == 3 ? <Footer3 /> : null}
      {footerStyle == 4 ? <Footer4 /> : null}

      <BackToTop />
    </>
  );
}

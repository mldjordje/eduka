"use client";

import Link from "next/link";
import { useState } from "react";

interface MobileMenuProps {
    isMobileMenu: boolean;
    handleMobileMenu: () => void;
    offcanvas_bg?: string;
    offcanvas_menu?: string;
    offcanvas_social?: string;
}

export default function MobileMenu({ isMobileMenu, handleMobileMenu, offcanvas_bg, offcanvas_menu, offcanvas_social }: MobileMenuProps) {
    const [isAccordion, setIsAccordion] = useState(0);
    const handleAccordion = (key: any) => {
        setIsAccordion((prevState) => (prevState === key ? null : key));
    };
    return (
        <>
            {isMobileMenu && <div className="vl-offcanvas-overlay vl-offcanvas-overlay-open" onClick={handleMobileMenu} />}

            {/* offcanvas menu start */}
            <div className={`vl-offcanvas vl-offcanvas-bg-1 ${isMobileMenu ? "vl-offcanvas-open" : ""} ${offcanvas_bg}`}>
                <div className="vl-offcanvas-wrapper">
                    <div className="vl-offcanvas-header d-flex justify-content-between align-items-center mb-40">
                        <div className="vl-offcanvas-logo">
                            <Link href="/">
                                <img src="assets/img/logo/vl-logo-1.1.png" alt="" />
                            </Link>
                        </div>
                        <div className="vl-offcanvas-close">
                            <button className="vl-offcanvas-close-toggle" onClick={handleMobileMenu}>
                                <i className="fal fa-times" />
                            </button>
                        </div>
                    </div>
                    <div className={`vl-offcanvas-menu ${offcanvas_menu} d-lg-none mb-40`}>
                        <nav>
                            <ul>
                                <li className={`has-dropdown ${isAccordion == 1 ? "active" : ""}`}>
                                    <Link href="#" onClick={() => handleAccordion(1)}>
                                        Home
                                        <span>
                                            <i className="fa-regular fa-angle-down" />
                                        </span>
                                    </Link>
                                    <ul className="sub-menu" style={{ display: `${isAccordion == 1 ? "block" : "none"}` }}>
                                        <li>
                                            <Link href="/">Home 1 - Multi Page</Link>
                                        </li>
                                        <li>
                                            <Link href="/index-single-one">Home 1 - One Page</Link>
                                        </li>
                                        <li>
                                            <Link href="/index-2">Home 2 - Multi Page</Link>
                                        </li>
                                        <li>
                                            <Link href="/index-single-two">Home 2 - One Page</Link>
                                        </li>
                                        <li>
                                            <Link href="/index-3">Home 3 - Multi Page</Link>
                                        </li>
                                        <li>
                                            <Link href="/index-single-three">Home 3 - One Page</Link>
                                        </li>
                                        <li>
                                            <Link href="/index-4">Home 4 - Multi Page</Link>
                                        </li>
                                        <li>
                                            <Link href="/index-single-four">Home 4 - One Page</Link>
                                        </li>
                                    </ul>
                                    <button className="vl-menu-close" onClick={() => handleAccordion(1)}>
                                        <i className="fas fa-chevron-right" />
                                    </button>
                                </li>
                                <li>
                                    <Link href="/about">About us</Link>
                                </li>
                                <li className={`has-dropdown ${isAccordion == 2 ? "active" : ""}`}>
                                    <Link href="#" onClick={() => handleAccordion(2)}>
                                        Services
                                        <span>
                                            <i className="fa-regular fa-angle-down" />
                                        </span>
                                    </Link>
                                    <ul className="sub-menu" style={{ display: `${isAccordion == 2 ? "block" : "none"}` }}>
                                        <li>
                                            <Link href="/service">Service</Link>
                                        </li>
                                        <li>
                                            <Link href="/service-left">Service Left</Link>
                                        </li>
                                        <li>
                                            <Link href="/service-right">Service Right</Link>
                                        </li>
                                        <li>
                                            <Link href="/service-single">Service Single</Link>
                                        </li>
                                    </ul>
                                    <button className="vl-menu-close" onClick={() => handleAccordion(2)}>
                                        <i className="fas fa-chevron-right" />
                                    </button>
                                </li>
                                <li className={`has-dropdown ${isAccordion == 3 ? "active" : ""}`}>
                                    <Link href="#" onClick={() => handleAccordion(3)}>
                                        Pages
                                        <span>
                                            <i className="fa-regular fa-angle-down" />
                                        </span>
                                    </Link>
                                    <ul className="sub-menu" style={{ display: `${isAccordion == 3 ? "block" : "none"}` }}>
                                        <li>
                                            <Link href="/team">Team</Link>
                                        </li>
                                        <li>
                                            <Link href="/testimonial">Testimonial</Link>
                                        </li>
                                        <li>
                                            <Link href="/faq">FAQ</Link>
                                        </li>
                                        <li>
                                            <Link href="/pricing-plan">Pricing Plan</Link>
                                        </li>
                                        <li>
                                            <Link href="/404">404</Link>
                                        </li>
                                    </ul>
                                    <button className="vl-menu-close" onClick={() => handleAccordion(3)}>
                                        <i className="fas fa-chevron-right" />
                                    </button>
                                </li>
                                <li className={`has-dropdown ${isAccordion == 4 ? "active" : ""}`}>
                                    <Link href="#" onClick={() => handleAccordion(4)}>
                                        Blog
                                        <span>
                                            <i className="fa-regular fa-angle-down" />
                                        </span>
                                    </Link>
                                    <ul className="sub-menu" style={{ display: `${isAccordion == 4 ? "block" : "none"}` }}>
                                        <li>
                                            <Link href="/blog">Blog</Link>
                                        </li>
                                        <li>
                                            <Link href="/blog-left">Blog Left</Link>
                                        </li>
                                        <li>
                                            <Link href="/blog-right">Blog Right</Link>
                                        </li>
                                        <li>
                                            <Link href="/blog-single">Blog Single</Link>
                                        </li>
                                    </ul>
                                    <button className="vl-menu-close" onClick={() => handleAccordion(4)}>
                                        <i className="fas fa-chevron-right" />
                                    </button>
                                </li>
                                <li>
                                    <Link href="/contact">Contact</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="vl-offcanvas-info mb-40">
                        <h3 className="vl-offcanvas-sm-title">Contact Us</h3>
                        <span>
                            <Link href="#">
                                <span>
                                    <img src="assets/img/icons/vl-footer-icon-1.1.svg" alt="" />
                                </span>
                                +57 9954 6476
                            </Link>
                        </span>
                        <br />
                        <span>
                            <Link href="#">
                                <span>
                                    <img src="assets/img/icons/vl-footer-icon-1.3.svg" alt="" />
                                </span>
                                dentistsolution@com
                            </Link>
                        </span>
                        <br />
                        <span>
                            <Link href="#">
                                <span>
                                    <img src="assets/img/icons/vl-footer-icon-1.2.svg" alt="" />
                                </span>
                                421 Allen, Mexico 4233
                            </Link>
                        </span>
                    </div>
                    <div className="vl-offcanvas-social mb-40">
                        <h3 className="vl-offcanvas-sm-title">Follow Us</h3>
                        <div className={`vl-footer-social ${offcanvas_social}`}>
                            <ul>
                                <li>
                                    <Link href="#">
                                        <i className="fa-brands fa-facebook-f" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <i className="fa-brands fa-linkedin-in" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <i className="fa-brands fa-instagram" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <i className="fa-brands fa-youtube" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

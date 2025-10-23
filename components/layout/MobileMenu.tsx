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

export default function MobileMenu({ isMobileMenu, handleMobileMenu, offcanvas_bg = "", offcanvas_menu = "", offcanvas_social = "" }: MobileMenuProps) {
    const [isAccordion, setIsAccordion] = useState<number | null>(null);
    const handleAccordion = (key: number) => {
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
                                <img src="assets/img/logo/vl-logo-1.1.png" alt="Eduka logo" />
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
                                <li>
                                    <Link href="/">Početna</Link>
                                </li>
                                <li>
                                    <Link href="/about">O udruženju</Link>
                                </li>
                                <li className={`has-dropdown ${isAccordion === 1 ? "active" : ""}`}>
                                    <Link href="/service" onClick={(event) => { event.preventDefault(); handleAccordion(1); }}>
                                        Edukacije
                                        <span>
                                            <i className="fa-regular fa-angle-down" />
                                        </span>
                                    </Link>
                                    <ul className="sub-menu" style={{ display: `${isAccordion === 1 ? "block" : "none"}` }}>
                                        <li>
                                            <Link href="/service">Online edukacije</Link>
                                        </li>
                                        <li>
                                            <Link href="/service-single">Akreditovane KME</Link>
                                        </li>
                                    </ul>
                                    <button className="vl-menu-close" onClick={() => handleAccordion(1)}>
                                        <i className="fas fa-chevron-right" />
                                    </button>
                                </li>
                                <li>
                                    <Link href="/blog">Aktuelnosti</Link>
                                </li>
                                <li>
                                    <Link href="/clanstvo">Članstvo</Link>
                                </li>
                                <li>
                                    <Link href="/contact">Kontakt</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="vl-offcanvas-info mb-40">
                        <h3 className="vl-offcanvas-sm-title">Kontakt</h3>
                        <span>
                            <Link href="tel:+38118210400">
                                <span>
                                    <img src="assets/img/icons/vl-footer-icon-1.1.svg" alt="telefon" />
                                </span>
                                +381 (18) 210 400
                            </Link>
                        </span>
                        <br />
                        <span>
                            <Link href="mailto:kontakt@eduka.co.rs">
                                <span>
                                    <img src="assets/img/icons/vl-footer-icon-1.3.svg" alt="e-mail" />
                                </span>
                                kontakt@eduka.co.rs
                            </Link>
                        </span>
                        <br />
                        <span>
                            <Link href="https://maps.app.goo.gl" target="_blank" rel="noopener noreferrer">
                                <span>
                                    <img src="assets/img/icons/vl-footer-icon-1.2.svg" alt="adresa" />
                                </span>
                                Niš, Srbija
                            </Link>
                        </span>
                    </div>
                    <div className="vl-offcanvas-social mb-40">
                        <h3 className="vl-offcanvas-sm-title">Pratite nas</h3>
                        <div className={`vl-footer-social ${offcanvas_social}`}>
                            <ul>
                                <li>
                                    <Link href="https://www.facebook.com/edukanis" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-facebook-f" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-instagram" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-linkedin-in" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-youtube" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* offcanvas menu end */}
        </>
    );
}

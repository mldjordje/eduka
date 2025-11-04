"use client";

import Link from "next/link";

interface MobileMenuProps {
    isMobileMenu: boolean;
    handleMobileMenu: () => void;
    offcanvas_bg?: string;
    offcanvas_menu?: string;
    offcanvas_social?: string;
}

export default function MobileMenu({ isMobileMenu, handleMobileMenu, offcanvas_bg, offcanvas_menu, offcanvas_social }: MobileMenuProps) {
    return (
        <>
            {isMobileMenu && <div className="vl-offcanvas-overlay vl-offcanvas-overlay-open" onClick={handleMobileMenu} />}

            {/* offcanvas menu start */}
            <div className={`vl-offcanvas vl-offcanvas-bg-1 ${isMobileMenu ? "vl-offcanvas-open" : ""} ${offcanvas_bg}`}>
                <div className="vl-offcanvas-wrapper">
                    <div className="vl-offcanvas-header d-flex justify-content-between align-items-center mb-40">
                        <div className="vl-offcanvas-logo">
                            <Link href="/">
                                <img src="assets/img/logo/logo2.png" alt="Eduka" />
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
                                    <Link href="/" onClick={handleMobileMenu}>
                                        Početna
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" onClick={handleMobileMenu}>
                                        O nama
                                    </Link>
                                </li>
                                <li className="has-dropdown">
                                    <Link href="#" onClick={(e) => e.preventDefault()}>
                                        Edukacija
                                    </Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="https://eduka.org.rs/" target="_blank" rel="noopener noreferrer" onClick={handleMobileMenu}>Онлине-УЗР Едука</a>
                                        </li>
                                        <li>
                                            <a href="https://online.dznis.com/index.php" target="_blank" rel="noopener noreferrer" onClick={handleMobileMenu}>Онлине-ДЗ Ниш</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="/vesti" onClick={handleMobileMenu}>
                                        Vesti
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/galerija" onClick={handleMobileMenu}>
                                        Galerija
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/simpozijum" onClick={handleMobileMenu}>
                                        Simpozijum
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/postanite-clan" onClick={handleMobileMenu}>
                                        Postanite član
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/cms" onClick={handleMobileMenu}>
                                        CMS
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/prijava" onClick={handleMobileMenu}>
                                        Kontakt
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="vl-offcanvas-info mb-40">
                        <h3 className="vl-offcanvas-sm-title">Kontakt</h3>
                        <div className="d-flex flex-column gap-2">
                            <span>
                                <Link href="tel:+381184261749">
                                    <span>
                                        <img src="assets/img/icons/vl-footer-icon-1.1.svg" alt="Telefon" />
                                    </span>
                                    018 426 1749 (Mišića)
                                </Link>
                            </span>
                            <span>
                                <Link href="tel:+381638661256">
                                    <span>
                                        <img src="assets/img/icons/vl-footer-icon-1.1.svg" alt="Telefon" />
                                    </span>
                                    063 866 1256 (Tankosića)
                                </Link>
                            </span>
                            <span>
                                <Link href="tel:+38118503748">
                                    <span>
                                        <img src="assets/img/icons/vl-footer-icon-1.1.svg" alt="Telefon" />
                                    </span>
                                    018 503 748
                                </Link>
                            </span>
                            <span>
                                <Link href="mailto:edukaudruzenje@gmail.com">
                                    <span>
                                        <img src="assets/img/icons/vl-footer-icon-1.3.svg" alt="E-mail" />
                                    </span>
                                    edukaudruzenje@gmail.com
                                </Link>
                            </span>
                            <span className="d-inline-flex align-items-start gap-2">
                                <span>
                                    <img src="assets/img/icons/vl-footer-icon-1.2.svg" alt="Adresa" />
                                </span>
                                <span>Vojvode Mišića 50, Niš</span>
                            </span>
                            <span className="d-inline-flex align-items-start gap-2">
                                <span>
                                    <img src="assets/img/icons/vl-footer-icon-1.2.svg" alt="Adresa" />
                                </span>
                                <span>Vojvode Tankosića 15, Niš</span>
                            </span>
                            <span>
                                <Link href="https://www.eduka.rs" target="_blank" rel="noopener noreferrer">
                                    <span>
                                        <img src="assets/img/icons/vl-footer-icon-1.4.svg" alt="Veb" />
                                    </span>
                                    www.eduka.rs
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className="vl-offcanvas-social mb-40">
                        <h3 className="vl-offcanvas-sm-title">Follow Us</h3>
                        <div className={`vl-footer-social ${offcanvas_social}`}>
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-facebook-f" />
                                    </a>
                                </li>
                                <li>
                                    <Link href="#">
                                        <i className="fa-brands fa-linkedin-in" />
                                    </Link>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-instagram" />
                                    </a>
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

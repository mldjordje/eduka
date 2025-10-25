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
                                    <Link href="/blog" onClick={handleMobileMenu}>
                                        Blog
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

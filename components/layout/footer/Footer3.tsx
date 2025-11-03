import Link from "next/link";

export default function Footer() {
    return (
        <>
            {/*================= Footer section start =================*/}
            <section className="vl-footer vl-footer-margin-top-minus vl-off-white-bg pt-240">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="vl-footer-widget-1">
                                <div className="vl-footer-logo">
                                    <Link href="/">
                                        <img src="assets/img/logo/vl-footer-logo-1.1.png" alt="Eduka" />
                                    </Link>
                                </div>
                                <div className="vl-footer-content">
                                    <p className="pt-24 pb-24">
                                        Eduka okuplja zdravstvene radnike radi stručnog usavršavanja,
                                        razmene iskustava i organizovanja akreditovanih programa
                                        kontinuirane edukacije širom Srbije.
                                    </p>
                                </div>
                                <div className="vl-footer-social">
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
                        <div className="col-lg-2 col-md-6 mb-30">
                            <div className="vl-footer-widget-2">
                                <h3 className="vl-footer-widget-title mb-24">Brzi linkovi</h3>
                                <div className="vl-footer-menu">
                                    <ul>
                                        <li>
                                            <Link href="/">Početna</Link>
                                        </li>
                                        <li>
                                            <Link href="/about">O nama</Link>
                                        </li>
                                        <li>
                                            <Link href="https://eduka.rs/edukacije" target="_blank" rel="noopener noreferrer">
                                                Edukacije
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/blog">Blog</Link>
                                        </li>
                                        <li>
                                            <Link href="/prijava">Prijava</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-30">
                            <div className="vl-footer-widget-3 ml-40">
                                <h3 className="vl-footer-widget-title mb-24">Resursi</h3>
                                <div className="vl-footer-menu">
                                    <ul>
                                        <li>
                                            <Link href="https://eduka.rs/edukacije" target="_blank" rel="noopener noreferrer">
                                                Akreditovane edukacije
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://eduka.rs" target="_blank" rel="noopener noreferrer">
                                                Eduka vesti
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="mailto:info@eduka.rs">Podrška za članove</Link>
                                        </li>
                                        <li>
                                            <Link href="/blog">Stručni članci</Link>
                                        </li>
                                        <li>
                                            <Link href="/prijava">Postanite član</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="vl-footer-widget-4">
                                <h3 className="vl-footer-widget-title mb-24">Kontakt</h3>
                                {/* icon list */}
                                <div className="vl-footer-icon-list">
                                    <ul>
                                        <li>
                                            <Link href="tel:+381638661256">
                                                <span>
                                                    <img src="assets/img/icons/vl-footer-icon-1.1.svg" alt="Telefon" />
                                                </span>
                                                063 866 1256
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <span>
                                                    <img src="assets/img/icons/vl-footer-icon-1.2.svg" alt="Adresa" />
                                                </span>
                                                Bulevar oslobođenja 1, Beograd
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="mailto:info@eduka.rs">
                                                <span>
                                                    <img src="assets/img/icons/vl-footer-icon-1.3.svg" alt="E-mail" />
                                                </span>
                                                info@eduka.rs
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <span>
                                                    <img src="assets/img/icons/vl-footer-icon-1.4.svg" alt="Veb" />
                                                </span>
                                                www.eduka.rs
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="vl-footer-copyright-text">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <p className="para">© {new Date().getFullYear()} Eduka. Sva prava zadržana.</p>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="copy-right-menu">
                                    <ul>
                                        <li>
                                            <Link href="#">Privacy Policy </Link>
                                        </li>
                                        <li>
                                            <Link href="#">Terms &amp; Conditions</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= Footer section End =================*/}
        </>
    );
}


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
                                        <img src="assets/img/logo/vl-footer-logo-1.1.png" alt="" />
                                    </Link>
                                </div>
                                <div className="vl-footer-content">
                                    <p className="pt-24 pb-24">
                                        Eduka pomaže zdravstvenim radnicima da ostanu u toku sa propisima, novim znanjima i
                                        praksama kroz stalnu edukaciju i podršku zajednice.
                                    </p>
                                </div>
                                <div className="vl-footer-social">
                                    <ul>
                                        <li>
                                            <Link href="https://www.facebook.com/edukanis" target="_blank" rel="noopener noreferrer">
                                                <i className="fa-brands fa-facebook-f" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.linkedin.com/company/udruzenje-eduka" target="_blank" rel="noopener noreferrer">
                                                <i className="fa-brands fa-linkedin-in" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                                <i className="fa-brands fa-instagram" />
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
                        <div className="col-lg-2 col-md-6 mb-30">
                            <div className="vl-footer-widget-2">
                                <h3 className="vl-footer-widget-title mb-24">Brzi linkovi</h3>
                                <div className="vl-footer-menu">
                                    <ul>
                                        <li>
                                            <Link href="/">Početna</Link>
                                        </li>
                                        <li>
                                            <Link href="/about">O udruženju</Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">Kontakt</Link>
                                        </li>
                                        <li>
                                            <Link href="/blog">Aktuelnosti</Link>
                                        </li>
                                        <li>
                                            <Link href="/service">Edukacije</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-30">
                            <div className="vl-footer-widget-3 ml-40">
                                <h3 className="vl-footer-widget-title mb-24">Programi Eduke</h3>
                                <div className="vl-footer-menu">
                                    <ul>
                                        <li>
                                            <Link href="/service">Stručni skupovi</Link>
                                        </li>
                                        <li>
                                            <Link href="/service-single">Akreditovane obuke</Link>
                                        </li>
                                        <li>
                                            <Link href="/clanstvo">Podrška članovima</Link>
                                        </li>
                                        <li>
                                            <Link href="/blog">Vesti iz prakse</Link>
                                        </li>
                                        <li>
                                            <Link href="/about">O udruženju</Link>
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
                                            <Link href="tel:+38118210400">
                                                <span>
                                                    <img src="assets/img/icons/vl-footer-icon-1.1.svg" alt="" />
                                                </span>
                                                +381 (18) 210 400
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://maps.app.goo.gl" target="_blank" rel="noopener noreferrer">
                                                <span>
                                                    <img src="assets/img/icons/vl-footer-icon-1.2.svg" alt="" />
                                                </span>
                                                Dr. Zorana Đinđića bb, Niš
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="mailto:kontakt@eduka.co.rs">
                                                <span>
                                                    <img src="assets/img/icons/vl-footer-icon-1.3.svg" alt="" />
                                                </span>
                                                kontakt@eduka.co.rs
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://eduka.co.rs" target="_blank" rel="noopener noreferrer">
                                                <span>
                                                    <img src="assets/img/icons/vl-footer-icon-1.4.svg" alt="" />
                                                </span>
                                                eduka.co.rs
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
                                <p className="para">© {new Date().getFullYear()} Udruženje medicinskih sestara „Eduka“.</p>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="copy-right-menu">
                                    <ul>
                                        <li>
                                            <Link href="/about">O nama</Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">Pišite nam</Link>
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

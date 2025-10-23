import Link from "next/link";

export default function Footer() {
    return (
        <>
            {/*================= Footer section start =================*/}
            <section className="vl-footer-4 vl-footer-margin-top-minus vl-footer-bg-4 pt-240">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="vl-footer-widget-1">
                                <div className="vl-footer-logo">
                                    <Link href="/">
                                        <img src="assets/img/logo/vl-footer-logo4.2.png" alt="" />
                                    </Link>
                                </div>
                                <div className="vl-footer-content">
                                    <p className="pt-24 pb-24">
                                        Udruženje Eduka neguje kulturu kontinuiranog učenja i pruža siguran prostor za
                                        razmenu znanja među zdravstvenim radnicima Nišavskog okruga.
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
                                            <Link href="/clanstvo">Članstvo</Link>
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
                                            <Link href="/service">Stručna usavršavanja</Link>
                                        </li>
                                        <li>
                                            <Link href="/service-single">Akreditovani seminari</Link>
                                        </li>
                                        <li>
                                            <Link href="/clanstvo">Mentorska podrška</Link>
                                        </li>
                                        <li>
                                            <Link href="/blog">Izveštaji i vesti</Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">Kontakt centar</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="vl-footer-widget-4">
                                <h3 className="vl-footer-widget-title mb-24">Prijavite se na newsletter</h3>
                                {/* subcribe form */}
                                <div className="vl-newslater-form">
                                    <input name="email" type="email" placeholder="Unesite vašu e-mail adresu" />
                                    <button type="submit" className="w-100 mt-16 vl-btn-primar4y">
                                        Prijavi se
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="vl-footer-copyright-text-4">
                        <div className="row">
                            <div className="col-lg-6">
                                <p className="para">© {new Date().getFullYear()} Udruženje medicinskih sestara „Eduka“.</p>
                            </div>
                            <div className="col-lg-6">
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

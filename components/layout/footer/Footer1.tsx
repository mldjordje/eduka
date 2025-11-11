import Link from "next/link";

export default function Footer() {
    return (
        <>
            <section className="vl-footer vl-footer-margin-top-minus vl-off-white-bg pt-240">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="vl-footer-widget-1">
                                <div className="vl-footer-logo">
                                    <Link href="/">
                                        <img src="assets/img/logo/logo2.png" alt="Едука" />
                                    </Link>
                                </div>
                                <div className="vl-footer-content">
                                    <p className="pt-24 pb-24">
                                        Удружење здравствених радника и сарадника Нишавског округа „Едука“ подржава стручно усавршавање и размену знања кроз акредитоване програме и сарадњу са институцијама.
                                    </p>
                                </div>
                                <div className="vl-footer-social">
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                                <i className="fa-brands fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                                <i className="fa-brands fa-linkedin-in" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                                <i className="fa-brands fa-instagram" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                                <i className="fa-brands fa-youtube" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-30">
                            <div className="vl-footer-widget-2">
                                <h3 className="vl-footer-widget-title mb-24">Брзи линкови</h3>
                                <div className="vl-footer-menu">
                                    <ul>
                                        <li>
                                            <Link href="/">Почетна</Link>
                                        </li>
                                        <li>
                                            <Link href="/about">О нама</Link>
                                        </li>
                                        <li>
                                            <a href="https://eduka.rs/edukacije" target="_blank" rel="noopener noreferrer">
                                                Едукације
                                            </a>
                                        </li>
                                        <li>
                                            <Link href="/vesti">Вести</Link>
                                        </li>
                                        <li>
                                            <Link href="/prijava">Пријава</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="vl-footer-widget-4">
                                <h3 className="vl-footer-widget-title mb-24">Контакт</h3>
                                <div className="vl-footer-icon-list">
                                    <ul>
                                        <li>
                                            <Link href="tel:+381638661256">
                                                <span>
                                                    <img src="assets/img/icons/vl-footer-icon-1.1.svg" alt="Телефон" />
                                                </span>
                                                063 866 1256
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="tel:+381184261749">
                                                <span>
                                                    <img src="assets/img/icons/vl-footer-icon-1.1.svg" alt="Телефон" />
                                                </span>
                                                018 426 1749
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="tel:+38118503748">
                                                <span>
                                                    <img src="assets/img/icons/vl-footer-icon-1.1.svg" alt="Телефон" />
                                                </span>
                                                018 503 748
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <span>
                                                    <img src="assets/img/icons/vl-footer-icon-1.2.svg" alt="Адреса" />
                                                </span>
                                                <span>
                                                    Војводе Мишића 50, Ниш
                                                    <br />
                                                    Војводе Танкосића 15, Ниш
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="mailto:edukaudruzenje@gmail.com">
                                                <span>
                                                    <img src="assets/img/icons/vl-footer-icon-1.3.svg" alt="Е-пошта" />
                                                </span>
                                                edukaudruzenje@gmail.com
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.eduka.rs" target="_blank" rel="noopener noreferrer">
                                                <span>
                                                    <img src="assets/img/icons/vl-footer-icon-1.4.svg" alt="Веб" />
                                                </span>
                                                www.eduka.rs
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="vl-footer-working-hours pt-24">
                                    <h4 className="vl-footer-widget-subtitle mb-12">Радно време</h4>
                                    <ul>
                                        <li>Радним данима од 7–15 часова</li>
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
                                <p className="para">© {new Date().getFullYear()} Едука. Сва права задржана.</p>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="copy-right-menu">
                                    <ul>
                                        <li>
                                            <Link href="#">Правила приватности</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Услови коришћења</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

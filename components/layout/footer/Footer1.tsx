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
                                        <img src="assets/img/logo/logo2.png" alt="Ð•Ð´ÑƒÐºÐ°" />
                                    </Link>
                                </div>
                                <div className="vl-footer-content">
                                    <p className="pt-24 pb-24">
                                        Ð£Ð´Ñ€ÑƒÐ¶ÐµÑšÐµ Ð·Ð´Ñ€Ð°Ð²ÑÑ‚Ð²ÐµÐ½Ð¸Ñ… Ñ€Ð°Ð´Ð½Ð¸ÐºÐ° Ð¸ ÑÐ°Ñ€Ð°Ð´Ð½Ð¸ÐºÐ° ÐÐ¸ÑˆÐ°Ð²ÑÐºÐ¾Ð³ Ð¾ÐºÑ€ÑƒÐ³Ð° â€žÐ•Ð´ÑƒÐºÐ°â€œ Ð¿Ð¾Ð´Ñ€Ð¶Ð°Ð²Ð° ÑÑ‚Ñ€ÑƒÑ‡Ð½Ð¾ ÑƒÑÐ°Ð²Ñ€ÑˆÐ°Ð²Ð°ÑšÐµ Ð¸ Ñ€Ð°Ð·Ð¼ÐµÐ½Ñƒ Ð·Ð½Ð°ÑšÐ° ÐºÑ€Ð¾Ð· Ð°ÐºÑ€ÐµÐ´Ð¸Ñ‚Ð¾Ð²Ð°Ð½Ðµ Ð¿Ñ€Ð¾Ð³Ñ€Ð°Ð¼Ðµ Ð¸ ÑÐ°Ñ€Ð°Ð´ÑšÑƒ ÑÐ° Ð¸Ð½ÑÑ‚Ð¸Ñ‚ÑƒÑ†Ð¸Ñ˜Ð°Ð¼Ð°.
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
                                <h3 className="vl-footer-widget-title mb-24">Ð‘Ñ€Ð·Ð¸ Ð»Ð¸Ð½ÐºÐ¾Ð²Ð¸</h3>
                                <div className="vl-footer-menu">
                                    <ul>
                                        <li>
                                            <Link href="/">ÐŸÐ¾Ñ‡ÐµÑ‚Ð½Ð°</Link>
                                        </li>
                                        <li>
                                            <Link href="/about">Ðž Ð½Ð°Ð¼Ð°</Link>
                                        </li>
                                        <li>
                                            <a href="https://eduka.rs/edukacije" target="_blank" rel="noopener noreferrer">
                                                Ð•Ð´ÑƒÐºÐ°Ñ†Ð¸Ñ˜Ðµ
                                            </a>
                                        </li>
                                        <li>
                                            <Link href="/vesti">Ð’ÐµÑÑ‚Ð¸</Link>
                                        </li>
                                        <li>
                                            <Link href="/prijava">ÐŸÑ€Ð¸Ñ˜Ð°Ð²Ð°</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="vl-footer-widget-4">
                                <h3 className="vl-footer-widget-title mb-24">ÐšÐ¾Ð½Ñ‚Ð°ÐºÑ‚</h3>
                                <div className="vl-footer-icon-list">
                                    <ul>
                                        <li>
                                            <Link href="tel:+381638661256">
                                                <span>
                                                    <img src="assets/img/icons/vl-footer-icon-1.1.svg" alt="Ð¢ÐµÐ»ÐµÑ„Ð¾Ð½" />
                                                </span>
                                                063 866 1256
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="tel:+381184261749">
                                                <span>
                                                    <img src="assets/img/icons/vl-footer-icon-1.1.svg" alt="Ð¢ÐµÐ»ÐµÑ„Ð¾Ð½" />
                                                </span>
                                                018 426 1749
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="tel:+38118503748">
                                                <span>
                                                    <img src="assets/img/icons/vl-footer-icon-1.1.svg" alt="Ð¢ÐµÐ»ÐµÑ„Ð¾Ð½" />
                                                </span>
                                                018 503 748
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <span>
                                                    <img src="assets/img/icons/vl-footer-icon-1.2.svg" alt="ÐÐ´Ñ€ÐµÑÐ°" />
                                                </span>
                                                <span>
                                                    Ð’Ð¾Ñ˜Ð²Ð¾Ð´Ðµ ÐœÐ¸ÑˆÐ¸Ñ›Ð° 50, ÐÐ¸Ñˆ
                                                    <br />
                                                    Ð’Ð¾Ñ˜Ð²Ð¾Ð´Ðµ Ð¢Ð°Ð½ÐºÐ¾ÑÐ¸Ñ›Ð° 15, ÐÐ¸Ñˆ
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="mailto:edukaudruzenje@gmail.com">
                                                <span>
                                                    <img src="assets/img/icons/vl-footer-icon-1.3.svg" alt="Ð•-Ð¿Ð¾ÑˆÑ‚Ð°" />
                                                </span>
                                                edukaudruzenje@gmail.com
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.eduka.rs" target="_blank" rel="noopener noreferrer">
                                                <span>
                                                    <img src="assets/img/icons/vl-footer-icon-1.4.svg" alt="Ð’ÐµÐ±" />
                                                </span>
                                                www.eduka.rs
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="vl-footer-working-hours pt-24">
                                    <h4 className="vl-footer-widget-subtitle mb-12">Р а д н о   в р е м е</h4>
                                    <ul>
                                        <li>П о н е д е љ а к – п е т а к   о д   7   д о   1 7   ч а с о в а</li>
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
                                <p className="para">Â© {new Date().getFullYear()} Ð•Ð´ÑƒÐºÐ°. Ð¡Ð²Ð° Ð¿Ñ€Ð°Ð²Ð° Ð·Ð°Ð´Ñ€Ð¶Ð°Ð½Ð°.</p>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="copy-right-menu">
                                    <ul>
                                        <li>
                                            <Link href="#">ÐŸÑ€Ð°Ð²Ð¸Ð»Ð° Ð¿Ñ€Ð¸Ð²Ð°Ñ‚Ð½Ð¾ÑÑ‚Ð¸</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Ð£ÑÐ»Ð¾Ð²Ð¸ ÐºÐ¾Ñ€Ð¸ÑˆÑ›ÐµÑšÐ°</Link>
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




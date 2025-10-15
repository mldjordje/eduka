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
                                        We’re dedicated to providing <br /> high-quality, compassionate <br />
                                        dental care for patients of all <br /> ages from preventive care.
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
                                <h3 className="vl-footer-widget-title mb-24">Quick Links</h3>
                                <div className="vl-footer-menu">
                                    <ul>
                                        <li>
                                            <Link href="/">Home Page</Link>
                                        </li>
                                        <li>
                                            <Link href="/about">About Us</Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">Appointment</Link>
                                        </li>
                                        <li>
                                            <Link href="/blog">News &amp; Blog</Link>
                                        </li>
                                        <li>
                                            <Link href="/service">Service</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-30">
                            <div className="vl-footer-widget-3 ml-40">
                                <h3 className="vl-footer-widget-title mb-24">Our Services</h3>
                                <div className="vl-footer-menu">
                                    <ul>
                                        <li>
                                            <Link href="#">General Dental</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Cosmetic Dental</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Whitening Care</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Dental Implants</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Dental Care</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="vl-footer-widget-4">
                                <h3 className="vl-footer-widget-title mb-24">Contact Us</h3>
                                {/* icon list */}
                                <div className="vl-footer-icon-list">
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <span>
                                                    <img src="assets/img/icons/vl-footer-icon-1.1.svg" alt="" />
                                                </span>
                                                +1 123 456 7890
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <span>
                                                    <img src="assets/img/icons/vl-footer-icon-1.2.svg" alt="" />
                                                </span>
                                                421 Allen, Mexico 4233
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <span>
                                                    <img src="assets/img/icons/vl-footer-icon-1.3.svg" alt="" />
                                                </span>
                                                dentistsolution@com
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <span>
                                                    <img src="assets/img/icons/vl-footer-icon-1.4.svg" alt="" />
                                                </span>
                                                dentistsolution.com
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
                                <p className="para">© 2025 Dentalx ,Inc. All Rights Reserved.</p>
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

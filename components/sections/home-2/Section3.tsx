import Link from "next/link";

export default function Section3() {
    return (
        <>
            {/*================= Service section start =================*/}
            <section id="service" className="vl-service-bg-2 fix pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="vl-service-section-title">
                                <div className="vl-section-title2 text-center mb-60">
                                    <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                        Our Service
                                    </h5>
                                    <h2 className="title pt-16 text-anime-style-3">Explore Our Services Quality Care for All Ages</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* single service box start */}
                        <div className="col-lg-4 col-md-6 mb-30" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                            <div className="vl-service-icon-bo2x text-center">
                                <div className="icon">
                                    <span>
                                        <img src="assets/img/icons/vl-service-icon-2.1.svg" alt="" />
                                    </span>
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <Link href="/service-single">Restorative Solutions</Link>
                                    </h4>
                                    <p className="para">
                                        We’re proud to offer a comprehensive <br />
                                        range of dental services designed to meet <br />
                                        the unique needs each patient.
                                    </p>
                                    <Link href="/service-single" className="service-learnmore">
                                        Learn More
                                        <span>
                                            <i className="fa-regular fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* single service box end */}
                        {/* single service box start */}
                        <div className="col-lg-4 col-md-6 mb-30" data-aos="fade-up" data-aos-duration={900} data-aos-delay={300}>
                            <div className="vl-service-icon-bo2x text-center">
                                <div className="icon">
                                    <span>
                                        <img src="assets/img/icons/vl-service-icon-2.2.svg" alt="" />
                                    </span>
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <Link href="/service-single">Root Canal Therapy</Link>
                                    </h4>
                                    <p className="para">
                                        Our Preventive Care services focus on <br />
                                        regular cleanings, exams, and education to <br />
                                        help you maintain optimal oral health.
                                    </p>
                                    <Link href="/service-single" className="service-learnmore">
                                        Learn More
                                        <span>
                                            <i className="fa-regular fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* single service box end */}
                        {/* single service box start */}
                        <div className="col-lg-4 col-md-6 mb-30" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={300}>
                            <div className="vl-service-icon-bo2x text-center">
                                <div className="icon">
                                    <span>
                                        <img src="assets/img/icons/vl-service-icon-2.3.svg" alt="" />
                                    </span>
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <Link href="/service-single">Smile Brightening</Link>
                                    </h4>
                                    <p className="para">
                                        For those in need Restorative Solutions, <br />
                                        we offer fillings, crowns, bridges, and <br />
                                        implants, restoring function.
                                    </p>
                                    <Link href="/service-single" className="service-learnmore">
                                        Learn More
                                        <span>
                                            <i className="fa-regular fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* single service box end */}
                        {/* single service box start */}
                        <div className="col-lg-6 col-md-6 mb-30" data-aos="fade-up" data-aos-duration={1100} data-aos-delay={300}>
                            <div className="vl-service-icon-bo2x text-center">
                                <div className="icon">
                                    <span>
                                        <img src="assets/img/icons/vl-service-icon-2.4.svg" alt="" />
                                    </span>
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <Link href="/service-single">Emergency Dental Care</Link>
                                    </h4>
                                    <p className="para">
                                        Whether you’re here for routine care or specialized treatment, <br />
                                        our team is committed to providing gentle, compassionate care <br />
                                        tailored to every stage of life.
                                    </p>
                                    <Link href="/service-single" className="service-learnmore">
                                        Learn More
                                        <span>
                                            <i className="fa-regular fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* single service box end */}
                        {/* single service box start */}
                        <div className="col-lg-6 col-md-6 mb-30" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={300}>
                            <div className="vl-service-icon-bo2x text-center">
                                <div className="icon">
                                    <span>
                                        <img src="assets/img/icons/vl-service-icon-2.5.svg" alt="" />
                                    </span>
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <Link href="/service-single">Advanced Orthodontics</Link>
                                    </h4>
                                    <p className="para">
                                        For those in need of Restorative Solutions, we offer fillings, crowns, <br />
                                        bridges, and implants, restoring function and aesthetics to your smile. <br />
                                        Our Cosmetic Dentistry options, including whitening.
                                    </p>
                                    <Link href="/service-single" className="service-learnmore">
                                        Learn More
                                        <span>
                                            <i className="fa-regular fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* single service box end */}
                    </div>
                </div>
            </section>
            {/*================= Service section End =================*/}
        </>
    );
}

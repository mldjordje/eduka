import Link from "next/link";

export default function Section3() {
    return (
        <>
            {/*================= Service section start =================*/}
            <section id="service" className="vl-service-bg-3 fix pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="vl-service-section-title">
                                <div className="vl-section-title3 text-center mb-60">
                                    <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                        Our Service
                                    </h5>
                                    <h2 className="title pt-16 text-anime-style-3">Services Tailored to Your Smile</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 mb-30">
                            {/* single service box */}
                            <div className="vl-single-service-box3" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                <h4 className="title">
                                    <Link href="/service-single">Advanced Orthodontics</Link>
                                </h4>
                                <p className="para pt-16 pb-32">
                                    We’re proud to offer comprehensive range of dental service designed <br /> to meet the unique needs of each patient our Preventive Care.
                                </p>
                                <div className="vl-service-thumb3">
                                    <img className="w-100" src="assets/img/service/vl-service-thumb-3.1.png" alt="" />
                                    <div className="vl-service-btn3">
                                        <Link href="/service-single" className="btn-primary3">
                                            <cite />
                                            Learn More
                                            <span>
                                                <i className="fa-regular fa-arrow-right" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mb-30">
                            {/* single service box */}
                            <div className="vl-single-service-box3" data-aos="fade-up" data-aos-duration={900} data-aos-delay={300}>
                                <h4 className="title">
                                    <Link href="/service-single">Emergency Dental Care</Link>
                                </h4>
                                <p className="para pt-16 pb-32">
                                    Our Preventive Care services focus on regular cleanings, exams, and <br /> education to help you maintain optimal oral health &amp; prevent.
                                </p>
                                <div className="vl-service-thumb3">
                                    <img className="w-100" src="assets/img/service/vl-service-thumb-3.1.png" alt="" />
                                    <div className="vl-service-btn3">
                                        <Link href="/service-single" className="btn-primary3">
                                            <cite />
                                            Learn More
                                            <span>
                                                <i className="fa-regular fa-arrow-right" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            {/* single service box */}
                            <div className="vl-single-service-box3" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={300}>
                                <h4 className="title">
                                    <Link href="/service-single">Periodontal Therapy</Link>
                                </h4>
                                <p className="para pt-16 pb-32">For those in need of Restorative Solutions, we offer fillings, crowns,, and implants, restoring function and aesthetics.</p>
                                <div className="vl-service-thumb3 sm-thumb">
                                    <img className="w-100" src="assets/img/service/vl-service-thumb-3.3.png" alt="" />
                                    <div className="vl-service-btn3">
                                        <Link href="/service-single" className="btn-primary3">
                                            <cite />
                                            Learn More
                                            <span>
                                                <i className="fa-regular fa-arrow-right" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            {/* single service box */}
                            <div className="vl-single-service-box3" data-aos="fade-up" data-aos-duration={1100} data-aos-delay={300}>
                                <h4 className="title">
                                    <Link href="/service-single">Restorative Solutions</Link>
                                </h4>
                                <p className="para pt-16 pb-32">Our Cosmetic Dentistry options, including whitening veneers, are crafted enhance your confidence with a radiant, beautiful.</p>
                                <div className="vl-service-thumb3 sm-thumb">
                                    <img className="w-100" src="assets/img/service/vl-service-thumb-3.4.png" alt="" />
                                    <div className="vl-service-btn3">
                                        <Link href="/service-single" className="btn-primary3">
                                            <cite />
                                            Learn More
                                            <span>
                                                <i className="fa-regular fa-arrow-right" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            {/* single service box */}
                            <div className="vl-single-service-box3" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={300}>
                                <h4 className="title">
                                    <Link href="/service-single">Root Canal Therapy</Link>
                                </h4>
                                <p className="para pt-16 pb-32">We also specialize in Orthodontic Care, providing options like braces and clear aligners to achieve a balanced bite.</p>
                                <div className="vl-service-thumb3 sm-thumb">
                                    <img className="w-100" src="assets/img/service/vl-service-thumb-3.5.png" alt="" />
                                    <div className="vl-service-btn3">
                                        <Link href="/service-single" className="btn-primary3">
                                            <cite />
                                            Learn More
                                            <span>
                                                <i className="fa-regular fa-arrow-right" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= Service section End =================*/}
        </>
    );
}

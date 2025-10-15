import Link from "next/link";
export default function Section2() {
    return (
        <>
            {/*================= About section start =================*/}
            <section id="about" className="vl-about-area fix pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-30">
                            <div className="vl-about-area2 mr-20">
                                <div className="vl-section-title2 mb-32">
                                    <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                        About Us
                                    </h5>
                                    <h2 className="title pt-16 text-anime-style-3">Building Relationships One Smile at a Time</h2>
                                </div>
                                <div className="vl-about-thumb-box2 p-relative">
                                    <div className="vl-about-area-thumb1 reveal image-anime">
                                        <img className="w-100" src="assets/img/about/vl-about-2.1.png" alt="" />
                                    </div>
                                    <div className="vl-about-countr-box2">
                                        <h3>
                                            <span className="title counter">10</span>
                                            <span>K+</span>
                                        </h3>
                                        <span className="deseg">Happy Patients</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-30">
                            <div className="vl-about-thumb-box3 p-relative">
                                <div className="vl-about-area-thumb1 reveal image-anime">
                                    <img className="w-100" src="assets/img/about/vl-about-2.2.png" alt="" />
                                </div>
                                <div className="vl-about-countr-box3">
                                    <h3>
                                        <span className="title counter">100</span>
                                        <span>+</span>
                                    </h3>
                                    <span className="deseg">Destination Country</span>
                                </div>
                                <p className="para" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                    We’re more than just a dental clinic we’re your partners in health, here to guide you on a journey toward a brighter, healthier. Our dedicated team combines years of experience with a genuine passion for patient care.
                                </p>
                                {/* btn */}
                                <div className="vl-about-btn2" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                    <Link href="/about" className="btn-primary2">
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
            </section>
            {/*================= About section End =================*/}
        </>
    );
}

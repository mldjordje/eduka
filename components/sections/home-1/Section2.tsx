import Link from "next/link";

export default function Section2() {
    return (
        <>
            {/*================= About section start =================*/}
            <section id="about" className="vl-about-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 order-lg-1 order-md-2 mb-30">
                            <div className="vl-about-thumb-1 p-relative">
                                <div className="vl-about-radius-thumb reveal image-anime">
                                    <img className="w-100" src="assets/img/about/vl-about-thumb-1.1.png" alt="" />
                                </div>
                                <div className="vl-about-star-shape">
                                    <div className="shape">
                                        <img className="circle" src="assets/img/shape/vl-star-shape-1.2.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 order-md-1 mb-30">
                            <div className="vl-about-content-wrap">
                                <div className="vl-section-title">
                                    <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                        About Us
                                    </h5>
                                    <h2 className="title text-anime-style-3 pt-16 pb-16 mr-20">Our Story Caring for Your Smile</h2>
                                    <p className="para pb-32" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                        We believe building lasting relationships with <br /> our patients, taking the time understand your unique needs and goals from preventive care.
                                    </p>
                                </div>
                                <div className="vl-about-btn" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                    <Link href="/about" className="vl-btn-primary">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 order-md-3 mb-30">
                            <div className="vl-about-thumb-2 reveal image-anime">
                                <img className="w-100" src="assets/img/about/vl-about-thumb-1.2.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4" />
                        <div className="col-lg-8">
                            <div className="vl-about-counter-block">
                                {/* single counter box */}
                                <div className="single-couter-box text-center mb-30">
                                    <h3>
                                        <span className="title">24X7</span>
                                    </h3>
                                    <span className="deseg">Emergency Service</span>
                                </div>
                                {/* single counter box */}
                                <div className="single-couter-box text-center mb-30">
                                    <h3>
                                        <span className="title counter">25</span>
                                        <span>K+</span>
                                    </h3>
                                    <span className="deseg">Recover Patient</span>
                                </div>
                                {/* single counter box */}
                                <div className="single-couter-box text-center mb-30">
                                    <h3>
                                        <span className="title counter">15</span>
                                        <span>+</span>
                                    </h3>
                                    <span className="deseg">Years Experience</span>
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

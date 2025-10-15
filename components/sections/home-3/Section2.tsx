import Link from "next/link";

export default function Section2() {
    return (
        <>
            {/*================= Choose us section start =================*/}
            <section id="about" className="vl-choose3 fix pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 mb-30">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="vl-choose-content3">
                                        <div className="vl-section-title3">
                                            <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                                Why Choose us
                                            </h5>
                                            <h2 className="title text-anime-style-3 pt-16 pb-16">Caring for Your Smile Inside &amp; Out</h2>
                                            <p className="para pb-32" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                                We believe building lasting relationships with our patients, taking the time understand your unique needs and goals from preventive care.
                                            </p>
                                            <div className="vl-choose-btn" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                                <Link href="/about" className="btn-primary3">
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
                                <div className="col-lg-6">
                                    <div className="vl-choose-thumb reveal image-anime">
                                        <img className="br-8" src="assets/img/choose/vl-choose-3.1.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                            {/* single box */}
                            <div className="vl-choose-box mb-30">
                                <h4 className="title pb-16">
                                    <Link href="#">Experienced and Caring Team</Link>
                                </h4>
                                <p className="para">Our team is not only highly skilled but also dedicated to making each patient feel at ease. We understand that dental visits.</p>
                            </div>
                            {/* single box */}
                            <div className="vl-choose-box mb-30">
                                <h4 className="title pb-16">
                                    <Link href="#">Commitment to Safety and Comfort</Link>
                                </h4>
                                <p className="para">We prioritize safety and follow strict sterilization and sanitation protocols to ensure a clean, secure environment additionally.</p>
                            </div>
                            {/* single box */}
                            <div className="vl-choose-box mb-30">
                                <h4 className="title pb-16">
                                    <Link href="#">Comprehensive Services Under One Roof</Link>
                                </h4>
                                <p className="para">Whether you need a routine cleaning, restorative care, cosmetic treatments, we offer a full range of dental services to meet all.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= Choose us section start =================*/}
        </>
    );
}

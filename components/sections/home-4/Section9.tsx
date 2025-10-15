import Link from "next/link";

export default function Section9() {
    return (
        <>
            {/*================= Cta section start =================*/}
            <section className="vl-cta-area fix">
                <div className="container">
                    <div className="vl-cta-bg4 p-relative">
                        <div className="shape1 circle">
                            <img src="assets/img/shape/vl-cta-star-arrow4.1.svg" alt="" />
                        </div>
                        <div className="shape2 aniamtion-key-1 d-none d-md-block">
                            <img src="assets/img/shape/vl-cta-shape4.1.svg" alt="" />
                        </div>
                        <div className="shape3 aniamtion-key-1 d-none d-md-block">
                            <img src="assets/img/shape/vl-cta-shape4.1.svg" alt="" />
                        </div>
                        <div className="shape4 aniamtion-key-1">
                            <img src="assets/img/shape/vl-cta-large-shape-4.2.svg" alt="" />
                        </div>
                        <div className="shape5 aniamtion-key-5">
                            <img src="assets/img/shape/vl-cta-text-circle-4.5.svg" alt="" />
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-30">
                                <div className="vl-cta-content4">
                                    <h3 className="title text-anime-style-3">Don’t Wait Your Smile Deserves the Best</h3>
                                    <p className="para pt-16 pb-32" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                        Your journey to a healthier, more confident smile starts here at <br /> Whether you’re due for a routine check-up, need restorative.
                                    </p>
                                    <div className="vl-ct4a-btns" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                        <Link href="/contact" className="vl-btn-primar4y">
                                            Schedule Appointment
                                        </Link>
                                        <Link href="/contact" className="vl-btn-sec4ondary">
                                            Contact Us
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-30">
                                <div className="vl-cta-thumb4" data-aos="fade-left" data-aos-duration={800} data-aos-delay={300}>
                                    <img src="assets/img/cta/vl-cta-thumb-4.1.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= Cta section End =================*/}
        </>
    );
}

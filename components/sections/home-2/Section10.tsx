import Link from "next/link";
export default function Section10() {
    return (
        <>
            {/*================= Cta section start =================*/}
            <section className="vl-cta-area-bg2 fix">
                <div className="container">
                    <div className="vl-cta-bg2 br-30">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="vl-cta-content2">
                                    <h3 className="title text-anime-style-3">Don’t Wait Your Smile Deserves the Best</h3>
                                    <p className="para pt-16 pb-32" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                        Your journey to a healthier, more confident smile starts here at <br />
                                        Whether you’re due for a routine check-up, need restorative.
                                    </p>
                                    <div className="vl-cta-btns" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                        <Link href="/contact" className="vl-cta-btn1">
                                            Schedule Appointment
                                            <span>
                                                <i className="fa-regular fa-arrow-right" />
                                            </span>
                                        </Link>
                                        <Link href="/contact" className="vl-cta-btn2">
                                            Call Today
                                            <span>
                                                <i className="fa-regular fa-arrow-right" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1" />
                            <div className="col-lg-5">
                                <div className="vl-cta-thumb2 image-anime reveal">
                                    <img className="w-100 br-30" src="assets/img/cta/vl-cta-thumb-2.1.png" alt="" />
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

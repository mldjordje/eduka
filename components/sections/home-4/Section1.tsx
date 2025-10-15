import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*================= Banner section start =================*/}
            <section className="vl-banner-b4g fix p-relative">
                <div className="shape1 circle">
                    <img src="assets/img/shape/vl-circle-start4.1.svg" alt="" />
                </div>
                <div className="shap4e aniamtion-key-5">
                    <img src="assets/img/shape/vl-rounded-circle4.1.svg" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="vl-banner-area-conten4t fix p-relative">
                                <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                    Confident Smile Begins Here
                                </h5>
                                <h1 className="title text-anime-style-3 pt-16 pb-16">Advanced Dental Care Personalized for You</h1>
                                <p className="para" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                    Whether you’re here for a routine check-up, cosmetic enhancements, or advanced <br /> restorative treatment, we’re here to make every step of your journey enjoyable.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 p-relative">
                            <div className="vl-banne4r-text-widget p-relative">
                                {/* widget 1 */}
                                <div className="vl-banne4r-widget1 mb-12" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                    <div className="vl-banner-flx">
                                        <div className="content">
                                            <h5 className="title">Dr. Lida Gutierrez</h5>
                                            <p className="deseg">DomĒL = Lepe puncfurg BGH</p>
                                        </div>
                                        <div className="thumb image-anime">
                                            <img src="assets/img/banner/vl-auth4.1.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="vl-contact-flex2 mt-16">
                                        <h4 className="title">Available for your need</h4>
                                        <Link href="/contact" className="top-btn">
                                            Appointment
                                        </Link>
                                    </div>
                                </div>
                                {/* widget 2 */}
                                <div className="vl-banne4r-widget2" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={300}>
                                    <div className="vl-main-flex">
                                        <div className="content-flex">
                                            <h4 className="number">
                                                15<span>+</span>
                                            </h4>
                                            <h3 className="title">
                                                Years <br /> Experience
                                            </h3>
                                        </div>
                                        <div className="circle-thumb circle">
                                            <img src="assets/img/shape/vl-circle-thunb4.1.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="vl-banne4r-btn mt-32" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={300}>
                                <Link href="/contact" className="vl-btn-primar4y">
                                    Schedule a Consultation
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="vl-banner-thumbnail">
                <div className="container">
                    <div className="vl-banner-large-thumb">
                        <img className="w-100" src="assets/img/banner/vl-banner-thumb-4.1.png" alt="" />
                    </div>
                </div>
            </div>
            {/*================= Banner section End =================*/}
        </>
    );
}

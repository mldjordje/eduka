import Link from "next/link";

export default function Section2() {
    return (
        <>
            {/*================= Service section start =================*/}
            <section className="vl-service-inner pb-70">
                <div className="container">
                    <div className="row">
                        <div className="vl-service-sec-title-iner">
                            {/* section title */}
                            <div className="vl-section-title text-center mb-60">
                                <h2 className="title text-anime-style-3">More Service</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* single service box start */}
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="vl-service-icon-bo2x-iner text-center">
                                <div className="icon">
                                    <span>
                                        <img src="assets/img/icons/vl-service-icon-iner1.1.svg" alt="" />
                                    </span>
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <Link href="/service-single">Restorative Solutions</Link>
                                    </h4>
                                    <p className="para">
                                        We’re proud to offer a comprehensive <br /> range of dental services designed to meet <br /> the unique needs each patient.
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
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="vl-service-icon-bo2x-iner text-center">
                                <div className="icon">
                                    <span>
                                        <img src="assets/img/icons/vl-service-icon-iner1.2.svg" alt="" />
                                    </span>
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <Link href="/service-single">Root Canal Therapy</Link>
                                    </h4>
                                    <p className="para">
                                        Our Preventive Care services focus on <br /> regular cleanings, exams, and education to <br /> help you maintain optimal oral health.
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
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="vl-service-icon-bo2x-iner text-center">
                                <div className="icon">
                                    <span>
                                        <img src="assets/img/icons/vl-service-icon-iner1.3.svg" alt="" />
                                    </span>
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <Link href="/service-single">Smile Brightening</Link>
                                    </h4>
                                    <p className="para">
                                        For those in need Restorative Solutions, <br /> we offer fillings, crowns, bridges, and <br /> implants, restoring function.
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

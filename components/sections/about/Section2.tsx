import Link from "next/link";

export default function Section2() {
    return (
        <>
            {/*================= Mission section start =================*/}
            <section className="vl-mission-area fix pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-6 mb-30">
                            <div className="vl-mission-content-inner mr-60">
                                {/* section title */}
                                <div className="vl-section-title">
                                    <h5 className="subtitle">Our Mission Vision</h5>
                                    <h2 className="title text-anime-style-3 pt-16 pb-16">Vision &amp; Mission Excellence in Dental Care Smile</h2>
                                    <p className="para pb-32">Our mission is to provide exceptional dental care enhances the health, confidence, &amp; well-being of our patients we are committed fostering.</p>
                                </div>
                                {/* mission tabs */}
                                <div className="vl-mission-tabs">
                                    <div className="vl-tab-heading-content">
                                        <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                                                    <span className="tab-title">Our Vision</span>
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                                                    <span className="tab-title">Our History</span>
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                                                    <span className="tab-title">Why Choose Us</span>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
                                            {/* tab content */}
                                            <div className="vl-tab-content">
                                                <p className="para pt-30 pb-20">
                                                    <span>Client-Centric:</span> We aim to inspire healthier communities by promoting <br /> the importance of oral health and creating smiles that last a lifetime. <br /> Together, we’re transforming lives, one smile at a time.
                                                </p>
                                                <p className="para pb-32">
                                                    <span>Personalized Approach:</span> Our vision is to a leader in dental excellence, continually advancing our services through innovation, education.
                                                </p>
                                                {/* tab btn */}
                                                <div className="vl-tab-btn">
                                                    <Link href="/contact" className="vl-btn-primary">
                                                        Get Started Now
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
                                            {/* tab content */}
                                            <div className="vl-tab-content">
                                                <p className="para pt-30 pb-20">
                                                    <span>Client-Centric:</span> We aim to inspire healthier communities by promoting <br /> the importance of oral health and creating smiles that last a lifetime. <br /> Together, we’re transforming lives, one smile at a time.
                                                </p>
                                                <p className="para pb-32">
                                                    <span>Personalized Approach:</span> Our vision is to a leader in dental excellence, continually advancing our services through innovation, education.
                                                </p>
                                                {/* tab btn */}
                                                <div className="vl-tab-btn">
                                                    <Link href="/contact" className="vl-btn-primary">
                                                        Get Started Now
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}>
                                            {/* tab content */}
                                            <div className="vl-tab-content">
                                                <p className="para pt-30 pb-20">
                                                    <span>Client-Centric:</span> We aim to inspire healthier communities by promoting <br /> the importance of oral health and creating smiles that last a lifetime. <br /> Together, we’re transforming lives, one smile at a time.
                                                </p>
                                                <p className="para pb-32">
                                                    <span>Personalized Approach:</span> Our vision is to a leader in dental excellence, continually advancing our services through innovation, education.
                                                </p>
                                                {/* tab btn */}
                                                <div className="vl-tab-btn">
                                                    <Link href="/contact" className="vl-btn-primary">
                                                        Get Started Now
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-30">
                            {/* mission thumb */}
                            <div className="vl-mission-iner-thumb">
                                <div className="vl-mission-thumb-iner reveal image-anime">
                                    <img className="w-100" src="assets/img/about/vl-mission-thumb-iner1.1.png" alt="" />
                                </div>
                                {/* counter */}
                                <div className="vl-tab-counter-box">
                                    <div className="vl-icon">
                                        <span>
                                            <img className="circle" src="assets/img/icons/vl-counter-icon-1.1.svg" alt="" />
                                        </span>
                                    </div>
                                    <div className="vl-counter-content">
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
                </div>
            </section>
            {/*================= Mission section End =================*/}
        </>
    );
}

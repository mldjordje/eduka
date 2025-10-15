export default function Section4() {
    return (
        <>
            {/*================= Work section start =================*/}
            <section id="work" className="vl-work-area fix pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="vl-section-title text-center mb-60">
                                <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                    How It Work
                                </h5>
                                <h2 className="title pt-16 text-anime-style-3">How Our Dental Care Works</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mb-30" data-aos="fade-right" data-aos-duration={800} data-aos-delay={300}>
                            <div className="vl-work-tab mr-50">
                                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <div className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                                        {/* icon box */}
                                        <div className="vl-tab-icon-box">
                                            <div className="workicon">
                                                <span className="icon">
                                                    <img src="assets/img/icons/vl-work-icon1.1.svg" alt="" />
                                                </span>
                                            </div>
                                            <div className="content">
                                                <h4 className="title pb-16">Comfortable and Precise Treatment</h4>
                                                <p className="para">
                                                    Includes follow-up care &amp; guidance maintaining your <br /> results, with our team always available to answer.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                                        {/* icon box */}
                                        <div className="vl-tab-icon-box">
                                            <div className="workicon">
                                                <span className="icon">
                                                    <img src="assets/img/icons/vl-work-icon1.2.svg" alt="" />
                                                </span>
                                            </div>
                                            <div className="content">
                                                <h4 className="title pb-16">Post-Treatment Care and Follow-Up</h4>
                                                <p className="para">
                                                    Is your treatment phase, where we use the latest <br /> technology techniques to deliver precise, gentle care.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                                        {/* icon box */}
                                        <div className="vl-tab-icon-box">
                                            <div className="workicon">
                                                <span className="icon">
                                                    <img src="assets/img/icons/vl-work-icon1.3.svg" alt="" />
                                                </span>
                                            </div>
                                            <div className="content">
                                                <h4 className="title pb-16">Personalized Treatment Plan</h4>
                                                <p className="para">
                                                    We develop a personalized treatment tailored to your <br /> specific requirement, ensuring informed every option.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                                        {/* icon box */}
                                        <div className="vl-tab-icon-box">
                                            <div className="workicon">
                                                <span className="icon">
                                                    <img src="assets/img/icons/vl-work-icon1.4.svg" alt="" />
                                                </span>
                                            </div>
                                            <div className="content">
                                                <h4 className="title pb-16">Your First Consultation</h4>
                                                <p className="para">
                                                    Begins with a warm welcome &amp; thorough consultation, <br /> where we take the time to understand needs, goals.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-30">
                            <div className="vl-tab-content-block" data-aos="fade-left" data-aos-duration={800} data-aos-delay={300}>
                                {/* shape */}
                                <div className="shape">
                                    <img className="circle" src="assets/img/shape/vl-star-shape-1.2.svg" alt="" />
                                </div>
                                <div className="tab-content" id="v-pills-tabContent">
                                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex={0}>
                                        <div className="vl-tab-thumb reveal image-anime">
                                            <img className="w-100 br-8" src="assets/img/portfolio/vl-work-thumb-1.1.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex={0}>
                                        <div className="vl-tab-thumb reveal image-anime">
                                            <img className="w-100 br-8" src="assets/img/portfolio/vl-work-thumb-1.2.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabIndex={0}>
                                        <div className="vl-tab-thumb reveal image-anime">
                                            <img className="w-100 br-8" src="assets/img/portfolio/vl-work-thumb-1.3.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabIndex={0}>
                                        <div className="vl-tab-thumb reveal image-anime">
                                            <img className="w-100 br-8" src="assets/img/portfolio/vl-work-thumb-1.2.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= Work section End =================*/}
        </>
    );
}

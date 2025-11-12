export default function Section4() {
    return (
        <>
            <section id="work" className="vl-work-area fix pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="vl-section-title text-center mb-60">
                                <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                    Како функционише
                                </h5>
                                <h2 className="title pt-16 text-anime-style-3">Како делује Едука</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mb-30" data-aos="fade-right" data-aos-duration={800} data-aos-delay={300}>
                            <div className="vl-work-tab mr-50">
                                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <div className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                                        <div className="vl-tab-icon-box">
                                            <div className="workicon">
                                                <span className="icon">
                                                    <img src="assets/img/icons/vl-work-icon1.1.svg" alt="" />
                                                </span>
                                            </div>
                                            <div className="content">
                                                <h4 className="title pb-16">Први корак</h4>
                                                <p className="para">
                                                    Све почиње пријавом и упознавањем ваших циљева како бисмо припремили адекватан програм.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                                        <div className="vl-tab-icon-box">
                                            <div className="workicon">
                                                <span className="icon">
                                                    <img src="assets/img/icons/vl-work-icon1.2.svg" alt="" />
                                                </span>
                                            </div>
                                            <div className="content">
                                                <h4 className="title pb-16">Планирање програма</h4>
                                                <p className="para">
                                                    Утврђујемо активности, предаваче и стандарде који одговарају вашој установи и потребама.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                                        <div className="vl-tab-icon-box">
                                            <div className="workicon">
                                                <span className="icon">
                                                    <img src="assets/img/icons/vl-work-icon1.3.svg" alt="" />
                                                </span>
                                            </div>
                                            <div className="content">
                                                <h4 className="title pb-16">Спровођење едукације</h4>
                                                <p className="para">
                                                    Радимо уживо и онлајн, обезбеђујемо материјале и пратимо примену стечених знања.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                                        <div className="vl-tab-icon-box">
                                            <div className="workicon">
                                                <span className="icon">
                                                    <img src="assets/img/icons/vl-work-icon1.4.svg" alt="" />
                                                </span>
                                            </div>
                                            <div className="content">
                                                <h4 className="title pb-16">Подршка након обуке</h4>
                                                <p className="para">
                                                    Чланови добијају сертификате, савете ментора и приступ онлајн тестовима током целе године.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-30">
                            <div className="vl-tab-content-block" data-aos="fade-left" data-aos-duration={800} data-aos-delay={300}>
                                <div className="shape" />
                                <div className="tab-content" id="v-pills-tabContent">
                                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex={0}>
                                        <div className="vl-tab-thumb reveal image-anime">
                                            <img className="w-100 br-8" src="assets/img/eduka/workshop-demonstration.png" alt="Први кораци са Едуком" />
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex={0}>
                                        <div className="vl-tab-thumb reveal image-anime">
                                            <img className="w-100 br-8" src="assets/img/eduka/hero-5.jpg" alt="Планирање програма" />
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabIndex={0}>
                                        <div className="vl-tab-thumb reveal image-anime">
                                            <img className="w-100 br-8" src="assets/img/eduka/hero-5.jpg" alt="Спровођење наставе" />
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabIndex={0}>
                                        <div className="vl-tab-thumb reveal image-anime">
                                            <img className="w-100 br-8" src="assets/img/eduka/workshop-audience-side.png" alt="Подршка након едукације" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

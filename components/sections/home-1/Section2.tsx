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
                                        O udruženju
                                    </h5>
                                    <h2 className="title text-anime-style-3 pt-16 pb-16 mr-20">
                                        Tradicija stručnog usavršavanja zdravstvenih radnika
                                    </h2>
                                    <p className="para pb-32" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                        Udruženje Eduka okuplja medicinske sestre, tehničare i saradnike Nišavskog okruga kako bi
                                        zajednički unapredili profesionalne standarde, razmenili iskustva i obezbedili kontinuirano
                                        obrazovanje. Organizujemo akreditovane programe, stručne skupove i specijalizovane radionice u
                                        saradnji sa zdravstvenim ustanovama i relevantnim institucijama.
                                    </p>
                                </div>
                                <div className="vl-about-btn" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                    <Link href="/about" className="vl-btn-primary">
                                        Saznaj više
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
                                        <span className="title counter">15</span>
                                        <span>+</span>
                                    </h3>
                                    <span className="deseg">godina kontinuirane edukacije</span>
                                </div>
                                {/* single counter box */}
                                <div className="single-couter-box text-center mb-30">
                                    <h3>
                                        <span className="title counter">60</span>
                                        <span>+</span>
                                    </h3>
                                    <span className="deseg">akreditovanih skupova godišnje</span>
                                </div>
                                {/* single counter box */}
                                <div className="single-couter-box text-center mb-30">
                                    <h3>
                                        <span className="title counter">800</span>
                                        <span>+</span>
                                    </h3>
                                    <span className="deseg">aktivnih članova udruženja</span>
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

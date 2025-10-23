import Link from "next/link";

export default function Section3() {
    return (
        <>
            {/*================= Service section start =================*/}
            <section id="service" className="vl-service-bg-3 fix pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="vl-service-section-title">
                                <div className="vl-section-title3 text-center mb-60">
                                    <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                        Naši programi
                                    </h5>
                                    <h2 className="title pt-16 text-anime-style-3">Ponuda edukacija prilagođena vašoj praksi</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 mb-30">
                            {/* single service box */}
                            <div className="vl-single-service-box3" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                <h4 className="title">
                                    <Link href="/service-single">Akreditovane edukacije</Link>
                                </h4>
                                <p className="para pt-16 pb-32">
                                    Organizujemo seminare sa KME bodovima koji odgovaraju standardima komora i pružaju znanja primenljiva u ustanovama primarnog i tercijarnog nivoa.
                                </p>
                                <div className="vl-service-thumb3">
                                    <img className="w-100" src="assets/img/service/vl-service-thumb-3.1.png" alt="" />
                                    <div className="vl-service-btn3">
                                        <Link href="/service-single" className="btn-primary3">
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
                        <div className="col-lg-6 col-md-6 mb-30">
                            {/* single service box */}
                            <div className="vl-single-service-box3" data-aos="fade-up" data-aos-duration={900} data-aos-delay={300}>
                                <h4 className="title">
                                    <Link href="/service">Radionice uživo</Link>
                                </h4>
                                <p className="para pt-16 pb-32">
                                    Kroz praktične radionice u Nišu, Aleksincu i Prokuplju vežbamo procedure, timski rad i komunikaciju sa pacijentima u realnim situacijama.
                                </p>
                                <div className="vl-service-thumb3">
                                    <img className="w-100" src="assets/img/service/vl-service-thumb-3.1.png" alt="" />
                                    <div className="vl-service-btn3">
                                        <Link href="/service-single" className="btn-primary3">
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
                        <div className="col-lg-4 col-md-6 mb-30">
                            {/* single service box */}
                            <div className="vl-single-service-box3" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={300}>
                                <h4 className="title">
                                    <Link href="/clanstvo">Mentorski programi</Link>
                                </h4>
                                <p className="para pt-16 pb-32">Povezujemo mlade kolege sa iskusnim mentorima kroz višemesečne programe praćenja i izradu individualnih planova razvoja.</p>
                                <div className="vl-service-thumb3 sm-thumb">
                                    <img className="w-100" src="assets/img/service/vl-service-thumb-3.3.png" alt="" />
                                    <div className="vl-service-btn3">
                                        <Link href="/service-single" className="btn-primary3">
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
                        <div className="col-lg-4 col-md-6 mb-30">
                            {/* single service box */}
                            <div className="vl-single-service-box3" data-aos="fade-up" data-aos-duration={1100} data-aos-delay={300}>
                                <h4 className="title">
                                    <Link href="/blog">Deljenje prakse</Link>
                                </h4>
                                <p className="para pt-16 pb-32">Na blogu i tribinama predstavljamo primere dobre prakse, inovacije u sestrinstvu i iskustva sa terena koja inspirišu zajednicu.</p>
                                <div className="vl-service-thumb3 sm-thumb">
                                    <img className="w-100" src="assets/img/service/vl-service-thumb-3.4.png" alt="" />
                                    <div className="vl-service-btn3">
                                        <Link href="/service-single" className="btn-primary3">
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
                        <div className="col-lg-4 col-md-6 mb-30">
                            {/* single service box */}
                            <div className="vl-single-service-box3" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={300}>
                                <h4 className="title">
                                    <Link href="/contact">Saveti i podrška</Link>
                                </h4>
                                <p className="para pt-16 pb-32">Članovima smo dostupni za pravovremene informacije o propisima, konkursima i finansiranju, kao i pomoć u pripremi dokumentacije.</p>
                                <div className="vl-service-thumb3 sm-thumb">
                                    <img className="w-100" src="assets/img/service/vl-service-thumb-3.5.png" alt="" />
                                    <div className="vl-service-btn3">
                                        <Link href="/service-single" className="btn-primary3">
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
                    </div>
                </div>
            </section>
            {/*================= Service section End =================*/}
        </>
    );
}

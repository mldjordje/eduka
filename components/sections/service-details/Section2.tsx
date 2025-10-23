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
                                <h2 className="title text-anime-style-3">Dodatne usluge i podrška</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* single service box start */}
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="vl-service-icon-bo2x-iner text-center">
                                <div className="icon">
                                    <span>
                                        <img src="assets/img/icons/vl-service-icon-iner1.1.svg" alt="Personalizovani plan obuke" />
                                    </span>
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <Link href="/contact">Plan obuke za ustanove</Link>
                                    </h4>
                                    <p className="para">
                                        U saradnji sa upravama zdravstvenih ustanova kreiramo godišnje planove edukacije prilagođene vašem timu i specifičnim potrebama pacijenata.
                                    </p>
                                    <Link href="/contact" className="service-learnmore">
                                        Zakažite konsultaciju
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
                                        <img src="assets/img/icons/vl-service-icon-iner1.2.svg" alt="Mentorske sesije" />
                                    </span>
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <Link href="/clanstvo">Mentorski susreti</Link>
                                    </h4>
                                    <p className="para">
                                        Redovni sastanci sa mentorima i stručnim timom Eduke pomažu u rešavanju konkretnih situacija na odeljenjima.
                                    </p>
                                    <Link href="/clanstvo" className="service-learnmore">
                                        Upoznajte mentore
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
                                        <img src="assets/img/icons/vl-service-icon-iner1.3.svg" alt="Objave i publikacije" />
                                    </span>
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <Link href="/blog">Stručne publikacije</Link>
                                    </h4>
                                    <p className="para">
                                        Članovi dobijaju pristup priručnicima, vodičima i stručnoj literaturi koju zajednički pripremamo sa partnerima i fakultetima.
                                    </p>
                                    <Link href="/blog" className="service-learnmore">
                                        Preuzmite materijale
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

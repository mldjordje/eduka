import Link from "next/link";

export default function Section4() {
    return (
        <>
            {/*================= Work section start =================*/}
            <section className="vl-work-are4a fix pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="vl-section-title4 text-center mb-60">
                                <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                    Naš rad
                                </h5>
                                <h2 className="title pt-16 text-anime-style-3">Kako Eduka podržava zdravstvene radnike</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* single box item*/}
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="vl-work-icon-bo4x" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                <div className="icon">
                                    <span>
                                        <img src="assets/img/icons/vl-service-icon-4.1.svg" alt="" />
                                    </span>
                                    <span className="number">1</span>
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <Link href="/clanstvo">Kontinuirana podrška članovima</Link>
                                    </h4>
                                    <p className="para pt-16">Pratimo vaše potrebe i pružamo redovne informacije, konsultacije i mentorsku pomoć tokom cele godine.</p>
                                </div>
                            </div>
                        </div>
                        {/* single box item*/}
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="vl-work-icon-bo4x" data-aos="fade-up" data-aos-duration={900} data-aos-delay={300}>
                                <div className="icon">
                                    <span>
                                        <img src="assets/img/icons/vl-service-icon-4.1.svg" alt="" />
                                    </span>
                                    <span className="number">2</span>
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <Link href="/service">Planiranje edukacija</Link>
                                    </h4>
                                    <p className="para pt-16">Program osmišljavamo zajedno sa ustanovama, prilagođavamo temama i testiramo sadržaj pre realizacije.</p>
                                </div>
                            </div>
                        </div>
                        {/* single box item*/}
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="vl-work-icon-bo4x" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={300}>
                                <div className="icon">
                                    <span>
                                        <img src="assets/img/icons/vl-service-icon-4.1.svg" alt="" />
                                    </span>
                                    <span className="number">3</span>
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <Link href="/about">Analiza potreba zajednice</Link>
                                    </h4>
                                    <p className="para pt-16">Razgovaramo sa članovima, ustanovama i komorama kako bismo definisali prioritete i strategiju razvoja sestrinske prakse.</p>
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

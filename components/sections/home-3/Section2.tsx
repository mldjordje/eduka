import Link from "next/link";

export default function Section2() {
    return (
        <>
            {/*================= Choose us section start =================*/}
            <section id="about" className="vl-choose3 fix pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 mb-30">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="vl-choose-content3">
                                        <div className="vl-section-title3">
                                            <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                                Zašto odabrati Eduku
                                            </h5>
                                            <h2 className="title text-anime-style-3 pt-16 pb-16">Brinemo o vašem stručnom razvoju</h2>
                                            <p className="para pb-32" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                                Gradimo partnerstvo sa članovima, pratimo potrebe zdravstvenih ustanova i organizujemo programe koji unapređuju svakodnevni rad sa pacijentima.
                                            </p>
                                            <div className="vl-choose-btn" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                                <Link href="/about" className="btn-primary3">
                                                    <cite />
                                                    Saznajte više
                                                    <span>
                                                        <i className="fa-regular fa-arrow-right" />
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="vl-choose-thumb reveal image-anime">
                                        <img className="br-8" src="assets/img/choose/vl-choose-3.1.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                            {/* single box */}
                            <div className="vl-choose-box mb-30">
                                <h4 className="title pb-16">
                                    <Link href="/team">Iskusan tim edukatora</Link>
                                </h4>
                                <p className="para">Naši predavači su medicinske sestre i tehničari sa višegodišnjim iskustvom koji prenose praktična rešenja i dele realne studije slučaja.</p>
                            </div>
                            {/* single box */}
                            <div className="vl-choose-box mb-30">
                                <h4 className="title pb-16">
                                    <Link href="/service">Akreditacija i kvalitet</Link>
                                </h4>
                                <p className="para">Svi programi prolaze reviziju, prate smernice komora i donose bodove za obnovu licence, uz stalnu evaluaciju zadovoljstva polaznika.</p>
                            </div>
                            {/* single box */}
                            <div className="vl-choose-box mb-30">
                                <h4 className="title pb-16">
                                    <Link href="/clanstvo">Sve usluge na jednom mestu</Link>
                                </h4>
                                <p className="para">Od stručnih skupova do mentorski vođenih projekata i pravne podrške, Eduka objedinjuje resurse potrebne zdravstvenim radnicima Nišavskog okruga.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= Choose us section start =================*/}
        </>
    );
}

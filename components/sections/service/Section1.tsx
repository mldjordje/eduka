import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*================= Service section start(icon-service) =================*/}
            <section className="vl-service-inner fix pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        {/* single service box start */}
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="vl-service-icon-bo2x-iner text-center">
                                <div className="icon">
                                    <span>
                                        <img src="assets/img/icons/vl-service-icon-iner1.1.svg" alt="Seminari uživo" />
                                    </span>
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <Link href="/service-single">Seminari uživo</Link>
                                    </h4>
                                    <p className="para">
                                        Eduka organizuje stručne skupove i kongrese u saradnji sa zdravstvenim ustanovama i predavačima iz prakse.
                                    </p>
                                    <Link href="/service-single" className="service-learnmore">
                                        Detaljnije
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
                                        <img src="assets/img/icons/vl-service-icon-iner1.2.svg" alt="Online edukacije" />
                                    </span>
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <Link href="/service">Online edukacije</Link>
                                    </h4>
                                    <p className="para">
                                        Platforma za e-učenje omogućava dostupnost stručnih sadržaja bez obzira na mesto rada i smenu.
                                    </p>
                                    <Link href="/service" className="service-learnmore">
                                        Pogledajte ponudu
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
                                        <img src="assets/img/icons/vl-service-icon-iner1.3.svg" alt="Radionice" />
                                    </span>
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <Link href="/service-single">Praktične radionice</Link>
                                    </h4>
                                    <p className="para">
                                        Interaktivne radionice donose najnovije protokole i standarde za negu pacijenata u različitim granama medicine.
                                    </p>
                                    <Link href="/service-single" className="service-learnmore">
                                        Kako izgleda radionica
                                        <span>
                                            <i className="fa-regular fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* single service box end */}
                        {/* single service box start */}
                        <div className="col-lg-6 col-md-6 mb-30">
                            <div className="vl-service-icon-bo2x-iner text-center">
                                <div className="icon">
                                    <span>
                                        <img src="assets/img/icons/vl-service-icon-iner1.4.svg" alt="Mentorske grupe" />
                                    </span>
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <Link href="/clanstvo">Mentorske grupe</Link>
                                    </h4>
                                    <p className="para">
                                        Članovi dobijaju pristup mreži mentora koji pomažu u pripremi za stručne ispite, licenciranje i primenu novih standarda.
                                    </p>
                                    <Link href="/clanstvo" className="service-learnmore">
                                        Učlanite se
                                        <span>
                                            <i className="fa-regular fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* single service box end */}
                        {/* single service box start */}
                        <div className="col-lg-6 col-md-6 mb-30">
                            <div className="vl-service-icon-bo2x-iner text-center">
                                <div className="icon">
                                    <span>
                                        <img src="assets/img/icons/vl-service-icon-iner1.5.svg" alt="Konsalting" />
                                    </span>
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <Link href="/contact">Savjetovanje ustanova</Link>
                                    </h4>
                                    <p className="para">
                                        Pomažemo zdravstvenim ustanovama da planiraju edukativne programe, usklade dokumentaciju i pripreme timove za akreditacije.
                                    </p>
                                    <Link href="/contact" className="service-learnmore">
                                        Zakažite razgovor
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
                                        <img src="assets/img/icons/vl-service-icon-iner1.6.svg" alt="Humanitarni programi" />
                                    </span>
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <Link href="/blog">Humanitarne akcije</Link>
                                    </h4>
                                    <p className="para">
                                        Uključujemo članove u akcije prevencije i promocije zdravlja u lokalnoj zajednici kako bi se ojačalo poverenje pacijenata.
                                    </p>
                                    <Link href="/blog" className="service-learnmore">
                                        Aktuelne aktivnosti
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

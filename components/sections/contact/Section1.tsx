import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*================= Contact section Start =================*/}
            <section className="vl-contact-inner pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-30">
                            <div className="vl-contact-form-iner">
                                <h4 className="title">Pošaljite poruku</h4>
                                <p className="para pt-16 pb-22">Odgovaramo u najkraćem roku tokom radnih dana.</p>
                                <form action="#">
                                    <div className="vl-conatct-iner-form">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <input className="mb-20" type="text" placeholder="Ime i prezime" />
                                            </div>
                                            <div className="col-lg-6">
                                                <input className="mb-20" type="tel" placeholder="Broj telefona" />
                                            </div>
                                            <div className="col-lg-6">
                                                <input className="mb-20" name="email" type="email" placeholder="E-mail adresa" />
                                            </div>
                                            <div className="col-lg-6">
                                                <select className="mb-20 nice-select wide vl-service-select-iner">
                                                    <option data-display="Odaberite temu">Upis na edukaciju</option>
                                                    <option value={1}>Članstvo</option>
                                                    <option value={2}>Saradnja sa ustanovama</option>
                                                    <option value={3}>Mediji</option>
                                                    <option value={4}>Ostalo</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-12">
                                                <textarea name="msg" id="msg" placeholder="Poruka" defaultValue={""} />
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="vl-cmt-btn mt-24">
                                                    <button className="vl-btn-primary">Pošalji upit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-30">
                            <div className="vl-con-thum-iner ml-30">
                                <img className="w-100 br-8" src="assets/img/contact/vl-contact-thum-1.1.png" alt="Kontakt Eduke" />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-18 pb-10">
                        <div className="col-lg-4 col-md-6 mb-30">
                            {/* single icon box */}
                            <div className="vl-contact-iner-icon-box">
                                <div className="icon">
                                    <span>
                                        <img src="assets/img/icons/vl-contact-ic-iner1.1.svg" alt="Adresa" />
                                    </span>
                                </div>
                                <div className="content">
                                    <h5 className="title">Posetite nas</h5>
                                    <Link href="https://maps.app.goo.gl" target="_blank" rel="noopener noreferrer">
                                        Niš, Srbija <br /> Eduka udruženje zdravstvenih radnika
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            {/* single icon box */}
                            <div className="vl-contact-iner-icon-box">
                                <div className="icon">
                                    <span>
                                        <img src="assets/img/icons/vl-contact-ic-iner1.2.svg" alt="Telefon" />
                                    </span>
                                </div>
                                <div className="content">
                                    <h5 className="title">Pozovite nas</h5>
                                    <Link href="tel:+38118210400">+381 (18) 210 400</Link>
                                    <br />
                                    <Link href="tel:+381642104000">+381 64 210 4000</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            {/* single icon box */}
                            <div className="vl-contact-iner-icon-box">
                                <div className="icon">
                                    <span>
                                        <img src="assets/img/icons/vl-contact-ic-iner1.3.svg" alt="E-mail" />
                                    </span>
                                </div>
                                <div className="content">
                                    <h5 className="title">Pišite nam</h5>
                                    <Link href="mailto:kontakt@eduka.co.rs">kontakt@eduka.co.rs</Link>
                                    <Link href="https://eduka.co.rs" target="_blank" rel="noopener noreferrer">www.eduka.co.rs</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= Contact section End =================*/}
            {/* map start */}
            <div className="vl-map-area pb-100">
                <div className="container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.155!2d21.895!3d43.318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNi%C5%A1!5e0!3m2!1ssr!2srs!4v1739716009465!5m2!1ssr!2srs" className="vl-maps" />
                </div>
            </div>
        </>
    );
}

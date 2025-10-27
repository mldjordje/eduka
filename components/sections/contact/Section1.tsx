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
                                <h4 className="title">Pošaljite prijavu</h4>
                                <p className="para pt-16 pb-22">Popunite formu i naš tim će vam odgovoriti u najkraćem roku sa svim informacijama o članstvu i edukacijama.</p>
                                <form action="#">
                                    <div className="vl-conatct-iner-form">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <input className="mb-20" type="text" placeholder="Ime i prezime" />
                                            </div>
                                            <div className="col-lg-12">
                                                <input className="mb-20" name="email" type="email" placeholder="Email adresa" />
                                            </div>
                                            <div className="col-lg-12">
                                                <input className="mb-20" type="tel" placeholder="Broj telefona" />
                                            </div>
                                            <div className="col-lg-12">
                                                <input className="mb-20" type="text" placeholder="Zdravstvena ustanova / Organizacija" />
                                            </div>
                                            <div className="col-lg-12">
                                                <textarea name="msg" id="msg" placeholder="Napišite nam kako možemo da pomognemo" defaultValue={""} />
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="vl-cmt-btn mt-24">
                                                    <button className="vl-btn-primary">Pošalji prijavu</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-30">
                            <div className="vl-con-thum-iner ml-30">
                                <img className="w-100 br-8" src="assets/img/eduka/workshop-audience-front.png" alt="Posetioci Eduka događaja" />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-18 pb-10">
                        <div className="col-lg-4 col-md-6 mb-30">
                            {/* single icon box */}
                            <div className="vl-contact-iner-icon-box">
                                <div className="icon">
                                    <span>
                                        <img src="assets/img/icons/vl-contact-ic-iner1.1.svg" alt="" />
                                    </span>
                                </div>
                                <div className="content">
                                    <h5 className="title">Naša adresa</h5>
                                    <Link href="#">
                                        Bulevar oslobođenja 1 <br /> 11000 Beograd, Srbija
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            {/* single icon box */}
                            <div className="vl-contact-iner-icon-box">
                                <div className="icon">
                                    <span>
                                        <img src="assets/img/icons/vl-contact-ic-iner1.2.svg" alt="" />
                                    </span>
                                </div>
                                <div className="content">
                                    <h5 className="title">Pozovite nas</h5>
                                    <Link href="tel:+381111234567">+381 11 123 4567</Link> <br />
                                    <Link href="tel:+381641234567">+381 64 123 4567</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            {/* single icon box */}
                            <div className="vl-contact-iner-icon-box">
                                <div className="icon">
                                    <span>
                                        <img src="assets/img/icons/vl-contact-ic-iner1.3.svg" alt="" />
                                    </span>
                                </div>
                                <div className="content">
                                    <h5 className="title">Pišite nam</h5>
                                    <Link href="mailto:info@eduka.rs">info@eduka.rs</Link>
                                    <Link href="https://www.eduka.rs">www.eduka.rs</Link>
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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.416186893367!2d20.460281877257757!3d44.80787067107163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7ab6abf6f1cd%3A0x9f6f3fefc9d8a1e0!2sBulevar%20oslobo%C4%91enja%201%2C%20Beograd!5e0!3m2!1ssr!2srs!4v1710156000000!5m2!1ssr!2srs" className="vl-maps" />
                </div>
            </div>
        </>
    );
}

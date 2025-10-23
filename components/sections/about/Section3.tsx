import Link from "next/link";

export default function Section3() {
    return (
        <>
            {/*================= Work section start =================*/}
            <section className="vl-comon-black-bg fix p-relative z-index-1 pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="vl-work-inner-content">
                                <div className="vl-section-title text-center mb-60">
                                    <h5 className="subtitle">Naš rad</h5>
                                    <h2 className="title pt-16 text-anime-style-3">Stvaramo prilike za učenje i profesionalni razvoj</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* single box item*/}
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="vl-work-icon-bo4x-inner">
                                <div className="icon">
                                    <span>
                                        <img src="assets/img/icons/vl-service-icon-inner1.1.svg" alt="Ikonica edukacije" />
                                    </span>
                                    <div className="number">1</div>
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <Link href="/service">Edukacije i KME programi</Link>
                                    </h4>
                                    <p className="para pt-16">Organizujemo seminare, radionice i licence obnavljamo kroz kontinuirane medicinske edukacije odobrene od strane Ministarstva zdravlja.</p>
                                </div>
                            </div>
                        </div>
                        {/* single box item*/}
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="vl-work-icon-bo4x-inner">
                                <div className="icon">
                                    <span>
                                        <img src="assets/img/icons/vl-service-icon-inner1.1.svg" alt="Ikonica projekata" />
                                    </span>
                                    <div className="number">2</div>
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <Link href="/blog">Projekti i partnerstva</Link>
                                    </h4>
                                    <p className="para pt-16">Saradnja sa zdravstvenim ustanovama, lokalnom samoupravom i stručnim udruženjima rezultira projektima koji poboljšavaju praksu i uslove rada.</p>
                                </div>
                            </div>
                        </div>
                        {/* single box item*/}
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="vl-work-icon-bo4x-inner">
                                <div className="icon">
                                    <span>
                                        <img src="assets/img/icons/vl-service-icon-inner1.1.svg" alt="Ikonica podrške" />
                                    </span>
                                    <div className="number">3</div>
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <Link href="/clanstvo">Podrška članovima</Link>
                                    </h4>
                                    <p className="para pt-16">Članovima obezbeđujemo savetovanje, mentorski rad i pravovremene informacije o svim važnim izmenama u regulativi i licenciranju.</p>
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

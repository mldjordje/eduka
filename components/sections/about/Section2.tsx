import Link from "next/link";

export default function Section2() {
    return (
        <>
            {/*================= Mission section start =================*/}
            <section className="vl-mission-area fix pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-6 mb-30">
                            <div className="vl-mission-content-inner mr-60">
                                {/* section title */}
                                <div className="vl-section-title">
                                    <h5 className="subtitle">Naša misija i vizija</h5>
                                    <h2 className="title text-anime-style-3 pt-16 pb-16">Zdravstveni radnici povezani znanjem i solidarnošću</h2>
                                    <p className="para pb-32">
                                        Eduka je osnovana sa ciljem da kontinuirano jača ulogu zdravstvenih radnika u zajednici. Kroz akreditovane programe, stručne skupove i umrežavanje pružamo podršku svima koji žele da rastu, dele znanje i unaprede zdravstveni sistem Srbije.
                                    </p>
                                </div>
                                {/* mission tabs */}
                                <div className="vl-mission-tabs">
                                    <div className="vl-tab-heading-content">
                                        <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                                                    <span className="tab-title">Vizija</span>
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                                                    <span className="tab-title">Istorijat</span>
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                                                    <span className="tab-title">Vrednosti</span>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
                                            {/* tab content */}
                                            <div className="vl-tab-content">
                                                <p className="para pt-30 pb-20">
                                                    <span>Regionalni centar znanja:</span> Eduka razvija mrežu zdravstvenih radnika koji kroz stručno usavršavanje unapređuju kvalitet usluga i dostupnost savremene zdravstvene zaštite u jugoistočnoj Srbiji.
                                                </p>
                                                <p className="para pb-32">
                                                    <span>Partner institucijama:</span> U saradnji sa zdravstvenim ustanovama i stručnim udruženjima kreiramo programe koji prate potrebe prakse i doprinose razvoju sistema.
                                                </p>
                                                {/* tab btn */}
                                                <div className="vl-tab-btn">
                                                    <Link href="/clanstvo" className="vl-btn-primary">
                                                        Postanite član
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
                                            {/* tab content */}
                                            <div className="vl-tab-content">
                                                <p className="para pt-30 pb-20">
                                                    <span>Početak 2003. godine:</span> Udruženje je nastalo iz potrebe zdravstvenih radnika Niša da zajednički organizuju stručne skupove i razmenu iskustava.
                                                </p>
                                                <p className="para pb-32">
                                                    <span>Širenje aktivnosti:</span> Danas realizujemo seminare, radionice, humanitarne akcije i projekte kojima se unapređuju radni uslovi i status zdravstvenih radnika.
                                                </p>
                                                {/* tab btn */}
                                                <div className="vl-tab-btn">
                                                    <Link href="/about" className="vl-btn-primary">
                                                        Saznajte više
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}>
                                            {/* tab content */}
                                            <div className="vl-tab-content">
                                                <p className="para pt-30 pb-20">
                                                    <span>Solidarnost i podrška:</span> Gradimo zajednicu u kojoj se svako ohrabruje na učenje, timski rad i međusobno uvažavanje.
                                                </p>
                                                <p className="para pb-32">
                                                    <span>Transparentnost i kvalitet:</span> Svaki program i projekat razvijamo u skladu sa standardima zdravstvene struke i potrebama članova.
                                                </p>
                                                {/* tab btn */}
                                                <div className="vl-tab-btn">
                                                    <Link href="/contact" className="vl-btn-primary">
                                                        Kontaktirajte Eduku
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-30">
                            {/* mission thumb */}
                            <div className="vl-mission-iner-thumb">
                                <div className="vl-mission-thumb-iner reveal image-anime">
                                    <img className="w-100" src="assets/img/about/vl-mission-thumb-iner1.1.png" alt="Edukacije udruženja" />
                                </div>
                                {/* counter */}
                                <div className="vl-tab-counter-box">
                                    <div className="vl-icon">
                                        <span>
                                            <img className="circle" src="assets/img/icons/vl-counter-icon-1.1.svg" alt="" />
                                        </span>
                                    </div>
                                    <div className="vl-counter-content">
                                        <h3>
                                            <span className="title counter">20</span>
                                            <span>+</span>
                                        </h3>
                                        <span className="deseg">godina iskustva</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= Mission section End =================*/}
        </>
    );
}

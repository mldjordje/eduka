"use client";
import "@/node_modules/react-modal-video/css/modal-video.css";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import Link from "next/link";

export default function Section1({ left, single }: { left?: boolean; single?: boolean }) {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            {/*================= Service Details section start =================*/}
            <section className="vl-service-details-inner pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className={`col-lg-4 mb-30 ${left ? "" : "order-2"} ${single ? "d-none" : ""}`}>
                            <div className="vl-sidebar">
                                {/* search widget */}
                                <div className="vl-widegt-1 vl-off-white-bg mb-30">
                                    <h4 className="title pb-24">Pretraga</h4>
                                    <div className="vl-searh-form-wid">
                                        <form action="#">
                                            <input type="text" placeholder="Unesite pojam" />
                                            <span>
                                                <i className="fa-regular fa-magnifying-glass" />
                                            </span>
                                        </form>
                                    </div>
                                </div>
                                {/* service widget */}
                                <div className="vl-widegt-2 vl-off-white-bg mb-30">
                                    <h4 className="title pb-24">Programi Eduke</h4>
                                    <div className="vl-service-list">
                                        <ul>
                                            <li>
                                                <Link href="/service">
                                                    Online edukacije
                                                    <span>
                                                        <i className="fa-regular fa-angle-right" />
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/service-single">
                                                    Akreditovane KME
                                                    <span>
                                                        <i className="fa-regular fa-angle-right" />
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/service-left">
                                                    Praktične radionice
                                                    <span>
                                                        <i className="fa-regular fa-angle-right" />
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/clanstvo">
                                                    Mentorska podrška
                                                    <span>
                                                        <i className="fa-regular fa-angle-right" />
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/contact">
                                                    Konsultacije za ustanove
                                                    <span>
                                                        <i className="fa-regular fa-angle-right" />
                                                    </span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* phone widget */}
                                <div className="vl-widegt-3 vl-off-white-bg mb-30">
                                    <h4 className="title pb-24">
                                        Treba vam pomoć? <br /> Javite se Educi
                                    </h4>
                                    <Link href="tel:+38118210400" className="phone">
                                        <span>
                                            <i className="fa-light fa-phone" />
                                        </span>
                                        +381 (18) 210 400
                                    </Link>
                                </div>
                                {/* social widget */}
                                <div className="vl-widegt-4 vl-off-white-bg mb-30">
                                    <h4 className="title pb-24">Pratite nas</h4>
                                    <div className="vl-sidebar-social">
                                        <ul>
                                            <li>
                                                <Link href="https://www.facebook.com/edukanis" target="_blank" rel="noopener noreferrer">
                                                    <span>
                                                        <i className="fa-brands fa-facebook-f" />
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                                    <span>
                                                        <i className="fa-brands fa-instagram" />
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                                    <span>
                                                        <i className="fa-brands fa-linkedin-in" />
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                                    <span>
                                                        <i className="fa-brands fa-youtube" />
                                                    </span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`col-lg-8 mb-30 ${left ? "" : "order-1"} ${single ? "mx-auto" : ""}`}>
                            <div className={`vl-sidebar-details ${left ? "ml-80" : "mr-80"} ${single ? "me-0" : ""}`}>
                                {/* thumb */}
                                <div className="vl-thumb-larg mb-32">
                                    <img className="br-8 w-100" src="assets/img/service/vl-service-learg-thumb-1.1.png" alt="Program Eduke" />
                                </div>
                                {/* content one */}
                                <div className="vl-sidebar-conten1t mb-32">
                                    <h3 className="title">Program kontinuirane medicinske edukacije</h3>
                                    <p className="para pt-16">Kroz Edukine programe zdravstveni radnici obnavljaju licencu i stiču praktična znanja neophodna za savremenu negu pacijenata. Svako predavanje je usklađeno sa propisima Ministarstva zdravlja i sprovodi se uz mentore sa bogatim iskustvom.</p>
                                    <p className="para pt-16">Teme obuhvataju prevenciju infekcija, urgentne procedure, unapređenje komunikacije sa pacijentima i organizaciju rada u timovima. Učesnici dobijaju materijale, testove znanja i potvrde o broju ostvarenih poena.</p>
                                </div>
                                {/* icon block */}
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 mb-30">
                                        <div className="vl-deatils-icon-block-flex">
                                            <div className="icon">
                                                <span>
                                                    <img src="assets/img/icons/vl-service-details-icon1.1.svg" alt="Iskustvo predavača" />
                                                </span>
                                            </div>
                                            <div className="content">
                                                <h4 className="title pb-16">Stručni predavači</h4>
                                                <p className="para">Predavanja vode edukatori iz kliničke prakse i visokoškolskih ustanova sa dugogodišnjim iskustvom.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 mb-30">
                                        <div className="vl-deatils-icon-block-flex">
                                            <div className="icon">
                                                <span>
                                                    <img src="assets/img/icons/vl-service-details-icon1.2.svg" alt="Praktične radionice" />
                                                </span>
                                            </div>
                                            <div className="content">
                                                <h4 className="title pb-16">Praktične radionice</h4>
                                                <p className="para">Radionice omogućavaju vežbanje procedura kroz simulacije i rad u malim grupama.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* content one */}
                                <div className="vl-sidebar-conten1t mt-18 mb-32">
                                    <h3 className="title">Šta dobijate pohađanjem programa</h3>
                                    <p className="para pt-16">Pored sticanja obaveznih KME bodova, učesnici usvajaju znanja koja se odmah primenjuju u svakodnevnom radu. Nakon obuke pružamo podršku kroz mentorsku mrežu i dostupne konsultacije.</p>
                                </div>
                                {/* video & check box */}
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-6 mb-30">
                                        <div className="vl-service-video-thumb p-relative">
                                            <img className="w-100 br-8" src="assets/img/service/vl-service-video-thumb1.1.png" alt="Video sa edukacije" />
                                            <div className="popup-video vl-play-btn" onClick={() => setOpen(true)}>
                                                <span>
                                                    <i className="fa-solid fa-play" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 mb-30">
                                        <div className="vl-service-check-list">
                                            <ul>
                                                <li>
                                                    <span>
                                                        <i className="fa-regular fa-check" />
                                                    </span>
                                                    Sertifikat sa ostvarenim KME poenima
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="fa-regular fa-check" />
                                                    </span>
                                                    Materijali i protokoli spremni za primenu
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="fa-regular fa-check" />
                                                    </span>
                                                    Mentorstvo i podrška nakon obuke
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* content two */}
                                <div className="vl-sidebar-conten1t mt-18 mb-32">
                                    <h3 className="title">Kako se prijaviti</h3>
                                    <p className="para pt-16">Prijava se vrši putem formulara na našem sajtu ili slanjem upita na kontakt adresu. Nakon prijave dobijate potvrdu rezervisanog mesta i uputstva za pripremu.</p>
                                    <p className="para pt-16">Za kolektive pripremamo posebne termine i prilagođene programe sa naglaskom na teme koje su vam najpotrebnije.</p>
                                </div>
                                {/* faq */}
                                <div className="vl-sidebar-conten1t">
                                    <h3 className="title">Najčešća pitanja</h3>
                                    <div className="vl-service-details-accordion" id="accordionExample">
                                        <div className="accordion-item">
                                            <h5 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Koliko KME poena donosi seminar?
                                                </button>
                                            </h5>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p className="para">Broj poena zavisi od vrste programa i objavljuje se uz svaki poziv. Nakon uspešno položenog testa znanja izdaje se sertifikat sa upisanim bodovima.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h5 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Da li je moguće organizovati obuku u našoj ustanovi?
                                                </button>
                                            </h5>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p className="para">Naravno, tim Eduke dolazi u vašu ustanovu sa kompletnim programom, opremom i materijalom. Kontaktirajte nas kako bismo dogovorili termine i teme.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h5 className="accordion-header" id="headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Kako funkcionišu online edukacije?
                                                </button>
                                            </h5>
                                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p className="para">Webinari se održavaju uživo ili kao snimljeni kursevi. Nakon završetka dobijate test i potvrdu o pohađanju, a materijali su dostupni u svakom trenutku.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= Service Details section End =================*/}
            <ModalVideo channel="youtube" videoId="vR24qT-I5ko" isOpen={isOpen} onClose={() => setOpen(false)} />
        </>
    );
}

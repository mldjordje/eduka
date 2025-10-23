"use client";
import { useState } from "react";
import "@/node_modules/react-modal-video/css/modal-video.css";
import ModalVideo from "react-modal-video";
import Link from "next/link";

export default function Section1({ left, single }: { left?: boolean; single?: boolean }) {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            {/*================= Blog Details section Start =================*/}
            <section className="vl-blog-details pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className={`col-lg-4 mb-30 ${left ? "" : "order-2"} ${single ? "d-none" : ""}`}>
                            <div className="vl-sidebar">
                                {/* search widget */}
                                <div className="vl-widegt-1 vl-off-white-bg mb-30">
                                    <h4 className="title pb-24">Pretraga</h4>
                                    <div className="vl-searh-form-wid">
                                        <form action="#">
                                            <input type="text" placeholder="Unesite ključnu reč" />
                                            <span>
                                                <i className="fa-regular fa-magnifying-glass" />
                                            </span>
                                        </form>
                                    </div>
                                </div>
                                {/* rec post widget */}
                                <div className="vl-widegt-rec-post vl-off-white-bg mb-30">
                                    <h4 className="title pb-24">Poslednje objave</h4>
                                    {/* single post item */}
                                    <div className="vl-rec-post-flex">
                                        <div className="vl-thumb">
                                            <Link href="/blog-single">
                                                <img src="assets/img/blog/vl-rec-blog-1.1.png" alt="Najava KME seminara" />
                                            </Link>
                                        </div>
                                        <div className="vl-content">
                                            <div className="meta">
                                                <ul>
                                                    <li>
                                                        <Link href="#">
                                                            <span>
                                                                <img src="assets/img/icons/vl-rec-date-icon1.1.svg" alt="" />
                                                            </span>
                                                            12/03/2024
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <h3 className="title">
                                                <Link href="/blog-single">
                                                    Novi ciklus KME edukacija u Nišu
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                    {/* single post item */}
                                    <div className="vl-rec-post-flex">
                                        <div className="vl-thumb">
                                            <Link href="/blog-single">
                                                <img src="assets/img/blog/vl-rec-blog-1.2.png" alt="Radionice palijativne nege" />
                                            </Link>
                                        </div>
                                        <div className="vl-content">
                                            <div className="meta">
                                                <ul>
                                                    <li>
                                                        <Link href="#">
                                                            <span>
                                                                <img src="assets/img/icons/vl-rec-date-icon1.1.svg" alt="" />
                                                            </span>
                                                            05/03/2024
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <h3 className="title">
                                                <Link href="/blog-single">
                                                    Radionice palijativne nege za timove domova zdravlja
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                    {/* single post item */}
                                    <div className="vl-rec-post-flex">
                                        <div className="vl-thumb">
                                            <Link href="/blog-single">
                                                <img src="assets/img/blog/vl-rec-blog-1.3.png" alt="Volonterski klub Eduke" />
                                            </Link>
                                        </div>
                                        <div className="vl-content">
                                            <div className="meta">
                                                <ul>
                                                    <li>
                                                        <Link href="#">
                                                            <span>
                                                                <img src="assets/img/icons/vl-rec-date-icon1.1.svg" alt="" />
                                                            </span>
                                                            27/02/2024
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <h3 className="title">
                                                <Link href="/blog-single">
                                                    Volonterski klub Eduke podržava mlade kolege
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                {/* tag widget */}
                                <div className="vl-tags-widget vl-off-white-bg mb-14">
                                    <h4 className="title pb-24">Teme</h4>
                                    <div className="vl-tags-list">
                                        <ul>
                                            <li>
                                                <Link href="#">KME</Link>
                                            </li>
                                            <li>
                                                <Link href="#">Radionice</Link>
                                            </li>
                                            <li>
                                                <Link href="#">Javno zdravlje</Link>
                                            </li>
                                            <li>
                                                <Link href="#">Mentorstvo</Link>
                                            </li>
                                            <li>
                                                <Link href="#">Volontiranje</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* auth widget */}
                                <div className="vl-auth-widget vl-off-white-bg mb-15">
                                    <h4 className="title pb-24">Autori Eduke</h4>
                                    <div className="vl-auth-box-grid">
                                        <div className="vl-auth-thumb">
                                            <Link href="/team">
                                                <img src="assets/img/team/vl-auth-iner1.1.png" alt="Autor 1" />
                                            </Link>
                                            <Link href="/team">
                                                <img src="assets/img/team/vl-auth-iner1.2.png" alt="Autor 2" />
                                            </Link>
                                            <Link href="/team">
                                                <img src="assets/img/team/vl-auth-iner1.3.png" alt="Autor 3" />
                                            </Link>
                                            <Link href="/team">
                                                <img src="assets/img/team/vl-auth-iner1.4.png" alt="Autor 4" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* phone widget */}
                                <div className="vl-widegt-3 vl-off-white-bg mb-30">
                                    <h4 className="title pb-24">
                                        Treba vam dodatna informacija?
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
                                    <h4 className="title pb-24">Pratite Eduku</h4>
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
                                <div className="vl-blog-thumb mb-24">
                                    <img className="w-100 br-8" src="assets/img/blog/vl-blog-details-thumb1.1.png" alt="Predavanje Eduke" />
                                </div>
                                <div className="vl-sidebar-conten1t">
                                    <h2 className="title">KME seminar: Bezbedna zdravstvena nega u praksi</h2>
                                    <div className="vl-blog-meta pb-24">
                                        <Link href="#">
                                            <span>
                                                <img src="assets/img/icons/vl-date-icon-1.1.svg" alt="" />
                                            </span>
                                            12. mart 2024.
                                        </Link>
                                        <Link href="#">
                                            <span>
                                                <img src="assets/img/icons/vl-blog-user1.1.svg" alt="" />
                                            </span>
                                            Tim Eduke
                                        </Link>
                                    </div>
                                    <p className="para">
                                        Na martovskom KME seminaru fokusirali smo se na bezbedne protokole za negu pacijenata u internističkim i hirurškim granama. Predavači iz Kliničkog centra Niš i partneri iz primarne zdravstvene zaštite delili su primere dobre prakse i najčešće izazove sa kojima se kolege susreću.
                                    </p>
                                    <p className="para pt-16">
                                        Edukacija je organizovana kroz kombinaciju interaktivnih predavanja, radnih stolova i studija slučaja. Učesnici su mogli da provere svoja znanja kroz simulacije, kao i da unaprede komunikacijske veštine u radu sa pacijentima i njihovim porodicama.
                                    </p>
                                </div>
                                <div className="vl-service-video-thumb p-relative mt-24 mb-32">
                                    <img className="w-100 br-8" src="assets/img/blog/vl-blog-details-video-thumb1.1.png" alt="Video sa seminara" />
                                    <div className="popup-video vl-play-btn" onClick={() => setOpen(true)}>
                                        <span>
                                            <i className="fa-solid fa-play" />
                                        </span>
                                    </div>
                                </div>
                                <div className="vl-sidebar-conten1t mb-32">
                                    <h3 className="title">Ključne poruke sa predavanja</h3>
                                    <p className="para pt-16">
                                        Predstavljeni su savremeni standardi higijene ruku, kontrola bolničkih infekcija i pristup pacijentima u palijativnoj nezi. Poseban segment bio je posvećen koordinaciji timova i dokumentovanju medicinskih procedura.
                                    </p>
                                    <div className="vl-service-check-list mt-20">
                                        <ul>
                                            <li>
                                                <span>
                                                    <i className="fa-regular fa-check" />
                                                </span>
                                                Primena protokola za prevenciju infekcija u svakodnevnom radu
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="fa-regular fa-check" />
                                                </span>
                                                Komunikacija sa porodicom i edukacija pacijenata
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="fa-regular fa-check" />
                                                </span>
                                                Timsku saradnju između bolničkih i patronažnih službi
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="vl-sidebar-conten1t mb-32">
                                    <h3 className="title">Šta sledi u narednim mesecima</h3>
                                    <p className="para pt-16">
                                        U aprilu nas očekuje ciklus radionica posvećen palijativnoj nezi i rehabilitaciji, a tokom maja organizujemo regionalni skup posvećen inovacijama u sestrinstvu. Svi članovi Eduke će blagovremeno dobiti raspored i materijale za pripremu.
                                    </p>
                                </div>
                                <div className="vl-tags-share-flex">
                                    <div className="vl-tags-list pb-12">
                                        <h5 className="title">Tagovi:</h5>
                                        <ul>
                                            <li>
                                                <Link href="#">edukacije</Link>
                                            </li>
                                            <li>
                                                <Link href="#">bezbednost pacijenata</Link>
                                            </li>
                                            <li>
                                                <Link href="#">sestrinstvo</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= Blog Details section End =================*/}
            <ModalVideo channel="youtube" videoId="vR24qT-I5ko" isOpen={isOpen} onClose={() => setOpen(false)} />
        </>
    );
}

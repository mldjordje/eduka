"use client";
import { useState } from "react";
import "@/node_modules/react-modal-video/css/modal-video.css";
import ModalVideo from "react-modal-video";
import Link from "next/link";

export default function Section1({ background }: { background: string }) {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            {/*================= Choose us section start =================*/}
            <section className={`${background} fix pt-100 pb-70`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-30">
                            <div className="vl-about-thm4b-inner mr-30">
                                <img className="w-100" src="assets/img/about/vl-about-inner1.1.png" alt="Članovi Eduke" />
                                <div className="vl-video-pla4y">
                                    <div className="popup-video" onClick={() => setOpen(true)}>
                                        <span>
                                            <i className="fa-solid fa-play" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-30">
                            <div className="vl-choose-us-inner-content">
                                {/* section title */}
                                <div className="vl-section-title">
                                    <h5 className="subtitle">Zašto Eduka</h5>
                                    <h2 className="title text-anime-style-3 pt-16 pb-12 mr-20">
                                        Zajednica koja već dve decenije povezuje zdravstvene radnike juga Srbije
                                    </h2>
                                    <p className="para pb-32">
                                        Udruženje Eduka okuplja medicinske sestre, tehničare, lekare i druge stručnjake koji zajednički rade na podizanju kvaliteta zdravstvene zaštite. Organizujemo licencirane obuke, razmenjujemo iskustva i pružamo podršku svima koji žele da unaprede svoje kompetencije i praksu.
                                    </p>
                                </div>
                                {/* line progress bar item*/}
                                <div className="vl-bar-single-item">
                                    <h4 className="title">Akreditovane edukacije</h4>
                                    <div id="bar1" className="progress barfiller" role="progressbar" aria-label="Akreditovane edukacije" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="progress-bar fill" style={{ width: "95%" }}></div>
                                    </div>
                                </div>
                                {/* line progress bar item*/}
                                <div className="vl-bar-single-item">
                                    <h4 className="title">Članovi iz zdravstvenih ustanova</h4>
                                    <div id="bar2" className="progress barfiller" role="progressbar" aria-label="Članovi iz zdravstvenih ustanova" aria-valuenow={88} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="progress-bar fill" style={{ width: "88%" }}></div>
                                    </div>
                                </div>
                                {/* line progress bar item*/}
                                <div className="vl-bar-single-item">
                                    <h4 className="title">Mentorska podrška</h4>
                                    <div id="bar3" className="progress barfiller" role="progressbar" aria-label="Mentorska podrška" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="progress-bar fill" style={{ width: "90%" }}></div>
                                    </div>
                                </div>
                                {/* line progress bar item*/}
                                <div className="vl-bar-single-item">
                                    <h4 className="title">Regionalna saradnja</h4>
                                    <div id="bar4" className="progress barfiller" role="progressbar" aria-label="Regionalna saradnja" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="progress-bar fill" style={{ width: "85%" }}></div>
                                    </div>
                                </div>
                                {/* btn */}
                                <div className="vl-progress-btn mt-12">
                                    <Link href="/contact" className="vl-btn-primary">
                                        Kontaktirajte nas
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= Choose us section start =================*/}
            <ModalVideo channel="youtube" videoId="vR24qT-I5ko" isOpen={isOpen} onClose={() => setOpen(false)} />
        </>
    );
}

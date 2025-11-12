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
                                <img className="w-100" src="assets/img/eduka/hero-5.jpg" alt="Predavanje u Eduka prostorijama" />
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
                                    <h2 className="title text-anime-style-3 pt-16 pb-12 mr-20">Poverenje zasnovano na znanju i iskustvu zdravstvenih radnika</h2>
                                    <p className="para pb-32">Naša zajednica okuplja predavače i praktičare koji svakodnevno unapređuju sistem zdravstvene zaštite kroz kontinuiranu edukaciju i razmenu najboljih praksi.</p>
                                </div>
                                {/* line progress bar item*/}
                                <div className="vl-bar-single-item">
                                    <h4 className="title">Akreditovani programi</h4>
                                    <div id="bar1" className="progress barfiller" role="progressbar" aria-label="Akreditovani programi" aria-valuenow={86} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="progress-bar fill" style={{ width: "86%" }}></div>
                                    </div>
                                </div>
                                {/* line progress bar item*/}
                                <div className="vl-bar-single-item">
                                    <h4 className="title">Radionice i trening</h4>
                                    <div id="bar2" className="progress barfiller" role="progressbar" aria-label="Radionice i trening" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="progress-bar fill" style={{ width: "90%" }}></div>
                                    </div>
                                </div>
                                {/* line progress bar item*/}
                                <div className="vl-bar-single-item">
                                    <h4 className="title">Mentorstvo</h4>
                                    <div id="bar3" className="progress barfiller" role="progressbar" aria-label="Mentorstvo" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="progress-bar fill" style={{ width: "90%" }}></div>
                                    </div>
                                </div>
                                {/* line progress bar item*/}
                                <div className="vl-bar-single-item">
                                    <h4 className="title">Digitalna platforma</h4>
                                    <div id="bar4" className="progress barfiller" role="progressbar" aria-label="Digitalna platforma" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="progress-bar fill" style={{ width: "90%" }}></div>
                                    </div>
                                </div>
                                {/* btn */}
                                <div className="vl-progress-btn mt-12">
                                    <Link href="/prijava" className="vl-btn-primary">
                                        Pridruži se Educi
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


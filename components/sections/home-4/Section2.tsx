"use client";
import { useState } from "react";
import "@/node_modules/react-modal-video/css/modal-video.css";
import ModalVideo from "react-modal-video";
import Link from "next/link";

export default function Section2() {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            {/*================= About section start =================*/}
            <section id="about" className="vl-about-are4a fix pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-30">
                            <div className="vl-about-thm4b mr-30" data-aos="fade-right" data-aos-duration={800} data-aos-delay={300}>
                                <img className="w-100" src="assets/img/about/vl-about4.1.png" alt="" />
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
                            <div className="vl-about-content-wra4p">
                                <div className="vl-section-title4">
                                    <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                        About Us
                                    </h5>
                                    <h2 className="title text-anime-style-3 pt-16 pb-16">Building Relationships One Smile at a Time</h2>
                                    <p className="para pb-32" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                        We’re more than just a dental clinic we’re your partners in health, here to <br /> guide you on a journey toward a brighter, healthier. Our dedicated team <br /> combines years of experience with a genuine passion for patient care.
                                    </p>
                                    <div className="vl-content-bloc4k-box" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                        <h5 className="title">
                                            <Link href="#">Commitment to Safety and Comfort</Link>
                                        </h5>
                                        <p className="para pt-16">
                                            We prioritize safety and follow strict sterilization and sanitation <br /> protocols to ensure a clean, secure environment additionally.
                                        </p>
                                    </div>
                                </div>
                                <div className="vl-about-btn mt-32" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                    <Link href="/about" className="vl-btn-primar4y">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= About section End =================*/}
            <ModalVideo channel="youtube" videoId="vR24qT-I5ko" isOpen={isOpen} onClose={() => setOpen(false)} />
        </>
    );
}

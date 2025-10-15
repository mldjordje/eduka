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
                                    <h4 className="title pb-24">Search</h4>
                                    <div className="vl-searh-form-wid">
                                        <form action="#">
                                            <input type="text" placeholder="Search..." />
                                            <span>
                                                <i className="fa-regular fa-magnifying-glass" />
                                            </span>
                                        </form>
                                    </div>
                                </div>
                                {/* service widget */}
                                <div className="vl-widegt-2 vl-off-white-bg mb-30">
                                    <h4 className="title pb-24">Our Services</h4>
                                    <div className="vl-service-list">
                                        <ul>
                                            <li>
                                                <Link href="/service-single">
                                                    Advanced Orthodontics
                                                    <span>
                                                        <i className="fa-regular fa-angle-right" />
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/service-single">
                                                    Periodontal Therapy
                                                    <span>
                                                        <i className="fa-regular fa-angle-right" />
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/service-single">
                                                    Pediatric Dentistry
                                                    <span>
                                                        <i className="fa-regular fa-angle-right" />
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/service-single">
                                                    Smile Brightening
                                                    <span>
                                                        <i className="fa-regular fa-angle-right" />
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/service-single">
                                                    Emergency Dental Care
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
                                        If You Need Any Help <br /> Contact With Us
                                    </h4>
                                    <Link href="tel:+1234567890" className="phone">
                                        <span>
                                            <i className="fa-light fa-phone" />
                                        </span>
                                        +123 456 7890
                                    </Link>
                                </div>
                                {/* social widget */}
                                <div className="vl-widegt-4 vl-off-white-bg mb-30">
                                    <h4 className="title pb-24">Follow Us</h4>
                                    <div className="vl-sidebar-social">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <span>
                                                        <i className="fa-brands fa-facebook-f" />
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <span>
                                                        <i className="fa-brands fa-x-twitter" />
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <span>
                                                        <i className="fa-brands fa-linkedin-in" />
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <span>
                                                        <i className="fa-brands fa-instagram" />
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
                                    <img className="br-8 w-100" src="assets/img/service/vl-service-learg-thumb-1.1.png" alt="" />
                                </div>
                                {/* content one */}
                                <div className="vl-sidebar-conten1t mb-32">
                                    <h3 className="title">Root Canal Therapy</h3>
                                    <p className="para pt-16">we offer a comprehensive range of dental services designed to meet the unique needs of every patient. From preventive care like routine cleanings and exams to restorative treatments such as fillings, crowns, and dental implants, we ensure your oral health.</p>
                                    <p className="para pt-16">For those looking to enhance smile, we provide advanced cosmetic solutions, including teeth whitening and veneers. Our team is dedicated to delivering personalized care in a comfortable and welcoming environment, using state-of-the-art technology.</p>
                                </div>
                                {/* icon block */}
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 mb-30">
                                        <div className="vl-deatils-icon-block-flex">
                                            <div className="icon">
                                                <span>
                                                    <img src="assets/img/icons/vl-service-details-icon1.1.svg" alt="" />
                                                </span>
                                            </div>
                                            <div className="content">
                                                <h4 className="title pb-16">Advanced Dentistry</h4>
                                                <p className="para">Using the latest technology, we provide effective &amp; comfortable.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 mb-30">
                                        <div className="vl-deatils-icon-block-flex">
                                            <div className="icon">
                                                <span>
                                                    <img src="assets/img/icons/vl-service-details-icon1.2.svg" alt="" />
                                                </span>
                                            </div>
                                            <div className="content">
                                                <h4 className="title pb-16">Preventive Restorative</h4>
                                                <p className="para">Our clinic specializes maintaining oral health restoring functionality.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* content one */}
                                <div className="vl-sidebar-conten1t mt-18 mb-32">
                                    <h3 className="title">Comprehensive Dental Care for Every Need</h3>
                                    <p className="para pt-16">From routine check-ups to advanced treatments, we provide a full spectrum of services to keep your smile healthy &amp; beautiful. Our personalized approach ensures your specific needs are met with care and expertise. Whatever your dental needs, we’re here to help.</p>
                                </div>
                                {/* video & check box */}
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-6 mb-30">
                                        <div className="vl-service-video-thumb p-relative">
                                            <img className="w-100 br-8" src="assets/img/service/vl-service-video-thumb1.1.png" alt="" />
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
                                                    Tailored Care for Every Stage of Life
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="fa-regular fa-check" />
                                                    </span>
                                                    Comprehensive Care for Every Smile
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="fa-regular fa-check" />
                                                    </span>
                                                    Tailored Solutions Your Dental Needs
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="fa-regular fa-check" />
                                                    </span>
                                                    TYour Smile, Our Expertise
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="fa-regular fa-check" />
                                                    </span>
                                                    Expert Care for All Ages
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* service faq */}
                                <div className="vl-faq-service mt-18">
                                    <div className="accordion" id="accordionExample">
                                        <div className="vl-accordion-item">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="vl-accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    What are the signs I need a dental check-up?
                                                    <span className="vl-faqarrow">
                                                        <i className="fa-regular fa-angle-down" />
                                                    </span>
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="vl-accordion-body">
                                                    <p className="para">
                                                        If you have a dental emergency, such as a knocked-out tooth or severe <br /> pain, contact our clinic immediately. We’ll guide you through
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vl-accordion-item">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Do you offer payment plans or insurance?
                                                    <span className="vl-faqarrow">
                                                        <i className="fa-regular fa-angle-down" />
                                                    </span>
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                <div className="vl-accordion-body">
                                                    <p className="para">
                                                        If you have a dental emergency, such as a knocked-out tooth or severe <br /> pain, contact our clinic immediately. We’ll guide you through
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vl-accordion-item">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    What are my options for replacing teeth?
                                                    <span className="vl-faqarrow">
                                                        <i className="fa-regular fa-angle-down" />
                                                    </span>
                                                </button>
                                            </h2>
                                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                <div className="vl-accordion-body">
                                                    <p className="para">
                                                        If you have a dental emergency, such as a knocked-out tooth or severe <br /> pain, contact our clinic immediately. We’ll guide you through
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vl-accordion-item">
                                            <h2 className="accordion-header" id="heading4">
                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                                    How long does a dental crown or filling last?
                                                    <span className="vl-faqarrow">
                                                        <i className="fa-regular fa-angle-down" />
                                                    </span>
                                                </button>
                                            </h2>
                                            <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordionExample">
                                                <div className="vl-accordion-body">
                                                    <p className="para">
                                                        If you have a dental emergency, such as a knocked-out tooth or severe <br /> pain, contact our clinic immediately. We’ll guide you through
                                                    </p>
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
            <ModalVideo channel="youtube" isOpen={isOpen} videoId="wn_wKQ_UR90" onClose={() => setOpen(false)} />
        </>
    );
}

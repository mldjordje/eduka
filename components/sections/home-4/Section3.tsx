"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import SwiperPadding from "@/components/elements/BoxSwiperPadding";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Link from "next/link";

const swiperOptions = {
    modules: [Autoplay, Navigation],
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
    navigation: {
        nextEl: ".owl-next",
        prevEl: ".owl-prev",
    },
};

export default function Section3() {
    return (
        <>
            {/*================= Service section start =================*/}
            <SwiperPadding />

            <section id="service" className="vl-service-bg-4 fix pt-100 pb-100">
                <div className="container swipper-root">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="vl-service-section-title">
                                <div className="vl-section-title4 mb-60">
                                    <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                        Our Service
                                    </h5>
                                    <h2 className="title pt-16 text-anime-style-3">Explore Our Services Quality Care for All Ages</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row position-relative" id="servic4e-active">
                    <div className="box-swiper-padding">
                        <Swiper {...swiperOptions} className="owl-carousel owl-theme" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                            {/* single service box */}
                            <SwiperSlide className="vl-single-service-bo4x">
                                <div className="vl-thumb image-anime">
                                    <img className="w-100" src="assets/img/service/vl-service-thumb-4.1.png" alt="" />
                                </div>
                                <div className="vl-content">
                                    <Link href="/service-single" className="vl-up-arrow">
                                        <span>
                                            <i className="fa-regular fa-arrow-right" />
                                        </span>
                                    </Link>
                                    <h4 className="title">
                                        <Link href="/service-single">Restorative Solutions</Link>
                                    </h4>
                                    <p className="para pt-16">We’re proud offer a comprehensive range of dental service designed to meet unique</p>
                                </div>
                            </SwiperSlide>
                            {/* single service box */}
                            <SwiperSlide className="vl-single-service-bo4x">
                                <div className="vl-thumb image-anime">
                                    <img className="w-100" src="assets/img/service/vl-service-thumb-4.2.png" alt="" />
                                </div>
                                <div className="vl-content">
                                    <Link href="/service-single" className="vl-up-arrow">
                                        <span>
                                            <i className="fa-regular fa-arrow-right" />
                                        </span>
                                    </Link>
                                    <h4 className="title">
                                        <Link href="/service-single">Root Canal Therapy</Link>
                                    </h4>
                                    <p className="para pt-16">Our Preventive Care services focu regular cleanings, exams, and education to help.</p>
                                </div>
                            </SwiperSlide>
                            {/* single service box */}
                            <SwiperSlide className="vl-single-service-bo4x">
                                <div className="vl-thumb image-anime">
                                    <img className="w-100" src="assets/img/service/vl-service-thumb-4.3.png" alt="" />
                                </div>
                                <div className="vl-content">
                                    <Link href="/service-single" className="vl-up-arrow">
                                        <span>
                                            <i className="fa-regular fa-arrow-right" />
                                        </span>
                                    </Link>
                                    <h4 className="title">
                                        <Link href="/service-single">Smile Brightening</Link>
                                    </h4>
                                    <p className="para pt-16">For those in need Restorative Solutions, we offer fillings, crowns, bridges implants</p>
                                </div>
                            </SwiperSlide>
                            {/* single service box */}
                            <SwiperSlide className="vl-single-service-bo4x">
                                <div className="vl-thumb image-anime">
                                    <img className="w-100" src="assets/img/service/vl-service-thumb-4.4.png" alt="" />
                                </div>
                                <div className="vl-content">
                                    <Link href="/service-single" className="vl-up-arrow">
                                        <span>
                                            <i className="fa-regular fa-arrow-right" />
                                        </span>
                                    </Link>
                                    <h4 className="title">
                                        <Link href="/service-single">Emergency Dental Care</Link>
                                    </h4>
                                    <p className="para pt-16">Whether you’re here for routine care or specialized treatment team committed.</p>
                                </div>
                            </SwiperSlide>
                            {/* single service box */}
                            <SwiperSlide className="vl-single-service-bo4x">
                                <div className="vl-thumb image-anime">
                                    <img className="w-100" src="assets/img/service/vl-service-thumb-4.4.png" alt="" />
                                </div>
                                <div className="vl-content">
                                    <Link href="/service-single" className="vl-up-arrow">
                                        <span>
                                            <i className="fa-regular fa-arrow-right" />
                                        </span>
                                    </Link>
                                    <h4 className="title">
                                        <Link href="/service-single">Emergency Dental Care</Link>
                                    </h4>
                                    <p className="para pt-16">Whether you’re here for routine care or specialized treatment team committed.</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="owl-nav">
                        <button className="owl-prev">
                            <i className="fa-regular fa-angle-left"></i>
                        </button>
                        <button className="owl-next">
                            <i className="fa-regular fa-angle-right"></i>
                        </button>
                    </div>
                </div>
            </section>
            {/*================= Service section End =================*/}
        </>
    );
}

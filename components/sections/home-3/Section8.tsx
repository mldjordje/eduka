"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Thumbs } from "swiper/modules";
import SwiperCore from "swiper";
import Link from "next/link";
import testimonials from "@/public/data/testimonial.json";

export default function Section8() {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
    const sliderTestimonials = (testimonials as { quote: string; author: string; position: string; avatar: string }[]).slice(0, 6);
    const ratingIcons = Array.from({ length: 5 });
    return (
        <>
            {/*================= Testimonial section start =================*/}
            <section id="testimonial" className="vl-testimonial-bg-3 fix pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="vl-section-title3 text-center mb-60">
                                <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                    Iskustva članova
                                </h5>
                                <h2 className="title pt-16 text-anime-style-3">Šta članovi Eduke kažu o programima</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="vl-testimonail-large-thumb3 reveal image-anime">
                                <img className="w-100 br-8" src="assets/img/testimonial/vl-testimonial-large-thumb3.1.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <Swiper
                                modules={[Autoplay, Pagination, Navigation, Thumbs]}
                                spaceBetween={10}
                                loop={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                navigation={{
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev",
                                }}
                                thumbs={{ swiper: thumbsSwiper }}
                                className="slider-galeria"
                            >
                                {sliderTestimonials.map((testimonial) => (
                                    <SwiperSlide className="single-slider1" key={testimonial.author}>
                                        <div className="slider-box">
                                            <div className="quote">
                                                <img src="assets/img/icons/vl-testimonial-quote3.1.svg" alt="" />
                                            </div>
                                            <div className="icon">
                                                <ul>
                                                    {ratingIcons.map((_, index) => (
                                                        <li key={`${testimonial.author}-rating-${index}`}>
                                                            <span>
                                                                <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="ocena" />
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <p className="para pt-20 pb-32">“{testimonial.quote}”</p>
                                        </div>
                                        <div className="testimonial-thumb-flx">
                                            <div className="thumb-content-flex">
                                                <div className="testimonial-thumb image-anime">
                                                    <Link href="/testimonial">
                                                        <img src={testimonial.avatar} alt={testimonial.author} />
                                                    </Link>
                                                </div>
                                                <div className="testimonial-content">
                                                    <h3 className="title">
                                                        <Link href="/testimonial">{testimonial.author}</Link>
                                                    </h3>
                                                    <span className="deseg pt-14">{testimonial.position}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className="col-lg-1">
                            <Swiper
                                modules={[Thumbs]}
                                onSwiper={setThumbsSwiper}
                                direction="vertical"
                                spaceBetween={0}
                                slidesPerView={4}
                                loop={true}
                                watchSlidesProgress={true}
                                style={{ height: "370px" }}
                                className="slider-galeria-thumbs text-center d-lg-block d-none"
                            >
                                {sliderTestimonials.map((testimonial) => (
                                    <SwiperSlide className="testimonial3-sliders-img" key={`${testimonial.author}-thumb`}>
                                        <img src={testimonial.avatar} alt={testimonial.author} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= Testimonial section End =================*/}
        </>
    );
}

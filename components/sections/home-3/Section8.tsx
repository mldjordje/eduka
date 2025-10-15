"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Thumbs } from "swiper/modules";
import SwiperCore from "swiper";
import Link from "next/link";

export default function Section8() {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
    return (
        <>
            {/*================= Testimonial section start =================*/}
            <section id="testimonial" className="vl-testimonial-bg-3 fix pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="vl-section-title3 text-center mb-60">
                                <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                    Testimonial
                                </h5>
                                <h2 className="title pt-16 text-anime-style-3">What Our Patients Are Saying</h2>
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
                                {/* single testimonial start */}
                                <SwiperSlide className="single-slider1">
                                    <div className="slider-box">
                                        <div className="quote">
                                            <img src="assets/img/icons/vl-testimonial-quote3.1.svg" alt="" />
                                        </div>
                                        <div className="icon">
                                            <ul>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="" />
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="para pt-20 pb-32">
                                            “Our patients’ experience speak for themselves. We’re honored to have helped countless individuals achieve healthier, more confident smiles. Our patients often <br /> share how much they appreciate gentle approach.”
                                        </p>
                                    </div>
                                    <div className="testimonial-thumb-flx">
                                        <div className="thumb-content-flex">
                                            <div className="testimonial-thumb image-anime">
                                                <Link href="/testimonial">
                                                    <img src="assets/img/testimonial/vl-testimonial-sm-thumb-3.1.png" alt="" />
                                                </Link>
                                            </div>
                                            <div className="testimonial-content">
                                                <h3 className="title">
                                                    <Link href="/testimonial">Ben Stokes</Link>
                                                </h3>
                                                <span className="deseg pt-14">Happy Customar</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/* single testimonial end */}
                                {/* single testimonial start */}
                                <SwiperSlide className="single-slider1">
                                    <div className="slider-box">
                                        <div className="quote">
                                            <img src="assets/img/icons/vl-testimonial-quote3.1.svg" alt="" />
                                        </div>
                                        <div className="icon">
                                            <ul>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="" />
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="para pt-20 pb-32">
                                            “Our patients’ experience speak for themselves. We’re honored to have helped countless individuals achieve healthier, more confident smiles. Our patients often <br /> share how much they appreciate gentle approach.”
                                        </p>
                                    </div>
                                    <div className="testimonial-thumb-flx">
                                        <div className="thumb-content-flex">
                                            <div className="testimonial-thumb image-anime">
                                                <Link href="/testimonial">
                                                    <img src="assets/img/testimonial/vl-testimonial-sm-thumb-3.2.png" alt="" />
                                                </Link>
                                            </div>
                                            <div className="testimonial-content">
                                                <h3 className="title">
                                                    <Link href="/testimonial">Ben Stokes</Link>
                                                </h3>
                                                <span className="deseg pt-14">Happy Customar</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/* single testimonial end */}
                                {/* single testimonial start */}
                                <SwiperSlide className="single-slider1">
                                    <div className="slider-box">
                                        <div className="quote">
                                            <img src="assets/img/icons/vl-testimonial-quote3.1.svg" alt="" />
                                        </div>
                                        <div className="icon">
                                            <ul>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="" />
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="para pt-20 pb-32">
                                            “Our patients’ experience speak for themselves. We’re honored to have helped countless individuals achieve healthier, more confident smiles. Our patients often <br /> share how much they appreciate gentle approach.”
                                        </p>
                                    </div>
                                    <div className="testimonial-thumb-flx">
                                        <div className="thumb-content-flex">
                                            <div className="testimonial-thumb image-anime">
                                                <Link href="/testimonial">
                                                    <img src="assets/img/testimonial/vl-testimonial-sm-thumb-3.3.png" alt="" />
                                                </Link>
                                            </div>
                                            <div className="testimonial-content">
                                                <h3 className="title">
                                                    <Link href="/testimonial">Ben Stokes</Link>
                                                </h3>
                                                <span className="deseg pt-14">Happy Customar</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/* single testimonial end */}
                                {/* single testimonial start */}
                                <SwiperSlide className="single-slider1">
                                    <div className="slider-box">
                                        <div className="quote">
                                            <img src="assets/img/icons/vl-testimonial-quote3.1.svg" alt="" />
                                        </div>
                                        <div className="icon">
                                            <ul>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="" />
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="para pt-20 pb-32">
                                            “Our patients’ experience speak for themselves. We’re honored to have helped countless individuals achieve healthier, more confident smiles. Our patients often <br /> share how much they appreciate gentle approach.”
                                        </p>
                                    </div>
                                    <div className="testimonial-thumb-flx">
                                        <div className="thumb-content-flex">
                                            <div className="testimonial-thumb image-anime">
                                                <Link href="/testimonial">
                                                    <img src="assets/img/testimonial/vl-testimonial-sm-thumb-3.4.png" alt="" />
                                                </Link>
                                            </div>
                                            <div className="testimonial-content">
                                                <h3 className="title">
                                                    <Link href="/testimonial">Ben Stokes</Link>
                                                </h3>
                                                <span className="deseg pt-14">Happy Customar</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/* single testimonial end */}
                                {/* single testimonial start */}
                                <SwiperSlide className="single-slider1">
                                    <div className="slider-box">
                                        <div className="quote">
                                            <img src="assets/img/icons/vl-testimonial-quote3.1.svg" alt="" />
                                        </div>
                                        <div className="icon">
                                            <ul>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="" />
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="para pt-20 pb-32">
                                            “Our patients’ experience speak for themselves. We’re honored to have helped countless individuals achieve healthier, more confident smiles. Our patients often <br /> share how much they appreciate gentle approach.”
                                        </p>
                                    </div>
                                    <div className="testimonial-thumb-flx">
                                        <div className="thumb-content-flex">
                                            <div className="testimonial-thumb image-anime">
                                                <Link href="/testimonial">
                                                    <img src="assets/img/testimonial/vl-testimonial-sm-thumb-3.1.png" alt="" />
                                                </Link>
                                            </div>
                                            <div className="testimonial-content">
                                                <h3 className="title">
                                                    <Link href="/testimonial">Ben Stokes</Link>
                                                </h3>
                                                <span className="deseg pt-14">Happy Customar</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/* single testimonial end */}
                                {/* single testimonial start */}
                                <SwiperSlide className="single-slider1">
                                    <div className="slider-box">
                                        <div className="quote">
                                            <img src="assets/img/icons/vl-testimonial-quote3.1.svg" alt="" />
                                        </div>
                                        <div className="icon">
                                            <ul>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="" />
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="para pt-20 pb-32">
                                            “Our patients’ experience speak for themselves. We’re honored to have helped countless individuals achieve healthier, more confident smiles. Our patients often <br /> share how much they appreciate gentle approach.”
                                        </p>
                                    </div>
                                    <div className="testimonial-thumb-flx">
                                        <div className="thumb-content-flex">
                                            <div className="testimonial-thumb image-anime">
                                                <Link href="/testimonial">
                                                    <img src="assets/img/testimonial/vl-testimonial-sm-thumb-3.2.png" alt="" />
                                                </Link>
                                            </div>
                                            <div className="testimonial-content">
                                                <h3 className="title">
                                                    <Link href="/testimonial">Ben Stokes</Link>
                                                </h3>
                                                <span className="deseg pt-14">Happy Customar</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/* single testimonial end */}
                                {/* single testimonial start */}
                                <SwiperSlide className="single-slider1">
                                    <div className="slider-box">
                                        <div className="quote">
                                            <img src="assets/img/icons/vl-testimonial-quote3.1.svg" alt="" />
                                        </div>
                                        <div className="icon">
                                            <ul>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="" />
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="para pt-20 pb-32">
                                            “Our patients’ experience speak for themselves. We’re honored to have helped countless individuals achieve healthier, more confident smiles. Our patients often <br /> share how much they appreciate gentle approach.”
                                        </p>
                                    </div>
                                    <div className="testimonial-thumb-flx">
                                        <div className="thumb-content-flex">
                                            <div className="testimonial-thumb image-anime">
                                                <Link href="/testimonial">
                                                    <img src="assets/img/testimonial/vl-testimonial-sm-thumb-3.3.png" alt="" />
                                                </Link>
                                            </div>
                                            <div className="testimonial-content">
                                                <h3 className="title">
                                                    <Link href="/testimonial">Ben Stokes</Link>
                                                </h3>
                                                <span className="deseg pt-14">Happy Customar</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/* single testimonial end */}
                                {/* single testimonial start */}
                                <SwiperSlide className="single-slider1">
                                    <div className="slider-box">
                                        <div className="quote">
                                            <img src="assets/img/icons/vl-testimonial-quote3.1.svg" alt="" />
                                        </div>
                                        <div className="icon">
                                            <ul>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-ic-3.1.svg" alt="" />
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="para pt-20 pb-32">
                                            “Our patients’ experience speak for themselves. We’re honored to have helped countless individuals achieve healthier, more confident smiles. Our patients often <br /> share how much they appreciate gentle approach.”
                                        </p>
                                    </div>
                                    <div className="testimonial-thumb-flx">
                                        <div className="thumb-content-flex">
                                            <div className="testimonial-thumb image-anime">
                                                <Link href="/testimonial">
                                                    <img src="assets/img/testimonial/vl-testimonial-sm-thumb-3.4.png" alt="" />
                                                </Link>
                                            </div>
                                            <div className="testimonial-content">
                                                <h3 className="title">
                                                    <Link href="/testimonial">Ben Stokes</Link>
                                                </h3>
                                                <span className="deseg pt-14">Happy Customar</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/* single testimonial end */}
                            </Swiper>
                        </div>
                        <div className="col-lg-1">
                            <Swiper modules={[Thumbs]} onSwiper={setThumbsSwiper} direction="vertical" spaceBetween={0} slidesPerView={4} loop={true} watchSlidesProgress={true} style={{ height: "370px" }} className="slider-galeria-thumbs text-center d-lg-block d-none">
                                <SwiperSlide className="testimonial3-sliders-img">
                                    <img src="assets/img/testimonial/vl-testimonial-sm-thumb-3.1.png" alt="" />
                                </SwiperSlide>
                                <SwiperSlide className="testimonial3-sliders-img">
                                    <img src="assets/img/testimonial/vl-testimonial-sm-thumb-3.2.png" alt="" />
                                </SwiperSlide>
                                <SwiperSlide className="testimonial3-sliders-img">
                                    <img src="assets/img/testimonial/vl-testimonial-sm-thumb-3.3.png" alt="" />
                                </SwiperSlide>
                                <SwiperSlide className="testimonial3-sliders-img">
                                    <img src="assets/img/testimonial/vl-testimonial-sm-thumb-3.4.png" alt="" />
                                </SwiperSlide>
                                <SwiperSlide className="testimonial3-sliders-img">
                                    <img src="assets/img/testimonial/vl-testimonial-sm-thumb-3.1.png" alt="" />
                                </SwiperSlide>
                                <SwiperSlide className="testimonial3-sliders-img">
                                    <img src="assets/img/testimonial/vl-testimonial-sm-thumb-3.2.png" alt="" />
                                </SwiperSlide>
                                <SwiperSlide className="testimonial3-sliders-img">
                                    <img src="assets/img/testimonial/vl-testimonial-sm-thumb-3.3.png" alt="" />
                                </SwiperSlide>
                                <SwiperSlide className="testimonial3-sliders-img">
                                    <img src="assets/img/testimonial/vl-testimonial-sm-thumb-3.4.png" alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= Testimonial section End =================*/}
        </>
    );
}

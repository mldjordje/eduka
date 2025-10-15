"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Link from "next/link";

const swiperOptions = {
    modules: [Autoplay, Navigation],
    slidesPerView: 3,
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
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
    navigation: {
        nextEl: ".owl-next",
        prevEl: ".owl-prev",
    },
};

export default function Section6() {
    return (
        <>
            {/*================= Testimonial section start =================*/}
            <section id="testimonial" className="vl-testimonial-area fix pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="vl-section-title4 mb-60">
                                <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                    Testimonial
                                </h5>
                                <h2 className="title pt-16 text-anime-style-3">Stories From Our Client</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row position-relative" id="testimonia4l-active">
                        <Swiper {...swiperOptions} className="p-relative owl-carousel owl-theme" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                            {/* single testimonial */}
                            <SwiperSlide className="vl-single-testimonial-bo4x">
                                <div className="vl-quote">
                                    <img src="assets/img/shape/vl-testimonial-quote4.1.svg" alt="" />
                                </div>
                                <div className="vl-review-icon">
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <img src="assets/img/icons/vl-reviews4.1.svg" alt="" />
                                            </Link>
                                            <Link href="#">
                                                <img src="assets/img/icons/vl-reviews4.1.svg" alt="" />
                                            </Link>
                                            <Link href="#">
                                                <img src="assets/img/icons/vl-reviews4.1.svg" alt="" />
                                            </Link>
                                            <Link href="#">
                                                <img src="assets/img/icons/vl-reviews4.1.svg" alt="" />
                                            </Link>
                                            <Link href="#">
                                                <img src="assets/img/icons/vl-reviews4.1.svg" alt="" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="vl-testimonial-content">
                                    <p className="para">“We’re grateful of the trust our patients place in us. Many of our patients come to us with fears or insecurities about their smile, and it’s our privilege to help them feel confident and comfortable.”</p>
                                </div>
                                <div className="vl-testimonial-auth-flx">
                                    <div className="auth-thumb image-anime">
                                        <img src="assets/img/testimonial/vl-testimonial-auth4.1.png" alt="" />
                                    </div>
                                    <div className="auth-content">
                                        <h5 className="title">
                                            <Link href="/testimonial">Tina Wilkinson</Link>
                                        </h5>
                                        <span className="deseg">CEO, Wingree Ltd</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* single testimonial */}
                            <SwiperSlide className="vl-single-testimonial-bo4x">
                                <div className="vl-quote">
                                    <img src="assets/img/shape/vl-testimonial-quote4.1.svg" alt="" />
                                </div>
                                <div className="vl-review-icon">
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <img src="assets/img/icons/vl-reviews4.1.svg" alt="" />
                                            </Link>
                                            <Link href="#">
                                                <img src="assets/img/icons/vl-reviews4.1.svg" alt="" />
                                            </Link>
                                            <Link href="#">
                                                <img src="assets/img/icons/vl-reviews4.1.svg" alt="" />
                                            </Link>
                                            <Link href="#">
                                                <img src="assets/img/icons/vl-reviews4.1.svg" alt="" />
                                            </Link>
                                            <Link href="#">
                                                <img src="assets/img/icons/vl-reviews4.1.svg" alt="" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="vl-testimonial-content">
                                    <p className="para">“Our patients consistently share their satisfaction with our care, praising our friendly staff, modern facilities, &amp; the genuine compassion they experience here our community of happy patient.”</p>
                                </div>
                                <div className="vl-testimonial-auth-flx">
                                    <div className="auth-thumb image-anime">
                                        <img src="assets/img/testimonial/vl-testimonial-auth4.2.png" alt="" />
                                    </div>
                                    <div className="auth-content">
                                        <h5 className="title">
                                            <Link href="/testimonial">Alex Ferguson</Link>
                                        </h5>
                                        <span className="deseg">CEO, Ranboz Ltd</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* single testimonial */}
                            <SwiperSlide className="vl-single-testimonial-bo4x">
                                <div className="vl-quote">
                                    <img src="assets/img/shape/vl-testimonial-quote4.1.svg" alt="" />
                                </div>
                                <div className="vl-review-icon">
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <img src="assets/img/icons/vl-reviews4.1.svg" alt="" />
                                            </Link>
                                            <Link href="#">
                                                <img src="assets/img/icons/vl-reviews4.1.svg" alt="" />
                                            </Link>
                                            <Link href="#">
                                                <img src="assets/img/icons/vl-reviews4.1.svg" alt="" />
                                            </Link>
                                            <Link href="#">
                                                <img src="assets/img/icons/vl-reviews4.1.svg" alt="" />
                                            </Link>
                                            <Link href="#">
                                                <img src="assets/img/icons/vl-reviews4.1.svg" alt="" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="vl-testimonial-content">
                                    <p className="para">“Our top priority is creating welcoming, positive experience for each patient we proud of the feedback we receive from patients who appreciate our dedication to gentle, high-quality care.”</p>
                                </div>
                                <div className="vl-testimonial-auth-flx">
                                    <div className="auth-thumb image-anime">
                                        <img src="assets/img/testimonial/vl-testimonial-auth4.3.png" alt="" />
                                    </div>
                                    <div className="auth-content">
                                        <h5 className="title">
                                            <Link href="/testimonial">Alzari Joseph</Link>
                                        </h5>
                                        <span className="deseg">CEO, BIGS Ltd</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* single testimonial */}
                            <SwiperSlide className="vl-single-testimonial-bo4x">
                                <div className="vl-quote">
                                    <img src="assets/img/shape/vl-testimonial-quote4.1.svg" alt="" />
                                </div>
                                <div className="vl-review-icon">
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <img src="assets/img/icons/vl-reviews4.1.svg" alt="" />
                                            </Link>
                                            <Link href="#">
                                                <img src="assets/img/icons/vl-reviews4.1.svg" alt="" />
                                            </Link>
                                            <Link href="#">
                                                <img src="assets/img/icons/vl-reviews4.1.svg" alt="" />
                                            </Link>
                                            <Link href="#">
                                                <img src="assets/img/icons/vl-reviews4.1.svg" alt="" />
                                            </Link>
                                            <Link href="#">
                                                <img src="assets/img/icons/vl-reviews4.1.svg" alt="" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="vl-testimonial-content">
                                    <p className="para">“Our top priority is creating welcoming, positive experience for each patient we proud of the feedback we receive from patients who appreciate our dedication to gentle, high-quality care.”</p>
                                </div>
                                <div className="vl-testimonial-auth-flx">
                                    <div className="auth-thumb image-anime">
                                        <img src="assets/img/testimonial/vl-testimonial-auth4.2.png" alt="" />
                                    </div>
                                    <div className="auth-content">
                                        <h5 className="title">
                                            <Link href="/testimonial">Alzari Joseph</Link>
                                        </h5>
                                        <span className="deseg">CEO, BIGS Ltd</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className="owl-nav">
                            <button className="owl-prev">
                                <i className="fa-regular fa-angle-left"></i>
                            </button>
                            <button className="owl-next">
                                <i className="fa-regular fa-angle-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= Testimonial section End =================*/}
        </>
    );
}

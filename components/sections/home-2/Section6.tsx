"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";
const swiperOptions = {
    modules: [Autoplay, Navigation],
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
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
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-30">
                            <div className="vl-testimonial-large-thumb-2 mr-30 reveal image-anime">
                                <img className="w-100 br-30" src="assets/img/testimonial/vl-testimonial-2.1.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 mb-30">
                            <div className="vl-section-title2 mb-40">
                                <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                    Testimonial
                                </h5>
                                <h2 className="title pt-16 text-anime-style-3">What Our Patients Are Saying</h2>
                            </div>
                            <div className="position-relative" id="testimonal-active2">
                                <Swiper {...swiperOptions} className="p-relative owl-carousel owl-theme" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                    {/* single testimonal box */}
                                    <SwiperSlide className="vl-testimonial-box vl-testimonial-box-2">
                                        <div className="vl-review">
                                            <ul>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-icon-2.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-icon-2.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-icon-2.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-icon-2.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-icon-2.1.svg" alt="" />
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="vl-testimonial-content">
                                            <p className="para">
                                                “We’re proud of the positive impact we’ve had a patients <br />
                                                lives. But don’t just take our word for it—hear from those <br />
                                                who have experienced our care firsthand. Our patients <br />
                                                consistently tell us how comfortable they feel with our.”
                                            </p>
                                        </div>
                                        {/* testimonial auth */}
                                        <div className="vl-testimonal-auth-flex">
                                            <div className="vl-auth-thumb">
                                                <img src="assets/img/testimonial/vl-testimonial-sm-thumb-2.1.png" alt="" />
                                            </div>
                                            <div className="vl-auth-content">
                                                <h4 className="title pb-10">
                                                    <Link href="/testimonial">Tanzid Tamim</Link>
                                                </h4>
                                                <p className="deseg">Co. Founder</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    {/* single testimonal box */}
                                    <SwiperSlide className="vl-testimonial-box vl-testimonial-box-2">
                                        <div className="vl-review">
                                            <ul>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-icon-2.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-icon-2.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-icon-2.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-icon-2.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-icon-2.1.svg" alt="" />
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="vl-testimonial-content">
                                            <p className="para">
                                                “We’re proud of the positive impact we’ve had a patients <br />
                                                lives. But don’t just take our word for it—hear from those <br />
                                                who have experienced our care firsthand. Our patients <br />
                                                consistently tell us how comfortable they feel with our.”
                                            </p>
                                        </div>
                                        {/* testimonial auth */}
                                        <div className="vl-testimonal-auth-flex">
                                            <div className="vl-auth-thumb">
                                                <img src="assets/img/testimonial/vl-testimonial-sm-thumb-2.1.png" alt="" />
                                            </div>
                                            <div className="vl-auth-content">
                                                <h4 className="title pb-10">
                                                    <Link href="/testimonial">Tanzid Tamim</Link>
                                                </h4>
                                                <p className="deseg">Co. Founder</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    {/* single testimonal box */}
                                    <SwiperSlide className="vl-testimonial-box vl-testimonial-box-2">
                                        <div className="vl-review">
                                            <ul>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-icon-2.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-icon-2.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-icon-2.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-icon-2.1.svg" alt="" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="assets/img/icons/vl-testimonial-review-icon-2.1.svg" alt="" />
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="vl-testimonial-content">
                                            <p className="para">
                                                “We’re proud of the positive impact we’ve had a patients <br />
                                                lives. But don’t just take our word for it—hear from those <br />
                                                who have experienced our care firsthand. Our patients <br />
                                                consistently tell us how comfortable they feel with our.”
                                            </p>
                                        </div>
                                        {/* testimonial auth */}
                                        <div className="vl-testimonal-auth-flex">
                                            <div className="vl-auth-thumb">
                                                <img src="assets/img/testimonial/vl-testimonial-sm-thumb-2.1.png" alt="" />
                                            </div>
                                            <div className="vl-auth-content">
                                                <h4 className="title pb-10">
                                                    <Link href="/testimonial">Tanzid Tamim</Link>
                                                </h4>
                                                <p className="deseg">Co. Founder</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div className="owl-nav d-flex">
                                    <button className="owl-prev">
                                        <i className="fa-regular fa-arrow-left"></i>
                                    </button>
                                    <button className="owl-next">
                                        <i className="fa-regular fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= Testimonial section End =================*/}
        </>
    );
}

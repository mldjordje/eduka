"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
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
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
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
export default function Section5() {
    return (
        <>
            {/*================= Team section start =================*/}
            <section id="team" className="vl-team-bg2 fix pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="vl-team-sec-title2">
                                <div className="vl-section-title2 mb-60">
                                    <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                        Our Team
                                    </h5>
                                    <h2 className="title pt-16 text-anime-style-3">Meet the Professionals Who Make You Smile</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row position-relative" id="tea2m-active">
                        <Swiper {...swiperOptions} className="p-relative owl-carousel owl-theme" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                            {/* single team item */}
                            <SwiperSlide className="vl-single-team-bo2x">
                                <div className="team-thumb image-anime">
                                    <img className="w-100" src="assets/img/team/vl-team-thumb-2.1.png" alt="" />
                                    {/* team social icon */}
                                    <div className="team-social">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-x-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-linkedin-in" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-instagram" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-facebook-f" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content">
                                    <h4 className="title">
                                        <Link href="/team">Desiree Wolf</Link>
                                    </h4>
                                    <span className="description">Pediatrics</span>
                                </div>
                            </SwiperSlide>
                            {/* single team item */}
                            <SwiperSlide className="vl-single-team-bo2x">
                                <div className="team-thumb image-anime">
                                    <img className="w-100" src="assets/img/team/vl-team-thumb-2.2.png" alt="" />
                                    {/* team social icon */}
                                    <div className="team-social">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-x-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-linkedin-in" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-instagram" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-facebook-f" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content">
                                    <h4 className="title">
                                        <Link href="/team">Preston Padberg</Link>
                                    </h4>
                                    <span className="description">Cardiology</span>
                                </div>
                            </SwiperSlide>
                            {/* single team item */}
                            <SwiperSlide className="vl-single-team-bo2x">
                                <div className="team-thumb image-anime">
                                    <img className="w-100" src="assets/img/team/vl-team-thumb-2.3.png" alt="" />
                                    {/* team social icon */}
                                    <div className="team-social">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-x-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-linkedin-in" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-instagram" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-facebook-f" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content">
                                    <h4 className="title">
                                        <Link href="/team">PrHarry Hickle V</Link>
                                    </h4>
                                    <span className="description">Orthopedics</span>
                                </div>
                            </SwiperSlide>
                            {/* single team item */}
                            <SwiperSlide className="vl-single-team-bo2x">
                                <div className="team-thumb image-anime">
                                    <img className="w-100" src="assets/img/team/vl-team-thumb-2.4.png" alt="" />
                                    {/* team social icon */}
                                    <div className="team-social">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-x-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-linkedin-in" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-instagram" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-facebook-f" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content">
                                    <h4 className="title">
                                        <Link href="/team">Alicia Luettgen</Link>
                                    </h4>
                                    <span className="description">Deromatology</span>
                                </div>
                            </SwiperSlide>
                            {/* single team item */}
                            <SwiperSlide className="vl-single-team-bo2x">
                                <div className="team-thumb image-anime">
                                    <img className="w-100" src="assets/img/team/vl-team-thumb-2.2.png" alt="" />
                                    {/* team social icon */}
                                    <div className="team-social">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-x-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-linkedin-in" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-instagram" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-facebook-f" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content">
                                    <h4 className="title">
                                        <Link href="/team">Preston Padberg</Link>
                                    </h4>
                                    <span className="description">Deromatology</span>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className="owl-nav">
                            <button className="owl-prev">
                                <i className="fa-solid fa-arrow-left" />
                            </button>
                            <button className="owl-next">
                                <i className="fa-solid fa-arrow-right" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= Team section End =================*/}
        </>
    );
}

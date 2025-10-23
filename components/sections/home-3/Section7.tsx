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
const socialLinks = [
    {
        href: "https://www.facebook.com/edukanis",
        icon: "fa-brands fa-facebook-f",
    },
    {
        href: "https://www.linkedin.com/company/udruzenje-eduka",
        icon: "fa-brands fa-linkedin-in",
    },
    {
        href: "https://www.instagram.com",
        icon: "fa-brands fa-instagram",
    },
    {
        href: "https://www.youtube.com",
        icon: "fa-brands fa-youtube",
    },
];
const teamMembers = [
    {
        name: "Vesna Jovanović",
        role: "Predsednica udruženja",
        image: "assets/img/team/vl-team-thumb-3.1.png",
        alt: "Vesna Jovanović",
    },
    {
        name: "Jelena Petrović",
        role: "Koordinatorka za KME",
        image: "assets/img/team/vl-team-thumb-3.2.png",
        alt: "Jelena Petrović",
    },
    {
        name: "Milan Stanković",
        role: "Programski menadžer",
        image: "assets/img/team/vl-team-thumb-3.3.png",
        alt: "Milan Stanković",
    },
    {
        name: "Katarina Ilić",
        role: "Mentorka volontera",
        image: "assets/img/team/vl-team-thumb-3.4.png",
        alt: "Katarina Ilić",
    },
    {
        name: "Nikola Ristić",
        role: "Koordinator digitalnih obuka",
        image: "assets/img/team/vl-team-thumb-3.3.png",
        alt: "Nikola Ristić",
    },
];
export default function Section7({ text_2 }: any) {
    return (
        <>
            {/*================= Team section start =================*/}
            <section id="team" className="vl-team-bg3 fix pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="vl-team-sec-title3">
                                <div className="vl-section-title3 mb-60">
                                    <h5 className={`subtitle ${text_2}`} data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                        Tim Eduke
                                    </h5>
                                    <h2 className="title pt-16 text-anime-style-3">Upoznajte koordinatore koji vode naše programe</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row position-relative" id="team3-active" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                        <Swiper {...swiperOptions} className="p-relative owl-carousel owl-theme">
                            {teamMembers.map((member) => (
                                <SwiperSlide className="vl-single-team-bo3x" key={member.name}>
                                    <div className="team-thumb image-anime">
                                        <img className="w-100" src={member.image} alt={member.alt} />
                                        {/* team social icon */}
                                        <div className="team-social">
                                            <ul>
                                                {socialLinks.map((link) => (
                                                    <li key={link.href}>
                                                        <Link href={link.href} target="_blank" rel="noopener noreferrer">
                                                            <i className={link.icon} />
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team-content">
                                        <h4 className="title">
                                            <Link href="/team">{member.name}</Link>
                                        </h4>
                                        <span className="description">{member.role}</span>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="owl-nav">
                            <button className="owl-next">
                                <i className="fa-regular fa-arrow-right" />
                            </button>
                            <button className="owl-prev">
                                <i className="fa-regular fa-arrow-left" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= Team section End =================*/}
        </>
    );
}

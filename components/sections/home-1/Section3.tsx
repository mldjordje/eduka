"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import SwiperPadding from "@/components/elements/BoxSwiperPadding";
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
    320: { slidesPerView: 1, spaceBetween: 30 },
    575: { slidesPerView: 1, spaceBetween: 30 },
    767: { slidesPerView: 1, spaceBetween: 30 },
    991: { slidesPerView: 2, spaceBetween: 30 },
    1199: { slidesPerView: 2, spaceBetween: 30 },
    1350: { slidesPerView: 3, spaceBetween: 30 },
  },
  navigation: {
    nextEl: ".owl-next",
    prevEl: ".owl-prev",
  },
};

const activities = [
  {
    title: "Планирање и КМЕ програми",
    description: "Према прописаним критеријумима планирамо, организујемо и спроводимо све видове континуиране медицинске едукације и издајемо сертификате.",
    background: "./assets/img/eduka/workshop-presenter.png",
  },
  {
    title: "Регистар чланова и стандарди",
    description: "Водимо регистар чланова, пратимо стандарде здравствено-образовних установа и дајемо предлоге и мишљења при изради програма и нормативâ.",
    background: "./assets/img/eduka/workshop-lecture.png",
  },
  {
    title: "Сарадња са институцијама",
    description: "Сарађујемо са коморама, удружењима и референтним телима у земљи и иностранству и активно учествујемо на конгресима, семинарима и стручним састанцима.",
    background: "./assets/img/eduka/workshop-audience-front.png",
  },
  {
    title: "Етички кодекс и подршка",
    description: "Надзиремо спровођење етичких и правних норми, утврђујемо повреде професионалних дужности и дајемо мишљења приликом доношења прописа важних за струку.",
    background: "./assets/img/eduka/workshop-audience-side.png",
  },
  {
    title: "Онлајн едукација 24/7",
    description: "Преко платформи eduka.co.rs и domzdravljanis.co.rs омогућавамо приступ тестовима и материјалима током целог дана, уз слање потврда и бодова коморама.",
    background: "./assets/img/eduka/workshop-demonstration.png",
  },
];

export default function Section3() {
  return (
    <>
      <SwiperPadding />

      <section id="service" className="vl-service-bg-1 fix pt-100 pb-100">
        <div className="container swipper-root">
          <div className="row">
            <div className="col-lg-5">
              <div className="vl-service-section-title">
                <div className="vl-section-title mb-60">
                  <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                    Делатност удружења
                  </h5>
                  <h2 className="title pt-16 text-anime-style-3">Задаци који нас воде</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" id="service-slide-1">
          <div className="box-swiper-padding">
            <Swiper {...(swiperOptions as any)} className="owl-carousel owl-theme" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
              {activities.map((item) => (
                <SwiperSlide key={item.title} className="vl-single-service-box" data-background={item.background}>
                  <div className="vl-service-icon-box">
                    <div className="icon">
                      <span className="icon1">
                        <img src="assets/img/icons/vl-service-icon-1.1.svg" alt="" />
                      </span>
                    </div>
                    <div className="content">
                      <h4 className="title pt-24">
                        <Link href="/about">{item.title}</Link>
                      </h4>
                      <p className="para pt-16 pb-24">{item.description}</p>
                      <Link href="/about" className="learnmore">
                        Сазнај више
                        <span className="right-arow">
                          <i className="fa-regular fa-arrow-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="owl-nav">
              <button className="owl-prev" aria-label="Претходна">
                <i className="fa-solid fa-arrow-left" />
              </button>
              <button className="owl-next" aria-label="Следећа">
                <i className="fa-solid fa-arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

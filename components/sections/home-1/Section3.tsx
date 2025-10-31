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

export default function Section3() {
  return (
    <>
      {/*================= Service section start =================*/}
      <SwiperPadding />

      <section id="service" className="vl-service-bg-1 fix pt-100 pb-100">
        <div className="container swipper-root">
          <div className="row">
            <div className="col-lg-5">
              <div className="vl-service-section-title">
                <div className="vl-section-title mb-60">
                  <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                    Naše usluge
                  </h5>
                  <h2 className="title pt-16 text-anime-style-3">Vodič kroz naše programe</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" id="service-slide-1">
          <div className="box-swiper-padding">
            <Swiper {...(swiperOptions as any)} className="owl-carousel owl-theme" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
              {/* single slider box */}
              <SwiperSlide className="vl-single-service-box" data-background="./assets/img/eduka/workshop-presenter.png">
                <div className="vl-service-icon-box">
                  <div className="icon">
                    <span className="icon1">
                      <img src="assets/img/icons/vl-service-icon-1.1.svg" alt="" />
                    </span>
                  </div>
                  <div className="content">
                    <h4 className="title pt-24">
                      <Link href="/about">Programi usavršavanja</Link>
                    </h4>
                    <p className="para pt-16 pb-24">Bilo da se prijavljujete za obuku ili savetovanje, obezbeđujemo jasne informacije i podršku na svakom koraku.</p>
                    <Link href="/about" className="learnmore">
                      Saznaj više
                      <span className="right-arow">
                        <i className="fa-regular fa-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              {/* single slider box */}
              <SwiperSlide className="vl-single-service-box" data-background="./assets/img/eduka/workshop-lecture.png">
                <div className="vl-service-icon-box">
                  <div className="icon">
                    <span className="icon1">
                      <img src="assets/img/icons/vl-service-icon-1.2.svg" alt="" />
                    </span>
                  </div>
                  <div className="content">
                    <h4 className="title pt-24">
                      <Link href="/about">Stručne radionice</Link>
                    </h4>
                    <p className="para pt-16 pb-24">Prilagođeno različitim profilima zdravstvenih radnika i saradnika, sa praktičnim primerima i smernicama.</p>
                    <Link href="/about" className="learnmore">
                      Saznaj više
                      <span className="right-arow">
                        <i className="fa-regular fa-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              {/* single slider box */}
              <SwiperSlide className="vl-single-service-box" data-background="./assets/img/eduka/workshop-demonstration.png">
                <div className="vl-service-icon-box">
                  <div className="icon">
                    <span className="icon1">
                      <img src="assets/img/icons/vl-service-icon-1.3.svg" alt="" />
                    </span>
                  </div>
                  <div className="content">
                    <h4 className="title pt-24">
                      <Link href="/about">Online obuke</Link>
                    </h4>
                    <p className="para pt-16 pb-24">Materijali i resursi za kontinuirano usavršavanje i profesionalni razvoj.</p>
                    <Link href="/about" className="learnmore">
                      Saznaj više
                      <span className="right-arow">
                        <i className="fa-regular fa-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              {/* single slider box */}
              <SwiperSlide className="vl-single-service-box" data-background="./assets/img/eduka/workshop-audience-front.png">
                <div className="vl-service-icon-box">
                  <div className="icon">
                    <span className="icon1">
                      <img src="assets/img/icons/vl-service-icon-1.1.svg" alt="" />
                    </span>
                  </div>
                  <div className="content">
                    <h4 className="title pt-24">
                      <Link href="/about">Programi usavršavanja</Link>
                    </h4>
                    <p className="para pt-16 pb-24">Bilo da se prijavljujete za obuku ili savetovanje, obezbeđujemo jasne informacije i podršku na svakom koraku.</p>
                    <Link href="/about" className="learnmore">
                      Saznaj više
                      <span className="right-arow">
                        <i className="fa-regular fa-arrow-right" />
                      </span>
                    </Link>
                  </div>
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
      {/*================= Service section End =================*/}
    </>
  );
}


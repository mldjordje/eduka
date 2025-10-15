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
      slidesPerView: 2,
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
                    Our Service
                  </h5>
                  <h2 className="title pt-16 text-anime-style-3">Your Complete Guide to Dental Health</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" id="service-slide-1">
          <div className="box-swiper-padding">
            <Swiper {...swiperOptions} className="owl-carousel owl-theme" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
              {/* single slider box */}
              <SwiperSlide className="vl-single-service-box" data-background="./assets/img/service/vl-service-thumb1.1.png">
                <div className="vl-service-icon-box">
                  <div className="icon">
                    <span className="icon1">
                      <img src="assets/img/icons/vl-service-icon-1.1.svg" alt="" />
                    </span>
                  </div>
                  <div className="content">
                    <h4 className="title pt-24">
                      <Link href="/service-single">Restorative Solutions</Link>
                    </h4>
                    <p className="para pt-16 pb-24">Whether you’re here for routine care or specialized treatment, our is committed to providing gentle, compassionate care.</p>
                    <Link href="/service-single" className="learnmore">
                      Learn More
                      <span className="right-arow">
                        <i className="fa-regular fa-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              {/* single slider box */}
              <SwiperSlide className="vl-single-service-box" data-background="./assets/img/service/vl-service-thumb1.2.png">
                <div className="vl-service-icon-box">
                  <div className="icon">
                    <span className="icon1">
                      <img src="assets/img/icons/vl-service-icon-1.2.svg" alt="" />
                    </span>
                  </div>
                  <div className="content">
                    <h4 className="title pt-24">
                      <Link href="/service-single">Periodontal Therapy</Link>
                    </h4>
                    <p className="para pt-16 pb-24">For a younger patients, Pediatric Dentistry offers a comfortable and fun environment, helping children build healthy habits.</p>
                    <Link href="/service-single" className="learnmore">
                      Learn More
                      <span className="right-arow">
                        <i className="fa-regular fa-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              {/* single slider box */}
              <SwiperSlide className="vl-single-service-box" data-background="./assets/img/service/vl-service-thumb1.3.png">
                <div className="vl-service-icon-box">
                  <div className="icon">
                    <span className="icon1">
                      <img src="assets/img/icons/vl-service-icon-1.3.svg" alt="" />
                    </span>
                  </div>
                  <div className="content">
                    <h4 className="title pt-24">
                      <Link href="/service-single">Pediatric Dentistry</Link>
                    </h4>
                    <p className="para pt-16 pb-24">Our Cosmetic Dentistry options, including whitening &amp; veneers, are crafted enhance your confidence with a radiant, beautiful.</p>
                    <Link href="/service-single" className="learnmore">
                      Learn More
                      <span className="right-arow">
                        <i className="fa-regular fa-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              {/* single slider box */}
              <SwiperSlide className="vl-single-service-box" data-background="./assets/img/service/vl-service-thumb1.1.png">
                <div className="vl-service-icon-box">
                  <div className="icon">
                    <span className="icon1">
                      <img src="assets/img/icons/vl-service-icon-1.1.svg" alt="" />
                    </span>
                  </div>
                  <div className="content">
                    <h4 className="title pt-24">
                      <Link href="/service-single">Restorative Solutions</Link>
                    </h4>
                    <p className="para pt-16 pb-24">Whether you’re here for routine care or specialized treatment, our is committed to providing gentle, compassionate care.</p>
                    <Link href="/service-single" className="learnmore">
                      Learn More
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

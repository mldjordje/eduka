"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const swiperOptions = {
  modules: [Autoplay],
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
};
export default function Section4() {
  return (
    <>
      {/*================= Brand section start =================*/}
      <section className="vl-brand-area-inner fix pt-70 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="vl-brand-iner-title">
                <h3 className="title">
                  Trusted by the industry's <br /> leading insurance provider
                </h3>
              </div>
            </div>
            <div className="col-lg-8">
              <Swiper {...swiperOptions} id="brand-active" className="p-relative owl-carousel owl-theme">
                {/* single brand item */}
                <SwiperSlide className="vl-single-brand-item">
                  <img src="assets/img/brand/vl-brand-1.1.png" alt="" />
                </SwiperSlide>
                {/* single brand item */}
                <SwiperSlide className="vl-single-brand-item">
                  <img src="assets/img/brand/vl-brand-1.2.png" alt="" />
                </SwiperSlide>
                {/* single brand item */}
                <SwiperSlide className="vl-single-brand-item">
                  <img src="assets/img/brand/vl-brand-1.3.png" alt="" />
                </SwiperSlide>
                {/* single brand item */}
                <SwiperSlide className="vl-single-brand-item">
                  <img src="assets/img/brand/vl-brand-1.2.png" alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      {/*================= Brand section End =================*/}
    </>
  );
}

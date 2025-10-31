"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";
const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function Section1() {
  const [isOpen, setOpen] = useState(false);

return (
  <>
    {/*================= Banner section start =================*/}
    <Swiper {...swiperOptions} id="banner-slid1e" className="swiper owl-carousel owl-theme position-relative">
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          {/* single slider */}
          <div className="vl-banner-area" data-background="./assets/img/eduka/workshop-presenter.png">
            <div className="shape shape-1">
              <img src="assets/img/shape/vl-hero-shape-1.1.svg" alt="" />
            </div>
            <div className="shap3e circle">
              <img src="assets/img/shape/vl-star-shape-1.1.svg" alt="" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 fix">
                  <div className="vl-banner-area-content fix p-relative">
                    <h5 className="subtitle">DobrodoÅ¡li na Eduku</h5>
                    <h1 className="title text-anime-style-3 pt-16 pb-16">
                      UdruÅ¾enje zdravstvenih radnika i saradnika NiÅ¡avskog okruga
                    </h1>
                    <p className="para pb-32">
                      Eduka okuplja medicinske radnike i zdravstvene saradnike sa ciljem unapreÄ‘enja struke,
                      razmene znanja i podizanja kvaliteta zdravstvene zaÅ¡tite kroz kontinuiranu edukaciju.
                    </p>
                    {/* btn */}
                    <div
                      className="vl-hero-btn"
                      data-aos="fade-up"
                      data-aos-duration={800}
                      data-aos-delay={300}
                    >
                      <Link href="/about" className="vl-btn-primary">
                        Saznaj viÅ¡e
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 p-relative">
                  <div className="video-shape">
                    <img src="assets/img/eduka/workshop-audience-side.png" alt="" />
                    {/* video removed */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          {/* single slider */}
          <div className="vl-banner-area" data-background="./assets/img/eduka/workshop-lecture.png">
            <div className="shape shape-1">
              <img src="assets/img/shape/vl-hero-shape-1.1.svg" alt="" />
            </div>
            <div className="shap3e circle">
              <img src="assets/img/shape/vl-star-shape-1.1.svg" alt="" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 fix">
                  <div className="vl-banner-area-content fix p-relative">
                    <h5 className="subtitle">Kontinuirana edukacija</h5>
                    <h1 className="title text-anime-style-3 pt-16 pb-16">
                      UlaÅ¾emo u znanje i profesionalni razvoj zdravstvenih radnika
                    </h1>
                    <p className="para pb-32">
                      Eduka organizuje KME programe, radionice i online seminare sa ciljem stalnog usavrÅ¡avanja
                      zdravstvenih radnika svih profila.
                    </p>
                    {/* btn */}
                    <div
                      className="vl-hero-btn"
                      data-aos="fade-up"
                      data-aos-duration={800}
                      data-aos-delay={300}
                    >
                      <Link
                        href="https://eduka.rs/edukacije"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="vl-btn-primary"
                      >
                        Pogledaj edukacije
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 p-relative">
                  <div className="video-shape">
                    <img src="assets/img/eduka/workshop-audience-front.png" alt="" />
                    {/* video removed */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          {/* single slider */}
          <div className="vl-banner-area" data-background="./assets/img/eduka/workshop-demonstration.png">
            <div className="shape shape-1">
              <img src="assets/img/shape/vl-hero-shape-1.1.svg" alt="" />
            </div>
            <div className="shap3e circle">
              <img src="assets/img/shape/vl-star-shape-1.1.svg" alt="" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 fix">
                  <div className="vl-banner-area-content fix p-relative">
                    <h5 className="subtitle">Postani deo zajednice</h5>
                    <h1 className="title text-anime-style-3 pt-16 pb-16">
                      Zajedno gradimo bolju buduÄ‡nost zdravstvene profesije
                    </h1>
                    <p className="para pb-32">
                      PridruÅ¾i se udruÅ¾enju Eduka i doprinesi razvoju zdravstvene zaÅ¡tite kroz saradnju,
                      razmenu iskustava i zajedniÄke projekte.
                    </p>
                    {/* btn */}
                    <div
                      className="vl-hero-btn"
                      data-aos="fade-up"
                      data-aos-duration={800}
                      data-aos-delay={300}
                    >
                      <Link href="/prijava" className="vl-btn-primary">
                        Postani Älan
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 p-relative">
                  <div className="video-shape">
                    <img src="assets/img/eduka/workshop-audience-side.png" alt="" />
                    {/* video removed */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </div>
      <div className="swiper-pagination"></div>
    </Swiper>
    {/*================= Banner section End =================*/}
    {/* video modal removed */}
  </>
);

}






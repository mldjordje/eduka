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
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 8000,
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
  return (
    <>
      <Swiper {...(swiperOptions as any)} id="banner-slid1e" className="swiper owl-carousel owl-theme position-relative">
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div className="vl-banner-area" data-background="./assets/img/eduka/hero-1.jpg">
              <div className="shape shape-1">
                <img src="assets/img/shape/vl-hero-shape-1.1.svg" alt="" />
              </div>
              <div className="shap3e circle"></div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 fix">
                    <div className="vl-banner-area-content fix p-relative">
                      <h5 className="subtitle">Добро дошли у Едуку</h5>
                      <h1 className="title text-anime-style-3 pt-16 pb-16">Удружење здравствених радника Нишавског округа</h1>
                      <p className="para pb-24">
                        Удружење Едука чине здравствени радници и сарадници који желе да се континуирано усавршавају, да размењују знања и да заједно подижу стандарде струке.
                      </p>
                      <p className="para pb-32">
                        Планирамо и реализујемо акредитоване програме континуиране едукације, издајемо сертификате и повезујемо предаваче, институције и чланове широм Нишавског округа.
                      </p>
                      <div className="vl-hero-btn" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                        <Link href="/about" className="vl-btn-primary">
                          Сазнај више
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 p-relative">
                    <div className="video-shape">
                      <img src="assets/img/eduka/hero-1.jpg" alt="Чланови удружења Едука" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <div className="vl-banner-area" data-background="./assets/img/eduka/hero-2.jpg">
              <div className="shape shape-1">
                <img src="assets/img/shape/vl-hero-shape-1.1.svg" alt="" />
              </div>
              <div className="shap3e circle"></div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 fix">
                    <div className="vl-banner-area-content fix p-relative">
                      <h5 className="subtitle">Континуирана едукација</h5>
                      <h1 className="title text-anime-style-3 pt-16 pb-16">Улажемо у знање и професионални развој</h1>
                      <p className="para pb-32">
                        Едука организује КМЕ програме, радионице и онлајн семинаре који прате актуелне прописе и потребе здравствених установа у региону.
                      </p>
                      <div className="vl-hero-btn" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                        <Link href="https://eduka.rs/edukacije" prefetch={false} target="_blank" rel="noopener noreferrer" className="vl-btn-primary">
                          Погледајте едукације
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 p-relative">
                    <div className="video-shape">
                      <img src="assets/img/eduka/hero-2.jpg" alt="Предавање удружења Едука" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <div className="vl-banner-area" data-background="./assets/img/eduka/hero-3.jpg">
              <div className="shape shape-1">
                <img src="assets/img/shape/vl-hero-shape-1.1.svg" alt="" />
              </div>
              <div className="shap3e circle"></div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 fix">
                    <div className="vl-banner-area-content fix p-relative">
                      <h5 className="subtitle">Постаните део заједнице</h5>
                      <h1 className="title text-anime-style-3 pt-16 pb-16">Заједно градимо бољу будућност струке</h1>
                      <p className="para pb-32">
                        Чланство у Едуци обезбеђује приступ програмима, менторству, правовременим информацијама и умрежавању са колегама из целе Србије.
                      </p>
                      <div className="vl-hero-btn" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                        <Link href="/postanite-clan" className="vl-btn-primary">
                          Постани члан
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 p-relative">
                    <div className="video-shape">
                      <img src="assets/img/eduka/hero-3.jpg" alt="Јачање професионалне заједнице" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </>
  );
}

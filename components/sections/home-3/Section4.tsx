"use client";
import Link from "next/link";
import "@/node_modules/react-modal-video/css/modal-video.css";
import ModalVideo from "react-modal-video";
import { useState } from "react";
export default function Section4() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/*================= Video section start =================*/}
      <ModalVideo channel="youtube" isOpen={isOpen} onClose={() => setOpen(false)} videoId="vR24qT-I5ko" />
      <section id="clinic" className="vl-video-thumb-area fix pt-100 pb-48">
        <div className="container">
          <div className="video-thumb br-8" data-background="./assets/img/banner/vl-video-thumb-3.1.png">
            <div className="row">
              <div className="col-lg-5 mx-auto">
                <div className="vl-video-content3">
                  <div className="vl-section-title3 mb-32 text-center">
                    <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                      visit clinic
                    </h5>
                    <h2 className="title pt-16 text-anime-style-3">Comprehensive Dental Care For All Ages</h2>
                  </div>
                  <div className="video-play-btn3" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                    <div className="play-icon">
                      <div className="play-ico3n" onClick={() => setOpen(true)}>
                        <div className="popup-video">
                          <i className="fa-solid fa-play" />
                        </div>
                      </div>
                      <cite className="play-text">Play Video</cite>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================= Video section start =================*/}
    </>
  );
}

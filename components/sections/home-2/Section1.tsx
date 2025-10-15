"use client";
import Link from "next/link";
import "@/node_modules/react-modal-video/css/modal-video.css";
import ModalVideo from "react-modal-video";
import { useState } from "react";

export default function Section1() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/*================= Banner section start =================*/}
      <section className="vl-banner-area2 fix" data-background="./assets/img/banner/vl-banner-1.2.jpg">
        <div className="shape1 aniamtion-key-1">
          <img src="assets/img/icons/vl-teeth-2.1.svg" alt="" />
        </div>
        <div className="shape2 aniamtion-key-1">
          <img src="assets/img/icons/vl-teeth-2.1.svg" alt="" />
        </div>
        <div className="shape3 aniamtion-key-1">
          <img src="assets/img/icons/vl-teeth-2.1.svg" alt="" />
        </div>
        <div className="shape4 circle">
          <img src="assets/img/shape/vl-star-shape2.2.svg" alt="" />
        </div>
        <div className="container p-relative">
          {/* btn */}
          <div className="vl-tlk-btn">
            <Link href="/contact" className="vl-talkbtn">
              <span>
                <i className="fa-regular fa-arrow-right" />
              </span>
              Let’s Talk
            </Link>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="vl-banner-area-content-2 p-relative">
                <h1 className="headingone pb-20 text-anime-style-3">
                  Bright Smiles <br /> <span className="heading2 text-anime-style-3">Healthier Lives</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="vl-banner-video">
        <div className="container">
          <div className="vl-video-thum2b">
            <div className="vl-video-thumb image-anime">
              <img className="w-100" src="assets/img/banner/vl-banner-video2.1.png" alt="" />
            </div>
            {/* video popup btn */}
            <div className="vl-video-pla2y" onClick={() => setOpen(true)}>
              <Link href="#" className="video-play-btn popup-video">
                <i className="fa-solid fa-play" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*================= Banner section End =================*/}
      <ModalVideo channel="youtube" isOpen={isOpen} videoId="7e90gBu4pas" onClose={() => setOpen(false)} />
    </>
  );
}

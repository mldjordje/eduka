"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface PostImageSliderProps {
  images: string[];
  title: string;
}

export default function PostImageSlider({ images, title }: PostImageSliderProps) {
  if (!images || images.length === 0) return null;
  if (images.length === 1) {
    return (
      <div className="vl-blog-thumb image-anime pb-30">
        <img className="w-100" src={images[0]} alt={title} />
      </div>
    );
  }

  return (
    <div className="pb-30">
      <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} className="vl-blog-slider">
        {images.map((src, idx) => (
          <SwiperSlide key={`${src}-${idx}`}>
            <div className="vl-blog-thumb image-anime">
              <img className="w-100" src={src} alt={`${title} ${idx + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


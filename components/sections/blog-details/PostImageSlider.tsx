"use client";

import { useEffect, useState } from "react";

interface PostImageSliderProps {
  images: string[];
  title: string;
}

export default function PostImageSlider({ images, title }: PostImageSliderProps) {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeImageIndex === null) {
      document.body.style.removeProperty("overflow");
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImageIndex(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImageIndex]);

  if (!images || images.length === 0) return null;

  const activeImageSrc = activeImageIndex !== null ? images[activeImageIndex] : null;
  const activeImageAlt = activeImageIndex !== null ? `${title} ${activeImageIndex + 1}` : title;

  const renderImageCard = (src: string, index: number) => (
    <button
      key={`${src}-${index}`}
      type="button"
      className="vl-post-image-trigger"
      onClick={() => setActiveImageIndex(index)}
      aria-label={`Otvori sliku ${index + 1} preko celog ekrana`}
    >
      <div className="vl-blog-thumb image-anime">
        <img className="w-100" src={src} alt={images.length === 1 ? title : `${title} ${index + 1}`} />
      </div>
    </button>
  );

  if (images.length === 1) {
    return (
      <>
        <div className="pb-30">{renderImageCard(images[0], 0)}</div>
        {activeImageSrc && (
          <div className="vl-post-lightbox" role="dialog" aria-modal="true" aria-label={title} onClick={() => setActiveImageIndex(null)}>
            <button
              type="button"
              className="vl-post-lightbox-close"
              aria-label="Zatvori prikaz slike"
              onClick={() => setActiveImageIndex(null)}
            >
              X
            </button>
            <div className="vl-post-lightbox-content" onClick={(event) => event.stopPropagation()}>
              <img className="vl-post-lightbox-image" src={activeImageSrc} alt={title} />
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <div className="pb-30 d-flex flex-wrap gap-3">
        {images.map((src, idx) => (
          <div key={`${src}-${idx}`} style={{ flex: "1 1 320px" }}>
            {renderImageCard(src, idx)}
          </div>
        ))}
      </div>
      {activeImageSrc && (
        <div className="vl-post-lightbox" role="dialog" aria-modal="true" aria-label={title} onClick={() => setActiveImageIndex(null)}>
          <button
            type="button"
            className="vl-post-lightbox-close"
            aria-label="Zatvori prikaz slike"
            onClick={() => setActiveImageIndex(null)}
          >
            X
          </button>
          <div className="vl-post-lightbox-content" onClick={(event) => event.stopPropagation()}>
            <img className="vl-post-lightbox-image" src={activeImageSrc} alt={activeImageAlt} />
          </div>
        </div>
      )}
    </>
  );
}

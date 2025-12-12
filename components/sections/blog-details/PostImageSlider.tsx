"use client";

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
    <div className="pb-30 d-flex flex-wrap gap-3">
      {images.map((src, idx) => (
        <div key={`${src}-${idx}`} className="vl-blog-thumb image-anime" style={{ flex: "1 1 320px" }}>
          <img className="w-100" src={src} alt={`${title} ${idx + 1}`} />
        </div>
      ))}
    </div>
  );
}

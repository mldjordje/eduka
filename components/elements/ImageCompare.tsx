"use client";

import BeforeAfterSlider from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

interface Props {
  before: string;
  after: string;
}

export default function ImageCompare({ before, after }: Props) {
  return (
    <div style={{ width: "100%", height: "auto" }}>
      <BeforeAfterSlider firstImage={{ imageUrl: after }} secondImage={{ imageUrl: before }} />
    </div>
  );
}

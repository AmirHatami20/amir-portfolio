"use client";

import { useSwiper } from "swiper/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const WorkSliderBtn = () => {
  const swiper = useSwiper();

  return (
    <div className="absolute bottom-0 right-0 z-20 flex gap-2">
      <button
        type="button"
        onClick={() => swiper.slidePrev()}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#232329] text-white text-xl transition-all duration-300 hover:bg-accent hover:text-primary"
        aria-label="Previous project"
      >
        <BsArrowLeft />
      </button>

      <button
        type="button"
        onClick={() => swiper.slideNext()}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#232329] text-white text-xl transition-all duration-300 hover:bg-accent hover:text-primary"
        aria-label="Next project"
      >
        <BsArrowRight />
      </button>
    </div>
  );
};

export default WorkSliderBtn;

"use client";

import { useSwiper } from "swiper/react";
import { ReactNode } from "react";

interface SwiperButtonPrevProps {
  children: ReactNode;
}

const SwiperButtonPrev: React.FC<SwiperButtonPrevProps> = ({ children }) => {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => swiper.slidePrev()}
      className="w-[45px] h-[45px] z-30 hover:bg-[#1d1d1f] hover:text-white  shadow-button flex justify-center items-center"
    >
      {children}
    </button>
  );
};

export default SwiperButtonPrev;

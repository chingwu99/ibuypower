"use client";

import { useSwiper } from "swiper/react";
import { ReactNode } from "react";

interface SwiperButtonNextProps {
  children: ReactNode;
}

const SwiperButtonNext: React.FC<SwiperButtonNextProps> = ({ children }) => {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => swiper.slideNext()}
      className="w-[45px] h-[45px] z-30  transition duration-200 hover:text-white   hover:bg-[#1d1d1f]  shadow-button flex justify-center items-center"
    >
      {children}
    </button>
  );
};

export default SwiperButtonNext;

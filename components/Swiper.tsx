"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import SlideCard from "@/components/SlideCard";

const IndexSwiper = () => {
  return (
    <div className=" max-w-[1440px] w-full h-full">
      <div className="relative flex w-full h-full ">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper"
        >
          <div>
            <SwiperSlide>
              <SlideCard />
            </SwiperSlide>
            <SwiperSlide>
              <SlideCard />
            </SwiperSlide>
            <SwiperSlide>
              <SlideCard />
            </SwiperSlide>
            <SwiperSlide>
              <SlideCard />
            </SwiperSlide>
            <SwiperSlide>
              <SlideCard />
            </SwiperSlide>
            <SwiperSlide>
              <SlideCard />
            </SwiperSlide>
            <SwiperSlide>
              <SlideCard />
            </SwiperSlide>
            <SwiperSlide>
              <SlideCard />
            </SwiperSlide>
            <SwiperSlide>
              <SlideCard />
            </SwiperSlide>
          </div>

          <div className=" absolute  right-[10px] top-0  lg:block ">
            <div className="swiper-buttons mt-1 flex gap-4">
              <button
                className="w-[45px] h-[45px] z-30 hover:bg-[#1d1d1f]  shadow-button
                "
              >
                x
              </button>
              <button className="w-[45px] h-[45px] z-30  transition duration-200  hover:bg-[#1d1d1f]  shadow-button">
                x
              </button>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default IndexSwiper;

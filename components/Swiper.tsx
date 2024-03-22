"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import components
import SwiperButtonPrev from "./SwiperButtonPrev";
import SwiperButtonNext from "./SwiperButtonNext";
import SlideCard from "@/components/SlideCard";
// Import Swiper styles
import "swiper/css";
// Import Icon
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
// Import Type
import { SwiperDataProps } from "@/types/index";
// Import uuid
import { v4 as uuidv4 } from "uuid";

const SwiperDataList: SwiperDataProps[] = [
  {
    id: uuidv4(),
    isPublic: true,
    imageSrc: "/pc-01.webp",
    name: "RDY Lancool 005",
    pointSystem: "Windows 11 Home",
    pointCpu: "Intel® Core™ i7-14700KF CPU",
    pointCard: "GeForce RTX 4080 SUPER - 16GB",
    pointSsd: "2TB M.2 NVMe Gen4 SSD",
    pointRam: "32GB DDR5-6000MHz RGB RAM",
    save: 300,
    price: 2399,
    originalPrice: 2699,
    affirm: 116,
    shippingDate: "Delivery By Tuesday, Mar 26",
  },
  {
    id: uuidv4(),
    isPublic: true,
    imageSrc: "/pc-02.webp",
    name: "RDY Lancool 006",
    pointSystem: "Windows 11 Home",
    pointCpu: "Intel® Core™ i7-14700KF CPU",
    pointCard: "GeForce RTX 4080 SUPER - 16GB",
    pointSsd: "2TB M.2 NVMe Gen4 SSD",
    pointRam: "32GB DDR5-6000MHz RGB RAM",
    save: 300,
    price: 1399,
    originalPrice: 1699,
    affirm: 116,
    shippingDate: "Delivery By Tuesday, Mar 26",
  },
  {
    id: uuidv4(),
    isPublic: false,
    imageSrc: "/pc-03.webp",
    name: "RDY Lancool 007",
    pointSystem: "Windows 11 Home",
    pointCpu: "Intel® Core™ i8-14700KF CPU",
    pointCard: "GeForce RTX 4080 SUPER - 16GB",
    pointSsd: "2TB M.2 NVMe Gen4 SSD",
    pointRam: "32GB DDR5-6000MHz RGB RAM",
    save: 300,
    price: 2399,
    originalPrice: 2699,
    affirm: 116,
    shippingDate: "Estimate Ship By 04/02/2024",
  },
  {
    id: uuidv4(),
    isPublic: false,
    imageSrc: "/pc-04.webp",
    name: "RDY Lancool 008",
    pointSystem: "Windows 11 Home",
    pointCpu: "Intel® Core™ i9-14700KF CPU",
    pointCard: "GeForce RTX 4080 SUPER - 16GB",
    pointSsd: "2TB M.2 NVMe Gen4 SSD",
    pointRam: "32GB DDR5-6000MHz RGB RAM",
    save: 300,
    price: 3399,
    originalPrice: 3699,
    affirm: 116,
    shippingDate: "Estimate Ship By 04/02/2024",
  },
  {
    id: uuidv4(),
    isPublic: true,
    imageSrc: "/pc-05.webp",
    name: "RDY Lancool 004",
    pointSystem: "Windows 11 Home",
    pointCpu: "Intel® Core™ i10-14700KF CPU",
    pointCard: "GeForce RTX 4080 SUPER - 16GB",
    pointSsd: "2TB M.2 NVMe Gen4 SSD",
    pointRam: "32GB DDR5-6000MHz RGB RAM",
    save: 300,
    price: 4399,
    originalPrice: 4699,
    affirm: 116,
    shippingDate: "Delivery By Tuesday, Mar 26",
  },
];

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
          className="mySwiper relative"
        >
          <div>
            {SwiperDataList.map((data) => (
              <SwiperSlide key={data.id}>
                <SlideCard data={data} />
              </SwiperSlide>
            ))}
          </div>

          <div className=" absolute  right-[10px] top-0  lg:block ">
            <div className=" mt-1 flex gap-4">
              <SwiperButtonPrev>
                <IoIosArrowBack size={24} />
              </SwiperButtonPrev>
              <SwiperButtonNext>
                <IoIosArrowForward size={24} />
              </SwiperButtonNext>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default IndexSwiper;

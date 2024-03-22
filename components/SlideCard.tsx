"use client";

import Image from "next/image";
import affirmIcon from "@/public/icon-affirm.svg";
import { SwiperDataProps } from "@/types/index";

interface SlideCardProps {
  data: SwiperDataProps;
}

const SlideCard: React.FC<SlideCardProps> = ({ data }) => {
  const {
    isPublic,
    imageSrc,
    name,
    pointSystem,
    pointCpu,
    pointCard,
    pointSsd,
    pointRam,
    save,
    price,
    originalPrice,
    affirm,
    shippingDate,
  } = data;

  return (
    <div className="flex  justify-center items-center">
      <div className="h-[670px] w-[350px] rounded-[15px] mt-[70px] max-h-[600px] flex flex-col justify-center items-center  shadow-custom">
        <div className="relative flex h-full flex-col gap-2 p-5 overflow-hidden text-ellipsis whitespace-nowrap w-full">
          <div className="w-fit rounded-full border border-[#929292] px-2 py-0.5 text-[9px] font-[800] text-[#929292] absolute left-5 top-6">
            {isPublic ? "Prebuilt PC" : "Custom PC"}
          </div>
          <div className="relative flex justify-center h-full w-full">
            <Image
              src={`${imageSrc}`}
              alt="RDY Lancool 004"
              fill
              className=" object-contain"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="m-0 line-clamp-2 min-h-[40px] text-ellipsis whitespace-normal text-[16px] font-bold leading-[20px] hover:text-[#fe1b1b]">
              {name}
            </h4>

            <span className="relative top-[2px] h-[20px] px-1"></span>
            <ul className="flex flex-col items-start gap-2 overflow-hidden md:gap-1 ">
              <li className="list-none whitespace-normal text-start text-xs xl:text-sm">
                {pointSystem}
              </li>
              <li className="list-none whitespace-normal text-start text-xs xl:text-sm">
                {pointCpu}
              </li>
              <li className="list-none whitespace-normal text-start text-xs xl:text-sm">
                {pointCard}
              </li>
              <li className="list-none whitespace-normal text-start text-xs xl:text-sm">
                {pointSsd}
              </li>
              <li className="list-none whitespace-normal text-start text-xs xl:text-sm">
                {pointRam}
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-between rounded-b-[10px] bg-[#F2F6FA] p-5 w-full">
          <div className="flex flex-col">
            <div className="flex w-fit border-0 bg-[#FE1B1B] py-1 text-white gap-1 rounded-full px-2 text-[11px]">
              <span>SAVE</span>
              <span>${save.toLocaleString()}</span>
            </div>
            <div className="flex items-end gap-3 mt-3">
              <p className="text-[20px] font-bold">${price.toLocaleString()}</p>
              <p className="relative bottom-1 my-0 text-xs text-gray-400 line-through">
                ${originalPrice.toLocaleString()}
              </p>
            </div>
            <button className=" border-0 bg-transparent pl-0 text-start">
              <p className="flex  items-center">
                Starting at
                <span className="text-[#1694f5] mx-2">
                  {" "}
                  ${affirm.toLocaleString()}/mo{" "}
                </span>
                with
                <Image
                  src={affirmIcon}
                  alt="Affirm"
                  className="!w-[35px] !h-auto"
                />
              </p>
            </button>
          </div>
          <div className=" flex justify-between gap-2  xl:gap-1 mt-5 3xs:flex-col 3xsMax:flex-col 2xs:flex-row xs:flex-row">
            <div className="flex flex-col items-start">
              <span className="text-xs font-bold">Free Shipping</span>
              <span className="overflow-hidden text-ellipsis whitespace-nowrap text-xs">
                {shippingDate}
              </span>
            </div>
            <div className="">
              <button
                className=" hover:bg-[#FE1B1B]  hover:border-[#FE1B1B] text-[14px]  py-1  transition duration-300 ease-in-out border-solid border  relative flex  text-xs 2xs:text-sm  border-[#FE1B1B] text-[#FE1B1B] hover:text-white text-center px-3  rounded-[30px] bg-transparent"
                type="button"
              >
                {isPublic ? "Buy Now" : "Customize"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideCard;

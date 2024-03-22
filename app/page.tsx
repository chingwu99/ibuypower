import IndexSwiper from "@/components/Swiper";

export default function Home() {
  return (
    <div className="h-full mx-auto flex max-w-[1500px] flex-col items-center">
      <div className="flex flex-col items-center gap-1 p-2">
        <div className="text-[1.7rem] font-bold leading-9 md:text-3xl">
          Best Selling Gaming PC
        </div>
        <div className="text-2xl font-bold">Prebuilt &amp; Custom</div>
      </div>

      <IndexSwiper />
    </div>
  );
}

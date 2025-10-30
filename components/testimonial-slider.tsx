"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import { testimonialsData } from "@/lib/data";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const TestimonialSlider = () => {
  return (
    <Swiper
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 8000, disableOnInteraction: false }}
      className="testimonialsSlider min-h-100 max-w-[98vw] xl:max-w-177.5"
    >
      {testimonialsData.map(({ id, name, position, message }) => (
        <SwiperSlide key={id}>
          <div className="h-full flex flex-col items-start justify-center cursor-pointer">
            <div className="max-w-170 mx-auto text-center xl:text-left">
              <p className="relative mb-7 text-[22px] text-[#4c5354] font-light leading-[190%] text-center xl:text-left before:bg-quoteLeft before:bg-contain before:bg-bottom before:inline-block before:top-0 before:size-10 before:bg-no-repeat after:bg-quoteRight after:bg-contain after:bg-bottom after:inline-block after:top-0 after:size-10 after:bg-no-repeat">
                <span className="mx-2">{message}</span>
              </p>
              <p className="text-2xl text-[#4c5354] font-semibold">{name}</p>
              <p className="text-[#9ab4b7] font-medium uppercase tracking-[2.24px]">
                {position}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

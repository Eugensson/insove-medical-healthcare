"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import { SocialList } from "@/components/social-list";

import { teamData } from "@/lib/data";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const OurTeamSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
      }}
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 10000, disableOnInteraction: false }}
      className="testimonialsSlider h-170 xl:h-110"
    >
      {teamData.map(
        ({ id, name, position, description, imageSrc, socials }) => (
          <SwiperSlide key={id}>
            <div className="flex-1 flex flex-col xl:flex-row cursor-pointer">
              <div className="flex xl:flex-1 flex-col xl:flex-row items-center gap-7.5">
                <div className="relative w-full xl:w-77 h-85 lg:h-120 xl:h-85 rounded-2xl overflow-hidden">
                  <Image
                    src={imageSrc}
                    fill
                    alt={`${name} image profile`}
                    className="object-cover object-center"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="h4 mb-2.5">{name}</h3>
                  <p className="mb-5 font-medium uppercase tracking-[2.24px] text-[#9ab4b7]">
                    {position}
                  </p>
                  <p className="mb-6.5 max-w-80 font-light">{description}</p>
                  <SocialList socials={socials} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
};

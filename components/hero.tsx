import Image from "next/image";
import { RiHeartPulseLine } from "react-icons/ri";

export const Hero = () => {
  return (
    <section className="py-12 xl:pb-0 overflow-hidden bg-grey">
      <div className="container h-full">
        <div className="h-full flex flex-col xl:flex-row items-center justify-between">
          <div className="xl:w-[48%] text-center xl:text-left">
            <div className="py-2.5 px-5 mb-6.5 mx-auto xl:mx-0 w-max flex items-center gap-x-2 rounded-full bg-white">
              <RiHeartPulseLine size={24} className="text-accent" />
              <span className="text-base uppercase font-medium text-[#9ab4b7] tracking-[2.24px]">
                Live your life
              </span>
            </div>
            <h1 className="h1 mb-6">We care about your health</h1>
            <p className="mb-10.5 md:max-w-xl">
              At Insove Medical Healthcare, we provide trusted and compassionate
              care designed to improve your well-being. Our dedicated team
              ensures advanced treatments and personal attention for a
              healthier, happier life.
            </p>
            <button
              type="button"
              className="btn btn-lg btn-accent mx-auto xl:mx-0"
            >
              Contact Us
            </button>
          </div>
          <div className="hidden xl:flex max-w-203.5 self-end">
            <Image
              src="/assets/img/hero/img.png"
              alt="hero"
              width={933}
              height={796}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

import { RiMapPin2Fill, RiPhoneFill } from "react-icons/ri";

import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";
import { MobileNav } from "@/components/mobile-nav";
import { SearchForm } from "@/components/search-form";

export const Header = () => {
  return (
    <header className="py-8 lg:pt-6 lg:pb-14">
      <div className="container lg:relative flex flex-col lg:flex-row lg:justify-between gap-y-4 lg:gap-y-0">
        <Logo />

        <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 lg:gap-x-10">
          <div className="flex items-center justify-center lg:justify-normal gap-x-2">
            <RiMapPin2Fill size={24} className="text-accent" />
            <p className="text-secondary">123, Main st., Chicago, IL</p>
          </div>
          <div className="flex items-center justify-center lg:justify-normal gap-x-2">
            <RiPhoneFill size={24} className="text-accent" />
            <p className="text-secondary">(773) 555-1234</p>
          </div>
          <button
            type="button"
            className="btn btn-sm btn-outline w-60 lg:w-auto mx-auto lg:mx-0"
          >
            Book now
          </button>
        </div>
        <MobileNav />
        <div className="absolute left-0 -bottom-21.5 h-16 w-full bg-white shadow-custom1 rounded-[10px] hidden lg:flex lg:items-center lg:justify-between lg:px-12.5">
          <Nav
            containerStyles="flex items-center gap-x-4"
            itemStyles="border-r border-gray-300 pr-4 last-of-type:border-none"
            linkStyles="text-secondary hover:text-accent transition-colors duration-300"
          />
          <SearchForm
            containerStyles="relative flex gap-x-2.5"
            labelStyles="flex items-center justify-center group"
            inputStyles="w-25 focus:w-45 focus:border-b-2 focus:border-accent outline-none placeholder:italic placeholder:text-base transition-all duration-150"
          />
        </div>
      </div>
    </header>
  );
};

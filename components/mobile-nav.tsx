"use client";

import { useState } from "react";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";
import { SearchForm } from "@/components/search-form";

import { cn } from "@/lib/utils";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 z-20 h-screen w-75 shadow-2xl lg:hidden transition-all duration-300 bg-white",
        isOpen ? "left-0" : "-left-75"
      )}
    >
      <button
        type="button"
        className="relative top-8 -right-full size-8 flex items-center justify-center rounded-r-lg cursor-pointer transition-all bg-primary"
        aria-label={`${
          isOpen ? "Close mobile menu button" : "Open mobile menu button"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <RiArrowLeftSLine size={24} className="text-white" />
        ) : (
          <RiArrowRightSLine size={24} className="text-white" />
        )}
      </button>
      <div className="px-12 h-full flex flex-col gap-y-12">
        <Logo />
        <Nav linkStyles="text-secondary hover:text-accent transition-colors duration-300" />
        <SearchForm
          containerStyles="relative flex gap-x-2.5"
          inputStyles="w-40 border-b-2 focus:border-accent outline-none placeholder:italic"
        />
      </div>
    </nav>
  );
};

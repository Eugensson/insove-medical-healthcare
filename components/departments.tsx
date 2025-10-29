"use client";

import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { Department } from "@/types";
import { departmentData } from "@/lib/data";

export const Departments = () => {
  const [activeDepartment, setActiveDepartment] = useState<Department>(
    departmentData[0]
  );

  return (
    <section className="section">
      <div className="relative min-h-147 max-w-367 mx-4 xl:mx-auto px-6 xl:px-0 py-12 xl:pt-20 xl:pb-22.5 flex items-center bg-departments bg-cover xl:bg-auto bg-no-repeat bg-center rounded-[20px]">
        <div className="container">
          <div className="flex flex-col xl:flex-row gap-x-5">
            <ul className="mb-12.5 xl:mb-0 xl:pt-3 xl:w-77.5 flex flex-col gap-y-7.5 xl:gap-y-10 font-medium uppercase text-center xl:text-left text-base text-[#9ab4b7] xl:text-lg">
              {departmentData.map(({ id, name }, index) => (
                <li key={id}>
                  <button
                    type="button"
                    className={cn(
                      "hover:text-accent transition-colors duration-300 cursor-pointer",
                      activeDepartment.id === id && "text-accent"
                    )}
                    onClick={() => setActiveDepartment(departmentData[index])}
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
            <div className="xl:w-160">
              <h2 className="h2 mb-5 text-center xl:text-left">
                {activeDepartment.name}
              </h2>
              <p className="mb-7.5 font-light text-center xl:text-left">
                {activeDepartment.description1}
                <br />
                <br />
                {activeDepartment.description2}
              </p>
              <ul className="mb-12.5 mx-auto xl:mx-0 max-w-138 flex flex-col xl:flex-row items-center xl:justify-between">
                {activeDepartment.list.map((item) => (
                  <li
                    key={item}
                    className="text-accent border-r border-[#dcdcdc] last-of-type:border-none"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={activeDepartment.link}
                className="btn btn-lg btn-accent w-fit mx-auto xl:mx-0"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

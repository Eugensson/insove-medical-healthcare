"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { fadeIn } from "@/lib/variants";
import { servicesData } from "@/lib/data";

export const Services = () => {
  return (
    <section>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative -z-10 px-6 xl:px-0 xl:pt-17.5 h-92 max-w-366.5 mx-4 xl:mx-auto flex items-center xl:items-start bg-services bg-cover bg-no-repeat rounded-[20px]"
      >
        <div className="container">
          <div className="xl:mb-15 flex flex-col xl:flex-row items-center text-center xl:text-left">
            <motion.h2
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mb-4 xl:mb-0 flex-1 h2 text-white!"
            >
              Personalized Medical Care for Your Well-Being
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="flex-1 max-w-2xl xl:max-w-none text-white"
            >
              Experience exceptional healthcare with our trusted specialists. We
              combine advanced medical expertise, modern technology, and
              personalized attention to deliver outstanding patient care.
            </motion.p>
          </div>
        </div>
      </motion.div>
      <div className="container mt-8 xl:-mt-36">
        <ul className="px-8 xl:px-0 grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {servicesData.map(({ id, title, description, icon }, index) => (
            <motion.li
              variants={fadeIn("up", 0.4 + index * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              key={id}
              className="p-6 xl:min-h-72 flex flex-col items-center text-center rounded-[10px] shadow-custom2 bg-white"
            >
              <Image
                src={icon}
                width={50}
                height={50}
                alt="Service Icon"
                className="mb-3"
              />
              <h3 className="h3 mb-3">{title}</h3>
              <p className="max-w-75 text-sm font-light leading-normal">
                {description}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

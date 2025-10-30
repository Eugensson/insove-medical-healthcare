"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { RiHeartPulseLine } from "react-icons/ri";

import { fadeIn } from "@/lib/variants";

export const Hero = () => {
  return (
    <section className="py-12 xl:pb-0 overflow-hidden bg-grey">
      <div className="container h-full">
        <div className="h-full flex flex-col xl:flex-row items-center justify-between">
          <div className="xl:w-[48%] text-center xl:text-left">
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.8 }}
              className="py-2.5 px-5 mb-6.5 mx-auto xl:mx-0 w-max flex items-center gap-x-2 rounded-full bg-white"
            >
              <RiHeartPulseLine size={24} className="text-accent" />
              <span className="text-base uppercase font-medium text-[#9ab4b7] tracking-[2.24px]">
                Live your life
              </span>
            </motion.div>
            <motion.h1
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.8 }}
              className="h1 mb-6"
            >
              We care about your health
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.8 }}
              className="mb-10.5 md:max-w-xl"
            >
              At Insove Medical Healthcare, we provide trusted and compassionate
              care designed to improve your well-being. Our dedicated team
              ensures advanced treatments and personal attention for a
              healthier, happier life.
            </motion.p>
            <motion.button
              variants={fadeIn("down", 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.8 }}
              type="button"
              className="btn btn-lg btn-accent mx-auto xl:mx-0"
            >
              Contact Us
            </motion.button>
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

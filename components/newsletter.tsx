"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { fadeIn } from "@/lib/variants";

export const Newsletter = () => {
  return (
    <section className="relative py-12 md:h-111 flex items-center bg-accent overflow-hidden">
      <div className="absolute left-0 bottom-0">
        <Image
          src="/assets/img/newsletter/pattern.svg"
          width={526}
          height={444}
          alt="Newsletter pattern"
        />
      </div>
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-14">
          <div className="flex-1 z-10 text-center md:text-left">
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.8 }}
              className="text-base text-white tracking-[2.24px] font-medium uppercase"
            >
              Health Insights Newsletter
            </motion.p>
            <motion.h2
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.8 }}
              className="mb-4 h1 text-white!"
            >
              Get expert health tips & updates
            </motion.h2>
          </div>
          <motion.form
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.8 }}
            className="flex-1"
          >
            <div className="relative flex flex-col md:flex-row gap-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="h-16 w-full pl-7.5 bg-transparent border-2 border-white outline-none rounded-full placeholder:text-white/60 focus:text-white"
              />
              <button
                type="submit"
                className="md:absolute right-0 btn btn-lg btn-white"
              >
                Subscrube
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

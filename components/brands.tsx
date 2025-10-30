"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { brandData } from "@/lib/data";
import { fadeInOnScroll } from "@/lib/variants";

export const Brands = () => {
  return (
    <section className="section">
      <div className="container">
        <motion.ul
          variants={fadeInOnScroll(0.2, 0.6)}
          initial="hidden"
          whileInView="visible"
          className="container overflow-hidden flex"
        >
          {Array.from({ length: 2 }).map((_, index) => (
            <li key={index}>
              <motion.ul
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="flex gap-12"
              >
                {brandData.map(({ imageUrl, label }, index) => (
                  <div key={index} className="relative mr-12 w-52 h-20">
                    <Image
                      src={imageUrl}
                      alt={label}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </motion.ul>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

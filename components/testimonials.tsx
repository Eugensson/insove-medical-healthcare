"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { TestimonialSlider } from "@/components/testimonial-slider";

import { fadeIn } from "@/lib/variants";

export const Testimonials = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="py-12 xl:py-0 xl:min-h-150 bg-testimonials bg-cover bg-no-repeat bg-right"
    >
      <div className="container">
        <div className="flex flex-col xl:flex-row items-center gap-x-14">
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="hidden xl:block"
          >
            <Image
              src="/assets/img/testimonials/img.png"
              width={530}
              height={595}
              alt="testimonials"
            />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <TestimonialSlider />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

"use client";

import { motion } from "framer-motion";

import { OurTeamSlider } from "@/components/our-team-slider";

import { fadeIn } from "@/lib/variants";

export const Team = () => {
  return (
    <section className="section">
      <div className="container">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="h2 mb-12.5 text-center xl:text-left"
        >
          Our Team
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <OurTeamSlider />
        </motion.div>
      </div>
    </section>
  );
};

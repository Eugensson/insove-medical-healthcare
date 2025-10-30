"use client";

import { useRef } from "react";
import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";

import { statsData } from "@/lib/data";
import { fadeIn } from "@/lib/variants";

export const Stats = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  return (
    <section ref={sectionRef} className="section">
      <div className="container">
        <motion.ul
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col xl:flex-row justify-between gap-y-6"
        >
          {statsData.map(({ id, value, countText, text }, index) => (
            <li
              key={id}
              className="flex flex-1 flex-col items-center xl:border-r last-of-type:border-none border-accent-tertiary"
            >
              {isInView ? (
                <div>
                  <CountUp
                    end={value}
                    duration={2.5}
                    delay={0.4 + index * 0.4}
                    className="h1 xl:mb-2 text-accent-tertiary!"
                  />
                  <span className="h1 xl:mb-2 text-accent-tertiary!">
                    {countText}
                  </span>
                </div>
              ) : (
                <p className="h1 xl:mb-2 text-accent-tertiary!">0</p>
              )}

              <p className="w-9/10 mx-auto text-base text-center lg:text-lg font-light">
                {text}
              </p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

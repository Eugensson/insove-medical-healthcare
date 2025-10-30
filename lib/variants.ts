import { Variants, Transition } from "framer-motion";

export const fadeIn = (
  direction: "up" | "down" | "left" | "right",
  delay: number
): Variants => {
  return {
    hidden: {
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      opacity: 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      } as Transition,
    },
  };
};

export const fadeInOnScroll = (delay: number, duration: number): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      delay: delay,
      duration: duration,
      ease: [0.42, 0, 0.58, 1],
    } as Transition,
  },
});

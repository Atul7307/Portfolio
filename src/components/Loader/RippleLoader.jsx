"use client";
import { motion } from "framer-motion";
import React from "react";

const rippleCircle = {
  initial: {
    scale: 0,
    opacity: 1,
  },
  animate: {
    scale: 2,
    opacity: 0,
    transition: {
      duration: 1.2,
      repeat: Infinity,
      ease: "easeOut",
    },
  },
};

const RippleLoader = () => {
  return (
    <div className="relative w-10 h-10">
      <motion.div
        className="absolute inset-0 border-2 border-accent rounded-full"
        variants={rippleCircle}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute inset-0 border-2 border-accent rounded-full"
        variants={rippleCircle}
        initial="initial"
        animate="animate"
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0.6, // delay for second ripple
        }}
      />
    </div>
  );
};

export default RippleLoader;

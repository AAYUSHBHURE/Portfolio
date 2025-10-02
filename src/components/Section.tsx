"use client";

import { motion } from "framer-motion";
import { ComponentProps } from "react";

export function Section({
  children,
  className,
  ...props
}: ComponentProps<typeof motion.section>) {
  return (
    <motion.section
      {...props}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.2,
      }}
      viewport={{
        once: true,
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
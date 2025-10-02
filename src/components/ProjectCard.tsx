"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Link from "next/link";
import { ComponentProps } from "react";

export function ProjectCard(props: ComponentProps<typeof Link>) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <Link
      {...props}
      className="group/card relative isolate flex-1 rounded-2xl bg-gray-900/50 ring-1 ring-white/10 backdrop-blur-sm"
      onMouseMove={(e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();

        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(113, 226, 239, 0.2),
              transparent 80%
            )
          `,
        }}
      />
      <div {...props} />
    </Link>
  );
}
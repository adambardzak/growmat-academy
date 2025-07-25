"use client";

import React, { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type StaggeredAnimateProps = {
  children: ReactNode[];
  className?: string;
  childClassName?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  staggerDelay?: number;
  initialDelay?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
  distance?: number;
  animateScale?: boolean;
};

export default function StaggeredAnimate({
  children,
  className = "",
  childClassName = "",
  direction = "up",
  staggerDelay = 0.1,
  initialDelay = 0,
  duration = 0.5,
  once = true,
  threshold = 0.1,
  distance = 30,
  animateScale = false,
}: StaggeredAnimateProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  // Define initial animation states based on direction
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: distance, opacity: 0 };
      case "down":
        return { y: -distance, opacity: 0 };
      case "left":
        return { x: -distance, opacity: 0 };
      case "right":
        return { x: distance, opacity: 0 };
      case "none":
        return { opacity: 0 };
      default:
        return { y: distance, opacity: 0 };
    }
  };

  // Initial animation state
  const initial = animateScale
    ? { ...getInitialPosition(), scale: 0.95 }
    : getInitialPosition();

  // Animated position
  const animate = animateScale
    ? { y: 0, x: 0, opacity: 1, scale: 1 }
    : { y: 0, x: 0, opacity: 1 };

  return (
    <motion.div ref={ref} className={className}>
      {Array.isArray(children) &&
        children.map((child, index) => (
          <motion.div
            key={index}
            className={childClassName}
            initial={initial}
            animate={isInView ? animate : initial}
            transition={{
              duration,
              delay: initialDelay + index * staggerDelay,
              ease: "easeOut",
            }}
          >
            {child}
          </motion.div>
        ))}
    </motion.div>
  );
}

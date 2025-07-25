"use client";

import React, { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type AnimateInProps = {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  once?: boolean;
  style?: React.CSSProperties;
  threshold?: number;
  distance?: number;
  animateScale?: boolean;
};

export default function AnimateIn({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.5,
  once = true,
  style = {},
  threshold = 0.1,
  distance = 50,
  animateScale = false,
}: AnimateInProps) {
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

  // Define animated position
  const getAnimatedPosition = () => {
    const baseAnimation = { x: 0, y: 0, opacity: 1 };
    if (animateScale) {
      return { ...baseAnimation, scale: 1 };
    }
    return baseAnimation;
  };

  // Initial animation state
  const initial = animateScale
    ? { ...getInitialPosition(), scale: 0.95 }
    : getInitialPosition();

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={initial}
      animate={isInView ? getAnimatedPosition() : initial}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

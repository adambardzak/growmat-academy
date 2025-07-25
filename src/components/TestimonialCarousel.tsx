"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const LogoCarousel = () => {
  // Define consistent gap size
  const gapSize = "gap-8 md:gap-12 lg:gap-36";

  const logos1 = [
    "/profile.avif",
    "/profile.avif",
    "/profile.avif",
    "/profile.avif",
  ];
  const logos2 = [
    "/profile.avif",
    "/profile.avif",
    "/profile.avif",
    "/profile.avif",
  ];

  const [isMounted, setIsMounted] = useState(false);

  // Only run animations after component is mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render anything during SSR or if reduced motion is preferred
  if (!isMounted) {
    return <div className="w-full py-6 md:py-16" aria-hidden="true" />;
  }

  return (
    <div className="w-full overflow-hidden py-6 md:py-16">
      <div className="flex flex-col gap-8 md:gap-12">
        {/* First row - moving right */}
        <div className="relative overflow-hidden">
          <div
            className={`flex ${gapSize} animate-scroll-right-mobile md:animate-scroll-right`}
          >
            {/* First set of logos */}
            <div className={`flex ${gapSize} shrink-0`}>
              {logos1.map((logo, index) => (
                <Image
                  key={`row1-${index}`}
                  width={96}
                  height={96}
                  src={logo}
                  alt={`Technology logo ${index + 1}`}
                  className="w-auto h-20 md:h-16 lg:h-24 object-contain"
                  quality={100}
                  loading="lazy"
                />
              ))}
            </div>
            {/* Duplicate set for seamless looping */}
            <div className={`flex ${gapSize} shrink-0`}>
              {logos1.map((logo, index) => (
                <Image
                  key={`row1-duplicate-${index}`}
                  width={96}
                  height={96}
                  src={logo}
                  alt={`Technology logo ${index + 1}`}
                  className="w-auto h-20 md:h-16 lg:h-24 object-contain"
                  quality={100}
                  loading="lazy"
                />
              ))}
            </div>
            {/* Third set to ensure no empty space */}
            <div className={`flex ${gapSize} shrink-0`}>
              {logos1.map((logo, index) => (
                <Image
                  key={`row1-triplicate-${index}`}
                  width={96}
                  height={96}
                  src={logo}
                  alt={`Technology logo ${index + 1}`}
                  className="w-auto h-20 md:h-16 lg:h-24 object-contain dark:invert"
                  quality={100}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Second row - moving left */}
        <div className="relative overflow-hidden">
          <div
            className={`flex ${gapSize} animate-scroll-left-mobile md:animate-scroll-left`}
          >
            {/* First set of logos */}
            <div className={`flex ${gapSize} shrink-0`}>
              {logos2.map((logo, index) => (
                <Image
                  key={`row2-${index}`}
                  width={96}
                  height={96}
                  src={logo}
                  alt={`Technology logo ${index + 1}`}
                  className="w-auto h-20 md:h-16 lg:h-24 object-contain dark:invert"
                  quality={100}
                  loading="lazy"
                />
              ))}
            </div>
            {/* Duplicate set for seamless looping */}
            <div className={`flex ${gapSize} shrink-0`}>
              {logos2.map((logo, index) => (
                <Image
                  key={`row2-duplicate-${index}`}
                  width={96}
                  height={96}
                  src={logo}
                  alt={`Technology logo ${index + 1}`}
                  className="w-auto h-20 md:h-16 lg:h-24 object-contain dark:invert"
                  quality={100}
                  loading="lazy"
                />
              ))}
            </div>
            {/* Third set to ensure no empty space */}
            <div className={`flex ${gapSize} shrink-0`}>
              {logos2.map((logo, index) => (
                <Image
                  key={`row2-triplicate-${index}`}
                  width={96}
                  height={96}
                  src={logo}
                  alt={`Technology logo ${index + 1}`}
                  className="w-auto h-20 md:h-16 lg:h-24 object-contain dark:invert"
                  quality={100}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;

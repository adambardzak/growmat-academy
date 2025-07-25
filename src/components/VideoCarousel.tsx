"use client";

import clsx from "clsx";
import Image from "next/image";
import Marquee from "react-fast-marquee";

type Props = {
  className?: string;
};

export default function VideoCarousel({ className = "" }: Props) {
  return (
    <div
      className={clsx(
        "h-fit backdrop-blur-sm flex items-center mb-16",
        className
      )}
    >
      <div className="w-full overflow-hidden">
        <Marquee
          gradient={false}
          speed={180}
          direction="left"
          className="flex items-center"
        >
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-6 sm:px-8 md:px-12"
            >
              <Image
                src={`/client_results/${i + 1}.png`}
                alt="Testiomonial"
                width={240}
                height={180}
                className="w-fit h-fit rounded-2xl object-cover shadow-lg"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

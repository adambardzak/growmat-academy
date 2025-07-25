"use client";

import React from "react";
import Image from "next/image";
import {
  FaStar,
  FaTrophy,
  FaQuoteLeft,
  FaArrowRight,
  FaInstagram,
} from "react-icons/fa";
import Carousel from "./VideoCarousel";
import VideoCarousel from "./VideoCarousel";
import PhotoCarousel from "./PhotoCarousel";
import AnimateIn from "./animations/AnimateIn";
import StaggeredAnimate from "./animations/StaggeredAnimate";
import { motion } from "framer-motion";

const TestimonialsResults = () => {
  return (
    <div
      id="results"
      className="relative py-16 sm:py-20 md:py-24 px-4 bg-gradient-to-br from-black via-gray-900 to-green-950 overflow-hidden mobile-py"
      data-section="community"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-400/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-green-400/5 to-transparent rounded-full animate-pulse" />
      </div>

      <div className="relative max-w-6xl mx-auto z-10 mobile-container">
        {/* Results Section */}
        <section
          id="results"
          className="text-center mb-10 sm:mb-12 md:mb-16 items-center flex flex-col justify-center"
        >
          <AnimateIn direction="up" duration={0.7} delay={0.1}>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-green-400/20 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-green-400/30 mb-4 sm:mb-6"
            >
              <FaTrophy className="text-green-400 text-lg sm:text-xl" />
              <span className="text-green-300 font-semibold text-sm sm:text-base">
                Důkazy místo slibů
              </span>
              <FaTrophy className="text-green-400 text-lg sm:text-xl" />
            </motion.div>

            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 sm:mb-6 tracking-tight drop-shadow-lg mobile-heading-1"
            >
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent shadow-lg">
                Výsledky členů
              </span>
            </motion.h2>
          </AnimateIn>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Připoj se k úspěšným členům{" "}
            <b>GrowMat Academy a začni konečně růst!</b>
          </p>
        </section>

        {/* Results Grid */}
        <VideoCarousel />

        {/* Testimonials Section */}
        <section
          id="reviews"
          className="text-center mb-16 items-center flex flex-col justify-center"
        >
          <div className="inline-flex items-center gap-2 bg-green-400/20 backdrop-blur-sm px-6 py-3 rounded-full border border-green-400/30 mb-6">
            <FaQuoteLeft className="text-green-400 text-xl" />
            <span className="text-green-300 font-semibold">
              Zkušenosti absolventů
            </span>
            <FaQuoteLeft className="text-green-400 text-xl transform scale-x-[-1]" />
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight drop-shadow-lg">
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent shadow-lg">
              Co říkají absolventi?
            </span>
          </h2>
        </section>

        {/* Testimonials Grid */}
        <PhotoCarousel />

        {/* CTA Section */}
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-green-900 opacity-80"></div>

          <div className="relative p-12 md:p-20 flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-10 md:mb-0 md:pr-12">
              <div className="inline-flex items-center gap-2 bg-green-400/30 backdrop-blur-sm px-5 py-2 rounded-full border border-green-400/40 mb-6">
                <FaTrophy className="text-green-400" />
                <span className="text-green-300 text-sm font-medium">
                  Join the winners
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
                Přidej se k úspěšným členům GrowMat Academy
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="min-w-8 h-8 flex items-center justify-center bg-green-400/30 rounded-full mr-4">
                    <span className="text-green-400 font-bold text-sm">✓</span>
                  </div>
                  <p className="text-gray-200">
                    Získej <b>ověřené strategie</b> pro organický růst účtu
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="min-w-8 h-8 flex items-center justify-center bg-green-400/30 rounded-full mr-4">
                    <span className="text-green-400 font-bold text-sm">✓</span>
                  </div>
                  <p className="text-gray-200">
                    Nauč se <b>monetizovat své sledující</b> skrze digitální
                    produkty
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="min-w-8 h-8 flex items-center justify-center bg-green-400/30 rounded-full mr-4">
                    <span className="text-green-400 font-bold text-sm">✓</span>
                  </div>
                  <p className="text-gray-200">
                    Přidej se ke <b>komunitě, co tě podpoří</b>
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-1/3 flex flex-col items-center">
              <div className="bg-black/50 backdrop-blur-md p-8 rounded-xl border border-green-400/30 shadow-lg text-center mb-6 w-full">
                <p className="text-2xl md:text-3xl font-bold text-green-400 mb-2">
                  3 500 000+
                </p>
                <p className="text-white">zhlédnutí u členů</p>
              </div>

              <a
                href="https://moje.flixy.cz/socialmaty/p/-shrnut-objedn-vky--j46lwbhrv"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-green-400 to-green-600 text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:from-green-500 hover:to-green-700 hover:scale-105 shadow-lg hover:shadow-green-400/50 w-full flex items-center justify-center gap-2"
              >
                <span>Začni svůj růst</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Trust indicators at bottom */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 bg-gray-800/50 backdrop-blur-sm px-8 py-4 rounded-full border border-gray-700">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span className="text-gray-300 text-sm">
                Exkluzivní strategie
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span className="text-gray-300 text-sm">
                Pravidlené aktualizace obsahu
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span className="text-gray-300 text-sm">Přístup odkudkoli</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsResults;

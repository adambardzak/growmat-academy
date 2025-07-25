"use client";

import React from "react";
import Image from "next/image";
import {
  FaUser,
  FaPodcast,
  FaLightbulb,
  FaGraduationCap,
  FaArrowRight,
  FaInstagram,
  FaPlay,
} from "react-icons/fa";
import TestimonialsResults from "./TestimonialsResults";
import TestimonialCarousel from "./TestimonialCarousel";
import { motion } from "framer-motion";
import AnimateIn from "./animations/AnimateIn";
import StaggeredAnimate from "./animations/StaggeredAnimate";

const About = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-24 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-green-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-green-400/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-5xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <AnimateIn
            direction="down"
            duration={0.7}
            className="inline-flex items-center gap-3 mb-6"
          >
            <FaUser className="text-green-400 text-3xl" />
            <h2 className="text-4xl md:text-6xl font-extrabold">
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Kdo jsem?
              </span>
            </h2>
          </AnimateIn>

          {/* Profile Image */}
          <AnimateIn direction="up" delay={0.2} duration={0.6} className="mb-8">
            <div className="relative inline-block">
              <div className="bg-gradient-to-r from-green-400/20 to-green-600/10 p-3 rounded-full">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="/profile.avif"
                    alt="Matyáš Linda"
                    width={200}
                    height={200}
                    className="w-32 h-32 rounded-full object-cover border-4 border-green-400/30"
                  />
                </motion.div>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 300 }}
                className="absolute -bottom-2 -right-2 bg-green-400 text-black p-2 rounded-full"
              >
                <FaInstagram className="text-lg" />
              </motion.div>
            </div>
          </AnimateIn>

          <AnimateIn
            direction="up"
            delay={0.3}
            className="bg-gradient-to-r from-green-400/10 to-green-600/5 p-8 rounded-2xl border border-green-400/20 backdrop-blur-sm"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-100">
              Jmenuji se <span className="text-green-400">Matyáš Linda</span>
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              a buduji na Instagramu profily, které transformují lidem životy v
              oblasti zdraví.
            </p>
          </AnimateIn>
        </motion.div>

        <div className="gap-12 mb-16">
          <motion.div
            whileHover={{ boxShadow: "0 0 15px rgba(74, 222, 128, 0.3)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 hover:border-green-400/30 transition-all duration-300"
          >
            <AnimateIn
              direction="left"
              delay={0.2}
              className="flex items-center gap-3 mb-6"
            >
              <FaPodcast className="text-green-400 text-2xl" />
              <h4 className="text-xl font-semibold text-green-400">
                Můj začátek
              </h4>
            </AnimateIn>

            {/* Before/After Images */}
            {/* <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <Image
                  src="/api/placeholder/150/150"
                  alt="Začátek - nízké views"
                  width={150}
                  height={150}
                  className="w-full h-24 object-cover rounded-lg mb-2"
                />
                <span className="text-red-400 text-sm">Předtím: 50 views</span>
              </div>
              <div className="text-center">
                <Image
                  src="/api/placeholder/150/150"
                  alt="Teď - vysoké views"
                  width={150}
                  height={150}
                  className="w-full h-24 object-cover rounded-lg mb-2"
                />
                <span className="text-green-400 text-sm">Teď: 500K+ views</span>
              </div>
            </div> */}

            <AnimateIn direction="up" delay={0.3} className="block">
              <p className="text-gray-300 leading-relaxed mb-4">
                Když jsem začínal s mým prvním projektem - podcast Sober Boys -
                neměl jsem absolutně tušení
                <span className="text-green-400 font-bold">
                  {" "}
                  jak být virální, editovat videa
                </span>{" "}
                či jak se vůbec na
                <span className="text-green-400 font-bold">
                  {" "}
                  sociálních sítích prosadit..
                </span>
              </p>
            </AnimateIn>

            <AnimateIn direction="up" delay={0.4} className="block">
              <p className="text-gray-300 leading-relaxed mb-6">
                Všechny dovednosti a know-how jsem tedy testoval metodou
                pokus/omyl jak na svých projektech, tak i na prvních klientech,
                kteří ve mě vložili důvěru.
              </p>
            </AnimateIn>

            <AnimateIn
              direction="left"
              delay={0.5}
              className="flex items-center gap-3 mb-6"
            >
              <FaGraduationCap className="text-green-400 text-2xl" />
              <h4 className="text-xl font-semibold text-green-400">
                GrowMat Academy
              </h4>
            </AnimateIn>

            <AnimateIn direction="up" delay={0.6} className="block">
              <p className="text-gray-300 leading-relaxed mb-4">
                Do GrowMat Academy jsem vložil
                <span className="text-green-400 font-bold">
                  {" "}
                  veškeré své know-how prakticky{" "}
                </span>
                a provádím Tě{" "}
                <span className="text-green-400 font-bold">
                  krok za krokem
                </span>{" "}
                od samotného{" "}
                <span className="text-green-400 font-bold">
                  založení profilu až po první prodeje.
                </span>
              </p>
            </AnimateIn>

            <AnimateIn direction="right" delay={0.7} className="block">
              <div className="bg-black/20 p-4 rounded-xl border-l-4 border-green-400 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <FaLightbulb className="text-green-400" />
                  <span className="text-green-400 font-semibold">Proč?</span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Protože kdybych na svém začátku měl místo, kde se od A do Z
                  naučím Jak úspěšně budovat osobní brand na Instagramu -
                  ušetřil bych spoustu peněz a hlavně času.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn direction="up" delay={0.8} className="block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-green-400 hover:bg-green-500 text-black font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-green-400/50 inline-flex items-center gap-2"
              >
                <span>Chci vědět víc!</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </AnimateIn>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-md rounded-2xl p-12 border border-gray-700/50 shadow-2xl">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl font-bold mb-8 text-green-400 flex items-center justify-center gap-3"
            >
              <span className="text-4xl">🏆</span>
              Výsledky projektů/klientů
            </motion.h3>

            <StaggeredAnimate
              direction="up"
              staggerDelay={0.15}
              initialDelay={0.4}
              className="grid md:grid-cols-3 gap-6"
              childClassName=""
            >
              <div className="bg-black/30 p-6 rounded-xl border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  15M+
                </div>
                <div className="text-gray-300">zhlédnutí</div>
              </div>
              <div className="bg-black/30 p-6 rounded-xl border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  90K+
                </div>
                <div className="text-gray-300">sledujících</div>
              </div>
              <div className="bg-black/30 p-6 rounded-xl border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  1M+ Kč
                </div>
                <div className="text-gray-300">v zisku pro klienty</div>
              </div>
            </StaggeredAnimate>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

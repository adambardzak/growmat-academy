"use client";

import React from "react";
import {
  FaCrown,
  FaLock,
  FaShieldAlt,
  FaUndo,
  FaRocket,
  FaCheck,
} from "react-icons/fa";
import { motion } from "framer-motion";
import AnimateIn from "./animations/AnimateIn";
import StaggeredAnimate from "./animations/StaggeredAnimate";

const FinalCTA = () => {
  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-green-950 text-white py-24 px-4 overflow-hidden" id="pricing">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-green-400/15 rounded-full blur-2xl animate-pulse" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center z-10">
        <div 
          className="bg-gradient-to-br from-green-400/20 to-green-600/10 backdrop-blur-md p-16 rounded-3xl border-2 border-green-400/30 shadow-2xl"
        >
          <AnimateIn direction="down" delay={0.1} className="flex items-center justify-center gap-3 mb-8">
            <FaCrown className="text-green-400 text-4xl" />
            <h2 className="text-4xl md:text-6xl font-extrabold">
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Přidej se teď
              </span>
            </h2>
          </AnimateIn>

          <AnimateIn direction="up" delay={0.2} className="flex items-center justify-center gap-2 mb-8">
            <FaLock className="text-green-400 text-xl" />
            <p className="text-xl md:text-2xl text-gray-100 font-semibold">
              a uzamkni si prémiovou cenu NAVŽDY!
            </p>
          </AnimateIn>

          <AnimateIn direction="up" delay={0.3} className="block">
            <motion.div 
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ 
                duration: 0.5, 
                repeat: 3,
                repeatType: "reverse",
                repeatDelay: 2
              }}
              className="bg-red-900/30 border border-red-500/30 p-6 rounded-2xl mb-12"
            >
              <p className="text-xl text-red-400 font-bold">
                Členství se bude 27.7. navyšovat!
              </p>
            </motion.div>
          </AnimateIn>

          <AnimateIn direction="up" delay={0.4} className="block">
            <div className="bg-black/50 backdrop-blur-sm p-10 rounded-2xl mb-12 border border-gray-700/50">
              <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-6">
                    <p className="text-gray-400 line-through text-2xl mb-2">
                      1 490 Kč / měs.
                    </p>
                    <p className="text-sm text-red-400 font-semibold">
                      Běžná cena
                    </p>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="bg-green-400/20 border border-green-400/30 rounded-xl p-6">
                    <p className="text-5xl font-bold text-green-400 mb-2">
                      399 Kč / měsíc
                    </p>
                    <p className="text-sm text-green-400 font-semibold">
                      Jen dnes
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn direction="up" delay={0.5} className="block">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://moje.flixy.cz/socialmaty/p/-shrnut-objedn-vky--j46lwbhrv"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-r from-green-400 to-green-600 text-black font-bold py-8 px-16 rounded-full text-2xl md:text-3xl transition-all duration-300 hover:from-green-500 hover:to-green-700 shadow-lg hover:shadow-green-400/50 mb-12 inline-block"
            >
              <span className="relative z-10">PŘIDAT SE TEĎ 🚀</span>
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.5 }}
                className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-700 rounded-full blur"
              ></motion.div>
            </motion.a>
          </AnimateIn>

          <StaggeredAnimate
            direction="up"
            staggerDelay={0.1}
            initialDelay={0.6}
            className="grid md:grid-cols-2 gap-6 mb-8"
            childClassName=""
          >
            <motion.div 
              whileHover={{ y: -3, boxShadow: "0 8px 20px rgba(74, 222, 128, 0.15)" }}
              className="flex items-center gap-3 bg-black/30 p-4 rounded-xl"
            >
              <FaRocket className="text-green-400 text-xl" />
              <span className="text-gray-300">
                Okamžitý přístup ke všem modulům
              </span>
            </motion.div>
            <motion.div 
              whileHover={{ y: -3, boxShadow: "0 8px 20px rgba(74, 222, 128, 0.15)" }}
              className="flex items-center gap-3 bg-black/30 p-4 rounded-xl"
            >
              <FaCheck className="text-green-400 text-xl" />
              <span className="text-gray-300">
                Osobní podpora a zpětná vazba
              </span>
            </motion.div>
            <motion.div 
              whileHover={{ y: -3, boxShadow: "0 8px 20px rgba(74, 222, 128, 0.15)" }}
              className="flex items-center gap-3 bg-black/30 p-4 rounded-xl"
            >
              <FaShieldAlt className="text-green-400 text-xl" />
              <span className="text-gray-300">
                Exkluzivní strategie krok za krokem
              </span>
            </motion.div>
            <motion.div 
              whileHover={{ y: -3, boxShadow: "0 8px 20px rgba(74, 222, 128, 0.15)" }}
              className="flex items-center gap-3 bg-black/30 p-4 rounded-xl"
            >
              <FaUndo className="text-green-400 text-xl" />
              <span className="text-gray-300">Možnost zrušit kdykoliv</span>
            </motion.div>
          </StaggeredAnimate>

          <div className="bg-green-400/10 p-6 rounded-xl border border-green-400/20">
            <p className="text-green-400 font-semibold text-lg">
              ⏰ Limitovaná nabídka končí brzy!
            </p>
            <p className="text-gray-300 mt-2">
              Nezmeškej příležitost začít růst za zlomek původní ceny
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
            <p className="text-gray-400 text-sm">
              GrowMat Academy • 2025 • Všechna práva vyhrazena
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

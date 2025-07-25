"use client";

import React from "react";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaShieldAlt,
  FaCookie,
  FaHeart,
} from "react-icons/fa";
import { motion } from "framer-motion";
import AnimateIn from "./animations/AnimateIn";
import StaggeredAnimate from "./animations/StaggeredAnimate";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-gray-800 border-t border-green-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 mobile-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mobile-grid"
        >
          {/* Brand Section */}
          <div className="md:col-span-2">
            <AnimateIn
              direction="left"
              delay={0.2}
              className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6"
            >
              <div className="bg-gradient-to-r from-green-400 to-green-600 p-1.5 sm:p-2 rounded-lg">
                <FaInstagram className="text-black text-lg sm:text-xl" />
              </div>
              <div>
                <div className="text-white font-bold text-lg sm:text-xl">
                  GrowMat Academy
                </div>
                <div className="text-green-400 text-xs sm:text-sm font-semibold">
                  Raketový růst na Instagramu
                </div>
              </div>
            </AnimateIn>

            <AnimateIn direction="up" delay={0.3} className="block">
              <p className="text-gray-300 mb-4 sm:mb-6 max-w-md text-sm sm:text-base mobile-text">
                Nauč se organicky růst na Instagramu a proměňovat sledující na
                zákazníky s naším prověřeným systémem. Bez reklam, pouze 30
                minut denně.
              </p>
            </AnimateIn>

            <AnimateIn direction="up" delay={0.4} className="block">
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://instagram.com/growmat_academy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-400/20 hover:bg-green-400/30 text-green-400 p-3 rounded-full transition-all duration-300"
                >
                  <FaInstagram className="text-xl" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://facebook.com/growmat_academy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-400/20 hover:bg-green-400/30 text-green-400 p-3 rounded-full transition-all duration-300"
                >
                  <FaFacebook className="text-xl" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="mailto:info@growmatacademy.cz"
                  className="bg-green-400/20 hover:bg-green-400/30 text-green-400 p-3 rounded-full transition-all duration-300"
                >
                  <FaEnvelope className="text-xl" />
                </motion.a>
              </div>
            </AnimateIn>
          </div>

          {/* Quick Links */}
          <AnimateIn direction="up" delay={0.3} className="block">
            <h3 className="text-white font-semibold mb-4">Rychlé odkazy</h3>
            <StaggeredAnimate
              direction="right"
              staggerDelay={0.05}
              initialDelay={0.4}
              className="space-y-2"
              childClassName=""
            >
              <li>
                <motion.a
                  whileHover={{ x: 3, color: "#4ADE80" }}
                  href="#system"
                  className="text-gray-300 transition-colors duration-300 inline-block"
                >
                  Systém
                </motion.a>
              </li>
              <li>
                <motion.a
                  whileHover={{ x: 3, color: "#4ADE80" }}
                  href="#course"
                  className="text-gray-300 transition-colors duration-300 inline-block"
                >
                  Kurz
                </motion.a>
              </li>
              <li>
                <motion.a
                  whileHover={{ x: 3, color: "#4ADE80" }}
                  href="#results"
                  className="text-gray-300 transition-colors duration-300 inline-block"
                >
                  Výsledky
                </motion.a>
              </li>
              <li>
                <motion.a
                  whileHover={{ x: 3, color: "#4ADE80" }}
                  href="#demo-video"
                  className="text-gray-300 transition-colors duration-300 inline-block"
                >
                  Ukázka
                </motion.a>
              </li>
              <li>
                <motion.a
                  whileHover={{ x: 3, color: "#4ADE80" }}
                  href="#results"
                  className="text-gray-300 transition-colors duration-300 inline-block"
                >
                  Komunita
                </motion.a>
              </li>
            </StaggeredAnimate>
          </AnimateIn>

          {/* Legal & Privacy */}
          <AnimateIn direction="up" delay={0.4} className="block">
            <h3 className="text-white font-semibold mb-4">Právní informace</h3>
            <StaggeredAnimate
              direction="right"
              staggerDelay={0.05}
              initialDelay={0.5}
              className="space-y-2"
              childClassName=""
            >
              <li>
                <motion.div whileHover={{ x: 3 }}>
                  <Link
                    href="/privacy-policy"
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center gap-2"
                  >
                    <FaShieldAlt className="text-sm" />
                    Ochrana osobních údajů
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 3 }}>
                  <Link
                    href="/cookie-settings"
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center gap-2"
                  >
                    <FaCookie className="text-sm" />
                    Nastavení cookies
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 3 }}>
                  <a
                    href="mailto:info@growmatacademy.cz?subject=Obchodní podmínky"
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                  >
                    Obchodní podmínky
                  </a>
                </motion.div>
              </li>
            </StaggeredAnimate>
          </AnimateIn>
        </motion.div>

        {/* Bottom Bar */}
        <AnimateIn
          direction="up"
          delay={0.6}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div whileHover={{ x: 3 }} className="text-gray-400 text-sm">
              © 2025 GrowMat Academy. Všechna práva vyhrazena.
            </motion.div>
            <motion.div
              whileHover={{ x: -3 }}
              className="flex items-center gap-1 text-gray-400 text-sm"
            >
              <span>Vytvořeno s</span>
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                  color: [
                    "rgb(248, 113, 113)",
                    "rgb(239, 68, 68)",
                    "rgb(248, 113, 113)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <FaHeart className="text-red-400 text-xs" />
              </motion.span>
              <span>pro tvůj úspěch</span>
            </motion.div>
          </div>
        </AnimateIn>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaBars,
  FaTimes,
  FaRocket,
  FaArrowRight,
  FaUsers,
  FaPlay,
  FaCheckCircle,
  FaGraduationCap,
  FaCookie,
} from "react-icons/fa";
import Container from "./Container";
import clsx from "clsx";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      name: "Co najdeš uvnitř?",
      href: "#demo-video",
      icon: <FaGraduationCap className="text-sm" />,
    },
    {
      name: "Výsledky",
      href: "#results",
      icon: <FaCheckCircle className="text-sm" />,
    },
    {
      name: "Recenze",
      href: "#reviews",
      icon: <FaUsers className="text-sm" />,
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-2 left-0 right-0 z-50 transition-all duration-300"
    >
      <Container
        size="sm"
        className={clsx(
          isScrolled ? "rounded-2xl" : "rounded-t-2xl ",
          "bg-black/70 backdrop-blur-lg border border-green-400/40 shadow-lg"
        )}
      >
        <div className="flex items-center justify-between h-16 ">
          {/* Logo */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/" className="flex items-center overflow-hidden">
              <Image
                src="/logo.png"
                alt="GrowMat Academy Logo"
                width={200}
                height={100}
                className="w-42 h-24 object-cover"
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item, index) => (
                <motion.a
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.3 + (index * 0.1),
                    ease: "easeOut"
                  }}
                  key={item.name}
                  href={item.href}
                  className="group text-gray-300 hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-green-400/10 inline-flex items-center gap-2"
                >
                  {item.icon}
                  <span className="group-hover:translate-x-0.5 transition-transform duration-300">
                    {item.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
              href="#demo-video"
              className="group bg-white/10 backdrop-blur-md border border-green-400/30 text-green-400 font-semibold py-2 px-4 rounded-full transition-all duration-300 hover:bg-green-400/20 hover:scale-105 shadow-lg inline-flex items-center gap-2"
            >
              <FaPlay className="text-xs" />
              <span>Ukázka</span>
            </motion.a>

            <motion.a
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.7, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              href="https://moje.flixy.cz/socialmaty/p/-shrnut-objedn-vky--j46lwbhrv"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-green-400 to-green-600 text-black font-bold py-2 px-6 rounded-full transition-all duration-300 hover:from-green-500 hover:to-green-700 shadow-lg hover:shadow-green-400/50 inline-flex items-center gap-2"
            >
              <FaRocket className="text-sm" />
              <span>Začni růst</span>
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-green-400/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-400 transition-all duration-300"
            >
              {isMenuOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </Container>
      <Container
        className={`bg-gradient-to-r from-green-400/20 to-green-600/10 border-b border-l border-r border-green-400/30 transition-all duration-300 ${
          isScrolled
            ? "h-0 opacity-0 overflow-hidden"
            : "h-auto opacity-100 rounded-b-2xl"
        }`}
        size="sm"
      >
        <div className="flex items-center justify-center py-2 w-full">
          <div className="flex items-center gap-2 text-green-300 text-sm font-medium">
            <FaCheckCircle className="text-green-400" />
            <span>
              🔥 OMEZENÁ NABÍDKA: UZAMKNI SI AKČNÍ CENU{" "}
              <span className="text-yellow-400">399 Kč JEŠTĚ DNES!</span>
            </span>
            <button className="text-green-400 hover:text-green-300 underline ml-2 transition-colors duration-300">
              Zjisti více
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-lg border-t border-green-400/20">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group text-gray-300 hover:text-green-400 px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-green-400/10 flex items-center gap-3"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.icon}
              <span>{item.name}</span>
            </a>
          ))}

          {/* Mobile CTA Buttons */}
          <div className="pt-4 pb-3 space-y-3">
            <a
              href="#course"
              onClick={() => setIsMenuOpen(false)}
              className="w-full group bg-white/10 backdrop-blur-md border border-green-400/30 text-green-400 font-semibold py-3 px-4 rounded-full transition-all duration-300 hover:bg-green-400/20 inline-flex items-center justify-center gap-2"
            >
              <FaPlay className="text-sm" />
              <span>Podívej se na ukázku</span>
            </a>

            <a
              href="/cookie-settings"
              className="w-full group bg-white/5 backdrop-blur-md border border-gray-600/30 text-gray-300 font-medium py-3 px-4 rounded-full transition-all duration-300 hover:bg-green-400/10 hover:text-green-400 hover:border-green-400/30 inline-flex items-center justify-center gap-2"
            >
              <FaCookie className="text-sm" />
              <span>Nastavení cookies</span>
            </a>

            <a
              href="https://moje.flixy.cz/socialmaty/p/-shrnut-objedn-vky--j46lwbhrv"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full group bg-gradient-to-r from-green-400 to-green-600 text-black font-bold py-3 px-6 rounded-full transition-all duration-300 hover:from-green-500 hover:to-green-700 shadow-lg hover:shadow-green-400/50 inline-flex items-center justify-center gap-2"
            >
              <FaRocket className="text-sm" />
              <span>Začni růst už dnes</span>
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

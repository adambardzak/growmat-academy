"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaBars,
  FaTimes,
  FaInstagram,
  FaRocket,
  FaArrowRight,
  FaUsers,
  FaPlay,
  FaCheckCircle,
  FaGraduationCap,
  FaCookie,
} from "react-icons/fa";

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
    { name: "Systém", href: "#system", icon: <FaRocket className="text-sm" /> },
    {
      name: "Kurz",
      href: "#course",
      icon: <FaGraduationCap className="text-sm" />,
    },
    {
      name: "Výsledky",
      href: "#results",
      icon: <FaCheckCircle className="text-sm" />,
    },
    { name: "Ukázka", href: "#demo", icon: <FaPlay className="text-sm" /> },
    {
      name: "Komunita",
      href: "#community",
      icon: <FaUsers className="text-sm" />,
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-lg border-b border-green-400/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 ">
          {/* Logo */}
          <div className="flex items-center overflow-hidden">
            {/* <div className="flex-shrink-0 flex items-center gap-3">
              <div className="bg-gradient-to-r from-green-400 to-green-600 p-2 rounded-lg">
                <FaInstagram className="text-black text-xl" />
              </div>
              <div>
                <div className="text-white font-bold text-xl">GrowMat</div>
                <div className="text-green-400 text-xs font-semibold">Academy</div>
              </div>
            </div> */}
            <Image
              src="/logo.png"
              alt="GrowMat Academy Logo"
              width={200}
              height={100}
              className="w-42 h-24 object-cover"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group text-gray-300 hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-green-400/10 inline-flex items-center gap-2"
                >
                  {item.icon}
                  <span className="group-hover:translate-x-0.5 transition-transform duration-300">
                    {item.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="group bg-white/10 backdrop-blur-md border border-green-400/30 text-green-400 font-semibold py-2 px-4 rounded-full transition-all duration-300 hover:bg-green-400/20 hover:scale-105 shadow-lg inline-flex items-center gap-2">
              <FaPlay className="text-xs" />
              <span>Ukázka</span>
            </button>

            <button className="group bg-gradient-to-r from-green-400 to-green-600 text-black font-bold py-2 px-6 rounded-full transition-all duration-300 hover:from-green-500 hover:to-green-700 hover:scale-105 shadow-lg hover:shadow-green-400/50 inline-flex items-center gap-2">
              <FaRocket className="text-sm" />
              <span>Začni růst</span>
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
            </button>
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
      </div>

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
            <button className="w-full group bg-white/10 backdrop-blur-md border border-green-400/30 text-green-400 font-semibold py-3 px-4 rounded-full transition-all duration-300 hover:bg-green-400/20 inline-flex items-center justify-center gap-2">
              <FaPlay className="text-sm" />
              <span>Podívej se na ukázku</span>
            </button>

            <a
              href="/cookie-settings"
              className="w-full group bg-white/5 backdrop-blur-md border border-gray-600/30 text-gray-300 font-medium py-3 px-4 rounded-full transition-all duration-300 hover:bg-green-400/10 hover:text-green-400 hover:border-green-400/30 inline-flex items-center justify-center gap-2"
            >
              <FaCookie className="text-sm" />
              <span>Nastavení cookies</span>
            </a>

            <button className="w-full group bg-gradient-to-r from-green-400 to-green-600 text-black font-bold py-3 px-6 rounded-full transition-all duration-300 hover:from-green-500 hover:to-green-700 shadow-lg hover:shadow-green-400/50 inline-flex items-center justify-center gap-2">
              <FaRocket className="text-sm" />
              <span>Začni růst už dnes</span>
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Top announcement bar */}
      <div
        className={`bg-gradient-to-r from-green-400/20 to-green-600/10 border-b border-green-400/30 transition-all duration-300 ${
          isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-auto opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-2">
            <div className="flex items-center gap-2 text-green-300 text-sm font-medium">
              <FaCheckCircle className="text-green-400" />
              <span>
                🔥 OMEZENÁ NABÍDKA: UZAMKNI SI AKČNÍ CENU 399 Kč JEŠTĚ DNES!
              </span>
              <button className="text-green-400 hover:text-green-300 underline ml-2 transition-colors duration-300">
                Zjisti více
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

"use client";

import React from "react";
import {
  FaGraduationCap,
  FaArrowRight,
  FaGift,
  FaCheck,
  FaRocket,
} from "react-icons/fa";
import { motion } from "framer-motion";
import AnimateIn from "./animations/AnimateIn";

const CashInMastery = () => {
  const modules = [
    {
      title: "1. MINDSET PRODEJE",
      description: (
        <>
          Zbavíš se mýtů, které tě brzdily –{" "}
          <b>a začneš konečně růst a prodávat.</b>
        </>
      ),
      content: [
        <>
          <b> O čem prodej </b>rozhodně <b>není</b>
        </>,
        <>
          Proč někdo umí prodávat &quot;face to face&quot;, ale <b>na sítích</b>{" "}
          neprodá ani vodu v poušti
        </>,
        <>
          {" "}
          Jak se <b>zbavit strachu z prodeje</b> a porovnávání s ostatními
        </>,
      ],
    },
    {
      title: "2. ZÁKLADY PSYCHOLOGIE PRODEJE",
      description: (
        <>
          Pochopíš<b> psychologii prodeje</b> a budeš mít <b>konečně JASNO</b> v
          tom, co mění<b> sledující v zákazníky</b>
        </>
      ),
      content: [
        <>
          Jak vyvolat silně pozitivní emoce <b>vedoucí k nákupu</b>
        </>,
        <>
          {" "}
          Jak <b>prodat</b> &quot;komukoliv&quot;
        </>,
        <>
          Jak vytvořit <b>&quot;no-brainer&quot;</b> nabídku, která{" "}
          <b>se neodmítá</b>
        </>,
      ],
    },
    {
      title: "3. RŮSTOVÁ STRATEGIE PROFILU",
      description: (
        <>
          {" "}
          Naučíš se tvořit<b> raketově růstový obsah,</b> který{" "}
          <b>prodává a přitahuje</b> ideální zákazníky - bez přetváření a
          neustálého &quot;nahánění trendů&quot;.
        </>
      ),
      content: [
        <>
          {" "}
          Rozbor <b>statisícových příspěvků</b> klientů
        </>,
        <>
          <b>&quot;Manipulativní hack&quot;</b> virality,
        </>,
        <>
          <b>Jak spojit statisícová zhlédnutí s prodejem</b>,
        </>,
      ],
    },
    {
      title: "4. DŮVĚRA & KONVERZE",
      description: (
        <>
          Z feedu, stories a DM vytvoříš mikrofunnel. Ukážeš autoritu bez
          přehnaného ega – a povedeš <b>sledující k akci</b>. Napíšeš
          <b> od A do Z prodejní stránku</b>, co<b> skutečně prodává.</b>
        </>
      ),
      content: [
        <>
          {" "}
          Jak tvořit <b>prodejní stories</b>
        </>,
        <>
          Jak <b>správně sdílet</b> recenze/reference
        </>,
        <>
          Jak napsat <b>prodejní stránku</b> dle jasné struktury
        </>,
        <>
          Jak vytvořit <b>prodejní systém od A do Z &quot;na automat&quot;</b>{" "}
          za 30 minut denně
        </>,
      ],
    },
  ];

  const bonuses = [
    {
      title: "Rozbor reálných profilů",
      description: (
        <>
          neuvidíš jen teorii, ale pitvu toho,
          <b> co funguje mně a mým klientům.</b>
        </>
      ),
    },
    {
      title: "AI Prompt Pack",
      description: (
        <>
          Získej <b>připravené příkazy</b>, které ti
          <b> ušetří hodiny přemýšlení</b> a pomůžou ti tvořit
          <b> přesvědčivý obsah</b>a prodejní texty <b>3× rychleji</b> – i když
          nejsi copywriter.
        </>
      ),
    },
  ];

  return (
    <section
      className="relative py-16 sm:py-20 md:py-24 px-4 bg-gradient-to-br from-black via-gray-900 to-green-950 overflow-hidden mobile-py"
      id="cash-in"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-400/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-green-400/5 to-transparent rounded-full animate-pulse" />
      </div>

      <div className="relative max-w-6xl mx-auto z-10 mobile-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-12 md:mb-16 items-center flex flex-col justify-center"
        >
          <AnimateIn direction="down" duration={0.5} className="block">
            <div className="inline-flex items-center gap-2 bg-green-400/20 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-green-400/30 mb-4 sm:mb-6">
              <FaGraduationCap className="text-green-400 text-lg sm:text-xl" />
              <span className="text-green-300 font-semibold text-sm sm:text-base">
                Exkluzivní kurz
              </span>
              <FaGraduationCap className="text-green-400 text-lg sm:text-xl" />
            </div>
          </AnimateIn>

          <AnimateIn direction="up" delay={0.2} className="block">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 sm:mb-6 tracking-tight drop-shadow-lg mobile-heading-1">
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent shadow-lg">
                CASH-IN Mastery
              </span>
            </h2>
          </AnimateIn>

          <AnimateIn direction="up" delay={0.3} className="block max-w-3xl">
            <p className="text-xl text-gray-300 mb-4">
              Jak{" "}
              <span className="font-black text-green-400">
                efektivně prodávat na Instagramu
              </span>
            </p>
          </AnimateIn>

          <AnimateIn direction="up" delay={0.4} className="block">
            <p className="text-lg text-gray-300 max-w-2xl">
              bez marketingových plků, složitých prodejních definic a pocitu
              &quot;vnucování se&quot;
            </p>
          </AnimateIn>

          <AnimateIn direction="up" delay={0.5} className="block">
            <div className="mt-10">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-green-400/30 to-green-600/30 backdrop-blur-sm px-6 py-3 rounded-full border border-green-400/30 font-bold text-white shadow-lg inline-block"
              >
                VE 4 NADUPANÝCH MODULECH
              </motion.span>
            </div>
          </AnimateIn>
        </motion.div>

        <div className="grid gap-8 mb-16">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{
                y: -8,
                boxShadow: "0 10px 25px rgba(74, 222, 128, 0.2)",
              }}
              className="group bg-white/5 backdrop-blur-md border border-green-400/20 shadow-xl rounded-2xl p-8 transition-all duration-300 hover:shadow-green-400/30 hover:border-green-400/40"
            >
              {/* Module badge */}
              <div className="flex justify-between items-start mb-6">
                <div className="bg-green-400/20 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400/30">
                  <span className="text-green-300 text-sm font-semibold">
                    Modul {index + 1}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                {module.title}
              </h3>
              <p className="text-gray-300 mb-6 font-medium">
                {module.description}
              </p>

              <div className="space-y-4">
                {module.content.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-start bg-black/30 backdrop-blur-sm p-3 rounded-lg border-l-2 border-green-400/40 hover:border-green-400 transition-all duration-300"
                  >
                    <span className="text-green-400 mr-3 mt-0.5">
                      <FaCheck className="text-green-400" />
                    </span>
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-green-400/20 to-green-600/10 p-10 rounded-2xl border border-green-400/30 shadow-lg backdrop-blur-md"
        >
          <AnimateIn
            direction="right"
            delay={0.1}
            className="flex items-center gap-3 mb-8"
          >
            <div className="bg-green-400/30 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400/40">
              <span className="text-green-300 font-semibold">
                Exkluzivní bonusy
              </span>
            </div>
            <div className="h-px bg-gradient-to-r from-green-400/50 to-transparent flex-grow"></div>
          </AnimateIn>

          <AnimateIn direction="up" delay={0.2} className="block">
            <h3 className="text-3xl font-extrabold mb-8 text-center bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
              ZÍSKÁŠ NAVÍC:
            </h3>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-6">
            {bonuses.map((bonus, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -4,
                  boxShadow: "0 10px 25px rgba(74, 222, 128, 0.2)",
                }}
                className="bg-black/30 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 transition-all duration-300 hover:shadow-green-400/20 hover:border-green-400/30"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-green-400/30 flex items-center justify-center">
                    <FaGift className="text-green-400 text-xl" />
                  </div>
                  <h4 className="font-bold text-xl text-white">
                    {bonus.title}
                  </h4>
                </div>
                <p className="text-gray-300 pl-2 border-l border-green-400/30">
                  {bonus.description}
                </p>
              </motion.div>
            ))}
          </div>

          <AnimateIn
            direction="up"
            delay={0.7}
            className="mt-10 flex flex-col items-center"
          >
            <motion.a
              href="https://moje.flixy.cz/socialmaty/p/-shrnut-objedn-vky--j46lwbhrv"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="group bg-gradient-to-r from-green-400 to-green-600 text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:from-green-500 hover:to-green-700 shadow-lg hover:shadow-green-400/50 inline-flex items-center gap-3"
            >
              <FaRocket className="text-xl" />
              <span>Chci začít prodávat</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </AnimateIn>
        </motion.div>
      </div>
    </section>
  );
};

export default CashInMastery;

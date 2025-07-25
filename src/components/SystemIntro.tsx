import React from "react";
import {
  FaRobot,
  FaClock,
  FaQuestion,
  FaRocket,
  FaCheck,
} from "react-icons/fa";
import Image from "next/image";
import AnimateIn from "./animations/AnimateIn";
import StaggeredAnimate from "./animations/StaggeredAnimate";

const SystemIntro = () => {
  return (
    <section
      id="system"
      className="relative bg-gradient-to-br from-black via-gray-900 to-green-950 text-white py-24 px-4 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-green-400/15 rounded-full blur-2xl animate-pulse" />
      </div>

      <div className="relative max-w-6xl mx-auto text-center z-10">
        <div className="mb-16">
          <AnimateIn direction="up" duration={0.6} delay={0.1}>
            <div className="flex items-center justify-center gap-3 mb-8">
              <FaRocket className="text-green-400 text-4xl" />
              <h2 className="text-4xl md:text-6xl font-extrabold">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Odhalil jsem kód Instagramu.
                </span>
              </h2>
            </div>
          </AnimateIn>

          <AnimateIn direction="up" duration={0.7} delay={0.3}>
            <div className="bg-gradient-to-r from-green-400/10 to-green-600/5 p-8 rounded-2xl border border-green-400/20 backdrop-blur-sm mb-8">
              <p className="text-2xl md:text-4xl text-gray-100 mb-6 leading-relaxed font-black">
                Teď si s klienty{" "}
                <span className="text-green-400 font-bold">
                  diktuju viralitu, prodávám na autopilota
                </span>{" "}
                a celý systém jede
                <span className="text-green-400 font-bold">
                  {" "}
                  za 30 minut denně díky AI.
                </span>
              </p>
              <StaggeredAnimate
                direction="up"
                staggerDelay={0.1}
                initialDelay={0.5}
                className="flex flex-wrap items-center justify-center gap-4 mb-6"
              >
                {[
                  <div
                    key="1"
                    className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full"
                  >
                    <FaCheck className="text-green-400" />
                    <span className="text-green-400 font-semibold">
                      Ověřený systém
                    </span>
                  </div>,
                  <div
                    key="2"
                    className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full"
                  >
                    <FaRobot className="text-green-400" />
                    <span className="text-green-400 font-semibold">
                      AI Powered
                    </span>
                  </div>,
                  <div
                    key="3"
                    className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full"
                  >
                    <FaClock className="text-green-400" />
                    <span className="text-green-400 font-semibold">
                      30 min/den
                    </span>
                  </div>,
                ]}
              </StaggeredAnimate>
              <AnimateIn
                direction="up"
                delay={0.8}
                duration={0.5}
                animateScale={true}
              >
                <a
                  href="https://moje.flixy.cz/socialmaty/p/-shrnut-objedn-vky--j46lwbhrv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-green-400 to-green-600 text-black px-8 py-4 rounded-full font-bold text-xl hover:from-green-500 hover:to-green-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-400/50"
                >
                  <FaQuestion className="text-xl" />
                  <span>Chceš to taky?</span>
                </a>
              </AnimateIn>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn direction="up" duration={0.8} delay={0.5}>
          <div className="bg-gradient-to-br from-black/80 via-gray-900/80 to-green-950/80 backdrop-blur-md p-12 rounded-3xl border-2 border-green-400/30 shadow-2xl">
            <div className="mb-8 flex flex-col items-center justify-center">
              <AnimateIn direction="up" duration={0.6} delay={0.7}>
                <h3 className="text-4xl md:text-5xl font-extrabold mb-6">
                  <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                    Představuji Ti GrowMat Academy
                  </span>
                </h3>
              </AnimateIn>
              <AnimateIn
                direction="up"
                duration={0.7}
                delay={0.9}
                animateScale={true}
              >
                <Image
                  src="/kurz_mockup.png"
                  alt="Kurz preview"
                  width={700}
                  height={400}
                  className="rounded-2xl shadow-lg py-4 object-cover w-full h-full"
                />
              </AnimateIn>
              <AnimateIn direction="up" duration={0.7} delay={1.1}>
                <div className="bg-gradient-to-r from-green-400/20 to-green-600/10 p-4 w-full rounded-2xl border border-green-400/30 mb-8">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-green-400/20 px-4 py-2 rounded-full mb-4">
                      <span className="text-green-400 font-bold text-xl">
                        #1
                      </span>
                      <span className="text-white font-semibold text-xl">
                        ONLINE KOMUNITA
                      </span>
                    </div>
                  </div>
                  <p className="text-xl md:text-2xl font-bold text-white mb-4">
                    PRO RAKETOVÝ RŮST A PRODEJ NA INSTAGRAMU
                  </p>
                  <StaggeredAnimate
                    direction="up"
                    staggerDelay={0.15}
                    initialDelay={1.3}
                    className="grid md:grid-cols-3 gap-4 mb-6"
                  >
                    {[
                      <div
                        key="1"
                        className="bg-black/30 p-4 rounded-xl border border-green-400/20"
                      >
                        <FaRobot className="text-green-400 text-2xl mb-2 mx-auto" />
                        <p className="text-lg text-gray-300">Jen pomocí AI</p>
                      </div>,
                      <div
                        key="2"
                        className="bg-black/30 p-4 rounded-xl border border-green-400/20"
                      >
                        <span className="text-green-400 text-2xl mb-2 block">
                          📱
                        </span>
                        <p className="text-lg text-gray-300">A telefonu</p>
                      </div>,
                      <div
                        key="3"
                        className="bg-black/30 p-4 rounded-xl border border-green-400/20"
                      >
                        <FaClock className="text-green-400 text-2xl mb-2 mx-auto" />
                        <p className="text-lg text-gray-300">
                          Za 30 minut práce denně
                        </p>
                      </div>,
                    ]}
                  </StaggeredAnimate>
                </div>
              </AnimateIn>
            </div>
          </div>
        </AnimateIn>
        <AnimateIn direction="up" duration={0.8} delay={1.5}>
          <div className="bg-green-400/10 p-8 rounded-2xl border border-green-400/20 mt-4">
            <h4 className="text-2xl font-bold mb-6 text-green-400 flex items-center justify-center gap-2">
              <span className="text-3xl">🎯</span>
              Co najdeš uvnitř?
            </h4>
            <p className="text-lg text-gray-300 leading-relaxed">
              Odhal jasný systém, který Ti přesně ukáže
              <span className="text-green-400 font-semibold">
                {" "}
                Jak raketově růst a vydělávat na Instagramu{" "}
              </span>
              bez placení reklam a dlouhých hodin editování.
            </p>
            <AnimateIn
              direction="up"
              duration={0.7}
              delay={1.7}
              animateScale={true}
            >
              <video
                id="demo-video"
                className="w-full h-auto pt-4 rounded-xl shadow-lg"
                controls
                preload="metadata"
                playsInline
                poster="/kurz_mockup.png"
              >
                <source src="/video/obsah-compressed.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </AnimateIn>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default SystemIntro;

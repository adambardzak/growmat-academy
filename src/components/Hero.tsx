"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  FaInstagram,
  FaRocket,
  FaChartLine,
  FaPlay,
  FaArrowRight,
  FaUsers,
  FaFire,
  FaStopwatch,
  FaCheck,
} from "react-icons/fa";
import Aurora from "./Aurora";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute rotate-180 inset-0 pointer-events-none z-0 max-h-screen">
        <Aurora
          colorStops={["#6D9B4B", "#3E1E68", "#6D9B4B"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <div className="relative max-w-6xl mx-auto text-center z-10 pt-16 flex flex-col items-center justify-centers">
        <div className="mb-12">
          <div className="flex justify-center items-center gap-3 mb-6">
            <FaInstagram className="text-green-400 text-3xl" />
            <p className="text-green-400 text-lg font-semibold bg-green-400/10 px-4 py-2 rounded-full border border-green-400/20">
              Pro začínající podnikatele a tvůrce na Instagramu
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Začni raketově růst a prodávat na Instagramu
            </span>
            {/* <br /> */}
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent drop-shadow-lg">
              {" "}
              &quot;na automat&quot;{" "}
            </span>
            {/* <br /> */}
            <span className="text-white">
              díky <br />
              3-Fázovému GrowMat Systému
            </span>
          </h1>

          <div className="flex justify-center items-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700">
              <FaRocket className="text-green-400" />
              <span className="text-gray-300 text-sm">BEZ placení reklam</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700">
              <FaChartLine className="text-green-400" />
              <span className="text-gray-300 text-sm">
                BEZ dlouhého editování
              </span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700">
              <FaStopwatch className="text-green-400" />
              <span className="text-gray-300 text-sm">30 minut denně s AI</span>
            </div>
          </div>

          {/* Main Selling Video */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-green-400/20 to-green-600/10 p-4 rounded-3xl border border-green-400/30 backdrop-blur-sm shadow-2xl">
                <div className="relative bg-black/60 rounded-2xl overflow-hidden">
                  <video
                    className="w-full h-auto"
                    // poster="/api/placeholder/800/500"
                    controls
                    preload="metadata"
                  >
                    <source src="/hero_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Bottom overlay with key points */}
                </div>
              </div>

              {/* Video Description */}
              <div className="text-center mt-6">
                {/* Video CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    onClick={handlePlayVideo}
                    className="group bg-gradient-to-r from-green-400 to-green-600 text-black font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:from-green-500 hover:to-green-700 hover:scale-105 shadow-lg hover:shadow-green-400/50 inline-flex items-center gap-2"
                  >
                    <FaCheck className="text-lg" />
                    <span>Chci vědět víc!</span>
                  </button>
                </div>

                {/* Social Proof Numbers */}
                <div className="flex flex-wrap justify-center gap-8 mt-8 md:mt-16">
                  <div className="text-center">
                    <h3 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
                      0→+90 000
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">
                      Získaných sledujících
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
                      +1000%
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">Nárůst dosahu</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
                      +15 000 000
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">
                      Zhlédnutí Reels
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-md rounded-3xl p-8 mb-8 border border-gray-700/50 shadow-2xl">
          <h2 className="text-3xl font-bold mb-8 text-green-400 flex items-center justify-center gap-3">
            <span className="text-4xl">🤔</span>
            Nech mě hádat…
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-6">
              <div className="bg-black/30 p-6 rounded-xl border-l-4 border-green-400/60 hover:border-green-400 transition-all duration-300">
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-green-400 font-semibold">📝</span> Ještě
                  jsi nezačal/a tvořit, protože máš pocit,
                  <b>
                    {" "}
                    že nevíš, co říct — nebo jak to říct, aby to vůbec někoho
                    zajímalo.
                  </b>
                </p>
              </div>
              <div className="bg-black/30 p-6 rounded-xl border-l-4 border-green-400/60 hover:border-green-400 transition-all duration-300">
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-green-400 font-semibold">📊</span>
                  <b>
                    {" "}
                    Už tvoříš, ale většina tvých reels má max. pár tisíc views…
                  </b>{" "}
                  a ty si říkáš,<b> jestli to má vůbec smysl.</b>
                </p>
              </div>
              <div className="bg-black/30 p-6 rounded-xl border-l-4 border-green-400/60 hover:border-green-400 transition-all duration-300">
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-green-400 font-semibold">🎯</span>{" "}
                  Sleduješ ostatní a říkáš si:{" "}
                  <b> &quot;Kdybych se to konečně naučil/a… </b>mohl/a bych taky
                  <b>žít svobodně a dělat, co mě baví.&quot;</b>
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-black/30 p-6 rounded-xl border-l-4 border-green-400/60 hover:border-green-400 transition-all duration-300">
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-green-400 font-semibold">💰</span> Když
                  se řekne <b>&quot;prodej&quot; </b> — okamžitě se ti vybaví
                  manipulace, nátlak a ty jen chceš vědět{" "}
                  <b>jak prodávat na IG efektivně a eticky..</b>
                </p>
              </div>
              <div className="bg-black/30 p-6 rounded-xl border-l-4 border-green-400/60 hover:border-green-400 transition-all duration-300">
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-green-400 font-semibold">⏰</span>{" "}
                  Nechceš trávit hodiny nad složitým editováním videí a přesto
                  přesně vědět
                  <b> jak za 10 minut vytvořit video se statisíci views.</b>
                </p>
              </div>
              <div className="bg-black/30 p-6 rounded-xl border-l-4 border-green-400/60 hover:border-green-400 transition-all duration-300">
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-green-400 font-semibold">🎓</span> Už
                  jsi investoval/a čas, možná i peníze do nejrůznějších kurzů —
                  a jediné, co teď chceš, <b>je konečně vidět výsledky.</b>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Multiple CTAs */}
        <div className="gap-6 mt-12">
          <button className="group bg-gradient-to-r from-green-400 to-green-600 text-black font-bold py-4 px-6 rounded-full text-lg transition-all duration-300 hover:from-green-500 hover:to-green-700 hover:scale-105 shadow-lg hover:shadow-green-400/50 flex items-center justify-center gap-2">
            <FaFire className="text-xl" />
            <span>Začni růst už dnes!</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

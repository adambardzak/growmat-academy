import React from "react";
import { FaCode, FaRobot, FaClock, FaQuestion, FaRocket } from "react-icons/fa";
import Image from "next/image";

const SystemIntro = () => {
  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-green-950 text-white py-24 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-green-400/15 rounded-full blur-2xl animate-pulse" />
      </div>

      <div className="relative max-w-6xl mx-auto text-center z-10">
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <FaRocket className="text-green-400 text-4xl" />
            <h2 className="text-4xl md:text-6xl font-extrabold">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Odhalil jsem kód Instagramu.
              </span>
            </h2>
          </div>

          <div className="bg-gradient-to-r from-green-400/10 to-green-600/5 p-8 rounded-2xl border border-green-400/20 backdrop-blur-sm mb-8">
            <p className="text-2xl md:text-4xl text-gray-100 mb-6 leading-relaxed font-black">
              Teď si s klienty diktuju viralitu, prodávám na autopilota a celý
              systém jede za 30 minut denně díky AI.
            </p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full">
                <FaRobot className="text-green-400" />
                <span className="text-green-400 font-semibold">AI Powered</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full">
                <FaClock className="text-green-400" />
                <span className="text-green-400 font-semibold">30 min/den</span>
              </div>
            </div>
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-400 to-green-600 text-black px-8 py-4 rounded-full font-bold text-xl">
              <FaQuestion className="text-xl" />
              <span>Chceš to taky?</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-black/80 via-gray-900/80 to-green-950/80 backdrop-blur-md p-12 rounded-3xl border-2 border-green-400/30 shadow-2xl">
          <div className="mb-8 flex flex-col items-center justify-center">
            <h3 className="text-4xl md:text-5xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Představuji Ti GrowMat Academy
              </span>
            </h3>
            <Image
              src="/kurz_mockup.png"
              alt="Kurz preview"
              width={700}
              height={400}
              className="rounded-2xl shadow-lg py-4 object-cover w-full h-full"
            />
            <div className="bg-gradient-to-r from-green-400/20 to-green-600/10 p-8 rounded-2xl border border-green-400/30 mb-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-green-400/20 px-4 py-2 rounded-full mb-4">
                  <span className="text-green-400 font-bold text-lg">#1</span>
                  <span className="text-white font-semibold">
                    ONLINE KOMUNITA
                  </span>
                </div>
              </div>
              <p className="text-lg md:text-xl font-bold text-white mb-4">
                PRO RAKETOVÝ RŮST A PRODEJ NA INSTAGRAMU
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-black/30 p-4 rounded-xl border border-green-400/20">
                  <FaRobot className="text-green-400 text-2xl mb-2 mx-auto" />
                  <p className="text-sm text-gray-300">Jen pomocí AI</p>
                </div>
                <div className="bg-black/30 p-4 rounded-xl border border-green-400/20">
                  <span className="text-green-400 text-2xl mb-2 block">📱</span>
                  <p className="text-sm text-gray-300">A telefonu</p>
                </div>
                <div className="bg-black/30 p-4 rounded-xl border border-green-400/20">
                  <FaClock className="text-green-400 text-2xl mb-2 mx-auto" />
                  <p className="text-sm text-gray-300">
                    Za 30 minut práce denně
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
          <video className="w-full h-auto pt-4" controls>
            <source src="/kurz_mockup.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default SystemIntro;

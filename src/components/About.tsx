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

const About = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-24 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-green-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-green-400/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-5xl mx-auto z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <FaUser className="text-green-400 text-3xl" />
            <h2 className="text-4xl md:text-6xl font-extrabold">
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Kdo jsem?
              </span>
            </h2>
          </div>

          {/* Profile Image */}
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="bg-gradient-to-r from-green-400/20 to-green-600/10 p-3 rounded-full">
                <Image
                  src="/profile.avif"
                  alt="Matyáš Linda"
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full object-cover border-4 border-green-400/30"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-green-400 text-black p-2 rounded-full">
                <FaInstagram className="text-lg" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-400/10 to-green-600/5 p-8 rounded-2xl border border-green-400/20 backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-100">
              Jmenuji se <span className="text-green-400">Matyáš Linda</span>
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              a buduji na Instagramu profily, které transformují lidem životy v
              oblasti zdraví.
            </p>
          </div>
        </div>

        <div className=" gap-12 mb-16">
          <div className="bg-white/5 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 hover:border-green-400/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <FaPodcast className="text-green-400 text-2xl" />
              <h4 className="text-xl font-semibold text-green-400">
                Můj začátek
              </h4>
            </div>

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

            <p className="text-gray-300 leading-relaxed mb-4">
              Když jsem začínal s mým prvním projektem - podcast{" "}
              <span className="text-green-400 font-semibold">Sober Boys</span>-
              neměl jsem absolutně tušení jak být virální, editovat videa či jak
              se vůbec na sociálních sítích prosadit..
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Všechny dovednosti a know-how jsem tedy testoval metodou
              pokus/omyl jak na svých projektech, tak i na prvních klientech,
              kteří ve mě vložili důvěru.
            </p>
            <div className="flex items-center gap-3 mb-6">
              <FaGraduationCap className="text-green-400 text-2xl" />
              <h4 className="text-xl font-semibold text-green-400">
                GrowMat Academy
              </h4>
            </div>

            <p className="text-gray-300 leading-relaxed mb-4">
              Do GrowMat Academy jsem vložil veškeré své know-how prakticky a
              provádím Tě krok za krokem od samotného založení profilu až po
              první prodeje.
            </p>
            <div className="bg-black/20 p-4 rounded-xl border-l-4 border-green-400 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <FaLightbulb className="text-green-400" />
                <span className="text-green-400 font-semibold">Proč?</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Protože kdybych na svém začátku měl místo, kde se od A do Z
                naučím Jak úspěšně budovat osobní brand na Instagramu - ušetřil
                bych spoustu peněz a hlavně času.
              </p>
            </div>

            <button className="group bg-green-400 hover:bg-green-500 text-black font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-400/50 inline-flex items-center gap-2">
              <span>Chci se připojit</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-md rounded-2xl p-12 border border-gray-700/50 shadow-2xl">
            <h3 className="text-3xl font-bold mb-8 text-green-400 flex items-center justify-center gap-3">
              <span className="text-4xl">🏆</span>
              Výsledky projektů/klientů
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-black/30 p-6 rounded-xl border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  1M+
                </div>
                <div className="text-gray-300">Celkových views</div>
              </div>
              <div className="bg-black/30 p-6 rounded-xl border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  500K+
                </div>
                <div className="text-gray-300">Nových followerů</div>
              </div>
              <div className="bg-black/30 p-6 rounded-xl border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  100+
                </div>
                <div className="text-gray-300">Úspěšných klientů</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-6 italic">
              [Konkrétní case studies a screenshoty výsledků budou doplněny]
            </p>
          </div>
        </div>
        <TestimonialCarousel />
      </div>
    </section>
  );
};

export default About;

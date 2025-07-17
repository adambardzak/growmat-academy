import React from "react";
import { FaGraduationCap, FaRocket, FaGift } from "react-icons/fa";

const CourseContent = () => {
  const minicourseFeatures = [
    {
      title: "TAJEMSTVÍ INSTAGRAM ALGORITMU",
      description: "a jak ho využít pro virální šíření",
      value: "390 Kč",
      icon: "🧠",
    },
    {
      title: "STRATEGIE 3x10 a VIRAL BROTHERS",
      description: 'jak získat 10 000 sledujících za 40 dnů "kopírováním"',
      value: "990 Kč",
      icon: "🚀",
    },
    {
      title: "3 STATISÍCOVÉ STRUKTURY VIDEÍ",
      description: "+ 2 nápady na virální příspěvky",
      value: "990 Kč",
      icon: "📹",
    },
    {
      title: "ROZBOR 5 VIRÁLNÍCH PŘÍSPĚVKŮ KLIENTŮ",
      description: "a jak je okopírovat",
      value: "1190 Kč",
      icon: "🔍",
    },
    {
      title: "OPTIMALIZACE PROFILU pro instantní důvěru",
      description: "Bio, profilovka, storysety",
      value: "390 Kč",
      icon: "✨",
    },
    {
      title: "JAK POSTOVAT REELS SPRÁVNĚ",
      description: "hashtagy, popisky, formát",
      value: "390 Kč",
      icon: "📱",
    },
    {
      title: "JAK VYUŽÍVAT STORIES",
      description: "pro prodej a důvěru",
      value: "790 Kč",
      icon: "📚",
    },
    {
      title: "MANYCHAT MASTERCLASS",
      description: "appka, která prodává za tebe + konkrétní automatizace",
      value: "1490 Kč",
      icon: "🤖",
    },
    {
      title: "PSYCHO-PRODEJNÍ STRATEGIE",
      description: "které znají jen 2 % úspěšných tvůrců",
      value: "990 Kč",
      icon: "🧠",
    },
    {
      title: "3-FÁZOVÝ GROWMAT SYSTÉM",
      description: "od 1. příspěvku k 1. prodeji 💰",
      value: "1990 Kč",
      icon: "💎",
    },
  ];

  const bonuses = [
    {
      title: "BONUS 1: Jak se dostat do hlavy sledujícím",
      description:
        "nikdy nebudeš přemýšlet, co postnout, protože Ti to řeknou Tví sledující..",
      icon: "🎯",
    },
    {
      title: "BONUS 2: Podceňovaný HACK",
      description:
        "který nastavíš za 5 minut a zvýší Tvůj zisk už v soukromých zprávách (bez ručního vypisování)",
      icon: "⚡",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-24 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Minicourse Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-green-400/15 to-green-600/10 backdrop-blur-md p-10 rounded-2xl border border-green-400/20 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <FaGraduationCap className="text-green-400 text-3xl" />
              <h3 className="text-3xl font-bold text-green-400">
                MINIKURZ pro začátečníky
              </h3>
            </div>
            <p className="text-xl text-gray-200 mb-6 leading-relaxed">
              Masterclass o Instagram algoritmu pro začátečníky i pokročilé.
            </p>
            <div className="bg-black/30 p-6 rounded-xl border-l-4 border-green-400">
              <p className="text-gray-300 leading-relaxed">
                Po tomhle minikurzu přesně pochopíš
                <span className="text-green-400 font-semibold">
                  {" "}
                  Jak funguje algoritmus na Instagramu{" "}
                </span>
                a co dělí úspěšné tvůrce od neúspěšných.
              </p>
            </div>
          </div>
        </div>

        {/* 3-Phase System */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-green-400/20 to-green-600/10 backdrop-blur-md p-10 rounded-2xl border border-green-400/30 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <FaRocket className="text-green-400 text-3xl" />
              <h3 className="text-3xl font-bold text-green-400">
                3-Fázový GrowMat Systém
              </h3>
            </div>
            <p className="text-xl text-gray-200 leading-relaxed">
              Provede Tě od založení profilu po první prodeje krok za krokem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {minicourseFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 hover:border-green-400/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{feature.icon}</span>
                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                        {feature.title}
                      </h4>
                      <p className="text-gray-300 text-sm mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  {/* <div className="bg-green-400/20 px-3 py-1 rounded-full border border-green-400/30">
                    <span className="text-green-400 font-bold text-sm">{feature.value}</span>
                  </div> */}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {bonuses.map((bonus, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-green-400/15 to-green-600/10 backdrop-blur-md p-8 rounded-2xl border border-green-400/30 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <FaGift className="text-green-400 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-green-400 mb-3">
                      {bonus.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {bonus.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseContent;

import React from "react";
import {
  FaGraduationCap,
  FaArrowRight,
  FaGift,
  FaCheck,
  FaCrown,
  FaLightbulb,
  FaRocket,
  FaUserShield,
} from "react-icons/fa";
import Aurora from "./Aurora";

const CashInMastery = () => {
  const modules = [
    {
      title: "1. MINDSET PRODEJE",
      description:
        "Zbavíš se mýtů, které tě brzdily – a začneš konečně růst a prodávat.",
      content: [
        "O čem prodej rozhodně není",
        'Proč někdo umí prodávat "face to face", ale na sítích neprodá ani vodu v poušti',
        "Jak se zbavit strachu z prodeje a porovnávání s ostatními",
      ],
    },
    {
      title: "2. ZÁKLADY PSYCHOLOGIE PRODEJE",
      description:
        "Pochopíš psychologii prodeje a budeš mít konečně JASNO v tom, co mění sledující v zákazníky",
      content: [
        "Jak vyvolat silně pozitivní emoce vedoucí k nákupu",
        'Jak prodat "komukoliv"',
        'Jak vytvořit "no-brainer" nabídku, která se neodmítá',
      ],
    },
    {
      title: "3. RŮSTOVÁ STRATEGIE PROFILU",
      description:
        'Naučíš se tvořit raketově růstový obsah, který prodává a přitahuje ideální zákazníky - bez přetváření a neustálého "nahánění trendů".',
      content: [
        "Rozbor statisícových příspěvků klientů",
        '"Manipulativní hack" virality',
        "Jak spojit statisícová zhlédnutí s prodejem",
      ],
    },
    {
      title: "4. DŮVĚRA & KONVERZE",
      description:
        "Z feedu, stories a DM vytvoříš mikrofunnel. Ukážeš autoritu bez přehnaného ega – a povedeš sledující k akci. Napíšeš od A do Z prodejní stránku, co skutečně prodává.",
      content: [
        "Jak tvořit prodejní stories",
        "Jak správně sdílet recenze/reference",
        "Jak napsat prodejní stránku dle jasné struktury",
        'Jak vytvořit prodejní systém od A do Z "na automat" za 30 minut denně',
      ],
    },
  ];

  const bonuses = [
    {
      title: "Rozbor reálných profilů",
      description:
        "neuvidíš jen teorii, ale pitvu toho, co funguje mně a mým klientům.",
    },
    {
      title: "AI Prompt Pack",
      description:
        "Získej připravené příkazy, které ti ušetří hodiny přemýšlení a pomůžou ti tvořit přesvědčivý obsah a prodejní texty 3× rychleji – i když nejsi copywriter.",
    },
  ];

  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-black via-gray-900 to-green-950 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-400/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-green-400/5 to-transparent rounded-full animate-pulse" />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        <div className="text-center mb-16 items-center flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 bg-green-400/20 backdrop-blur-sm px-6 py-3 rounded-full border border-green-400/30 mb-6">
            <FaGraduationCap className="text-green-400 text-xl" />
            <span className="text-green-300 font-semibold">
              Exkluzivní modul
            </span>
            <FaGraduationCap className="text-green-400 text-xl" />
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent shadow-lg">
              CASH-IN Mastery
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-4 max-w-3xl">
            Jak efektivně prodávat na Instagramu
          </p>
          <p className="text-lg text-gray-300 max-w-2xl">
            bez marketingových plků, složitých prodejních definic a pocitu
            &quot;vnucování se&quot;
          </p>
          <div className="mt-6">
            <span className="bg-gradient-to-r from-green-400/30 to-green-600/30 backdrop-blur-sm px-6 py-3 rounded-full border border-green-400/30 font-bold text-white shadow-lg">
              VE 4 NADUPANÝCH MODULECH
            </span>
          </div>
        </div>

        <div className="grid gap-8 mb-16">
          {modules.map((module, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-md border border-green-400/20 shadow-xl rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-green-400/30 hover:border-green-400/40"
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
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-400/20 to-green-600/10 p-10 rounded-2xl border border-green-400/30 shadow-lg backdrop-blur-md">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-green-400/30 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400/40">
              <span className="text-green-300 font-semibold">
                Exkluzivní bonusy
              </span>
            </div>
            <div className="h-px bg-gradient-to-r from-green-400/50 to-transparent flex-grow"></div>
          </div>

          <h3 className="text-3xl font-extrabold mb-8 text-center bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
            ZÍSKÁŠ NAVÍC:
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {bonuses.map((bonus, index) => (
              <div
                key={index}
                className="bg-black/30 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 hover:-translate-y-1 transition-all duration-300 hover:shadow-green-400/20 hover:border-green-400/30"
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
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center">
            <button className="group bg-gradient-to-r from-green-400 to-green-600 text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:from-green-500 hover:to-green-700 hover:scale-105 shadow-lg hover:shadow-green-400/50 inline-flex items-center gap-3">
              <FaRocket className="text-xl" />
              <span>Chci začít prodávat</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CashInMastery;

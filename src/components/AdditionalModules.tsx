import React from "react";
import Image from "next/image";
import {
  FaCrown,
  FaEdit,
  FaRobot,
  FaLayerGroup,
  FaUserFriends,
  FaArrowRight,
  FaStar,
  FaPlay,
} from "react-icons/fa";

const AdditionalModules = () => {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-black via-gray-900 to-green-950 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-400/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-green-400/5 to-transparent rounded-full animate-pulse" />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section Header */}
        <div className="text-center mb-16 items-center flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 bg-green-400/20 backdrop-blur-sm px-6 py-3 rounded-full border border-green-400/30 mb-6">
            <FaStar className="text-green-400 text-xl" />
            <span className="text-green-300 font-semibold">Prémiový obsah</span>
            <FaStar className="text-green-400 text-xl" />
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent shadow-lg">
              Bonusové moduly
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Rozšiř své znalosti a zrychli růst díky těmto specializovaným
            modulům
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Faceless Masterclass */}
          <div className="group bg-white/5 backdrop-blur-md border border-green-400/20 shadow-xl rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-green-400/30 hover:border-green-400/40">
            {/* Module badge */}
            <div className="flex justify-between items-start mb-6">
              <div className="bg-green-400/20 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400/30">
                <span className="text-green-300 text-sm font-semibold">
                  Premium modul
                </span>
              </div>
              <div className="h-10 w-10 rounded-full bg-green-400/20 flex items-center justify-center">
                <FaCrown className="text-green-400 text-xl" />
              </div>
            </div>

            {/* Image section */}
            <div className="relative mb-6 overflow-hidden rounded-xl">
              <div className="aspect-w-16 aspect-h-9 relative">
                <Image
                  src="/images/faceless-module.jpg"
                  alt="Faceless Masterclass"
                  width={500}
                  height={280}
                  className="w-full h-48 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-400/80 rounded-full flex items-center justify-center">
                    <FaPlay className="text-black" />
                  </div>
                  <span className="text-white font-semibold text-sm">
                    10 video lekcí
                  </span>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
              Faceless Masterclass
            </h3>

            <p className="text-gray-300 mb-6 font-medium">
              Kompletní blueprint Jak začít tvořit a vydělávat na IG bez
              ukazování obličeje.
            </p>

            <div className="space-y-4">
              <div className="flex items-start bg-black/30 backdrop-blur-sm p-3 rounded-lg border-l-2 border-green-400/40 hover:border-green-400 transition-all duration-300">
                <span className="text-green-400 mr-3 mt-0.5">
                  <FaStar className="text-green-400" />
                </span>
                <span className="text-gray-200">
                  1000+ virálních klipů jako bonus
                </span>
              </div>
              <div className="flex items-start bg-black/30 backdrop-blur-sm p-3 rounded-lg border-l-2 border-green-400/40 hover:border-green-400 transition-all duration-300">
                <span className="text-green-400 mr-3 mt-0.5">
                  <FaStar className="text-green-400" />
                </span>
                <span className="text-gray-200">
                  Strategie od A do Z pro tvorbu motivačních stránek a faceless
                  účtů prodávající digi. produkty
                </span>
              </div>
              <div className="flex items-start bg-black/30 backdrop-blur-sm p-3 rounded-lg border-l-2 border-green-400/40 hover:border-green-400 transition-all duration-300">
                <span className="text-green-400 mr-3 mt-0.5">
                  <FaStar className="text-green-400" />
                </span>
                <span className="text-gray-200">
                  Seznam všech užitečných aplikací pro start úspěšného faceless
                  účtu
                </span>
              </div>
              <div className="flex items-start bg-black/30 backdrop-blur-sm p-3 rounded-lg border-l-2 border-green-400/40 hover:border-green-400 transition-all duration-300">
                <span className="text-green-400 mr-3 mt-0.5">
                  <FaStar className="text-green-400" />
                </span>
                <span className="text-gray-200">10 nadupaných video-lekcí</span>
              </div>
            </div>
          </div>

          {/* Edit pro začátečníky */}
          <div className="group bg-white/5 backdrop-blur-md border border-green-400/20 shadow-xl rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-green-400/30 hover:border-green-400/40">
            {/* Module badge */}
            <div className="flex justify-between items-start mb-6">
              <div className="bg-green-400/20 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400/30">
                <span className="text-green-300 text-sm font-semibold">
                  Video editing
                </span>
              </div>
              <div className="h-10 w-10 rounded-full bg-green-400/20 flex items-center justify-center">
                <FaEdit className="text-green-400 text-xl" />
              </div>
            </div>

            {/* Image section */}
            <div className="relative mb-6 overflow-hidden rounded-xl">
              <div className="aspect-w-16 aspect-h-9 relative">
                <Image
                  src="/images/edit-module.jpg"
                  alt="Edit pro začátečníky"
                  width={500}
                  height={280}
                  className="w-full h-48 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-400/80 rounded-full flex items-center justify-center">
                    <FaPlay className="text-black" />
                  </div>
                  <span className="text-white font-semibold text-sm">
                    Video tutoriály
                  </span>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
              Edit pro začátečníky
            </h3>

            <div className="space-y-4">
              <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg border-l-2 border-green-400/40">
                <p className="text-gray-200 mb-2">
                  Konec dlouhým hodinám strávených editem videí.
                </p>
                <p className="text-gray-200 mb-2">
                  Naučím Tě Jak editovat jednoduše, rychle a prakticky.
                </p>
                <p className="text-gray-200">
                  Jen pomocí telefonu, Instagramu, CapCutu a Captions.
                </p>
              </div>

              <button className="w-full py-3 px-4 bg-green-400/20 hover:bg-green-400/30 text-green-400 rounded-full border border-green-400/30 transition-all duration-300 font-medium flex items-center justify-center gap-2 mt-4">
                <span>Zobrazit ukázku</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* AI Asistent */}
          <div className="group bg-gradient-to-r from-green-400/20 to-green-600/10 backdrop-blur-md border border-green-400/30 shadow-xl rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-green-400/30 hover:border-green-400/40">
            {/* Module badge */}
            <div className="flex justify-between items-start mb-6">
              <div className="bg-green-400/30 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400/50">
                <span className="text-green-300 text-sm font-semibold">
                  AI nástroj
                </span>
              </div>
              <div className="h-10 w-10 rounded-full bg-green-400/30 flex items-center justify-center">
                <FaRobot className="text-green-400 text-xl" />
              </div>
            </div>

            {/* Image section */}
            <div className="relative mb-6 overflow-hidden rounded-xl">
              <div className="aspect-w-16 aspect-h-9 relative">
                <Image
                  src="/images/growik-module.jpg"
                  alt="AI Asistent Growík"
                  width={500}
                  height={280}
                  className="w-full h-48 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-400/80 rounded-full flex items-center justify-center">
                    <FaRobot className="text-black" />
                  </div>
                  <span className="text-white font-semibold text-sm">
                    AI copywriting
                  </span>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
              AI Asistent &quot;Growík&quot;
            </h3>

            <div className="bg-black/40 backdrop-blur-sm p-5 rounded-xl border border-green-400/20 mb-6">
              <p className="text-xl text-white font-medium mb-3">
                Už nikdy nebudeš muset psát popisky.
              </p>
              <div className="space-y-3">
                <p className="text-gray-300">
                  Growík je napěchovaný know-how o psaní mistrovských prodejních
                  textů pro každou cílovou skupinu.
                </p>
                <p className="text-gray-300">
                  Všichni mí klienti ho používají a nese jim výsledky.
                </p>
              </div>
            </div>

            <div className="bg-green-400/10 backdrop-blur-sm py-3 px-4 rounded-full border border-green-400/30 text-center">
              <p className="text-green-300 italic">
                Kdo ví, třeba tuhle stránku psal on :).
              </p>
            </div>
          </div>

          {/* Bonusové tréninky */}
          <div className="group bg-white/5 backdrop-blur-md border border-green-400/20 shadow-xl rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-green-400/30 hover:border-green-400/40">
            {/* Module badge */}
            <div className="flex justify-between items-start mb-6">
              <div className="bg-green-400/20 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400/30">
                <span className="text-green-300 text-sm font-semibold">
                  Pravidelně aktualizováno
                </span>
              </div>
              <div className="h-10 w-10 rounded-full bg-green-400/20 flex items-center justify-center">
                <FaLayerGroup className="text-green-400 text-xl" />
              </div>
            </div>

            {/* Image section */}
            <div className="relative mb-6 overflow-hidden rounded-xl">
              <div className="aspect-w-16 aspect-h-9 relative">
                <Image
                  src="/images/bonus-trainings.jpg"
                  alt="Bonusové tréninky"
                  width={500}
                  height={280}
                  className="w-full h-48 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-400/80 rounded-full flex items-center justify-center">
                    <FaLayerGroup className="text-black" />
                  </div>
                  <span className="text-white font-semibold text-sm">
                    Pravidelný obsah
                  </span>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
              Bonusové tréninky
            </h3>

            <div className="flex gap-4 items-center bg-black/30 backdrop-blur-sm p-4 rounded-xl border-l-2 border-green-400/40 mb-4">
              <div className="min-w-10 h-10 flex items-center justify-center bg-green-400/20 rounded-full">
                <FaStar className="text-green-400" />
              </div>
              <p className="text-gray-200">
                Každý týden do GrowMat Academy přistane nový praktický trénink
                na růst a prodej na sociálních sítích.
              </p>
            </div>

            <div className="flex gap-4 items-center bg-black/30 backdrop-blur-sm p-4 rounded-xl border-l-2 border-green-400/40">
              <div className="min-w-10 h-10 flex items-center justify-center bg-green-400/20 rounded-full">
                <FaStar className="text-green-400" />
              </div>
              <p className="text-gray-200">
                Případové studie, tréninky na přání, tipy a strategie z praxe
                rozebrány krok za krokem.
              </p>
            </div>
          </div>
        </div>

        {/* Osobní podpora */}
        <div className="bg-gradient-to-r from-green-400/20 to-green-600/10 p-10 rounded-2xl border border-green-400/30 shadow-lg backdrop-blur-md">
          <div className="flex justify-between items-start mb-8">
            <div className="inline-flex items-center gap-2 bg-green-400/30 backdrop-blur-sm px-6 py-3 rounded-full border border-green-400/40">
              <FaUserFriends className="text-green-400 text-xl" />
              <span className="text-green-300 font-semibold">
                Komunitní podpora
              </span>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent to-green-400/50 flex-grow mt-6 ml-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-3xl font-extrabold mb-8 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
                Osobní podpora
              </h3>

              <div className="grid gap-6 mb-8">
                <div className="bg-black/40 backdrop-blur-sm p-5 rounded-xl border border-green-400/20 hover:-translate-y-1 transition-all duration-300">
                  <p className="text-gray-200">
                    Jako člen komunity se v sekci otázky můžeš zeptat na cokoliv
                    ohledně růstu a prodeje.
                  </p>
                </div>
                <div className="bg-black/40 backdrop-blur-sm p-5 rounded-xl border border-green-400/20 hover:-translate-y-1 transition-all duration-300">
                  <p className="text-gray-200">
                    Zanechej screenshot a požádej o zpětnou vazbu na Tvůj profil
                    nebo nový příspěvek.
                  </p>
                </div>
                <div className="bg-black/40 backdrop-blur-sm p-5 rounded-xl border border-green-400/20 hover:-translate-y-1 transition-all duration-300">
                  <p className="text-gray-200">
                    Pravidelně komunitu kontroluji a odpovídám na Tvé dotazy.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <button className="group bg-gradient-to-r from-green-400 to-green-600 text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:from-green-500 hover:to-green-700 hover:scale-105 shadow-lg hover:shadow-green-400/50 inline-flex items-center gap-3">
                  <span>Připoj se ke komunitě</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/community-support.jpg"
                alt="Komunitní podpora"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/30 to-black/30"></div>
              <div className="absolute bottom-6 left-6 bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-green-400/30 max-w-xs">
                <div className="text-green-300 font-semibold text-lg mb-2">
                  Vždy dostupná podpora
                </div>
                <p className="text-white/90 text-sm">
                  Spolu můžeme vyřešit jakýkoliv problém. Jsem tady, abych ti
                  pomohl dosáhnout tvých cílů.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators at bottom */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 bg-gray-800/50 backdrop-blur-sm px-8 py-4 rounded-full border border-gray-700">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span className="text-gray-300 text-sm">
                Získáš doživotní přístup
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span className="text-gray-300 text-sm">
                Pravidlené aktualizace obsahu
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span className="text-gray-300 text-sm">Přístup odkudkoli</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalModules;

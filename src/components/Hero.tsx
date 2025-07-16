import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaRocket, FaChartLine, FaPlay, FaArrowRight, FaUsers, FaFire } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-green-400/5 to-transparent rounded-full animate-pulse" />
      </div>
      
      <div className="relative max-w-6xl mx-auto text-center z-10">
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
            <br />
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent drop-shadow-lg">
              &quot;na automat&quot;
            </span>
            <br />
            <span className="text-white">díky 3-Fázovému GrowMat Systému</span>
          </h1>
          
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700">
              <FaRocket className="text-green-400" />
              <span className="text-gray-300 text-sm">BEZ placení reklam</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700">
              <FaChartLine className="text-green-400" />
              <span className="text-gray-300 text-sm">BEZ dlouhého editování</span>
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
                  <span className="text-green-400 font-semibold">📝</span> Ještě jsi nezačal/a tvořit, protože máš pocit, že nevíš, co říct 
                  — nebo jak to říct, aby to vůbec někoho zajímalo.
                </p>
              </div>
              <div className="bg-black/30 p-6 rounded-xl border-l-4 border-green-400/60 hover:border-green-400 transition-all duration-300">
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-green-400 font-semibold">📊</span> Už tvoříš, ale většina tvých reels má max. pár tisíc views… 
                  a ty si říkáš, jestli to má vůbec smysl.
                </p>
              </div>
              <div className="bg-black/30 p-6 rounded-xl border-l-4 border-green-400/60 hover:border-green-400 transition-all duration-300">
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-green-400 font-semibold">🎯</span> Sleduješ ostatní a říkáš si: &quot;Kdybych se to konečně naučil/a… 
                  mohl/a bych taky žít svobodně a dělat, co mě baví.&quot;
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-black/30 p-6 rounded-xl border-l-4 border-green-400/60 hover:border-green-400 transition-all duration-300">
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-green-400 font-semibold">💰</span> Když se řekne &quot;prodej&quot; — okamžitě se ti vybaví manipulace, nátlak 
                  a ty jen chceš vědět jak prodávat na IG efektivně a eticky..
                </p>
              </div>
              <div className="bg-black/30 p-6 rounded-xl border-l-4 border-green-400/60 hover:border-green-400 transition-all duration-300">
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-green-400 font-semibold">⏰</span> Nechceš trávit hodiny nad složitým editováním videí 
                  a přesto přesně vědět jak za 10 minut vytvořit video se statisíci views.
                </p>
              </div>
              <div className="bg-black/30 p-6 rounded-xl border-l-4 border-green-400/60 hover:border-green-400 transition-all duration-300">
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-green-400 font-semibold">🎓</span> Už jsi investoval/a čas, možná i peníze do nejrůznějších kurzů
                  — a jediné, co teď chceš, je konečně vidět výsledky.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Proof & Preview Section */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="bg-gradient-to-r from-green-400/20 to-green-600/10 p-8 rounded-2xl border border-green-400/30 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4 text-green-400 flex items-center gap-2">
                  <FaUsers className="text-xl" />
                  Připoj se k 1000+ úspěšným členům
                </h3>
                <p className="text-gray-300 mb-6">
                  Kteří už růst na Instagramu za posledních 30 dnů průměrně:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/30 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">+15K</div>
                    <div className="text-sm text-gray-400">Nových followerů</div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">+50K</div>
                    <div className="text-sm text-gray-400">Zhlédnutí</div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">+25</div>
                    <div className="text-sm text-gray-400">Prodejů</div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">98%</div>
                    <div className="text-sm text-gray-400">Spokojenost</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-green-400/20 to-green-600/10 p-3 rounded-2xl border border-green-400/30">
                <div className="relative bg-black/50 rounded-xl overflow-hidden">
                  <Image 
                    src="/api/placeholder/500/400" 
                    alt="Success Stories Preview" 
                    width={500}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button className="group bg-green-400/90 hover:bg-green-400 text-black p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-green-400/50">
                      <FaPlay className="text-2xl ml-1" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-green-400 text-sm font-semibold">🔥 Živě z akademie</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-center mt-4">
                Podívej se na výsledky našich členů
              </p>
            </div>
          </div>
        </div>
        
        {/* Problem/Solution Cards */}
        <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-md rounded-3xl p-8 mb-8 border border-gray-700/50 shadow-2xl">
          <h2 className="text-3xl font-bold mb-8 text-green-400 flex items-center justify-center gap-3">
            <span className="text-4xl">🤔</span>
            Nech mě hádat…
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-6">
              <div className="bg-black/30 p-6 rounded-xl border-l-4 border-green-400/60 hover:border-green-400 transition-all duration-300">
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-green-400 font-semibold">📝</span> Ještě jsi nezačal/a tvořit, protože máš pocit, že nevíš, co říct 
                  — nebo jak to říct, aby to vůbec někoho zajímalo.
                </p>
              </div>
              <div className="bg-black/30 p-6 rounded-xl border-l-4 border-green-400/60 hover:border-green-400 transition-all duration-300">
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-green-400 font-semibold">📊</span> Už tvoříš, ale většina tvých reels má max. pár tisíc views… 
                  a ty si říkáš, jestli to má vůbec smysl.
                </p>
              </div>
              <div className="bg-black/30 p-6 rounded-xl border-l-4 border-green-400/60 hover:border-green-400 transition-all duration-300">
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-green-400 font-semibold">🎯</span> Sleduješ ostatní a říkáš si: &quot;Kdybych se to konečně naučil/a… 
                  mohl/a bych taky žít svobodně a dělat, co mě baví.&quot;
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-black/30 p-6 rounded-xl border-l-4 border-green-400/60 hover:border-green-400 transition-all duration-300">
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-green-400 font-semibold">💰</span> Když se řekne &quot;prodej&quot; — okamžitě se ti vybaví manipulace, nátlak 
                  a ty jen chceš vědět jak prodávat na IG efektivně a eticky..
                </p>
              </div>
              <div className="bg-black/30 p-6 rounded-xl border-l-4 border-green-400/60 hover:border-green-400 transition-all duration-300">
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-green-400 font-semibold">⏰</span> Nechceš trávit hodiny nad složitým editováním videí 
                  a přesto přesně vědět jak za 10 minut vytvořit video se statisíci views.
                </p>
              </div>
              <div className="bg-black/30 p-6 rounded-xl border-l-4 border-green-400/60 hover:border-green-400 transition-all duration-300">
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-green-400 font-semibold">🎓</span> Už jsi investoval/a čas, možná i peníze do nejrůznějších kurzů
                  — a jediné, co teď chceš, je konečně vidět výsledky.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Multiple CTAs */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <button className="group bg-gradient-to-r from-green-400 to-green-600 text-black font-bold py-4 px-6 rounded-full text-lg transition-all duration-300 hover:from-green-500 hover:to-green-700 hover:scale-105 shadow-lg hover:shadow-green-400/50 flex items-center justify-center gap-2">
            <FaFire className="text-xl" />
            <span>Začni růst už dnes!</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button className="group bg-transparent border-2 border-green-400 text-green-400 font-bold py-4 px-6 rounded-full text-lg transition-all duration-300 hover:bg-green-400 hover:text-black hover:scale-105 shadow-lg hover:shadow-green-400/50 flex items-center justify-center gap-2">
            <FaPlay className="text-sm" />
            <span>Podívej se na demo</span>
          </button>
          
          <button className="group bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-6 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2">
            <FaUsers className="text-sm" />
            <span>Přečti si recenze</span>
          </button>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 bg-gray-800/50 backdrop-blur-sm px-8 py-4 rounded-full border border-gray-700">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✅</span>
              <span className="text-gray-300 text-sm">30denní záruka</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✅</span>
              <span className="text-gray-300 text-sm">Bez dlouhých smluv</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✅</span>
              <span className="text-gray-300 text-sm">Osobní podpora</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

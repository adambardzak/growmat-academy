import React from 'react';
import Image from 'next/image';
import { FaStar, FaTrophy, FaQuoteLeft, FaArrowRight, FaInstagram } from 'react-icons/fa';

const TestimonialsResults = () => {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-black via-gray-900 to-green-950 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-400/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-green-400/5 to-transparent rounded-full animate-pulse" />
      </div>
      
      <div className="relative max-w-6xl mx-auto z-10">
        
        {/* Results Section */}
        <div className="text-center mb-16 items-center flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 bg-green-400/20 backdrop-blur-sm px-6 py-3 rounded-full border border-green-400/30 mb-6">
            <FaTrophy className="text-green-400 text-xl" />
            <span className="text-green-300 font-semibold">Důkazy fungování</span>
            <FaTrophy className="text-green-400 text-xl" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent shadow-lg">
              Výsledky členů
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Připoj se k úspěšným členům GrowMat Academy a začni konečně růst!
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            { 
              views: "932K", 
              likes: "35.6K", 
              comments: "1.2K", 
              account: "@faceless_success",
              growth: "+28K followerů za 30 dní"
            },
            { 
              views: "1.4M", 
              likes: "126K", 
              comments: "3.4K", 
              account: "@fitness_motivation_cz",
              growth: "+55K followerů za 60 dní"
            },
            { 
              views: "467K", 
              likes: "42K", 
              comments: "809", 
              account: "@business_growth_tips",
              growth: "+12K followerů za 14 dní"
            },
            { 
              views: "2.1M", 
              likes: "208K", 
              comments: "5.7K", 
              account: "@digital_income_cz",
              growth: "+78K followerů za 90 dní"
            },
            { 
              views: "763K", 
              likes: "57K", 
              comments: "1.8K", 
              account: "@mindset_masters",
              growth: "+31K followerů za 45 dní"
            },
            { 
              views: "1.8M", 
              likes: "95K", 
              comments: "2.2K", 
              account: "@passive_wealth",
              growth: "+48K followerů za 60 dní"
            }
          ].map((item, index) => (
            <div key={index} className="group bg-white/5 backdrop-blur-md border border-green-400/20 shadow-xl rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-green-400/30 hover:border-green-400/40">
              <div className="relative aspect-square overflow-hidden rounded-xl mb-4">
                <Image 
                  src={`/images/result1.jpg`} 
                  alt={`Výsledek člena ${item.account}`} 
                  width={500} 
                  height={500} 
                  className="object-cover w-full h-full rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="h-8 w-8 bg-green-400/80 rounded-full flex items-center justify-center">
                    <FaInstagram className="text-black" />
                  </div>
                  <span className="text-white font-semibold text-sm">{item.account}</span>
                </div>
              </div>
              
              <div className="flex justify-between mb-4">
                <div className="bg-black/30 backdrop-blur-sm py-2 px-4 rounded-lg border-l-2 border-green-400/40">
                  <span className="text-green-300 text-xs block">Views</span>
                  <span className="text-white font-bold">{item.views}</span>
                </div>
                <div className="bg-black/30 backdrop-blur-sm py-2 px-4 rounded-lg border-l-2 border-green-400/40">
                  <span className="text-green-300 text-xs block">Likes</span>
                  <span className="text-white font-bold">{item.likes}</span>
                </div>
                <div className="bg-black/30 backdrop-blur-sm py-2 px-4 rounded-lg border-l-2 border-green-400/40">
                  <span className="text-green-300 text-xs block">Comments</span>
                  <span className="text-white font-bold">{item.comments}</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-400/20 to-green-600/10 py-3 px-4 rounded-lg text-center">
                <p className="text-white font-medium">
                  {item.growth}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-16 items-center flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 bg-green-400/20 backdrop-blur-sm px-6 py-3 rounded-full border border-green-400/30 mb-6">
            <FaQuoteLeft className="text-green-400 text-xl" />
            <span className="text-green-300 font-semibold">Zkušenosti absolventů</span>
            <FaQuoteLeft className="text-green-400 text-xl transform scale-x-[-1]" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight drop-shadow-lg">
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent shadow-lg">
              Co říkají absolventi?
            </span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {[
            {
              name: "Martina K.",
              handle: "@martina_online_success",
              image: "testimonial1.jpg",
              text: "Díky GrowMat Academy jsem konečně pochopila, jak Instagram algoritmus funguje. Za 2 měsíce jsem získala 18,5K nových sledujících a prodala svůj první digitální produkt za 180 000 Kč. Adam je skvělý mentor!"
            },
            {
              name: "Tomáš H.",
              handle: "@tomas_digital_entrepreneur",
              image: "testimonial1.jpg",
              text: "Na Instagramu jsem začínal od nuly. Po dokončení kurzů v GrowMat Academy jsem měl během 45 dní přes 10K organických sledujících. Strategie fungují přesně tak, jak Adam popisuje. Nemusel jsem utrácet za reklamy."
            },
            {
              name: "Petra V.",
              handle: "@petra_wellness_coach",
              image: "testimonial1.jpg",
              text: "Byla jsem skeptická, jestli pro mě Faceless Masterclass bude přínosem. Dnes mám úspěšný faceless účet s 32K sledujícími a pravidelný příjem. Metody jsou jednoduché, ale účinné - stačí je jen dodržovat!"
            },
            {
              name: "Lukáš M.",
              handle: "@lukas_passive_income",
              image: "testimonial1.jpg",
              text: "Z mých příspěvků se nedávno jeden stal virální a získal přes 3 miliony zhlédnutí! Vše díky tipům, které jsem se naučil v GrowMat Academy. Moje publikum se rozrostlo natolik, že jsem mohl dát výpověď v práci a soustředit se na svůj online byznys."
            }
          ].map((item, index) => (
            <div key={index} className="group bg-gradient-to-r from-green-400/20 to-green-600/10 backdrop-blur-md border border-green-400/30 shadow-xl rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-green-400/30">
              <div className="flex items-start mb-6">
                <div className="relative mr-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-green-400">
                    <Image 
                      src={`/images/${item.image}`} 
                      alt={item.name} 
                      width={64} 
                      height={64} 
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                    <FaInstagram className="text-black text-sm" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">{item.name}</h4>
                  <p className="text-green-300 text-sm">{item.handle}</p>
                </div>
                <div className="ml-auto">
                  <FaQuoteLeft className="text-green-400/30 text-4xl" />
                </div>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm p-5 rounded-xl border border-green-400/20 mb-6">
                <p className="text-gray-200 leading-relaxed">
                  &quot;{item.text}&quot;
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-green-400 mr-1" />
                  ))}
                </div>
                <div className="bg-green-400/20 backdrop-blur-sm px-4 py-1 rounded-full border border-green-400/30">
                  <span className="text-green-300 text-sm font-medium">Ověřená recenze</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-green-900 opacity-80"></div>
          
          <div className="relative p-12 md:p-20 flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-10 md:mb-0 md:pr-12">
              <div className="inline-flex items-center gap-2 bg-green-400/30 backdrop-blur-sm px-5 py-2 rounded-full border border-green-400/40 mb-6">
                <FaTrophy className="text-green-400" />
                <span className="text-green-300 text-sm font-medium">Join the winners</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
                Přidej se k úspěšným členům GrowMat Academy
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="min-w-8 h-8 flex items-center justify-center bg-green-400/30 rounded-full mr-4">
                    <span className="text-green-400 font-bold text-sm">✓</span>
                  </div>
                  <p className="text-gray-200">
                    Získej ověřené strategie pro organický růst účtu
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="min-w-8 h-8 flex items-center justify-center bg-green-400/30 rounded-full mr-4">
                    <span className="text-green-400 font-bold text-sm">✓</span>
                  </div>
                  <p className="text-gray-200">
                    Nauč se monetizovat své sledující skrze digitální produkty
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="min-w-8 h-8 flex items-center justify-center bg-green-400/30 rounded-full mr-4">
                    <span className="text-green-400 font-bold text-sm">✓</span>
                  </div>
                  <p className="text-gray-200">
                    Připoj se ke komunitě stejně smýšlejících podnikatelů
                  </p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/3 flex flex-col items-center">
              <div className="bg-black/50 backdrop-blur-md p-8 rounded-xl border border-green-400/30 shadow-lg text-center mb-6 w-full">
                <p className="text-2xl md:text-3xl font-bold text-green-400 mb-2">15 000+</p>
                <p className="text-white">úspěšných absolventů</p>
              </div>
              
              <button className="group bg-gradient-to-r from-green-400 to-green-600 text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:from-green-500 hover:to-green-700 hover:scale-105 shadow-lg hover:shadow-green-400/50 w-full flex items-center justify-center gap-2">
                <span>Začni svůj růst</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
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

export default TestimonialsResults;

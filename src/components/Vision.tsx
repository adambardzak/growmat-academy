import React from "react";
import Image from "next/image";
import {
  FaRegLightbulb,
  FaRegSmile,
  FaRegCheckCircle,
  FaRegEye,
  FaArrowRight,
  FaPlay,
  FaUsers,
  FaRocket,
  FaGift,
  FaLock,
  FaStar,
  FaHeart,
  FaChartLine,
  FaInstagram,
  FaCheckCircle,
  FaQuoteLeft,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRegLightbulb className="text-green-400 text-3xl mb-2" />,
    text: (
      <>
        Vezmeš telefon, natočíš jednoduché video za 10 minut <br />
        <span className="text-green-300">
          — a víš, že má potenciál zasáhnout statisíce lidí, protože chápeš,
          proč funguje.
        </span>
      </>
    ),
    cta: "Zjisti jak na to",
    image: "/api/placeholder/400/300",
    stats: "10x více dosahu",
    badge: "Rychlý start",
  },
  {
    icon: <FaRegSmile className="text-green-400 text-3xl mb-2" />,
    text: (
      <>
        Už se netočíš v kruhu, ale jedeš podle jasného systému, <br />
        <span className="text-green-300">
          který ti zabere max. 30 minut denně — a konečně vidíš výsledky.
        </span>
      </>
    ),
    cta: "Ukaž mi systém",
    image: "/api/placeholder/400/300",
    stats: "30 min denně",
    badge: "Ověřený systém",
  },
  {
    icon: <FaRegCheckCircle className="text-green-400 text-3xl mb-2" />,
    text: (
      <>
        Získáváš nejen dosahy a pozornost — ale i důvěru a prodeje, <br />
        <span className="text-green-300">
          protože umíš prodávat eticky, přirozeně a bez tlaku.
        </span>
      </>
    ),
    cta: "Chci se naučit prodávat",
    image: "/api/placeholder/400/300",
    stats: "Etické prodeje",
    badge: "Bez tlaku",
  },
  {
    icon: <FaRegEye className="text-green-400 text-3xl mb-2" />,
    text: (
      <>
        Už netvoříš &quot;naslepo&quot; — ale přesně chápeš, <br />
        <span className="text-green-300">
          jak funguje psychologie obsahu, a jak skrze něj budovat značku i
          příjem.
        </span>
      </>
    ),
    cta: "Odhal psychologii",
    image: "/api/placeholder/400/300",
    stats: "Psychologie úspěchu",
    badge: "Odborné znalosti",
  },
];

const testimonials = [
  {
    text: "Díky GrowMat Academy jsem během 3 měsíců zvýšil sledovanost o 50 000 followers a první prodeje přišly už za 2 týdny!",
    author: "Tomáš K.",
    result: "+50k followers",
    avatar: "/api/placeholder/80/80",
  },
  {
    text: "Konečně rozumím, proč některé příspěvky fungují a jiné ne. Moje engagement rate vzrostl na 15%!",
    author: "Anna M.",
    result: "15% engagement",
    avatar: "/api/placeholder/80/80",
  },
];

const Vision = () => {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-black via-gray-900 to-green-950 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-400/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-green-400/5 to-transparent rounded-full animate-pulse" />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Main Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-400/20 backdrop-blur-sm px-6 py-3 rounded-full border border-green-400/30 mb-6">
            <FaStar className="text-green-400 text-xl" />
            <span className="text-green-300 font-semibold">
              Tvoje nová realita
            </span>
            <FaStar className="text-green-400 text-xl" />
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent shadow-lg">
              Představ si, že:
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Už nejsi jen další profil v davu. Máš systém, který funguje, a
            konečně vidíš skutečné výsledky.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="group bg-gradient-to-r from-green-400 to-green-600 text-black font-bold py-3 px-6 rounded-full transition-all duration-300 hover:from-green-500 hover:to-green-700 hover:scale-105 shadow-lg hover:shadow-green-400/50 inline-flex items-center gap-2">
              <FaRocket className="text-lg" />
              <span>Začni růst ihned</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button className="group bg-white/10 backdrop-blur-md border border-green-400/30 text-green-400 font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:bg-green-400/20 hover:scale-105 shadow-lg inline-flex items-center gap-2">
              <FaPlay className="text-sm" />
              <span>Podívej se na ukázku</span>
            </button>
          </div>
        </div>

        {/* Hero Video/Image Section */}
        <div className="mb-16 text-center">
          <div className="relative inline-block">
            <div className="bg-gradient-to-r from-green-400/20 to-green-600/10 p-2 rounded-2xl border border-green-400/30">
              <div className="relative bg-black/50 rounded-xl overflow-hidden">
                <Image
                  src="/api/placeholder/800/450"
                  alt="Instagram Growth Preview"
                  width={800}
                  height={450}
                  className="w-full h-auto max-w-4xl"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button className="group bg-green-400/90 hover:bg-green-400 text-black p-6 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-green-400/50">
                    <FaPlay className="text-3xl ml-1" />
                  </button>
                </div>

                {/* Video Stats Overlay */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400/30">
                  <div className="flex items-center gap-2 text-green-400">
                    <FaUsers className="text-sm" />
                    <span className="text-sm font-semibold">
                      10,000+ sledujících
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <div className="bg-green-400/20 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400/30">
                <span className="text-green-300 font-semibold">
                  👆 Jak to funguje v praxi
                </span>
              </div>
              <button className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400/30 text-green-400 hover:bg-green-400/20 transition-all duration-300">
                <span className="text-sm">Více videí</span>
              </button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group bg-white/5 backdrop-blur-md border border-green-400/20 shadow-xl rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-green-400/30 hover:border-green-400/40"
            >
              {/* Badge */}
              <div className="flex justify-between items-start mb-4">
                <div className="bg-green-400/20 backdrop-blur-sm px-3 py-1 rounded-full border border-green-400/30">
                  <span className="text-green-300 text-sm font-semibold">
                    {feature.badge}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-green-400 font-bold text-sm">
                    {feature.stats}
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <Image
                  src={feature.image}
                  alt={`Feature ${idx + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-green-400/20 backdrop-blur-sm p-2 rounded-full border border-green-400/30">
                  {feature.icon}
                </div>

                {/* Quick Action Button */}
                <div className="absolute bottom-4 right-4">
                  <button className="bg-green-400/90 text-black p-2 rounded-full hover:bg-green-400 transition-all duration-300 hover:scale-110">
                    <FaArrowRight className="text-sm" />
                  </button>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-200 font-medium leading-relaxed mb-6 group-hover:text-green-200 transition-colors duration-300">
                  {feature.text}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button className="group-hover:bg-green-400 bg-green-400/80 hover:bg-green-500 text-black font-semibold py-3 px-6 rounded-full transition-all duration-300 inline-flex items-center gap-2 hover:scale-105 shadow-lg hover:shadow-green-400/50">
                    <span>{feature.cta}</span>
                    <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                  </button>

                  <button className="bg-white/10 backdrop-blur-md border border-green-400/30 text-green-400 font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:bg-green-400/20 hover:scale-105 shadow-lg inline-flex items-center gap-2">
                    <FaHeart className="text-sm" />
                    <span>Líbí se mi</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Section */}
        <div className="mb-16">
          <div className="bg-white/5 backdrop-blur-md border border-green-400/20 rounded-2xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-green-400 mb-2">
                Skutečné výsledky našich studentů
              </h3>
              <p className="text-gray-300">
                Přečti si, co říkají lidé, kteří už začali růst
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-black/30 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 relative"
                >
                  <FaQuoteLeft className="text-green-400/50 text-2xl mb-4" />
                  <p className="text-gray-200 mb-4 italic">
                    {testimonial.text}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <div className="text-green-400 font-semibold">
                          {testimonial.author}
                        </div>
                        <div className="text-gray-400 text-sm">
                          Ověřený student
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-400/20 backdrop-blur-sm px-3 py-1 rounded-full border border-green-400/30">
                      <span className="text-green-300 text-sm font-semibold">
                        {testimonial.result}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <button className="bg-gradient-to-r from-green-400 to-green-600 text-black font-bold py-3 px-8 rounded-full transition-all duration-300 hover:from-green-500 hover:to-green-700 hover:scale-105 shadow-lg hover:shadow-green-400/50 inline-flex items-center gap-2">
                <FaUsers className="text-lg" />
                <span>Přidej se k úspěšným</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-green-400/20 to-green-600/10 p-10 rounded-2xl border border-green-400/30 shadow-lg backdrop-blur-md animate-fade-in">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-green-400/30 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400/40 mb-4">
                <FaCheckCircle className="text-green-400" />
                <span className="text-green-300 font-semibold">
                  Záruka úspěchu
                </span>
              </div>
            </div>

            <h3 className="text-3xl font-bold mb-4 text-green-400 drop-shadow">
              A co je nejdůležitější
            </h3>
            <p className="text-2xl text-gray-100 font-semibold mb-8">
              — všechno tohle ti konečně dává smysl. <br />
              <span className="text-green-300">
                Vidíš cestu, systém a hlavně… výsledky.
              </span>
            </p>

            {/* Multiple CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-gradient-to-r from-green-400 to-green-600 text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:from-green-500 hover:to-green-700 hover:scale-105 shadow-lg hover:shadow-green-400/50 inline-flex items-center gap-3">
                <FaRocket className="text-xl" />
                <span>Začni růst už dnes!</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button className="group bg-white/10 backdrop-blur-md border border-green-400/30 text-green-400 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:bg-green-400/20 hover:scale-105 shadow-lg inline-flex items-center gap-3">
                <FaInstagram className="text-xl" />
                <span>Sleduj nás na IG</span>
              </button>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-400" />
                <span>30denní záruka</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-400" />
                <span>Okamžitý přístup</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-400" />
                <span>Doživotní podpora</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;

import React from "react";
import Image from "next/image";
import {
  FaRegLightbulb,
  FaRegCheckCircle,
  FaRegEye,
  FaArrowRight,
  FaRocket,
  FaBrain,
} from "react-icons/fa";
import { FaArrowUpRightDots } from "react-icons/fa6";

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
    stats: "10x více dosahu",
    badge: "Rychlý start",
    image: "/rychly_start.svg",
  },
  {
    icon: <FaRegCheckCircle className="text-green-400 text-3xl mb-2" />,
    text: (
      <>
        Už se netočíš v kruhu, ale jedeš podle jasného systému, <br />
        <span className="text-green-300">
          který ti zabere max. 30 minut denně — a konečně vidíš výsledky.
        </span>
      </>
    ),
    cta: "Ukaž mi systém",
    stats: "30 min denně",
    badge: "Ověřený systém",
    image: "/overeny_system.svg",
  },
  {
    icon: <FaRegEye className="text-green-400 text-3xl mb-2" />,
    text: (
      <>
        Získáváš nejen dosahy a pozornost — ale i důvěru a prodeje, <br />
        <span className="text-green-300">
          protože umíš prodávat eticky, přirozeně a bez tlaku.
        </span>
      </>
    ),
    cta: "Chci se naučit prodávat",
    stats: "Etické prodeje",
    badge: "Bez tlaku",
    image: "/bez_tlaku.svg",
  },
  {
    icon: <FaBrain className="text-green-400 text-3xl mb-2" />,
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
    stats: "Psychologie úspěchu",
    badge: "Odborné znalosti",
    image: "/odborne_znalosti.svg",
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
    <section
      id="system"
      className="relative py-24 px-4 bg-gradient-to-br from-black via-gray-900 to-green-950 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-400/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-green-400/5 to-transparent rounded-full animate-pulse" />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Main Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent shadow-lg">
              Představ si, že:
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Už nejsi jen další profil v davu. Máš{" "}
            <span className="text-green-400 font-bold">
              systém, který funguje,
            </span>{" "}
            a konečně vidíš
            <span className="text-green-400 font-bold">
              {" "}
              skutečné&nbsp;výsledky.
            </span>
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://moje.flixy.cz/socialmaty/p/-shrnut-objedn-vky--j46lwbhrv"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-green-400 to-green-600 text-black font-bold py-3 px-6 rounded-full transition-all duration-300 hover:from-green-500 hover:to-green-700 hover:scale-105 shadow-lg hover:shadow-green-400/50 inline-flex items-center gap-2"
            >
              <FaRocket className="text-lg" />
              <span>Začni růst ihned</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
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
              <div className="relative mb-6 overflow-hidden rounded-xl bg-gray-900/50">
                <Image
                  className="w-full h-48 transition-transform duration-300 group-hover:scale-105"
                  src={feature.image}
                  alt="Feature Image"
                  width={600}
                  height={300}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                <div className="absolute w-12 h-12 top-4 left-4 bg-green-400/20 backdrop-blur-sm p-2 rounded-full border border-green-400/30">
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
                  <a
                    href="https://moje.flixy.cz/socialmaty/p/-shrnut-objedn-vky--j46lwbhrv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group-hover:bg-green-400 bg-green-400/80 hover:bg-green-500 text-black font-semibold py-3 px-6 rounded-full transition-all duration-300 inline-flex items-center gap-2 hover:scale-105 shadow-lg hover:shadow-green-400/50"
                  >
                    <span>{feature.cta}</span>
                    <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Section */}

        {/* Final CTA Section */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-green-400/20 to-green-600/10 p-10 rounded-2xl border border-green-400/30 shadow-lg backdrop-blur-md animate-fade-in">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-green-400/30 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400/40 mb-4">
                <FaArrowUpRightDots className="text-green-400" />
                <span className="text-green-300 font-semibold">
                  Reálné výsledky
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
              <a
                href="https://moje.flixy.cz/socialmaty/p/-shrnut-objedn-vky--j46lwbhrv"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-green-400 to-green-600 text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:from-green-500 hover:to-green-700 hover:scale-105 shadow-lg hover:shadow-green-400/50 inline-flex items-center gap-3"
              >
                <FaRocket className="text-xl" />
                <span>Začni růst už dnes!</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;

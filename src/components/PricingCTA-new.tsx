"use client";

import React, { useState, useEffect } from 'react';
import { FaFire, FaCrown, FaClock, FaCheck, FaExclamationTriangle } from 'react-icons/fa';

const PricingCTA = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to July 7th (you can modify this)
    const targetDate = new Date('2025-07-07T23:59:59');
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: "🎓",
      text: "Minikurz pro začátečníky – ovládni algoritmus a získej výhodu před 90 % tvůrců"
    },
    {
      icon: "🚀",
      text: "GrowMat systém – 10+2 lekcí od založení profilu po první prodeje krok za krokem"
    },
    {
      icon: "🥷",
      text: "Faceless Masterclass – strategie pro výdělek bez ukazování obličeje + 1000+ virálních klipů"
    },
    {
      icon: "💰",
      text: "CASH-IN Mastery – konkrétní strategie, které mým klientům vydělávají statisíce"
    },
    {
      icon: "🎬",
      text: "Edit pro začátečníky – nauč se rychle a jednoduše upravovat videa jen mobilem"
    },
    {
      icon: "🤖",
      text: "AI Asistent Growík – vygeneruj prodejní texty na pár kliků"
    },
    {
      icon: "🎁",
      text: "Bonusové tréninky každý týden – případovky, tipy a strategie z praxe"
    },
    {
      icon: "🙋",
      text: "Moje osobní podpora – pravidelné odpovědi a feedback"
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-24 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-green-400/15 rounded-full blur-2xl animate-pulse" />
      </div>
      
      <div className="relative max-w-5xl mx-auto text-center z-10">
        
        {/* Main CTA Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Přidej se do GrowMat Academy
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            a začni konečně růst a prodávat!
          </p>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-400/20 to-green-600/10 p-6 rounded-2xl border border-green-400/30">
            <FaFire className="text-green-400 text-2xl" />
            <p className="text-lg font-semibold text-green-400">
              Přidej se ke komunitě, která Ti dá systém, podporu a nese VÝSLEDKY.
            </p>
          </div>
        </div>

        {/* What You Get Today */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-green-400 flex items-center justify-center gap-2">
            <FaCrown className="text-2xl" />
            CO DNES ZÍSKÁŠ:
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md border border-gray-700/50 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">{feature.icon}</span>
                  <p className="text-gray-300 text-left leading-relaxed">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-md p-12 rounded-3xl border-2 border-green-400/30 mb-12 shadow-2xl">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-3xl">🎯</span>
            <h3 className="text-2xl md:text-3xl font-bold text-green-400">
              Speciální nabídka právě teď
            </h3>
          </div>
          <p className="text-lg text-gray-300 mb-8">
            Vstup do GrowMat Academy za exkluzivní cenu!
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div className="text-center">
              <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-6 mb-4">
                <p className="text-gray-400 line-through text-2xl mb-2">1 490 Kč / měs.</p>
                <p className="text-sm text-red-400 font-semibold">Původní cena</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-green-400/20 border border-green-400/30 rounded-xl p-6 mb-4">
                <p className="text-4xl font-bold text-green-400 mb-2">399 Kč / měsíc</p>
                <p className="text-sm text-green-400 font-semibold">Akční cena</p>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-xl p-4 mb-8">
            <p className="text-yellow-400 font-semibold flex items-center justify-center gap-2">
              <FaExclamationTriangle />
              Nabídka platí jen do 7. 7.
            </p>
          </div>
          
          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Dny', value: timeLeft.days },
              { label: 'Hodiny', value: timeLeft.hours },
              { label: 'Minuty', value: timeLeft.minutes },
              { label: 'Sekundy', value: timeLeft.seconds }
            ].map((item, index) => (
              <div key={index} className="bg-black/50 p-6 rounded-xl border border-green-400/20">
                <div className="text-3xl font-bold text-green-400 mb-2">{item.value.toString().padStart(2, '0')}</div>
                <div className="text-sm text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>
          
          <button className="group relative bg-gradient-to-r from-green-400 to-green-600 text-black font-bold py-6 px-12 rounded-full text-xl transition-all duration-300 hover:from-green-500 hover:to-green-700 hover:scale-105 shadow-lg hover:shadow-green-400/50 mb-6">
            <span className="relative z-10">Přidej se teď – za akční cenu! 🚀</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-700 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </button>
          
          <p className="text-gray-300 mb-6">
            Začni růst a prodávat online za 30 minut denně.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2 bg-black/30 p-3 rounded-lg">
              <FaCheck className="text-green-400" />
              <span className="text-gray-300 text-sm">Okamžitý přístup</span>
            </div>
            <div className="flex items-center gap-2 bg-black/30 p-3 rounded-lg">
              <FaCheck className="text-green-400" />
              <span className="text-gray-300 text-sm">Osobní podpora</span>
            </div>
            <div className="flex items-center gap-2 bg-black/30 p-3 rounded-lg">
              <FaCheck className="text-green-400" />
              <span className="text-gray-300 text-sm">Záruka výsledků</span>
            </div>
            <div className="flex items-center gap-2 bg-black/30 p-3 rounded-lg">
              <FaCheck className="text-green-400" />
              <span className="text-gray-300 text-sm">Možnost zrušit kdykoliv</span>
            </div>
          </div>
        </div>

        {/* Urgency Message */}
        <div className="bg-red-900/30 border border-red-500/30 p-8 rounded-2xl backdrop-blur-sm">
          <div className="flex items-center justify-center gap-3">
            <FaClock className="text-red-400 text-2xl" />
            <p className="text-red-400 font-bold text-xl">
              7.7. se cena členství navyšuje!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;

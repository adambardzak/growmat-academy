"use client";

import React, { useState, useEffect } from 'react';
import { FaCookie, FaSave, FaUndo, FaCheck, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

export default function CookieSettings() {
  const [cookiePreferences, setCookiePreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });
  
  const [saved, setSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load saved preferences
    const savedPreferences = localStorage.getItem('cookiePreferences');
    if (savedPreferences) {
      setCookiePreferences(JSON.parse(savedPreferences));
    }
    setIsLoading(false);
  }, []);

  const handleToggle = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return; // Necessary cookies cannot be disabled
    
    setCookiePreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSave = () => {
    localStorage.setItem('cookieConsent', 'true');
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    
    // Update analytics consent
    if (cookiePreferences.analytics) {
      window.gtag?.('consent', 'update', {
        analytics_storage: 'granted',
      });
    } else {
      window.gtag?.('consent', 'update', {
        analytics_storage: 'denied',
      });
    }
    
    // Dispatch custom event
    window.dispatchEvent(new CustomEvent('cookiePreferencesChanged', {
      detail: cookiePreferences
    }));
    
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleReset = () => {
    setCookiePreferences({
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    });
  };

  const handleAcceptAll = () => {
    setCookiePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center">
        <div className="animate-pulse text-green-400 text-xl">Načítání...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <FaCookie className="text-green-400 text-3xl" />
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Nastavení cookies
              </span>
            </h1>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Spravujte vaše preference týkající se cookies a sledovacích technologií. 
            Změny se uplatní okamžitě po uložení.
          </p>
        </div>

        {/* Success Message */}
        {saved && (
          <div className="bg-green-400/10 border border-green-400/30 rounded-xl p-4 mb-8 flex items-center gap-3">
            <FaCheck className="text-green-400 text-xl" />
            <div>
              <p className="text-green-400 font-semibold">Nastavení bylo úspěšně uloženo!</p>
              <p className="text-green-300 text-sm">Vaše preference byly aktualizovány.</p>
            </div>
          </div>
        )}

        {/* Cookie Categories */}
        <div className="space-y-6">
          {/* Necessary Cookies */}
          <div className="bg-gray-800/50 rounded-xl p-6 border border-green-400/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <FaCheck className="text-green-400 text-xl" />
                <h2 className="text-xl font-bold text-white">Nezbytné cookies</h2>
              </div>
              <div className="bg-green-400/20 px-4 py-2 rounded-full border border-green-400/30">
                <span className="text-green-400 font-semibold">Vždy aktivní</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-4">
              Tyto cookies jsou nezbytné pro správné fungování webu. Bez těchto cookies 
              by web nefungoval správně a nemohou být vypnuty.
            </p>
            
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h3 className="font-semibold text-green-400 mb-2">Příklady:</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Autentizace uživatele</li>
                <li>• Bezpečnostní cookies</li>
                <li>• Cookies pro správné fungování formulářů</li>
                <li>• Cookies pro zachování session</li>
              </ul>
            </div>
          </div>

          {/* Analytics Cookies */}
          <div className="bg-gray-800/50 rounded-xl p-6 border border-green-400/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  📊
                </div>
                <h2 className="text-xl font-bold text-white">Analytické cookies</h2>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={cookiePreferences.analytics}
                  onChange={() => handleToggle('analytics')}
                  className="sr-only peer"
                />
                <div className="w-14 h-8 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-400/25 rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-green-400"></div>
              </label>
            </div>
            
            <p className="text-gray-300 mb-4">
              Tyto cookies nám pomáhají pochopit, jak návštěvníci používají web, 
              které stránky jsou nejpopulárnější a jak zlepšit uživatelský zážitek.
            </p>
            
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h3 className="font-semibold text-green-400 mb-2">Používáme:</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Google Analytics:</strong> Analýza návštěvnosti a chování uživatelů</li>
                <li>• <strong>Microsoft Clarity:</strong> Nahrávání relací a heatmapy</li>
                <li>• <strong>Doba uložení:</strong> 26 měsíců</li>
              </ul>
            </div>
          </div>

          {/* Marketing Cookies */}
          <div className="bg-gray-800/50 rounded-xl p-6 border border-green-400/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  🎯
                </div>
                <h2 className="text-xl font-bold text-white">Marketingové cookies</h2>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={cookiePreferences.marketing}
                  onChange={() => handleToggle('marketing')}
                  className="sr-only peer"
                />
                <div className="w-14 h-8 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-400/25 rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-green-400"></div>
              </label>
            </div>
            
            <p className="text-gray-300 mb-4">
              Tyto cookies umožňují zobrazování relevantních reklam a měření jejich efektivity. 
              Také pomáhají s remarketingem na sociálních sítích.
            </p>
            
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h3 className="font-semibold text-green-400 mb-2">Používáme:</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Facebook Pixel:</strong> Sledování konverzí a remarketing</li>
                <li>• <strong>Google Ads:</strong> Cílená reklama a měření výkonnosti</li>
                <li>• <strong>Doba uložení:</strong> 90 dnů až 2 roky</li>
              </ul>
            </div>
          </div>

          {/* Preferences Cookies */}
          <div className="bg-gray-800/50 rounded-xl p-6 border border-green-400/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  ⚙️
                </div>
                <h2 className="text-xl font-bold text-white">Cookies preferencí</h2>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={cookiePreferences.preferences}
                  onChange={() => handleToggle('preferences')}
                  className="sr-only peer"
                />
                <div className="w-14 h-8 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-400/25 rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-green-400"></div>
              </label>
            </div>
            
            <p className="text-gray-300 mb-4">
              Tyto cookies si pamatují vaše volby a nastavení, aby vám poskytly 
              personalizovanější zážitek při příštích návštěvách.
            </p>
            
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h3 className="font-semibold text-green-400 mb-2">Příklady:</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Zapamatování jazykových preferencí</li>
                <li>• Uložení nastavení rozložení stránky</li>
                <li>• Personalizace obsahu</li>
                <li>• <strong>Doba uložení:</strong> 1 rok</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-full transition-colors duration-200"
          >
            <FaUndo className="text-sm" />
            Resetovat
          </button>
          
          <button
            onClick={handleAcceptAll}
            className="flex items-center gap-2 px-6 py-3 bg-green-400/20 hover:bg-green-400/30 text-green-400 border border-green-400/30 rounded-full transition-colors duration-200"
          >
            <FaCheck className="text-sm" />
            Přijmout vše
          </button>
          
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-black font-bold rounded-full transition-all duration-200"
          >
            <FaSave className="text-sm" />
            Uložit nastavení
          </button>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-gray-800/50 rounded-xl p-6 border border-green-400/20">
          <h3 className="text-xl font-bold text-green-400 mb-4">Důležité informace</h3>
          <div className="text-gray-300 space-y-3">
            <p>
              • Vaše nastavení se uloží do vašeho prohlížeče a bude platit pouze pro tento web
            </p>
            <p>
              • Pokud smažete cookies z prohlížeče, budete muset nastavit preference znovu
            </p>
            <p>
              • Některé funkce webu nemusí fungovat správně s vypnutými cookies
            </p>
            <p>
              • Své rozhodnutí můžete kdykoli změnit návštěvou této stránky
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="mt-8 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/privacy-policy" 
              className="text-green-400 hover:text-green-300 underline transition-colors duration-200"
            >
              Zásady ochrany osobních údajů
            </Link>
            <span className="text-gray-500 hidden sm:inline">|</span>
            <Link 
              href="/" 
              className="text-green-400 hover:text-green-300 underline transition-colors duration-200"
            >
              Zpět na hlavní stránku
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

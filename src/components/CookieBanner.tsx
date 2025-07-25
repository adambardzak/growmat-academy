"use client";

import React, { useState, useEffect } from 'react';
import { FaCookie, FaTimes, FaShieldAlt, FaCog, FaCheck } from 'react-icons/fa';
import Link from 'next/link';

// Extend Window interface to include gtag
declare global {
  interface Window {
    gtag?: (command: string, config: string, params?: Record<string, string>) => void;
  }
}

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (cookieConsent) {
      // Load saved preferences
      const savedPreferences = localStorage.getItem('cookiePreferences');
      if (savedPreferences) {
        setCookiePreferences(JSON.parse(savedPreferences));
      }
      return; // Don't show banner if consent already given
    }

    // Show banner after user scrolls
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 300 && !hasScrolled) { // Show after 300px scroll
        setHasScrolled(true);
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    setCookiePreferences(allAccepted);
    saveCookieConsent(allAccepted);
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    setCookiePreferences(onlyNecessary);
    saveCookieConsent(onlyNecessary);
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    saveCookieConsent(cookiePreferences);
    setIsVisible(false);
  };

  const saveCookieConsent = (preferences: CookiePreferences) => {
    localStorage.setItem('cookieConsent', 'true');
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    
    // Trigger analytics initialization based on preferences
    if (preferences.analytics) {
      // Initialize analytics services
      window.gtag?.('consent', 'update', {
        analytics_storage: 'granted',
      });
    }
    
    // Dispatch custom event for other components
    window.dispatchEvent(new CustomEvent('cookiePreferencesChanged', {
      detail: preferences
    }));
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return; // Necessary cookies cannot be disabled
    
    setCookiePreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <div className="bg-gray-900 border border-green-400/30 rounded-2xl shadow-2xl backdrop-blur-lg">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-400/20 to-green-600/10 p-4 border-b border-green-400/20 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaCookie className="text-green-400 text-lg" />
              <h3 className="text-white text-sm font-bold">Cookies</h3>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <FaTimes className="text-sm" />
            </button>
          </div>
        </div>

        <div className="p-4">
          {!showDetails ? (
            // Simple view
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaShieldAlt className="text-green-400 text-sm mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Používáme cookies pro lepší zážitek a analýzu návštěvnosti.
                  </p>
                  <div className="mt-2">
                    <Link 
                      href="/privacy-policy" 
                      className="text-green-400 hover:text-green-300 underline text-xs transition-colors duration-200"
                    >
                      Zásady ochrany údajů
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Detailed view
            <div className="space-y-3 max-h-60 overflow-y-auto">
              <div className="grid gap-2">
                {/* Necessary Cookies */}
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <FaCheck className="text-green-400 text-xs" />
                      <h4 className="text-white font-medium text-xs">Nezbytné</h4>
                    </div>
                    <div className="bg-green-400/20 px-2 py-1 rounded-full border border-green-400/30">
                      <span className="text-green-400 text-xs font-medium">Aktivní</span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-xs">
                    Pro základní funkčnost webu.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <FaCog className="text-green-400 text-xs" />
                      <h4 className="text-white font-medium text-xs">Analytické</h4>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={cookiePreferences.analytics}
                        onChange={() => togglePreference('analytics')}
                        className="sr-only peer"
                      />
                      <div className="w-8 h-4 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-green-400"></div>
                    </label>
                  </div>
                  <p className="text-gray-300 text-xs">
                    Google Analytics, Microsoft Clarity.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <FaCog className="text-green-400 text-xs" />
                      <h4 className="text-white font-medium text-xs">Marketingové</h4>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={cookiePreferences.marketing}
                        onChange={() => togglePreference('marketing')}
                        className="sr-only peer"
                      />
                      <div className="w-8 h-4 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-green-400"></div>
                    </label>
                  </div>
                  <p className="text-gray-300 text-xs">
                    Meta Pixel, Google Ads.
                  </p>
                </div>

                {/* Preferences Cookies */}
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <FaCog className="text-green-400 text-xs" />
                      <h4 className="text-white font-medium text-xs">Preferencí</h4>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={cookiePreferences.preferences}
                        onChange={() => togglePreference('preferences')}
                        className="sr-only peer"
                      />
                      <div className="w-8 h-4 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-green-400"></div>
                    </label>
                  </div>
                  <p className="text-gray-300 text-xs">
                    Vaše nastavení a preference.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-800/50 p-3 border-t border-gray-700 rounded-b-2xl">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-green-400 hover:text-green-300 underline text-xs transition-colors duration-200"
              >
                {showDetails ? 'Méně' : 'Více'}
              </button>
              <Link 
                href="/cookie-settings" 
                className="text-green-400 hover:text-green-300 underline text-xs transition-colors duration-200"
              >
                Nastavení
              </Link>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={handleRejectAll}
                className="flex-1 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white text-xs rounded-full transition-colors duration-200"
              >
                Odmítnout
              </button>
              {showDetails && (
                <button
                  onClick={handleSavePreferences}
                  className="flex-1 px-3 py-1.5 bg-green-400/20 hover:bg-green-400/30 text-green-400 border border-green-400/30 text-xs rounded-full transition-colors duration-200"
                >
                  Uložit
                </button>
              )}
              <button
                onClick={handleAcceptAll}
                className="flex-1 px-3 py-1.5 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-black font-medium text-xs rounded-full transition-all duration-200"
              >
                Přijmout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

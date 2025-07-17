import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaFacebook, FaEnvelope, FaShieldAlt, FaCookie, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-gray-800 border-t border-green-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-green-400 to-green-600 p-2 rounded-lg">
                <FaInstagram className="text-black text-xl" />
              </div>
              <div>
                <div className="text-white font-bold text-xl">GrowMat Academy</div>
                <div className="text-green-400 text-sm font-semibold">Raketový růst na Instagramu</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Nauč se organicky růst na Instagramu a proměňovat sledující na zákazníky 
              s naším prověřeným systémem. Bez reklam, pouze 30 minut denně.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/growmat_academy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-400/20 hover:bg-green-400/30 text-green-400 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a 
                href="https://facebook.com/growmat_academy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-400/20 hover:bg-green-400/30 text-green-400 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a 
                href="mailto:info@growmatacademy.cz"
                className="bg-green-400/20 hover:bg-green-400/30 text-green-400 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Rychlé odkazy</h3>
            <ul className="space-y-2">
              <li>
                <a href="#system" className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                  Systém
                </a>
              </li>
              <li>
                <a href="#course" className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                  Kurz
                </a>
              </li>
              <li>
                <a href="#results" className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                  Výsledky
                </a>
              </li>
              <li>
                <a href="#demo" className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                  Ukázka
                </a>
              </li>
              <li>
                <a href="#community" className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                  Komunita
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Privacy */}
          <div>
            <h3 className="text-white font-semibold mb-4">Právní informace</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/privacy-policy" 
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center gap-2"
                >
                  <FaShieldAlt className="text-sm" />
                  Ochrana osobních údajů
                </Link>
              </li>
              <li>
                <Link 
                  href="/cookie-settings" 
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center gap-2"
                >
                  <FaCookie className="text-sm" />
                  Nastavení cookies
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:info@growmatacademy.cz?subject=Obchodní podmínky" 
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  Obchodní podmínky
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 GrowMat Academy. Všechna práva vyhrazena.
            </div>
            <div className="flex items-center gap-1 text-gray-400 text-sm">
              <span>Vytvořeno s</span>
              <FaHeart className="text-red-400 text-xs" />
              <span>pro tvůj úspěch</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

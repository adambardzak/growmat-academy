import React from 'react';
import { FaShieldAlt, FaCookie, FaUserShield, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <FaShieldAlt className="text-green-400 text-3xl" />
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Zásady ochrany osobních údajů
              </span>
            </h1>
          </div>
          <p className="text-gray-300 text-lg">
            Platné od: 17. července 2025 | Poslední aktualizace: 17. července 2025
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Section 1 */}
          <div className="bg-gray-800/50 rounded-xl p-8 border border-green-400/20">
            <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-3">
              <FaUserShield className="text-xl" />
              1. Správce osobních údajů
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Správcem vašich osobních údajů je <strong>GrowMat Academy</strong>, který provozuje 
                webové stránky na adrese <strong>growmatacademy.cz</strong>.
              </p>
              <div className="bg-gray-900/50 rounded-lg p-4">
                <h3 className="font-semibold text-green-400 mb-2">Kontaktní údaje:</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <FaEnvelope className="text-green-400 text-sm" />
                    <span>Email: info@growmatacademy.cz</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-green-400 text-sm" />
                    <span>Adresa: Česká republika</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-gray-800/50 rounded-xl p-8 border border-green-400/20">
            <h2 className="text-2xl font-bold text-green-400 mb-4">
              2. Jaké osobní údaje zpracováváme
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>V rámci poskytování našich služeb zpracováváme následující osobní údaje:</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h3 className="font-semibold text-green-400 mb-2">Identifikační údaje:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Jméno a příjmení</li>
                    <li>E-mailová adresa</li>
                    <li>Telefonní číslo</li>
                    <li>IP adresa</li>
                  </ul>
                </div>
                
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h3 className="font-semibold text-green-400 mb-2">Technické údaje:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Údaje o zařízení a prohlížeči</li>
                    <li>Cookies a podobné technologie</li>
                    <li>Návštěvnost a chování na webu</li>
                    <li>Preference uživatele</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-gray-800/50 rounded-xl p-8 border border-green-400/20">
            <h2 className="text-2xl font-bold text-green-400 mb-4">
              3. Účel zpracování a právní základ
            </h2>
            <div className="text-gray-300 space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-900/50">
                      <th className="text-left p-3 border border-gray-700 text-green-400">Účel zpracování</th>
                      <th className="text-left p-3 border border-gray-700 text-green-400">Právní základ</th>
                      <th className="text-left p-3 border border-gray-700 text-green-400">Doba uložení</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-gray-700">Poskytování kurzu a služeb</td>
                      <td className="p-3 border border-gray-700">Plnění smlouvy</td>
                      <td className="p-3 border border-gray-700">Po dobu trvání smlouvy + 3 roky</td>
                    </tr>
                    <tr className="bg-gray-900/25">
                      <td className="p-3 border border-gray-700">Analýza návštěvnosti</td>
                      <td className="p-3 border border-gray-700">Oprávněný zájem</td>
                      <td className="p-3 border border-gray-700">26 měsíců</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-700">Marketingová komunikace</td>
                      <td className="p-3 border border-gray-700">Souhlas</td>
                      <td className="p-3 border border-gray-700">Do odvolání souhlasu</td>
                    </tr>
                    <tr className="bg-gray-900/25">
                      <td className="p-3 border border-gray-700">Plnění právních povinností</td>
                      <td className="p-3 border border-gray-700">Právní povinnost</td>
                      <td className="p-3 border border-gray-700">Dle požadavků zákona</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-gray-800/50 rounded-xl p-8 border border-green-400/20">
            <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-3">
              <FaCookie className="text-xl" />
              4. Cookies a sledovací technologie
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Náš web používá cookies a podobné technologie pro zlepšení funkčnosti a analýzu návštěvnosti.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h3 className="font-semibold text-green-400 mb-2">Analytické nástroje:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Google Analytics:</strong> Analýza návštěvnosti</li>
                    <li><strong>Microsoft Clarity:</strong> Analýza chování uživatelů</li>
                    <li><strong>Facebook Pixel:</strong> Sledování konverzí</li>
                  </ul>
                </div>
                
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h3 className="font-semibold text-green-400 mb-2">Vaše práva:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Můžete odmítnout nefunkční cookies</li>
                    <li>Změnit nastavení kdykoliv</li>
                    <li>Vymazat cookies v prohlížeči</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="bg-gray-800/50 rounded-xl p-8 border border-green-400/20">
            <h2 className="text-2xl font-bold text-green-400 mb-4">
              5. Vaše práva
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>V souladu s GDPR máte následující práva:</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="bg-gray-900/50 rounded-lg p-3">
                    <h3 className="font-semibold text-green-400">Právo na informace</h3>
                    <p className="text-sm">O způsobu zpracování vašich údajů</p>
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-3">
                    <h3 className="font-semibold text-green-400">Právo na přístup</h3>
                    <p className="text-sm">K vašim osobním údajům</p>
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-3">
                    <h3 className="font-semibold text-green-400">Právo na opravu</h3>
                    <p className="text-sm">Nesprávných nebo neúplných údajů</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-gray-900/50 rounded-lg p-3">
                    <h3 className="font-semibold text-green-400">Právo na výmaz</h3>
                    <p className="text-sm">Vaših osobních údajů</p>
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-3">
                    <h3 className="font-semibold text-green-400">Právo na omezení</h3>
                    <p className="text-sm">Zpracování údajů</p>
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-3">
                    <h3 className="font-semibold text-green-400">Právo na přenositelnost</h3>
                    <p className="text-sm">Vašich dat</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-400/10 border border-green-400/30 rounded-lg p-4">
                <p className="text-green-400 font-semibold">
                  Pro uplatnění vašich práv nás kontaktujte na: 
                  <a href="mailto:info@growmatacademy.cz" className="underline ml-1">
                    info@growmatacademy.cz
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div className="bg-gray-800/50 rounded-xl p-8 border border-green-400/20">
            <h2 className="text-2xl font-bold text-green-400 mb-4">
              6. Zabezpečení údajů
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Vaše osobní údaje chráníme pomocí moderních technických a organizačních opatření:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-900/50 rounded-lg p-4 text-center">
                  <div className="text-green-400 text-2xl mb-2">🔒</div>
                  <h3 className="font-semibold text-green-400 mb-1">SSL šifrování</h3>
                  <p className="text-sm">Všechna data jsou šifrována</p>
                </div>
                
                <div className="bg-gray-900/50 rounded-lg p-4 text-center">
                  <div className="text-green-400 text-2xl mb-2">🛡️</div>
                  <h3 className="font-semibold text-green-400 mb-1">Firewall</h3>
                  <p className="text-sm">Ochrana před neoprávněným přístupem</p>
                </div>
                
                <div className="bg-gray-900/50 rounded-lg p-4 text-center">
                  <div className="text-green-400 text-2xl mb-2">🔐</div>
                  <h3 className="font-semibold text-green-400 mb-1">Přístupová práva</h3>
                  <p className="text-sm">Omezený přístup k datům</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <div className="bg-gray-800/50 rounded-xl p-8 border border-green-400/20">
            <h2 className="text-2xl font-bold text-green-400 mb-4">
              7. Změny zásad ochrany údajů
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Tyto zásady ochrany osobních údajů můžeme čas od času aktualizovat. 
                O významných změnách vás budeme informovat prostřednictvím e-mailu nebo 
                oznámení na našem webu.
              </p>
              
              <div className="bg-green-400/10 border border-green-400/30 rounded-lg p-4">
                <p className="text-green-400">
                  <strong>Doporučujeme pravidelně kontrolovat tuto stránku</strong> 
                  pro aktuální informace o našich zásadách ochrany údajů.
                </p>
              </div>
            </div>
          </div>

          {/* Section 8 */}
          <div className="bg-gray-800/50 rounded-xl p-8 border border-green-400/20">
            <h2 className="text-2xl font-bold text-green-400 mb-4">
              8. Kontaktní informace
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Pokud máte jakékoliv dotazy týkající se zpracování vašich osobních údajů nebo 
                chcete uplatnit svá práva, kontaktujte nás:
              </p>
              
              <div className="bg-gray-900/50 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-green-400 mb-3">Kontaktní údaje:</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <FaEnvelope className="text-green-400 text-sm" />
                        <span>info@growmatacademy.cz</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-green-400 text-sm" />
                        <span>Česká republika</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-green-400 mb-3">Dozorový orgán:</h3>
                    <p className="text-sm">
                      <strong>Úřad pro ochranu osobních údajů</strong><br />
                      Pplk. Sochora 27<br />
                      170 00 Praha 7<br />
                      <a href="https://www.uoou.cz" className="text-green-400 underline">www.uoou.cz</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to home */}
        <div className="text-center mt-12">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-400 to-green-600 text-black font-bold py-3 px-8 rounded-full transition-all duration-300 hover:from-green-500 hover:to-green-700 hover:scale-105"
          >
            ← Zpět na hlavní stránku
          </Link>
        </div>
      </div>
    </div>
  );
}

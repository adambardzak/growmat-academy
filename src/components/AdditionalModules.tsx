import React from 'react';

const AdditionalModules = () => {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* Faceless Masterclass */}
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-green-400">Faceless Masterclass</h3>
            <p className="text-lg text-gray-300 mb-4">
              Kompletní blueprint Jak začít tvořit a vydělávat na IG bez ukazování obličeje.
            </p>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start">
                <span className="text-green-400 mr-3">•</span>
                <span>1000+ virálních klipů jako bonus</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-400 mr-3">•</span>
                <span>Strategie od A do Z pro tvorbu motivačních stránek a faceless účtů prodávající digi. produkty</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-400 mr-3">•</span>
                <span>Seznam všech užitečných aplikací pro start úspěšného faceless účtu</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-400 mr-3">•</span>
                <span>10 nadupaných video-lekcí</span>
              </div>
            </div>
          </div>

          {/* Edit pro začátečníky */}
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-green-400">Edit pro začátečníky</h3>
            <p className="text-lg text-gray-300 mb-4">
              Konec dlouhým hodinám strávených editem videí.
            </p>
            <p className="text-gray-300 mb-4">
              Naučím Tě Jak editovat jednoduše, rychle a prakticky.
            </p>
            <p className="text-gray-300">
              Jen pomocí telefonu, Instagramu, CapCutu a Captions.
            </p>
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* AI Asistent */}
          <div className="bg-green-400/10 p-8 rounded-lg border border-green-400/20">
            <h3 className="text-2xl font-bold mb-4 text-green-400">AI Asistent &quot;Growík&quot;</h3>
            <p className="text-lg text-gray-300 mb-4">
              Už nikdy nebudeš muset psát popisky.
            </p>
            <p className="text-gray-300 mb-4">
              Growík je napěchovaný know-how o psaní mistrovských prodejních textů pro každou cílovou skupinu.
            </p>
            <p className="text-gray-300">
              Všichni mí klienti ho používají a nese jim výsledky.
            </p>
            <p className="text-gray-300 italic mt-4">
              Kdo ví, třeba tuhle stránku psal on :).
            </p>
          </div>

          {/* Bonusové tréninky */}
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-green-400">Bonusové tréninky</h3>
            <p className="text-lg text-gray-300 mb-4">
              Každý týden do GrowMat Academy přistane nový praktický trénink na růst a prodej na sociálních sítích.
            </p>
            <p className="text-gray-300">
              Případové studie, tréninky na přání, tipy a strategie z praxe rozebrány krok za krokem.
            </p>
          </div>

        </div>

        {/* Osobní podpora */}
        <div className="bg-black/50 p-8 rounded-lg border-l-4 border-green-400">
          <h3 className="text-2xl font-bold mb-4 text-green-400">Osobní podpora</h3>
          <p className="text-lg text-gray-300 mb-4">
            Jako člen komunity se v sekci otázky můžeš zeptat na cokoliv ohledně růstu a prodeje, 
            zanechat screenshot a požádat o zpětnou vazbu na Tvůj profil/nový příspěvek.
          </p>
          <p className="text-gray-300 mb-4">
            Pravidelně komunitu kontroluji a odpovídám na Tvé dotazy.
          </p>
          <p className="text-gray-300">
            Neváhej se zeptat - od toho tu jsem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdditionalModules;

import React from 'react';

const CashInMastery = () => {
  const modules = [
    {
      title: "1. MINDSET PRODEJE",
      description: "Zbavíš se mýtů, které tě brzdily – a začneš konečně růst a prodávat.",
      content: [
        "O čem prodej rozhodně není",
        "Proč někdo umí prodávat \"face to face\", ale na sítích neprodá ani vodu v poušti",
        "Jak se zbavit strachu z prodeje a porovnávání s ostatními"
      ]
    },
    {
      title: "2. ZÁKLADY PSYCHOLOGIE PRODEJE",
      description: "Pochopíš psychologii prodeje a budeš mít konečně JASNO v tom, co mění sledující v zákazníky",
      content: [
        "Jak vyvolat silně pozitivní emoce vedoucí k nákupu",
        "Jak prodat \"komukoliv\"",
        "Jak vytvořit \"no-brainer\" nabídku, která se neodmítá"
      ]
    },
    {
      title: "3. RŮSTOVÁ STRATEGIE PROFILU",
      description: "Naučíš se tvořit raketově růstový obsah, který prodává a přitahuje ideální zákazníky - bez přetváření a neustálého \"nahánění trendů\".",
      content: [
        "Rozbor statisícových příspěvků klientů",
        "\"Manipulativní hack\" virality",
        "Jak spojit statisícová zhlédnutí s prodejem"
      ]
    },
    {
      title: "4. DŮVĚRA & KONVERZE",
      description: "Z feedu, stories a DM vytvoříš mikrofunnel. Ukážeš autoritu bez přehnaného ega – a povedeš sledující k akci. Napíšeš od A do Z prodejní stránku, co skutečně prodává.",
      content: [
        "Jak tvořit prodejní stories",
        "Jak správně sdílet recenze/reference",
        "Jak napsat prodejní stránku dle jasné struktury",
        "Jak vytvořit prodejní systém od A do Z \"na automat\" za 30 minut denně"
      ]
    }
  ];

  const bonuses = [
    {
      title: "Rozbor reálných profilů",
      description: "neuvidíš jen teorii, ale pitvu toho, co funguje mně a mým klientům."
    },
    {
      title: "AI Prompt Pack",
      description: "Získej připravené příkazy, které ti ušetří hodiny přemýšlení a pomůžou ti tvořit přesvědčivý obsah a prodejní texty 3× rychleji – i když nejsi copywriter."
    }
  ];

  return (
    <section className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-green-400">CASH-IN Mastery</span>
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            Jak efektivně prodávat na Instagramu
          </p>
          <p className="text-lg text-gray-300">
            bez marketingových plků, složitých prodejních definic a pocitu &quot;vnucování se&quot;
          </p>
          <div className="mt-6">
            <span className="bg-green-400/20 text-green-400 px-4 py-2 rounded-full font-semibold">
              VE 4 NADUPANÝCH MODULECH
            </span>
          </div>
        </div>

        <div className="grid gap-8 mb-16">
          {modules.map((module, index) => (
            <div key={index} className="bg-black/50 p-8 rounded-lg border-l-4 border-green-400">
              <h3 className="text-2xl font-bold mb-4 text-green-400">{module.title}</h3>
              <p className="text-gray-300 mb-6">{module.description}</p>
              <div className="space-y-3">
                {module.content.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start">
                    <span className="text-green-400 mr-3">•</span>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-green-400/10 p-8 rounded-lg border border-green-400/20">
          <h3 className="text-2xl font-bold mb-6 text-green-400">BONUSY NAVÍC:</h3>
          <div className="space-y-4">
            {bonuses.map((bonus, index) => (
              <div key={index} className="flex items-start">
                <span className="text-green-400 mr-3">🎁</span>
                <div>
                  <span className="font-semibold text-white">{bonus.title}</span>
                  <span className="text-gray-300"> – {bonus.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CashInMastery;

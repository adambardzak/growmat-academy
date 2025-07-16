import React from 'react';

const TestimonialsResults = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Results Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-green-400">Výsledky členů</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Připoj se k úspěšným členům GrowMat Academy a začni konečně růst!
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-black/50 p-6 rounded-lg border border-green-400/20">
              <div className="aspect-square bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Screenshot výsledku #{item}</span>
              </div>
              <p className="text-gray-300 text-sm">
                Ukázka úspěšného člena - screenshot příspěvku s vysokými views a komentáři
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            <span className="text-green-400">Co říkají absolventi?</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-black/50 p-8 rounded-lg border-l-4 border-green-400">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-400 font-bold">#{item}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Člen #{item}</h4>
                  <p className="text-gray-400 text-sm">@instagram_handle</p>
                </div>
              </div>
              <p className="text-gray-300 italic mb-4">
                &quot;Úžasný obsah! Díky GrowMat Academy jsem konečně pochopil/a, 
                jak funguje Instagram a začal/a skutečně růst. Doporučuji všem!&quot;
              </p>
              <div className="flex items-center text-green-400 text-sm">
                <span className="mr-2">⭐⭐⭐⭐⭐</span>
                <span>Ověřená recenze</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-green-400/10 p-8 rounded-lg border border-green-400/20">
            <h3 className="text-2xl font-bold mb-4 text-green-400">
              Přidej se k úspěšným členům GrowMat Academy
            </h3>
            <p className="text-lg text-gray-300">
              a začni konečně růst a prodávat!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsResults;

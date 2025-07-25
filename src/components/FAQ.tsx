import React from "react";
import {
  FaQuestionCircle,
  FaCheck,
  FaClock,
  FaGraduationCap,
} from "react-icons/fa";

const FAQ = () => {
  const faqs = [
    {
      question: "Jak můžu zrušit členství?",
      answer:
        "Členství můžeš zrušit kdykoliv na pár kliků. GrowMat Academy je na platformě Flixy a tam je zrušení členství jednoduché. V případě jakýchkoliv problémů mi napiš a se zrušením Ti obratem pomůžu.",
      icon: <FaCheck className="text-green-400 text-xl" />,
    },
    {
      question: "Jak rychle uvidím výsledky?",
      answer: (
        <>
          {" "}
          To je čistě na Tobě. Členové akademie mají{" "}
          <b>první virální přípěvek do 14 dnů a s ním i prodeje.</b> GrowMat
          Academy Ti dá systém a podporu, ať se můžeš k úspěšným členům připojit
          i ty :).
        </>
      ),
      icon: <FaClock className="text-green-400 text-xl" />,
    },
    {
      question: "Jsem úplný začátečník, zvládnu to?",
      answer: (
        <>
          {" "}
          Tak právě pro Tebe je GrowMat Academy jako dělaná. Provedu Tě{" "}
          <b>
            od založení profilu po první prodeje na Instagramu krok za krokem a
            předám Ti veškeré potřebné know-how a nástroje.
          </b>{" "}
          Pokud budeš mít dotaz - v sekci otázky osobně odpovídám a podporuji
          členy komunity k úspěchu.
        </>
      ),
      icon: <FaGraduationCap className="text-green-400 text-xl" />,
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-24 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-green-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-green-400/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-5xl mx-auto z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <FaQuestionCircle className="text-green-400 text-4xl" />
            <h2 className="text-4xl md:text-6xl font-extrabold">
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Možná se ptáš..
              </span>
            </h2>
          </div>
        </div>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 hover:border-green-400/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 bg-green-400/20 p-3 rounded-full border border-green-400/30">
                  {faq.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-green-400 group-hover:text-green-300 transition-colors duration-300">
                  {faq.question}
                </h3>
              </div>
              <div className="ml-16">
                <p className="text-gray-300 leading-relaxed text-lg">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-400/15 to-green-600/10 p-8 rounded-2xl border border-green-400/30">
            <p className="text-xl text-gray-300 mb-4">Máš další otázky?</p>
            <p className="text-green-400 font-semibold">
              Neváhej se zeptat v komunitě - rychle Ti odpovím!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

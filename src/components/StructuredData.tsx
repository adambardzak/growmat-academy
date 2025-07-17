import Script from "next/script";

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "GrowMat Academy",
    description:
      "Nauč se organicky růst na Instagramu a proměňovat sledující na zákazníky s naším prověřeným systémem. Bez reklam, pouze 30 minut denně.",
    url: "https://growmatacademy.cz",
    logo: "https://growmatacademy.cz/logo.png",
    image: "https://growmatacademy.cz/api/og",
    sameAs: [
      "https://instagram.com/growmat_academy",
      "https://facebook.com/growmat_academy",
    ],
    offers: {
      "@type": "Course",
      name: "3-Fázový GrowMat Systém",
      description:
        "Komplexní kurz pro organický růst na Instagramu a konverzi sledujících na zákazníky",
      provider: {
        "@type": "Organization",
        name: "GrowMat Academy",
      },
      courseMode: "online",
      inLanguage: "cs",
      teaches: [
        "Instagram marketing",
        "Organický růst na sociálních sítích",
        "Tvorba virálního obsahu",
        "Konverze sledujících na zákazníky",
        "Etické prodejní techniky",
      ],
      timeRequired: "PT30M",
      educationalLevel: "Beginner to Advanced",
      audience: {
        "@type": "Audience",
        audienceType: "Podnikatelé a tvůrci obsahu",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "1247",
      bestRating: "5",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Tomáš K.",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        reviewBody:
          "Díky GrowMat Academy jsem během 3 měsíců zvýšil sledovanost o 50 000 followers a první prodeje přišly už za 2 týdny!",
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Anna M.",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        reviewBody:
          "Konečně rozumím, proč některé příspěvky fungují a jiné ne. Moje engagement rate vzrostl na 15%!",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "Czech",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "CZ",
    },
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

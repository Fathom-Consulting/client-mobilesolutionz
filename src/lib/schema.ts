export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://mobile-solutionz.com/#business",
    name: "Mobile Solutionz",
    description:
      "Premium mobile car detailing studio serving the Rogue Valley. Certified System X installer offering paint correction, ceramic coating, interior and exterior detailing at your location in Medford, Oregon.",
    url: "https://mobile-solutionz.com",
    telephone: "+15413265822",
    image: "https://lpsog3i64o.ufs.sh/f/Q40NF8H3o1GE2uxySWUdiRU0fAyw9EBIPc6XOYxzWJ3utmSV",
    priceRange: "$$",
    currenciesAccepted: "USD",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Medford",
      addressRegion: "OR",
      postalCode: "97501",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 42.3265,
      longitude: -122.8756,
    },
    areaServed: [
      "Medford, OR",
      "Ashland, OR",
      "Jacksonville, OR",
      "Central Point, OR",
      "Eagle Point, OR",
      "White City, OR",
      "Talent, OR",
      "Phoenix, OR",
    ].map((area) => ({ "@type": "City", name: area })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Mobile Detailing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Economy Detail Package",
            description:
              "Basic interior cleaning, panel wipe-down, windows, two-bucket hand wash, wax and tire shine.",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: "100",
            maxPrice: "250",
            priceCurrency: "USD",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Protection+ Detail Package",
            description:
              "Deep clean, steam disinfection, leather conditioning, clay bar decontamination, premium paint sealant.",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: "400",
            maxPrice: "600",
            priceCurrency: "USD",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "CeramicPro Package",
            description:
              "Complete ceramic coating on all painted surfaces with optional paint correction. System X certified application.",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: "800",
            maxPrice: "1400",
            priceCurrency: "USD",
          },
        },
      ],
    },
    sameAs: [
      "https://www.instagram.com/mobilesolutionzz",
    ],
  };
}

export function getFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does mobile car detailing cost in Medford, Oregon?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mobile Solutionz offers packages starting at $100-$250 for a basic Economy detail, $400-$600 for the Protection+ package, and $800-$1,400 for the CeramicPro ceramic coating package. Pricing varies by vehicle size and condition.",
        },
      },
      {
        "@type": "Question",
        name: "What is System X ceramic coating?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "System X is a professional-grade ceramic coating that bonds to your vehicle's paint surface, providing years of hydrophobic protection. Mobile Solutionz is a certified System X installer in the Rogue Valley.",
        },
      },
      {
        "@type": "Question",
        name: "Does Mobile Solutionz come to my location?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Mobile Solutionz is a fully mobile detailing studio serving Medford, Ashland, Jacksonville, Central Point, Eagle Point, White City, Talent, and Phoenix. We come to your driveway, office, or parking structure.",
        },
      },
      {
        "@type": "Question",
        name: "What areas does Mobile Solutionz serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mobile Solutionz serves the entire Rogue Valley including Medford, Ashland, Jacksonville, Central Point, Eagle Point, White City, Talent, and Phoenix, Oregon.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a full detail take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A basic Economy detail typically takes 2-3 hours. The Protection+ package takes 4-6 hours. The CeramicPro package with paint correction can take 1-2 days depending on vehicle condition.",
        },
      },
    ],
  };
}

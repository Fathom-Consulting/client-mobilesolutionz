// Services
export const SERVICES = [
  {
    id: "interior",
    title: "Interior Detailing",
    tagline: "Showroom clean, every surface.",
    description:
      "Deep cleaning, steam disinfection, leather conditioning, and extraction. Your interior restored to a standard you can feel.",
    image: "https://lpsog3i64o.ufs.sh/f/Q40NF8H3o1GEel5l9l1YUF6gVRC0tq3JWhyxMB8ADKm4uXok",
    imageAlt: "Interior detailing in progress",
  },
  {
    id: "exterior",
    title: "Exterior Detailing",
    tagline: "Precision wash. Protected finish.",
    description:
      "Two-bucket hand wash, clay bar decontamination, iron remover, and premium paint sealant. The kind of clean that lasts.",
    image: "https://lpsog3i64o.ufs.sh/f/Q40NF8H3o1GEc7ZVTPv9gWdEhp5MAzDaHO8TGNFxlqPX7LkV",
    imageAlt: "Exterior detailing on a luxury vehicle",
  },
  {
    id: "paint-correction",
    title: "Paint Correction",
    tagline: "Remove scratches. Restore depth.",
    description:
      "Machine polishing to remove swirl marks, light scratches, and oxidation. A prerequisite for any ceramic coating application.",
    image: "https://lpsog3i64o.ufs.sh/f/Q40NF8H3o1GEACNH3C6uRskFr3X0f9ejdlp61Ya4zCvtE7PQ",
    imageAlt: "Paint correction on a dark vehicle hood",
  },
  {
    id: "ceramic",
    title: "Ceramic Coating",
    tagline: "Long-term protection. Unmatched gloss.",
    description:
      "Certified System X application with years of hydrophobic protection. Self-cleaning properties that keep your car looking detailed longer.",
    image: "https://lpsog3i64o.ufs.sh/f/Q40NF8H3o1GEkqy9JcXZmR9Sp1D8tv3qrHXMf04jJWAxgiCK",
    imageAlt: "Ceramic coating application on a luxury vehicle",
  },
];

// Packages
export const PACKAGES = [
  {
    id: "economy",
    name: "Economy",
    priceRange: "$100 – $250",
    tagline: "Essential care for everyday vehicles.",
    interior: [
      "Basic interior cleaning",
      "Panel wipe-down",
      "Windows cleaned inside",
      "Pedals cleaned",
    ],
    exterior: [
      "Pre-wash rinse",
      "Two-bucket hand wash",
      "Wheels and tires scrubbed",
      "Wax and tire shine",
      "Hand dry",
    ],
    includedAddons: [] as string[],
    popular: false,
  },
  {
    id: "protection-plus",
    name: "Protection+",
    priceRange: "$400 – $600",
    tagline: "Deep restoration with lasting paint protection.",
    interior: [
      "Deep clean and steam disinfectant",
      "Leather and panel protection and conditioning",
      "Spot extraction included",
    ],
    exterior: [
      "Iron decon remover and fender scrub",
      "Clay bar decontamination",
      "Premium paint sealant",
      "Plastic and trim protection and conditioning",
    ],
    includedAddons: ["Spot Extraction"] as string[],
    popular: true,
  },
  {
    id: "ceramicpro",
    name: "CeramicPro",
    priceRange: "$800 – $1,400",
    tagline: "The complete protection package for serious owners.",
    interior: [
      "Steam and shampoo extraction",
      "Leather and panel protection and conditioning",
    ],
    exterior: [
      "Ceramic coating on all painted surfaces (1-2 stage paint correction if needed)",
      "Trim and plastic conditioning and protection",
      "Glass polish and ceramic coat",
      "Wheel polish and ceramic coat",
    ],
    includedAddons: [
      "Glass Polish and Coating",
      "Wheel Polish and Coating",
      "Trim Restoration",
    ] as string[],
    popular: false,
    badge: "Most Complete",
  },
];

// Add-Ons
export const ADDONS = [
  {
    id: "odor-treatment",
    name: "Odor Treatment",
    description:
      "Professional-grade treatment that neutralizes odors at the source. Smoke, pets, and musty interiors eliminated.",
    icon: "Wind",
  },
  {
    id: "glass-polish",
    name: "Glass Polish and Coating",
    description:
      "Removes water spots, light scratches, and oxidation from glass surfaces, then applies a hydrophobic ceramic coating.",
    icon: "Eye",
  },
  {
    id: "paint-correction",
    name: "Paint Correction",
    description:
      "Machine polishing removes swirl marks, light scratches, and oxidation. 1-2 stage correction tailored to paint condition.",
    icon: "Layers",
  },
  {
    id: "spot-extraction",
    name: "Spot Extraction",
    description:
      "Targeted hot water extraction for stains on seats, carpets, and floor mats. Works on most organic and liquid stains.",
    icon: "Droplets",
  },
  {
    id: "engine-bay",
    name: "Engine Bay Clean-Up",
    description:
      "Safe degreasing and detailing of the engine bay. Leaves components looking factory fresh.",
    icon: "Wrench",
  },
  {
    id: "interior-ceramic",
    name: "Interior Ceramic Coating",
    description:
      "Ceramic protection applied to interior leather and vinyl surfaces. Repels liquids, UV protection, and easier cleaning.",
    icon: "Shield",
  },
  {
    id: "wheel-polish",
    name: "Wheel Polish and Coating",
    description:
      "Polish removes brake dust buildup and surface oxidation. Ceramic coating keeps wheels cleaner between washes.",
    icon: "Circle",
  },
  {
    id: "trim-restoration",
    name: "Trim Restoration",
    description:
      "Faded black trim restored to deep, rich color. Treatment bonds to plastic for long-lasting protection against UV graying.",
    icon: "RefreshCw",
  },
];

// Process Steps
export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Book Your Appointment",
    description:
      "Choose your package, tell us about your vehicle, and pick a time. We come to you. Driveway, parking garage, or job site.",
  },
  {
    step: "02",
    title: "Vehicle Assessment",
    description:
      "We inspect your vehicle on arrival, note any pre-existing damage, and confirm the service scope with you before starting.",
  },
  {
    step: "03",
    title: "The Detail",
    description:
      "Every step performed by hand. No conveyor belts, no shortcuts. We work through the full process at the pace your vehicle deserves.",
  },
  {
    step: "04",
    title: "Final Walkthrough",
    description:
      "We walk the vehicle with you, explain what was done, and give you care instructions to keep the results lasting longer.",
  },
];

// Reviews
export const REVIEWS = [
  {
    name: "Marcus T.",
    rating: 5,
    text: "Chano did an incredible job on my 4Runner. The paint looks better than when I bought it. Booked the Protection+ package and the clay bar + sealant combo is top tier.",
    date: "2 weeks ago",
  },
  {
    name: "Sarah K.",
    rating: 5,
    text: "Mobile detailing that actually comes to you. The ceramic coating on my SUV is unreal. Every time it rains the water just sheets right off. Worth every penny.",
    date: "1 month ago",
  },
  {
    name: "Derek F.",
    rating: 5,
    text: "Had smoke smell in my truck that I thought was permanent. After the odor treatment you could not tell. Super professional and knowledgeable about what he uses.",
    date: "3 weeks ago",
  },
  {
    name: "Jenna M.",
    rating: 5,
    text: "The interior deep clean was worth it alone. My car has never looked this good. Chano found stains I forgot about and they were just gone. Highly recommend.",
    date: "1 month ago",
  },
  {
    name: "Tyler R.",
    rating: 5,
    text: "Got the CeramicPro package for my Mustang GT. Paint correction first, then coating. Car looks like glass. System X installer certification gives me full confidence.",
    date: "2 months ago",
  },
  {
    name: "Amanda L.",
    rating: 5,
    text: "Easiest detailing experience I have had. Shows up, does the work, explains everything. My Lexus looked brand new. Will be a regular customer.",
    date: "3 weeks ago",
  },
];

// Products
export const PRODUCTS = [
  {
    name: "System X",
    logo: "https://www.systemxceramiccoating.com/wp-content/uploads/2021/04/System-X-Logo-White.png",
    url: "https://www.systemxceramiccoating.com",
  },
  {
    name: "Koch Chemie",
    logo: "https://kcxusa.com/cdn/shop/files/White_Square.png",
    url: "https://kcxusa.com",
  },
  {
    name: "CarPro",
    logo: "https://lpsog3i64o.ufs.sh/f/Q40NF8H3o1GE0ooPlDT43vldRwtsFOQHjGCKegIW9AhNXTyL",
    url: "https://www.carpro-us.com",
  },
  {
    name: "Gyeon",
    logo: "https://lpsog3i64o.ufs.sh/f/Q40NF8H3o1GEjVAwBvlEeOGd1Z27t4sXfpngQPLrImu9hMkU",
    url: "https://gyeon.com",
  },
  {
    name: "SONAX",
    logo: "https://www.sonax.com/media/image/37/24/f9/logo_sonax_weiss.png",
    url: "https://www.sonax.com",
  },
  {
    name: "Shine Supply",
    logo: "https://shinesupply.com/cdn/shop/files/SS-Logo-White.png",
    url: "https://shinesupply.com",
  },
];

// Service Areas
export const SERVICE_AREAS = [
  "Medford",
  "Ashland",
  "Jacksonville",
  "Central Point",
  "Eagle Point",
  "White City",
  "Talent",
  "Phoenix",
];

// Ticker Items
export const TICKER_ITEMS = [
  "Interior Detailing",
  "Exterior Detailing",
  "Paint Correction",
  "Ceramic Coating",
  "Odor Treatment",
  "Glass Polish",
  "Wheel Coating",
  "Trim Restoration",
  "Spot Extraction",
  "System X Certified",
];

// Contact
export const CONTACT = {
  phone: "(541) 326-5822",
  phoneTel: "tel:+15413265822",
  formspark: "YOJFX3S30",
  instagram: "https://www.instagram.com/mobilesolutionz",
};

// Hero
export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2874&auto=format&fit=crop";

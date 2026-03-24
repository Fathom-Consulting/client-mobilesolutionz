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
    name: "Prestyn R.",
    rating: 5,
    text: "They did such an awesome job — my car smells brand new. I needed an odor treatment to get all of the nicotine out before my newborn arrives and I don't think I could've found a better place. Super efficient, came to my house, and had it ready within hours.",
    date: "2 weeks ago",
  },
  {
    name: "Tim H.",
    rating: 5,
    text: "I have been detailing my own vehicles for over 50 years and was a little hesitant on hiring someone, but let me tell you these guys are absolutely amazing at what they do. By far the best detail I've ever seen, and very reasonably priced. I HIGHLY recommend them.",
    date: "1 month ago",
  },
  {
    name: "Kemberly R.",
    rating: 5,
    text: "Mobile Solutionz came out to my home and brought my car back to life! We have three boys and my car is our daily to work, school, and sports practices. For all the busy families out there, this is your guy. Very professional and easy to communicate with.",
    date: "3 weeks ago",
  },
  {
    name: "Morgan W.",
    rating: 5,
    text: "He did amazing work! This car transports two feral gremlins every single day, and you can definitely tell. But he made my car seem like it was fresh and clean straight off the lot. I will be using him again and referring him to everyone I know.",
    date: "1 month ago",
  },
  {
    name: "Christian C.",
    rating: 5,
    text: "Night and day difference. Kids wrecked my truck and now it's looking better than new. 10 out of 10, highly recommend.",
    date: "3 weeks ago",
  },
  {
    name: "Reynaldo S.",
    rating: 5,
    text: "My truck looks brand new! The exterior has a mirror-like shine and the interior smelled fresh, with every nook and cranny thoroughly cleaned. He even cleaned the engine bay, which I wasn't expecting. It's clear Chano takes pride in his work and doesn't rush. I'll definitely be coming back.",
    date: "2 months ago",
  },
  {
    name: "Adrián S.",
    rating: 5,
    text: "My mobile detailer is reliable, professional, and goes above and beyond every time. He even came out to my barbershop and made sure my car looked absolutely perfect. The attention to detail and pride in his work really show — highly recommend!",
    date: "6 weeks ago",
  },
  {
    name: "Kayla O.",
    rating: 5,
    text: "I didn't even recognize my car after Chano was done with it. It looked like a brand new car off the lot! He came to my home which was super convenient. Highly, highly recommend!",
    date: "5 weeks ago",
  },
  {
    name: "John W.",
    rating: 5,
    text: "They came to my business and detailed the inside of my Ford F-150. Arrived on time, extremely thorough — they took their time to do it right and made sure no area was missed. It's hard to believe how good the interior looks now.",
    date: "2 months ago",
  },
  {
    name: "Sara C.",
    rating: 5,
    text: "I had Chano detail two of my vehicles and couldn't be happier. Thorough, professional, and they clearly take pride in their work. My cars look and smell brand new — every surface is spotless. Great communication, fair pricing, fast turnaround.",
    date: "1 month ago",
  },
  {
    name: "Miguel C.",
    rating: 5,
    text: "This man is a total professional — has detailed our work trucks to make them look like new, installed backup cameras, detailed my personal cars. Always completely professional, leaves no trace of even being here. Best value for the money out there.",
    date: "3 months ago",
  },
  {
    name: "Ryan W.",
    rating: 5,
    text: "Chano did a fantastic job detailing my interior and exterior, and was so easy to work with for scheduling. The best part is that he'll come straight to wherever your car is!",
    date: "Recently",
  },
];

// Products
export const PRODUCTS = [
  {
    name: "System X",
    logo: "https://cdn-ikpmjnd.nitrocdn.com/qznJgwnlaTliTICyuZZHbJsdCttURBcT/assets/images/source/rev-7a62f86/www.systemx.com/wp-content/themes/systemx/images/systemx.svg",
    url: "https://www.systemxceramiccoating.com",
  },
  {
    name: "Koch Chemie",
    logo: "https://www.koch-chemie.com/media/content/logos/logo_kochchemie-2025.svg",
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
    logo: "/logos/sonax.svg",
    url: "https://www.sonax.com",
  },
  {
    name: "Shine Supply",
    logo: "https://cdn.shopify.com/s/files/1/0645/8097/files/SS-Logo-Final-blk_480x480.png?v=1643821766",
    url: "https://shinesupply.com",
  },
  {
    name: "P&S Detail Products",
    logo: "https://psdetailproducts.com/cdn/shop/files/P_S_Red_Logo.png?v=1717528232",
    url: "https://pnsdetail.com",
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
  instagram: "https://www.instagram.com/mobilesolutionzz",
};

// Hero
export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2874&auto=format&fit=crop";

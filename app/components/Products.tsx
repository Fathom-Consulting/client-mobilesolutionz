"use client";
import Image from "next/image";
import images from "../images.json";

const products = [
  {
    name: "Koch Chemie",
    logo: "https://kcxusa.com/cdn/shop/files/White_Square.png",
    url: "https://kcxusa.com",
    description:
      "Koch Chemie offers high-quality German car care products that provide excellent results for both interior and exterior detailing.",
  },
  {
    name: "CarPro",
    logo: images["carpro.png"],
    url: "https://carpro-us.com",
  },
  {
    name: "Gyeon",
    logo: images["gyeon.png"],
    url: "https://gyeonusa.com",
  },
  {
    name: "SONAX",
    logo: "/sonax-logo.svg",
    url: "https://www.sonax.com/en",
  },
  {
    name: "Shine Supply",
    logo: "/shine-supply-logo.png",
    url: "https://shinesupply.com",
  },
  {
    name: "P&S",
    logo: "https://psdetailproducts.com/cdn/shop/files/P_S_Red_Logo.png",
    url: "https://psdetailproducts.com",
    specialCase: true,
  },
];

export default function Products() {
  return (
    <section className="py-16">
      {/* Products we trust */}
      <h3 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
        Products We Trust
      </h3>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {products.map((product) => (
            <a
              key={product.name}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex items-center justify-center h-32
                      transition-colors duration-300 hover:bg-white/20"
            >
              <Image
                width={1000}
                height={900}
                src={product.logo}
                alt={product.name}
                className={`
                w-full h-full object-contain
                ${
                  product.specialCase
                    ? "saturate-0 contrast-200"
                    : "brightness-0 invert"
                }
              `}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

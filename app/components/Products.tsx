'use client'
import Image from 'next/image'

const products = [
  {
    name: 'Koch Chemie',
    logo: 'https://kcxusa.com/cdn/shop/files/White_Square.png',
    url: 'https://kcxusa.com',
    description: 'Koch Chemie offers high-quality German car care products that provide excellent results for both interior and exterior detailing.',
  },
  {
    name: 'CarPro',
    logo: 'https://res.cloudinary.com/dkgpsncrn/image/upload/v1737580278/carpro_kjdbps.png',
    url: 'https://carpro-us.com',
  },
  {
    name: 'Gyeon',
    logo: 'https://res.cloudinary.com/dkgpsncrn/image/upload/v1737580278/gyeon_j2ffc8.png',
    url: 'https://gyeonusa.com'
  },
  {
    name: '3D Products',
    logo: 'https://3dproducts.com/cdn/shop/files/Asset_6_3x_b38999b4-824d-449d-90c6-5269015c71e2.png',
    url: 'https://3dproducts.com'
  },
  {
    name: 'ProChoice',
    logo: 'https://prochoicecarcare.com/data/files/img_4459.png',
    url: 'https://prochoicecarcare.com'
  },
  {
    name: 'P&S',
    logo: 'https://psdetailproducts.com/cdn/shop/files/P_S_Red_Logo.png',
    url: 'https://psdetailproducts.com',
    specialCase: true
  }
]

export default function Products() {
  return (
    <section className="py-16">
      {/* Products we trust */}
      <h3 className='text-4xl md:text-5xl font-bold text-center mb-16 text-white'>Products We Trust</h3>
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
              width={900}
              height={900}
              src={product.logo}
              alt={product.name}
              className={`
                w-full h-full object-contain
                ${product.specialCase
                  ? 'saturate-0 contrast-200'
                  : 'brightness-0 invert'
                }
              `}
            />
          </a>
        ))}
      </div>
    </div>
  </section>

  )
}


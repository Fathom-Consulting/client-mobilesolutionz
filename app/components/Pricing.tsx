'use client'

import { useState } from 'react'
import { Check, HelpCircle } from 'lucide-react'
import Modal from './Modal'
import AddOnPage from './AddOnPage'

const services = [
  {
    name: 'Economy',
    price: '$100 - $250',
    description: 'Basic detailing for regular maintenance',
    features: {
      interior: [
        'Basic cleaning',
        'Panel & seat conditioning',
        'Windows cleaned',
        'Pedals cleaned'
      ],
      exterior: [
        'Hand wash',
        'Scrub wheels & tires',
        'Wax & tire shine',
        'Hand dry'
      ]
    }
  },
  {
    name: 'Protection+',
    price: '$400 - $500',
    description: 'Comprehensive care for your vehicle',
    features: {
      interior: [
        'Deep clean',
        'Steam disinfectant',
        'Leather treatment',
        'Spot extraction'
      ],
      exterior: [
        'Fenders scrubbed',
        'Iron remover',
        'Clay bar',
        'Premium sealant',
        'Plastic protection'
      ]
    },
    popular: true
  },
  {
    name: 'CeramicPro',
    price: '$800 - $1400',
    description: 'The ultimate in car care and protection',
    features: {
      interior: [
        'Ceramic coating',
        'Full extraction',
        'Protection & conditioning'
      ],
      exterior: [
        'Ceramic coating on glass, paint, and wheels',
        'Trim restoration',
        'Engine bay cleanup'
      ]
    }
  },
  {
    name: 'Custom',
    price: 'Varies',
    description: "Build your own custom package tailored to your vehicle's needs",
    features: {
      interior: ['Customized interior detailing plan'],
      exterior: ['Customized exterior detailing plan']
    },
    isCustom: true
  }
]

const addOns = [
  {
    name: 'O-Zone Treatment',
    description: "Our O-Zone Treatment is a powerful, eco-friendly method to eliminate stubborn odors and sanitize your vehicle's interior, leaving it fresh and clean.",
    benefits: [
      "Eliminates tough odors like smoke, pet smells, and mildew",
      "Kills bacteria, viruses, and other harmful microorganisms",
      "Reaches areas that traditional cleaning methods can't",
      "Safe for use on all interior surfaces",
      "Leaves no chemical residue"
    ],
    process: [
      "Inspect the vehicle and identify odor sources",
      "Prepare the vehicle by removing loose items and debris",
      "Set up the O-Zone generator in the vehicle",
      "Run the treatment for the appropriate duration",
      "Air out the vehicle thoroughly after treatment",
      "Perform a final inspection to ensure odor elimination"
    ],
    imageSrc: "https://res.cloudinary.com/dkgpsncrn/image/upload/v1737580062/ozone-treatment_ry1fz4.webp"
  },
  {
    name: 'Glass Polish and Coating',
    description: "Our Glass Polish and Coating service enhances visibility and protects your vehicle's windows, making them easier to clean and more resistant to environmental contaminants.",
    benefits: [
      "Improves visibility in all weather conditions",
      "Repels water, making it easier to clear rain while driving",
      "Reduces glare from sunlight and other vehicles' headlights",
      "Makes cleaning easier by preventing dirt and grime buildup",
      "Protects against minor scratches and etching"
    ],
    process: [
      "Thoroughly clean all glass surfaces",
      "Clay bar treatment to remove embedded contaminants",
      "Polish the glass to remove any light scratches or hazing",
      "Apply the specialized glass coating",
      "Cure the coating for maximum durability",
      "Final inspection and touch-ups"
    ],
    imageSrc: "https://res.cloudinary.com/dkgpsncrn/image/upload/v1737580062/glass-cleaning_f7ieuo.webp"
  },
  {
    name: 'Paint Correction',
    description: "Our Paint Correction service restores your vehicle's paint to its original glory, removing swirl marks, light scratches, and oxidation for a flawless finish.",
    benefits: [
      "Restores the original shine and color of your vehicle",
      "Removes swirl marks, light scratches, and oxidation",
      "Enhances the effectiveness of waxes and sealants",
      "Increases your vehicle's resale value",
      "Provides a smooth surface that's easier to maintain"
    ],
    process: [
      "Thorough wash and decontamination of the paint surface",
      "Clay bar treatment to remove embedded contaminants",
      "Assess the paint condition and determine the appropriate correction level",
      "Machine polish using various pads and compounds as needed",
      "Refine the finish for maximum gloss",
      "Apply a protective sealant or coating"
    ],
    imageSrc: "https://res.cloudinary.com/dkgpsncrn/image/upload/v1737580062/paint-correction_ooyhnf.webp"
  },
  {
    name: 'Spot Extraction',
    description: "Our Spot Extraction service targets stubborn stains and spots in your vehicle's interior, restoring the clean look of your carpets and upholstery.",
    benefits: [
      "Removes tough stains from carpets and upholstery",
      "Eliminates odors associated with spills and stains",
      "Extends the life of your vehicle's interior materials",
      "Improves the overall appearance of your vehicle's interior",
      "Uses safe, eco-friendly cleaning solutions"
    ],
    process: [
      "Identify and assess all spots and stains",
      "Pre-treat stains with appropriate cleaning solutions",
      "Use hot water extraction equipment to deep clean the affected areas",
      "Apply stain guard protection to prevent future staining",
      "Thoroughly dry the cleaned areas",
      "Final inspection to ensure all spots are removed"
    ],
    imageSrc: "https://res.cloudinary.com/dkgpsncrn/image/upload/v1737580062/spot-extraction_bx1a8q.webp"
  },
  {
    name: 'Engine Bay Clean-up',
    description: "Our Engine Bay Clean-up service degreases and details your vehicle's engine compartment, improving its appearance and making it easier to spot potential issues.",
    benefits: [
      "Improves the overall appearance of your vehicle",
      "Makes it easier to spot leaks and other potential issues",
      "Helps prevent corrosion of engine components",
      "Reduces the risk of electrical issues caused by grime buildup",
      "Can help improve resale value"
    ],
    process: [
      "Cover sensitive electrical components",
      "Apply degreaser to loosen dirt and oil",
      "Gently pressure wash the engine bay",
      "Hand clean hard-to-reach areas",
      "Apply protectant to rubber and plastic components",
      "Dry and inspect the engine bay"
    ],
    imageSrc: "https://res.cloudinary.com/dkgpsncrn/image/upload/f_auto,q_auto/engine-bay-cleanup_ppdntn"
  },
  {
    name: 'Interior Ceramic Leather Coating',
    description: "Our Interior Ceramic Leather Coating service provides long-lasting protection for your vehicle's leather surfaces, keeping them looking new and easy to clean.",
    benefits: [
      "Protects leather from UV damage, stains, and wear",
      "Makes leather surfaces easier to clean and maintain",
      "Prevents color fading and cracking",
      "Provides a soft, luxurious feel",
      "Extends the life of your vehicle's leather interior"
    ],
    process: [
      "Thoroughly clean and degrease all leather surfaces",
      "Repair any minor damage or cracks in the leather",
      "Apply leather conditioner to restore moisture",
      "Carefully apply the ceramic coating to all leather surfaces",
      "Allow the coating to cure",
      "Inspect and buff for a perfect finish"
    ],
    imageSrc: "https://res.cloudinary.com/dkgpsncrn/image/upload/v1737580062/leather-ceramic-coating_e39ms4.webp"
  },
  {
    name: 'Wheel Polish and Coating',
    description: "Our Wheel Polish and Coating service restores the shine to your wheels and protects them from brake dust, road grime, and other contaminants.",
    benefits: [
      "Enhances the appearance of your wheels",
      "Protects against brake dust and road grime",
      "Makes future cleaning easier and quicker",
      "Helps prevent corrosion and pitting",
      "Can improve the overall look of your vehicle"
    ],
    process: [
      "Remove wheels from the vehicle (if necessary)",
      "Thoroughly clean wheels, including barrel and calipers",
      "Clay bar treatment to remove embedded contaminants",
      "Polish wheels to remove light scratches and oxidation",
      "Apply ceramic coating to wheels and calipers",
      "Allow coating to cure before reinstalling wheels"
    ],
    imageSrc: "https://res.cloudinary.com/dkgpsncrn/image/upload/v1737580063/wheel-polish_vbuczp.webp"
  },
  {
    name: 'Trim Restoration',
    description: "Our Trim Restoration service brings new life to faded and oxidized exterior plastic and rubber trim, restoring your vehicle's sleek appearance.",
    benefits: [
      "Restores faded and oxidized trim to like-new condition",
      "Protects trim from future UV damage and oxidation",
      "Enhances the overall appearance of your vehicle",
      "Saves money compared to replacing trim pieces",
      "Long-lasting results with proper maintenance"
    ],
    process: [
      "Thoroughly clean all trim surfaces",
      "Sand heavily oxidized areas if necessary",
      "Apply specialized trim restorer product",
      "Work the product into the trim using appropriate tools",
      "Allow the product to cure",
      "Apply a protective sealant for long-lasting results"
    ],
    imageSrc: "https://res.cloudinary.com/dkgpsncrn/image/upload/v1737580063/trim-restoration_8adu13o.webp"
  }
]

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<'interior' | 'exterior'>('interior')
  const [selectedAddOn, setSelectedAddOn] = useState<typeof addOns[0] | null>(null)

  const handleChoosePackage = (packageName: string) => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
    window.dispatchEvent(new CustomEvent('updateContactForm', { detail: { package: packageName } }));
  }

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-3 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
            Our Detailing Packages
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="col-span-full md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => (
              <div 
                key={service.name}
                className={`relative overflow-hidden rounded-2xl backdrop-blur-sm border transition-all duration-300 flex flex-col
                  ${service.popular 
                    ? 'bg-[#606c38]/20 border-[#606c38] transform scale-105 z-10' 
                    : 'bg-white/10 border-white/10 hover:border-[#606c38]'
                  }`}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#606c38] text-white text-sm px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <p className="text-4xl font-bold text-white mb-6">{service.price}</p>
                  <div className="mb-6 flex-grow">
                    <div className="flex border-b border-gray-700 mb-4">
                      <button
                        className={`flex-1 py-2 text-sm font-medium ${activeTab === 'interior' ? 'text-[#606c38] border-b-2 border-[#606c38]' : 'text-gray-400'}`}
                        onClick={() => setActiveTab('interior')}
                      >
                        Interior
                      </button>
                      <button
                        className={`flex-1 py-2 text-sm font-medium ${activeTab === 'exterior' ? 'text-[#606c38] border-b-2 border-[#606c38]' : 'text-gray-400'}`}
                        onClick={() => setActiveTab('exterior')}
                      >
                        Exterior
                      </button>
                    </div>
                    <ul className="space-y-3 h-[200px] overflow-y-auto">
                      {service.features[activeTab].map((feature) => (
                        <li key={feature} className="flex items-center text-gray-300">
                          <Check className="w-5 h-5 mr-3 text-[#606c38] flex-shrink-0" />
                          <span className="text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button 
                    className="w-full bg-[#606c38] text-white py-3 px-6 rounded-full hover:bg-[#515c30] transition-all duration-300 hover:scale-105"
                    onClick={() => handleChoosePackage(service.name)}
                  >
                    Choose Package
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-full md:col-span-3 flex justify-center mt-8">
            <div 
              className="bg-gradient-to-br from-[#283618] to-[#606c38] border-white/20 rounded-2xl backdrop-blur-sm w-full md:w-2/3 h-auto"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">Custom</h3>
                <p className="text-gray-400 mb-4">Build your own custom package tailored to your vehicle&apos;s needs</p>
                <p className="text-3xl font-bold text-white mb-6">Price Varies</p>
                <div className="flex justify-center">
                  <a 
                    href="#contact"
                    className="w-1/2 bg-white text-[#606c38] py-3 px-6 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 text-center"
                  >
                    Contact Us to Customize
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add-ons */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            {/*Removed Diamond icons here*/}
            <h3 className="text-2xl md:text-3xl font-bold text-center text-white">Available Add-ons</h3>
            {/*Removed Diamond icons here*/}
          </div>
          <p className="text-center text-[#606c38] font-semibold mb-4">Price varies depending on vehicle condition</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {addOns.map((addon) => (
              <div 
                key={addon.name}
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex flex-col justify-between items-center hover:border-[#606c38] transition-all duration-300 text-center cursor-pointer group"
                onClick={() => setSelectedAddOn(addon)}
              >
                <span className="text-white mb-2">{addon.name}</span>
                <span className="text-[#606c38] hover:underline text-sm">
                  Learn More
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-400 mb-4">
            All prices vary based on vehicle size and condition
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-[#606c38] hover:text-[#515c30] transition-colors duration-300 group"
          >
            <span className="mr-2">Need help choosing?</span>
            <HelpCircle className="w-5 h-5 group-hover:animate-pulse" />
          </a>
        </div>
      </div>

      <Modal isOpen={!!selectedAddOn} onClose={() => setSelectedAddOn(null)}>
        {selectedAddOn && (
          <AddOnPage
            title={selectedAddOn.name}
            description={selectedAddOn.description}
            benefits={selectedAddOn.benefits}
            process={selectedAddOn.process}
            imageSrc={selectedAddOn.imageSrc}
          />
        )}
      </Modal>
    </section>
  )
}


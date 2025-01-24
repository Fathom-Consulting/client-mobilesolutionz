'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Car, Leaf, Wrench, Star, MapPin, Sun, House } from 'lucide-react' // Lucide Icons

const GlowBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, width: '0%' }}
      animate={{ opacity: 1, width: '100%' }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="h-1 bg-gradient-to-r from-[#606c38] via-[#283618] to-[#606c38] rounded-full mb-8"
    />
  )
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">About Mobile Solutionz</h2>
          <GlowBar />

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image with Overlay */}
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
              <Image
                src="https://res.cloudinary.com/dkgpsncrn/image/upload/v1737580200/about-image_bpcczk.webp"
                alt="Mobile Solutionz team at work"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl font-semibold mb-2">Our Commitment</h3>
                <p className="text-sm">Delivering excellence in every detail, every time.</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-300 text-lg order-2 md:order-1">
              <p>
                <strong className="text-white">Mobile Solutionz</strong> brings premium car detailing services directly to your location. 
                With our state-of-the-art equipment and experienced professionals, we transform your vehicle to showroom condition while saving you valuable time.
              </p>
              <p>
                Our dedication to <strong className="text-[#606c38] ">excellence</strong> and <strong className="text-[#606c38]">attention to detail</strong> sets us apart. Whether you need a quick refresh or a complete detail, we deliver outstanding results that protect and enhance your vehicle&apos;s appearance.
              </p>
              <p>
                Based in <span className="text-[#606c38]"><strong>Medford, Oregon</strong></span>, we&apos;re proud to serve the entire Rogue Valley region. Our local expertise allows us to provide tailored detailing services that address the unique needs of Southern Oregon vehicles.
              </p>

              {/* Feature Icons */}
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-4">
                  <Wrench className="text-[#606c38] w-6 h-6" />
                  <span>Professional-grade equipment</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Star className="text-[#606c38] w-6 h-6" />
                  <span>Certified expert detailers</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Car className="text-[#606c38] w-6 h-6" />
                  <span>Mobile service convenience</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Leaf className="text-[#606c38] w-6 h-6" />
                  <span>Eco-friendly solutions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service Area & Why Choose Us */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold mb-8 text-white text-center">Serving Medford and Southern Oregon</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Service Area */}
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <h4 className="text-2xl font-semibold mb-4 text-white flex items-center">
                  <MapPin className="mr-3 text-[#606c38] w-6 h-6" />
                  Our Service Area
                </h4>
                <ul className="grid grid-cols-2 gap-2 text-gray-300">
                  <li>Medford</li>
                  <li>Ashland</li>
                  <li>Central Point</li>
                  <li>Jacksonville</li>
                  <li>Phoenix</li>
                  <li>Talent</li>
                  <li>Eagle Point</li>
                  <li>White City</li>
                </ul>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <h4 className="text-2xl font-semibold mb-4 text-white flex items-center">
                  <Star className="mr-3 text-[#606c38] w-6 h-6" />
                  Why Choose Us
                </h4>
                <ul className="grid grid-cols-1 gap-2 text-gray-300">
                  <li className="flex items-center">
                    <Car className="mr-2 text-[#606c38] w-6 h-6" />
                    Convenient mobile service
                  </li>
                  <li className="flex items-center">
                    <Leaf className="mr-2 text-[#606c38] w-6 h-6" />
                    Eco-friendly detailing options
                  </li>
                  <li className="flex items-center">
                    <Sun className="mr-2 text-[#606c38] w-6 h-6" />
                    Premium products for Oregon’s climate
                  </li>
                  <li className="flex items-center">
                    <Wrench className="mr-2 text-[#606c38] w-6 h-6" />
                    Tailored packages for all vehicle types
                  </li>
                  <li className="flex items-center">
                    <House className="mr-2 text-[#606c38] w-6 h-6" />
                    Serving residential & commercial clients
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <a 
              href="#contact"
              className="bg-[#606c38] text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-[#4a522c] transition-all"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

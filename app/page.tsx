'use client';
import { Suspense } from 'react'
import { useEffect } from 'react'
import Head from 'next/head'

import Header from './components/Header'
import Services from './components/Services'
import Pricing from './components/Pricing'
import ContactForm from './components/ContactForm'
import Instagram from './components/Instagram'
import Products from './components/Products'
import About from './components/About'

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  return (
    <>
    <Head>
        <title>Mobile Solutionz - Premium Car Detailing</title>
        <meta name="description" content="Experience professional mobile car detailing at your doorstep. We bring the excellence to you!" />
        <meta property="og:title" content="Mobile Solutionz - Premium Car Detailing" />
        <meta property="og:description" content="Experience professional mobile car detailing at your doorstep." />
        <meta property="og:image" content="https://res.cloudinary.com/dkgpsncrn/image/upload/v1737580200/mobile-solutionz-logo_gielxw.webp" />
        <meta property="og:url" content="https://mobile-solutionz.com" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    <main>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-black/60 via-black/40 to-black" id ="home">
        <Header />
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center">
          <video
            src="https://res.cloudinary.com/dkgpsncrn/video/upload/v1737580328/kvknx4m8ra0zq0hohxjo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="
              absolute 
              top-0 
              left-0
              w-full 
              h-full 
              object-cover
              z-[-1]
            "
            preload="auto"
          />

          <div className="relative z-1 container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              <span className="block mb-2">Premium Mobile</span>
              <span className="text-[#606c38]">Car Detailing</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-2xl mx-auto">
              Experience professional car detailing services at your doorstep. We bring the excellence to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-[#606c38] text-white px-8 py-4 rounded-full hover:bg-[#515c30] transition-all duration-300 hover:scale-105 text-lg font-medium"
              >
                Book Now
              </a>
              <a 
                href="#services" 
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 text-lg font-medium"
              >
                View Services
              </a>
            </div>
          </div>
        </section>

        <Services />
        
        <Pricing />

        <Products />

        <Instagram />

        <About />

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-black">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Get in Touch</h2>
              <div className="bg-gray-900/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/10">
                <Suspense fallback={<div className="text-white">Loading...</div>}>
                  <ContactForm />
                </Suspense>
              </div>
            </div>
          </div>
        </section>


        {/* Footer */}
        <footer className="py-8 bg-black border-t border-white/10">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Mobile Solutionz. All rights reserved.
              </div>
              <div className="flex space-x-6">
                <p className="text-gray-400">Site Created by <a href="https://dtfathom.notion.site/welcome" className="text-gray-400 hover:underline decoration-wavy hover:text-[#606c38] transition-colors duration-300 font-semibold  ">Fathom Consulting</a></p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
    </>
  )
}


'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-[1000] transition-all duration-300 ${isScrolled || mobileMenuOpen ? 'bg-black' : 'bg-transparent'}`}>
      {/* Desktop Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
      <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              src="https://res.cloudinary.com/dkgpsncrn/image/upload/v1737580200/mobile-solutionz-logo_gielxw.webp"
              alt="Mobile Solutionz"
              width={200}
              height={200}
              className="h-16 w-auto lg:h-20 transition-all duration-300 hover:opacity-80"
            />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="#services" className="text-lg font-semibold text-white hover:text-[#606c38] transition-colors duration-200">Services</Link>
          <Link href="#pricing" className="text-lg font-semibold text-white hover:text-[#606c38] transition-colors duration-200">Pricing</Link>
          <Link href="#about" className="text-lg font-semibold text-white hover:text-[#606c38] transition-colors duration-200">About</Link>
          <Link href="tel:+15413265822" className="text-lg font-semibold text-white hover:text-[#606c38] transition-colors duration-200">(541) 326-5822</Link>
        </div>
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-white hover:text-[#606c38] transition-colors duration-200"
          >
            <Menu className="h-8 w-8" />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <Dialog 
        as="div" 
        className="lg:hidden" 
        open={mobileMenuOpen} 
        onClose={setMobileMenuOpen}
      >
        {/* Overlay with fade transition */}
        <div 
          className={`fixed inset-0 z-[1001] bg-black/90 backdrop-blur-sm transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        />

        {/* Menu container with slide-up transition */}
        <div 
          className={`fixed inset-0 z-[1002] overflow-y-auto transition-all duration-300 ${
            mobileMenuOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <div className="relative w-full max-w-md transform">
              {/* Centered Logo */}
              <div className="absolute top-8 left-0 right-0 flex justify-center">
                <Link 
                  href="/" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-block"
                >
                  <Image
                    src="https://res.cloudinary.com/dkgpsncrn/image/upload/v1737580200/mobile-solutionz-logo_gielxw.webp"
                    alt="Mobile Solutionz"
                    width={120}
                    height={120}
                    className="h-16 w-auto transition-opacity duration-200 hover:opacity-80"
                  />
                </Link>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-4 right-4 p-2 text-white hover:text-[#606c38] transition-colors duration-200"
              >
                <X className="h-8 w-8" />
              </button>

              {/* Menu Items with staggered transition */}
              <div className="mt-32 space-y-6">
                <Link href="#services" onClick={() => setMobileMenuOpen(false)} className="block w-full py-3 text-white hover:text-[#606c38] transition-colors duration-200">Services</Link>
                <Link href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block w-full py-3 text-white hover:text-[#606c38] transition-colors duration-200">Pricing</Link>
                <Link href="#about" onClick={() => setMobileMenuOpen(false)} className="block w-full py-3 text-white hover:text-[#606c38] transition-colors duration-200">About</Link>
                <Link href="tel:+15413265822" onClick={() => setMobileMenuOpen(false)} className="block w-full py-3 text-white hover:text-[#606c38] transition-colors duration-200">(541) 326-5822</Link>
                <Link href="#contact" className="block w-full bg-[#606c38] px-6 py-3 rounded-full text-white hover:bg-[#515c30] transition-all duration-300">Book Now</Link>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </header>
  )
}
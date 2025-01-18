'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md py-2' : 'bg-transparent py-6'
    }`}>
      <nav className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Left Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link 
              href="#services" 
              className="text-white hover:text-[#606c38] transition-colors duration-300"
            >
              Services
            </Link>
            <Link 
              href="#pricing" 
              className="text-white hover:text-[#606c38] transition-colors duration-300"
            >
              Pricing
            </Link>
            <Link 
              href="#about" 
              className="text-white hover:text-[#606c38] transition-colors duration-300"
            >
              About
            </Link>
          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0">
            <Image
              src="/images/mobile-solutionz-logo-nobg.png"
              alt="Mobile Solutionz"
              width={400}
              height={400}
              className={`transition-all duration-300 w-auto ${
                isScrolled 
                ? 'h-16 sm:h-20 md:h-24' 
                : 'h-26 sm:h-32 md:h-48'
              }`}
              priority
            />
          </div>

          {/* Right Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <a 
              href="tel:+15413265822"
              className="text-white hover:text-[#606c38] transition-colors duration-300 font-semibold tracking-wide"
            >
              <span className="mr-2">📞</span>(541) 326-5822
            </a>
            <Link 
              href="#contact" 
              className="bg-[#606c38] text-white px-6 py-2 rounded-full hover:bg-[#515c30] transition-all duration-300 hover:scale-105"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Navigation */}
          <div className={`
            fixed inset-0 bg-black/95 backdrop-blur-lg transform transition-transform duration-300 
            flex flex-col items-center justify-center space-y-8 md:hidden
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}>
            <Image
              src="/images/mobile-solutionz-logo-nobg.png"
              alt="Mobile Solutionz"
              width={200}
              height={200}
              className="w-auto h-24 sm:h-32 mb-8"
              priority
            />
            <Link 
              href="#services" 
              className="text-white text-2xl hover:text-[#606c38] transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="#pricing" 
              className="text-white text-2xl hover:text-[#606c38] transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="#about" 
              className="text-white text-2xl hover:text-[#606c38] transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <a 
              href="tel:+15413265822"
              className="text-white text-2xl hover:text-[#606c38] transition-colors duration-300 font-semibold tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="mr-2">📞</span>(541) 326-5822
            </a>
            <Link 
              href="#contact" 
              className="bg-[#606c38] text-white px-8 py-3 rounded-full text-xl hover:bg-[#515c30] transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}


'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || mobileMenuOpen ? 'bg-black' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 text-white">
        <div className="flex lg:flex-2">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Mobile Solutionz</span>
            <Image
              src="https://res.cloudinary.com/dkgpsncrn/image/upload/v1737580200/mobile-solutionz-logo_gielxw.webp"
              alt="Mobile Solutionz"
              width={250}
              height={250}
              className="h-32 w-auto transition-all duration-300"
            />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="#services" className="text-lg font-semibold hover:text-[#606c38]">Services</Link>
          <Link href="#pricing" className="text-lg font-semibold hover:text-[#606c38]">Pricing</Link>
          <Link href="#about" className="text-lg font-semibold hover:text-[#606c38]">About</Link>
          <Link href="tel:+15413265822" className="text-lg font-semibold">(541) 326-5822</Link>
        </div>
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="p-2.5 text-white"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>
      
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10 bg-black/100 backdrop-blur-lg" />
        <DialogPanel className="fixed inset-0 z-20 flex flex-col items-center justify-center bg-black p-6">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-white"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="mt-6 flex flex-col items-center space-y-6 text-white text-lg">
            <Link href="#services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
            <Link href="#about" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link href="tel:+15413265822" onClick={() => setMobileMenuOpen(false)}>(541) 326-5822</Link>
            <Link href="#contact" className="bg-[#606c38] px-6 py-3 rounded-full text-center" onClick={() => setMobileMenuOpen(false)}>Book Now</Link>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

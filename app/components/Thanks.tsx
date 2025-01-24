'use client'

import { CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Thanks() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/')
    }, 10000)
    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8 animate-fade-in">
        <div className="flex justify-center">
          <CheckCircle className="w-24 h-24 text-[#606c38] animate-check-bounce" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Thank You for Choosing Mobile Solutionz!
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-8">
          We&apos;ve received your request and will be in touch shortly to confirm your details. 
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="border-2 border-[#606c38] text-[#606c38] px-8 py-4 rounded-full hover:bg-[#606c38]/10 transition-all duration-300 hover:scale-105 text-lg font-medium"
          >
            Return Home
          </Link>
        </div>
        <p className="text-gray-400 mt-8 text-sm">
          Need immediate assistance? Call us at{' '}
          <a href="tel:+15413265822" className="text-[#606c38] hover:underline">
            +1 (541) 326-5822
          </a>
        </p>
      </div>
    </div>
  )
}
'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Loading() {
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = Math.min(oldProgress + Math.random() * 20, 100)
        if (newProgress === 100) {
          clearInterval(timer)
          setTimeout(() => setIsLoading(false), 500) // Give a small delay after reaching 100%
        }
        return newProgress
      })
    }, 200)

    return () => clearInterval(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
      <Image
        src="https://res.cloudinary.com/dkgpsncrn/image/upload/v1737580200/mobile-solutionz-logo_gielxw.webp"
        alt="Mobile Solutionz"
        width={300}
        height={300}
        className="mb-8 animate-pulse"
      />
      <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-[#606c38] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-4 text-white text-sm">Loading your experience...</p>
    </div>
  )
}


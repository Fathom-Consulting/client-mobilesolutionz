'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export default function Instagram() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Follow Us on Instagram
        </h2>
        <Script src="https://static.elfsight.com/platform/platform.js" strategy="lazyOnload" />
        <div 
          className="elfsight-app-9b0c2931-a6e6-4fa9-8b43-e56a011739ba" 
          data-elfsight-app-lazy
        />
      </div>
    </section>
  )
}


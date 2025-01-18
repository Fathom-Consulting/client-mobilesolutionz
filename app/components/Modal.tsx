'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleTransitionEnd = () => {
    if (!isOpen) {
      setIsAnimating(false)
    }
  }

  // If we are closed and not animating, no need to render in the DOM
  if (!isOpen && !isAnimating) return null

  return (
    <div
      className={`
        fixed inset-0 z-50
        flex items-center justify-center
        p-4
        bg-black bg-opacity-50
        transition-opacity duration-300
        ${isOpen ? 'opacity-100' : 'opacity-0'}
      `}
      // Prevent horizontal scrolling if any child tries to exceed viewport width
      style={{ overflowX: 'hidden' }}
      onClick={onClose}
      onTransitionEnd={handleTransitionEnd}
    >
      <div
        className={`
          relative w-full
          // Scale properly across breakpoints:
          // - On mobile: up to 95% of viewport width
          // - On md+: up to 80% of viewport width
          // - On xl+: up to a specific max (e.g., 6xl)
          max-w-[95vw] md:max-w-[80vw] xl:max-w-6xl

          // Take up most of the screen’s height, but be scrollable
          max-h-[90vh] overflow-y-auto

          bg-gray-900 rounded-lg shadow-xl
          transition-all duration-300
          ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
        `}
        onClick={(e) => e.stopPropagation()} // Prevent closing on inner click
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
        >
          <X size={24} />
        </button>

        {/* Render the modal content (e.g. Pricing Box) */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  )
}

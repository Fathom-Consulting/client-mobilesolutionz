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
      style={{ overflowX: 'hidden' }}
      onClick={onClose}
      onTransitionEnd={handleTransitionEnd}
    >
      <div
        className={`
          relative w-full
          max-w-[90vw] md:max-w-[80vw] xl:max-w-6xl
          max-h-[65vh] md:max-h-[90vh]  // Reduced on mobile
          overflow-y-auto
          bg-gray-900 rounded-lg shadow-xl
          transition-all duration-300
          ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Close Button */}
        <div className="sticky top-0 z-10 bg-gray-900/80 backdrop-blur-sm">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content with Top Padding */}
        <div className="p-6 pt-8">
          {children}
        </div>
      </div>
    </div>
  )
}
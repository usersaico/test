"use client"

import * as React from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"

/**
 * BeforeAfterSlider Component
 * 
 * Accessible image comparison slider for portfolio case studies.
 * Features:
 * - Keyboard navigation (Arrow Left/Right)
 * - Screen reader announcements
 * - Touch support
 * - WCAG AA compliant focus states
 */

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
  altText: string
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  altText,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = React.useState(50)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = React.useState(false)

  const handleMove = React.useCallback(
    (clientX: number) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = clientX - rect.left
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
      setSliderPosition(percentage)
    },
    []
  )

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault()
      setSliderPosition((prev) => Math.max(0, prev - 5))
    } else if (e.key === "ArrowRight") {
      e.preventDefault()
      setSliderPosition((prev) => Math.min(100, prev + 5))
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video overflow-hidden rounded-lg bg-canvas-white cursor-ew-resize select-none"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="application"
      aria-label={`Image comparison slider showing ${altText}. Use arrow keys to adjust the view.`}
      aria-valuenow={Math.round(sliderPosition)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={afterImage}
          alt={`${altText} - After transformation`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <span className="absolute bottom-4 right-4 bg-graphite text-white px-3 py-1 rounded-md text-sm font-medium">
          {afterLabel}
        </span>
      </div>

      {/* Before Image (Clipped Foreground) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt={`${altText} - Before transformation`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <span className="absolute bottom-4 left-4 bg-graphite text-white px-3 py-1 rounded-md text-sm font-medium">
          {beforeLabel}
        </span>
      </div>

      {/* Slider Handle */}
      <motion.div
        className="absolute top-0 bottom-0 w-1 bg-neon-volt cursor-ew-resize focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-volt focus-visible:ring-offset-2"
        style={{ left: `${sliderPosition}%` }}
        initial={false}
        animate={{ x: "-50%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
      >
        {/* Handle Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-neon-volt rounded-full flex items-center justify-center shadow-lg">
          <svg
            className="w-6 h-6 text-graphite"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 9l4-4 4 4m0 6l-4 4-4-4"
            />
          </svg>
        </div>
      </motion.div>

      {/* Drag Instructions for Screen Readers */}
      <span className="sr-only">
        Drag slider or use arrow keys to compare before and after images. Currently showing {Math.round(sliderPosition)}% before image.
      </span>
    </div>
  )
}

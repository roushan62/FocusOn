'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface TeamMember {
  name: string
  role: string
  photo: string
  tagline: string
  description: string
}

interface TeamSliderProps {
  members: TeamMember[]
}

export function TeamSlider({ members }: TeamSliderProps) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrent((prev) => (prev + newDirection + members.length) % members.length)
  }

  return (
    <div className="relative mx-auto max-w-6xl overflow-hidden">
      {/* Main Slider */}
      <div className="relative min-h-[600px] md:min-h-[700px] overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            className="absolute inset-0"
          >
            <div className="flex h-full flex-col md:flex-row items-center justify-between px-6 md:px-12 py-8 md:py-12">
              {/* Photo Section - Left Side */}
              <div className="flex w-full md:w-1/2 items-center justify-center md:justify-start">
                <img
                  src={members[current].photo}
                  alt={members[current].name}
                  className="h-auto max-h-[400px] md:max-h-[500px] w-auto object-contain"
                />
              </div>

              {/* Info Section - Right Side */}
              <div className="mt-8 w-full md:mt-0 md:w-1/2 md:pl-8">
                <p className="font-display text-sm font-bold uppercase tracking-[0.25em] text-muted-foreground">
                  {members[current].role}
                </p>
                <h2
                  className="mt-4 font-display text-5xl md:text-6xl font-black uppercase leading-tight"
                  style={{
                    color: '#DC2626',
                    fontFamily: "'Times New Roman', Times, serif",
                  }}
                >
                  {members[current].name}
                </h2>
                <p
                  className="mt-6 text-2xl md:text-3xl font-semibold"
                  style={{
                    color: '#DC2626',
                    fontFamily: "'Times New Roman', Times, serif",
                  }}
                >
                  {members[current].tagline}
                </p>
                <p className="mt-8 max-w-lg leading-relaxed text-muted-foreground text-lg">
                  {members[current].description}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur p-3 transition-all hover:bg-white hover:shadow-lg md:left-8"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-foreground" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur p-3 transition-all hover:bg-white hover:shadow-lg md:right-8"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-foreground" />
        </button>

        {/* Slide Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/80 backdrop-blur px-4 py-2 text-sm font-medium text-foreground md:bottom-8">
          {current + 1} / {members.length}
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="mt-10 flex justify-center gap-3">
        {members.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > current ? 1 : -1)
              setCurrent(index)
            }}
            className={`transition-all duration-300 ${
              index === current
                ? 'h-3 w-8 rounded-full'
                : 'h-2.5 w-2.5 rounded-full hover:bg-red-400'
            }`}
            style={{
              backgroundColor:
                index === current ? '#DC2626' : 'rgba(220, 38, 38, 0.3)',
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}


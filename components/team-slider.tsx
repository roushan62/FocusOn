'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

interface TeamMember {
  name: string
  role: string
  photo: string
  tagline: string
  description: string
  photoAspect?: string
}

interface TeamSliderProps {
  members: TeamMember[]
}

const prefix = process.env.NEXT_PUBLIC_STATIC_EXPORT === '1' ? '/FocusOn' : ''

function imgPath(src: string) {
  if (src?.startsWith('/') && !src.startsWith('//')) return prefix + src
  return src
}

function TypeWriter({ text, speed = 15 }: { text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)
  const indexRef = useRef(0)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    setDisplayed('')
    setDone(false)
    indexRef.current = 0
    const type = () => {
      if (indexRef.current < text.length) {
        setDisplayed(text.slice(0, indexRef.current + 1))
        indexRef.current++
        timeoutRef.current = setTimeout(type, speed)
      } else {
        setDone(true)
      }
    }
    timeoutRef.current = setTimeout(type, 300)
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }
  }, [text, speed])

  return (
    <span>
      {displayed}
      {!done && <span className="inline-block w-[2px] h-[1em] bg-primary animate-pulse ml-0.5 align-middle" />}
    </span>
  )
}

export function TeamSlider({ members }: TeamSliderProps) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const [key, setKey] = useState(0)

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (dir: number) => ({ zIndex: 0, x: dir < 0 ? 300 : -300, opacity: 0 }),
  }

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection)
    setCurrent((prev) => (prev + newDirection + members.length) % members.length)
    setKey((k) => k + 1)
  }, [members.length])

  const member = members[current]

  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-card via-background to-card ring-1 ring-border shadow-lg shadow-foreground/5">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.25 } }}
            className="relative"
          >
            <div className="flex flex-col md:flex-row min-h-[320px] md:min-h-[340px]">
              {/* Photo - Left */}
              <div className="flex w-full md:w-[40%] bg-primary">
                <div className={`relative w-full overflow-hidden ${member.photoAspect || 'aspect-[3/4]'} h-full`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
                  <img
                    src={imgPath(member.photo)}
                    alt={member.name}
                    className="relative z-10 h-full w-full object-cover"
                    style={{ objectPosition: 'center top' }}
                  />
                </div>
              </div>

              {/* Info - Right */}
              <div className="flex w-full md:w-[60%] flex-col justify-center px-5 py-6 md:px-8">
                <div className="relative">
                  <Quote className="h-7 w-7 text-primary/15 absolute -top-1 -left-2" aria-hidden="true" />
                  <div className="pl-5">
                    <p className="font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                      {member.role}
                    </p>
                    <h2 className="mt-1 font-heading text-xl md:text-2xl lg:text-3xl font-black uppercase leading-[1.1] tracking-tight text-foreground">
                      {member.name}
                    </h2>
                    <p className="mt-1 font-heading text-sm md:text-base font-semibold text-primary/80">
                      {member.tagline}
                    </p>
                  </div>
                </div>

                {/* Typing animation */}
                <div className="mt-3 border-l-2 border-primary/30 pl-4 min-h-[50px]">
                  <p className="leading-relaxed text-foreground/90 text-sm md:text-base" key={`desc-${key}`}>
                    <TypeWriter text={member.description} speed={15} />
                  </p>
                </div>

                {/* Nav controls */}
                <div className="mt-4 flex items-center gap-3">
                  <button
                    onClick={() => paginate(-1)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow transition-all hover:bg-foreground hover:text-background active:scale-90"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <span className="text-xs font-semibold text-foreground tabular-nums tracking-wider">
                    {String(current + 1).padStart(2, '0')} / {String(members.length).padStart(2, '0')}
                  </span>
                  <button
                    onClick={() => paginate(1)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow transition-all hover:bg-foreground hover:text-background active:scale-90"
                    aria-label="Next"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="mt-4 flex justify-center gap-2">
        {members.map((_, index) => (
          <button
            key={index}
            onClick={() => { setDirection(index > current ? 1 : -1); setCurrent(index); setKey((k) => k + 1) }}
            className="transition-all duration-500 ease-out rounded-full"
            style={{
              width: index === current ? '1.5rem' : '0.5rem',
              height: '0.5rem',
              backgroundColor: index === current ? 'var(--primary)' : 'color-mix(in oklab, var(--primary) 25%, transparent)',
            }}
            aria-label={`View ${members[index].name}`}
          />
        ))}
      </div>
    </div>
  )
}

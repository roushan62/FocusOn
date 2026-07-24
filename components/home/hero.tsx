'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { company, projects } from '@/lib/data'
import { MagneticButton } from '@/components/magnetic-button'

const slides = projects.slice(0, 5).map((p) => ({
  image: p.images[0],
  client: p.client,
  location: p.location,
}))

export function Hero() {
  const [index, setIndex] = useState(0)
  const { scrollY } = useScroll()
  const yParallax = useTransform(scrollY, [0, 800], [0, 220])
  const opacity = useTransform(scrollY, [0, 600], [1, 0.3])

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative h-svh min-h-[600px] overflow-hidden bg-secondary">
      {/* Slider images with parallax */}
      <motion.div style={{ y: yParallax }} className="absolute inset-0">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={index}
            src={slides[index].image}
            alt={`${slides[index].client}, ${slides[index].location}`}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
      </motion.div>

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-secondary/20"
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col justify-end"
      >
        <div className="mx-auto w-full max-w-7xl px-4 pb-24 md:px-8 md:pb-28">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-primary"
          >
            {company.tagline}
          </motion.p>

          <h1 className="mt-6 max-w-4xl font-heading text-4xl font-black uppercase leading-[1.05] tracking-tight text-secondary-foreground text-balance md:text-6xl lg:text-7xl">
            {company.heroTitle.split(' ').map((word, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.5 + i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block"
                >
                  {word}
                  {'\u00A0'}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-secondary-foreground/80 text-pretty"
          >
            {company.heroSubtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="/projects" variant="primary">
              View Our Work
            </MagneticButton>
            <MagneticButton href="/contact" variant="light">
              Book a Consultation
            </MagneticButton>
          </motion.div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 right-4 flex gap-2 md:right-8">
          {slides.map((slide, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show slide ${i + 1}: ${slide.client}`}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === index ? 'w-10 bg-primary' : 'w-4 bg-secondary-foreground/40'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

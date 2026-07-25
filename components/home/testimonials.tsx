'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { testimonials } from '@/lib/data'
import { Reveal } from '@/components/reveal'

export function Testimonials() {
  const [index, setIndex] = useState(0)

  return (
    <section className="bg-muted py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <Reveal>
          <p className="text-center font-heading text-xs font-bold uppercase tracking-[0.35em] text-primary">
            Testimonials
          </p>
        </Reveal>

        <div className="relative mt-14 min-h-[280px] md:min-h-[240px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <p className="mx-auto max-w-3xl font-heading text-xl font-semibold leading-relaxed tracking-tight text-balance md:text-2xl">
                {'“'}
                {testimonials[index].quote}
                {'”'}
              </p>
              <footer className="mt-8 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                {testimonials[index].author}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.author}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial from ${t.author}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? 'w-8 bg-primary' : 'w-2 bg-foreground/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { projects } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { MagneticButton } from '@/components/magnetic-button'

const featured = projects.slice(0, 6)

export function FeaturedProjects() {
  const trackRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start end', 'end start'],
  })
  const x = useTransform(scrollYProgress, [0, 1], ['4%', '-30%'])

  return (
    <section className="overflow-hidden bg-muted py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-primary">
              Portfolio
            </p>
            <h2 className="mt-5 font-heading text-3xl font-black uppercase tracking-tight text-balance md:text-5xl">
              Featured Projects
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <MagneticButton href="/projects" variant="outline">
              View All Projects
            </MagneticButton>
          </Reveal>
        </div>
      </div>

      {/* Horizontal scroll-driven track */}
      <div ref={trackRef} className="mt-14">
        <motion.div style={{ x }} className="flex w-max gap-6 px-4 md:px-8">
          {featured.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group relative block w-[300px] shrink-0 overflow-hidden rounded-3xl md:w-[440px]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.images[0].src || "/placeholder.svg"}
                  alt={`${project.client} interior fit-out in ${project.location}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-x-3 bottom-3">
                <div className="glass-dark flex items-center justify-between rounded-2xl px-5 py-4 text-secondary-foreground">
                  <div>
                    <h3 className="font-heading text-sm font-bold tracking-tight md:text-base">
                      {project.client}
                    </h3>
                    <p className="mt-0.5 text-xs text-secondary-foreground/70">
                      {project.area} · {project.location}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="text-primary transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

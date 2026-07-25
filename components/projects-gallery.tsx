'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects } from '@/lib/data'
import { MapPin, Maximize2, ArrowUpRight } from 'lucide-react'

const categories = [
  'All',
  'Corporate Office',
  'NBFC',
  'Industrial',
  'Educational',
] as const

export function ProjectsGallery() {
  const [category, setCategory] =
    useState<(typeof categories)[number]>('All')
  const [city, setCity] = useState<string>('All')

  const cities = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((p) => p.city)))],
    [],
  )

  const visible = projects.filter(
    (p) =>
      (category === 'All' || p.category === category) &&
      (city === 'All' || p.city === city),
  )

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        {categories.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setCategory(f)}
            aria-pressed={category === f}
            className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              category === f
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                : 'bg-card border border-border text-muted-foreground hover:border-primary hover:text-primary'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Filter by city">
        {cities.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCity(c)}
            aria-pressed={city === c}
            className={`rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase tracking-wider transition-all duration-300 ${
              city === c
                ? 'bg-secondary text-secondary-foreground'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <motion.div
              layout
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
              className={`group relative ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="relative block overflow-hidden rounded-2xl md:rounded-3xl bg-card ring-1 ring-border transition-all duration-500 hover:ring-primary/30 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Image */}
                <div className={`overflow-hidden ${i === 0 ? 'aspect-[16/10] md:aspect-[21/10]' : 'aspect-[4/3]'}`}>
                  <img
                    src={project.images[0]?.src || '/placeholder.svg'}
                    alt={`${project.client} — ${project.location}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Floating badge for featured project */}
                {i === 0 && (
                  <span className="absolute top-3 left-3 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-lg">
                    Featured Project
                  </span>
                )}

                {/* Content overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <div className="translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="font-heading text-sm md:text-base font-bold tracking-tight text-white drop-shadow-lg">
                      {project.client}
                    </h3>
                    <div className="mt-1 flex flex-wrap items-center gap-3 text-[10px] md:text-xs text-white/80">
                      <span className="inline-flex items-center gap-1">
                        <Maximize2 className="h-3 w-3" /> {project.area}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> {project.location}
                      </span>
                      <span className="rounded-full bg-white/20 px-2 py-0.5 text-[9px] uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Arrow for non-featured */}
                {i !== 0 && (
                  <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-0.5">
                    <ArrowUpRight className="h-4 w-4 text-foreground" />
                  </div>
                )}
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length === 0 && (
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">No projects match this filter.</p>
        </div>
      )}
    </div>
  )
}

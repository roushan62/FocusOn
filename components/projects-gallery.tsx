'use client'

import Link from 'next/link'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects } from '@/lib/data'

const filters = ['All', 'Corporate', 'Hospitality'] as const

export function ProjectsGallery() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')

  const visible =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter projects by category"
      >
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`rounded-full px-6 py-2.5 font-heading text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
              filter === f
                ? 'bg-primary text-primary-foreground'
                : 'glass hover:bg-muted'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.ul layout className="mt-12 grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <motion.li
              layout
              key={project.slug}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.05,
              }}
              className={i % 3 === 0 ? 'md:col-span-2' : ''}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group relative block overflow-hidden rounded-3xl"
              >
                <div
                  className={`overflow-hidden ${i % 3 === 0 ? 'aspect-[16/8]' : 'aspect-[4/3]'}`}
                >
                  <img
                    src={project.images[0] || "/placeholder.svg"}
                    alt={`${project.client} interior fit-out in ${project.location}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                </div>
                <div className="absolute inset-x-4 bottom-4">
                  <div className="glass-dark flex items-center justify-between rounded-2xl px-6 py-4 text-secondary-foreground transition-transform duration-500 group-hover:-translate-y-1">
                    <div>
                      <h2 className="font-heading text-base font-bold tracking-tight md:text-lg">
                        {project.client}
                      </h2>
                      <p className="mt-0.5 text-xs text-secondary-foreground/70 md:text-sm">
                        {project.area} · {project.location}
                      </p>
                    </div>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:translate-x-1">
                      <span aria-hidden="true">→</span>
                      <span className="sr-only">View case study</span>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  )
}

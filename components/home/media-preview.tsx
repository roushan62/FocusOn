import Link from 'next/link'
import { media } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { MagneticButton } from '@/components/magnetic-button'

const featured = media.slice(0, 3)

export function MediaPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-36">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <p className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-primary">
            Media
          </p>
          <h2 className="mt-5 max-w-2xl font-heading text-3xl font-black uppercase tracking-tight text-balance md:text-5xl">
            FocusOn in the News
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <MagneticButton href="/media" variant="outline">
            All Coverage
          </MagneticButton>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {featured.map((item, i) => (
          <Reveal key={`${item.href}-${i}`} delay={i * 0.1}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass group flex h-full flex-col overflow-hidden rounded-3xl shadow-lg shadow-foreground/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              {item.image && (
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={item.image || '/placeholder.svg'}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {item.source}
                </p>
                <h3 className="mt-3 font-heading text-lg font-bold leading-snug tracking-tight transition-colors group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.excerpt}
                </p>
                <span className="mt-auto pt-5 text-sm font-semibold text-primary">
                  Read On <span aria-hidden="true">→</span>
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { media } from '@/lib/data'
import { Reveal, TextReveal } from '@/components/reveal'
import { MagneticButton } from '@/components/magnetic-button'

export const metadata: Metadata = {
  title: 'Media',
  description:
    'FocusOn in the news — explore our latest media features, press releases, and coverage from publications across India and beyond.',
}

export default function MediaPage() {
  return (
    <div className="pt-24 md:pt-28">
      <section className="mx-auto max-w-7xl px-4 pb-24 md:px-8 md:pb-36">
        <Reveal>
          <p className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-primary">
            Media
          </p>
        </Reveal>
        <TextReveal
          as="h1"
          text="FocusOn in the News"
          className="mt-6 max-w-4xl font-heading text-4xl font-black uppercase leading-[1.05] tracking-tight text-balance md:text-7xl"
        />
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Explore our latest media features, press releases, and coverage
            from publications across India and beyond.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {media.map((item, i) => (
            <Reveal key={item.slug} delay={(i % 3) * 0.08}>
              <Link
                href={item.href}
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
                  <h2 className="mt-3 font-heading text-lg font-bold leading-snug tracking-tight transition-colors group-hover:text-primary">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.excerpt}
                  </p>
                  <span className="mt-auto pt-5 text-sm font-semibold text-primary">
                    Read On <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-20 flex justify-center">
            <MagneticButton href="/contact" variant="primary">
              Book a Consultation
            </MagneticButton>
          </div>
        </Reveal>
      </section>
    </div>
  )
}

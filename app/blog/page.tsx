import type { Metadata } from 'next'
import { blogPosts } from '@/lib/data'
import { Reveal, TextReveal } from '@/components/reveal'
import { MagneticButton } from '@/components/magnetic-button'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights and ideas from FocusOn Interiors — office interior design trends, planning checklists, ergonomics, sustainability, and more.',
}

export default function BlogPage() {
  return (
    <div className="pt-32 md:pt-40">
      <section className="mx-auto max-w-7xl px-4 pb-24 md:px-8 md:pb-36">
        <Reveal>
          <p className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-primary">
            Blog
          </p>
        </Reveal>
        <TextReveal
          as="h1"
          text="Insights and Ideas"
          className="mt-6 max-w-4xl font-heading text-4xl font-black uppercase leading-[1.05] tracking-tight text-balance md:text-7xl"
        />
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Design trends, planning guides, and workplace thinking from the
            FocusOn Interiors team.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.href} delay={(i % 3) * 0.08}>
              <a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-lg shadow-foreground/5 ring-1 ring-border transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={post.image || '/placeholder.svg'}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h2 className="font-heading text-lg font-bold leading-snug tracking-tight transition-colors group-hover:text-primary">
                    {post.title}
                  </h2>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <span className="mt-auto pt-5 text-sm font-semibold text-primary">
                    Read More <span aria-hidden="true">→</span>
                  </span>
                </div>
              </a>
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

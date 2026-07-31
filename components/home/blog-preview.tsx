import Link from 'next/link'
import { blogPosts } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { MagneticButton } from '@/components/magnetic-button'

const featured = blogPosts.slice(0, 3)

export function BlogPreview() {
  return (
    <section className="bg-muted py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-primary">
              Blog
            </p>
            <h2 className="mt-5 max-w-2xl font-heading text-3xl font-black uppercase tracking-tight text-balance md:text-5xl">
              Insights &amp; Ideas
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <MagneticButton href="/blog" variant="outline">
              All Blogs
            </MagneticButton>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {featured.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.1}>
              <Link
                href={post.href}
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-lg shadow-foreground/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
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
                  <h3 className="font-heading text-lg font-bold leading-snug tracking-tight transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <span className="mt-auto pt-5 text-sm font-semibold text-primary">
                    Read More <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

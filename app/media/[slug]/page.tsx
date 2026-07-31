import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { media } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { MagneticButton } from '@/components/magnetic-button'
import { Newspaper, ArrowUpRight, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'

export function generateStaticParams() {
  return media.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const item = media.find((m) => m.slug === slug)
  if (!item) return {}
  return {
    title: item.title,
    description: item.excerpt,
  }
}

export default async function MediaArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const item = media.find((m) => m.slug === slug)
  if (!item) notFound()

  const index = media.findIndex((m) => m.slug === slug)
  const prev = index > 0 ? media[index - 1] : null
  const next = index < media.length - 1 ? media[index + 1] : null

  return (
    <div className="pt-24 md:pt-28">
      <article className="mx-auto max-w-7xl px-4 pb-24 md:px-8 md:pb-36">
        {/* Breadcrumb */}
        <Reveal>
          <Link
            href="/media"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary mb-8"
          >
            <ChevronLeft className="h-4 w-4" /> All Media
          </Link>
        </Reveal>

        {/* Header */}
        <div className="max-w-4xl">
          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-[0.15em]">
              <Newspaper className="h-3.5 w-3.5" />
              {item.source}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <h1 className="mt-6 font-heading text-3xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.05] tracking-tight text-balance">
              {item.title}
            </h1>
          </Reveal>
        </div>

        {/* Featured Image */}
        {item.image && (
          <Reveal delay={0.15}>
            <div className="mt-10 overflow-hidden rounded-3xl shadow-xl shadow-foreground/5">
              <img
                src={item.image}
                alt={item.title}
                className="w-full aspect-[21/9] object-cover"
              />
            </div>
          </Reveal>
        )}

        {/* Content */}
        <div className="mt-12 mx-auto max-w-3xl">
          <Reveal delay={0.2}>
            <p className="text-lg md:text-xl leading-relaxed text-foreground font-medium mb-10 italic border-l-4 border-primary pl-6">
              {item.excerpt}
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="space-y-4">
              {item.content.split('\\n').map((paragraph, i) => {
                if (paragraph.trim() === '') return null
                return (
                  <p key={i} className="leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                )
              })}
            </div>
          </Reveal>

          {/* View Original Button */}
          {item.originalHref && (
            <Reveal delay={0.3}>
              <div className="mt-12 p-6 md:p-8 rounded-2xl bg-secondary/50 border border-border">
                <div className="flex items-start gap-4">
                  <div className="hidden md:flex h-12 w-12 shrink-0 rounded-full bg-primary/10 items-center justify-center">
                    <ExternalLink className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-muted-foreground mb-3">
                      This article was originally published on <strong className="text-foreground">{item.source}</strong>.
                    </p>
                    <a
                      href={item.originalHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-all hover:bg-foreground hover:text-background"
                    >
                      Read Full Article on {item.source} <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          )}
        </div>

        {/* Navigation */}
        <div className="mt-20 mx-auto max-w-3xl">
          <div className="border-t border-border pt-10">
            <div className="flex flex-col sm:flex-row justify-between gap-6">
              {prev ? (
                <Link
                  href={`/media/${prev.slug}`}
                  className="group flex-1 rounded-2xl border border-border p-6 transition-all hover:border-primary hover:shadow-md"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-1">
                    <ChevronLeft className="h-3 w-3" /> Previous
                  </span>
                  <p className="mt-2 font-heading font-bold group-hover:text-primary transition-colors line-clamp-2">
                    {prev.title}
                  </p>
                </Link>
              ) : <div className="flex-1" />}
              {next ? (
                <Link
                  href={`/media/${next.slug}`}
                  className="group flex-1 rounded-2xl border border-border p-6 text-right transition-all hover:border-primary hover:shadow-md"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-1 justify-end">
                    Next <ChevronRight className="h-3 w-3" />
                  </span>
                  <p className="mt-2 font-heading font-bold group-hover:text-primary transition-colors line-clamp-2">
                    {next.title}
                  </p>
                </Link>
              ) : <div className="flex-1" />}
            </div>
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 flex justify-center">
            <MagneticButton href="/contact" variant="primary">
              Book a Consultation
            </MagneticButton>
          </div>
        </Reveal>
      </article>
    </div>
  )
}

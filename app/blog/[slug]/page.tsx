import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { MagneticButton } from '@/components/magnetic-button'
import { Calendar, Clock, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

function formatContent(content: string) {
  return content.split('\\n').map((paragraph, i) => {
    if (paragraph.trim() === '') return null
    if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
      const text = paragraph.slice(2, -2)
      return (
        <h2 key={i} className="mt-10 mb-4 text-2xl font-heading font-bold text-foreground">
          {text}
        </h2>
      )
    }
    if (paragraph.startsWith('**') && paragraph.includes('**')) {
      const parts = paragraph.split(/(\*\*[^*]+\*\*)/)
      return (
        <p key={i} className="mb-3 leading-relaxed text-muted-foreground">
          {parts.map((part, j) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={j} className="text-foreground">{part.slice(2, -2)}</strong>
            }
            return part
          })}
        </p>
      )
    }
    if (paragraph.startsWith('- ')) {
      return null
    }
    return (
      <p key={i} className="mb-3 leading-relaxed text-muted-foreground">
        {paragraph}
      </p>
    )
  })
}

function extractBullets(content: string) {
  const lines = content.split('\\n')
  const bullets = lines.filter(l => l.startsWith('- '))
  if (bullets.length === 0) return null
  return (
    <ul className="list-disc pl-6 space-y-2 my-6">
      {bullets.map((item, i) => (
        <li key={i} className="text-muted-foreground leading-relaxed">{item.slice(2)}</li>
      ))}
    </ul>
  )
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const index = blogPosts.findIndex((p) => p.slug === slug)
  const prev = index > 0 ? blogPosts[index - 1] : null
  const next = index < blogPosts.length - 1 ? blogPosts[index + 1] : null

  const readingTime = Math.ceil(post.content.length / 1500)

  return (
    <div className="pt-24 md:pt-28">
      <article className="mx-auto max-w-7xl px-4 pb-24 md:px-8 md:pb-36">
        {/* Breadcrumb */}
        <Reveal>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary mb-8"
          >
            <ChevronLeft className="h-4 w-4" /> All Blogs
          </Link>
        </Reveal>

        {/* Header Section */}
        <div className="max-w-4xl">
          <Reveal>
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.05] tracking-tight text-balance">
              {post.title}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> 
                FocusOn Interiors
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> 
                {readingTime} min read
              </span>
            </div>
          </Reveal>
        </div>

        {/* Featured Image */}
        <Reveal delay={0.15}>
          <div className="mt-10 overflow-hidden rounded-3xl shadow-xl shadow-foreground/5">
            <img
              src={post.image}
              alt={post.title}
              className="w-full aspect-[21/9] object-cover"
            />
          </div>
        </Reveal>

        {/* Content Section */}
        <div className="mt-12 mx-auto max-w-3xl">
          <Reveal delay={0.2}>
            <p className="text-lg md:text-xl leading-relaxed text-foreground font-medium mb-10 italic border-l-4 border-primary pl-6">
              {post.excerpt}
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="space-y-1">
              {formatContent(post.content)}
              {extractBullets(post.content)}
            </div>
          </Reveal>

          {/* View Original Button */}
          {post.originalHref && (
            <Reveal delay={0.3}>
              <div className="mt-12 p-6 md:p-8 rounded-2xl bg-secondary/50 border border-border">
                <p className="text-sm font-medium text-muted-foreground mb-4">
                  Want to read the original published version?
                </p>
                <a
                  href={post.originalHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-all hover:bg-foreground hover:text-background"
                >
                  View Original Article <ArrowUpRight className="h-4 w-4" />
                </a>
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
                  href={`/blog/${prev.slug}`}
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
                  href={`/blog/${next.slug}`}
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

        {/* CTA */}
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

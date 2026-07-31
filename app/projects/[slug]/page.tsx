import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/lib/data'
import { ImageReveal, Reveal, TextReveal } from '@/components/reveal'
import { MagneticButton } from '@/components/magnetic-button'
import { ArrowLeft, MapPin, Maximize2, FolderOpen } from 'lucide-react'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: `${project.client} — ${project.location}`,
    description: `${project.client} — ${project.area} interior fit-out in ${project.location} by FocusOn Interiors.`,
  }
}

export default async function ProjectCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  const index = projects.findIndex((p) => p.slug === slug)
  const next = projects[(index + 1) % projects.length]

  return (
    <div className="pt-24 md:pt-28">
      <article className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Back link */}
        <Reveal>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            All Projects
          </Link>
        </Reveal>

        {/* Hero Header */}
        <div className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-3xl">
            <TextReveal
              as="h1"
              text={project.client}
              className="font-heading text-3xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.05] tracking-tight text-balance"
            />
          </div>
          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-3 shrink-0">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary">
                <FolderOpen className="h-3.5 w-3.5" />
                {project.category}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
                <MapPin className="h-3.5 w-3.5" />
                {project.location}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
                <Maximize2 className="h-3.5 w-3.5" />
                {project.area}
              </span>
            </div>
          </Reveal>
        </div>

        {/* Stats Bar */}
        <Reveal delay={0.2}>
          <div className="mt-10 grid grid-cols-3 divide-x divide-border rounded-2xl border border-border bg-card/50">
            <div className="px-5 py-4 md:px-8 md:py-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Client</p>
              <p className="mt-1 font-heading text-sm font-bold md:text-base">{project.client}</p>
            </div>
            <div className="px-5 py-4 md:px-8 md:py-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Location</p>
              <p className="mt-1 font-heading text-sm font-bold md:text-base">{project.location}</p>
            </div>
            <div className="px-5 py-4 md:px-8 md:py-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Scale</p>
              <p className="mt-1 font-heading text-sm font-bold md:text-base">{project.area}</p>
            </div>
          </div>
        </Reveal>

        {/* Hero Image - First image as hero */}
        <Reveal delay={0.3}>
          <div className="mt-10 overflow-hidden rounded-2xl md:rounded-3xl shadow-xl shadow-foreground/5">
            <img
              src={project.images[0]?.src || '/placeholder.svg'}
              alt={`${project.client} — ${project.location}`}
              className="w-full aspect-[21/9] object-cover"
            />
          </div>
        </Reveal>

        {/* Gallery - Masonry style */}
        <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-6">
          {project.images.slice(1).map((image, i) => (
            <ImageReveal
              key={image.src}
              className={`overflow-hidden rounded-2xl md:rounded-3xl shadow-lg shadow-foreground/5 ${i === 0 || i === 3 ? 'md:col-span-2 md:aspect-[21/9]' : 'aspect-[4/3]'}`}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={`${project.client} — ${image.caption} — view ${i + 2}`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </ImageReveal>
          ))}
        </div>

        {/* Next Project CTA */}
        <div className="my-16 md:my-20 relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-secondary to-secondary/90 text-secondary-foreground">
          <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          <div className="relative px-8 py-10 md:px-14 md:py-14">
            <p className="font-heading text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
              Next Project
            </p>
            <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="font-heading text-2xl md:text-4xl font-black uppercase leading-[1.1] tracking-tight">
                  {next.client}
                </h2>
                <p className="mt-2 text-sm text-secondary-foreground/70">
                  {next.area} · {next.location} · {next.category}
                </p>
              </div>
              <MagneticButton href={`/projects/${next.slug}`} variant="light">
                View Case Study
              </MagneticButton>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

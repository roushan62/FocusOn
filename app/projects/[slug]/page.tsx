import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/lib/data'
import { ImageReveal, Reveal, TextReveal } from '@/components/reveal'
import { MagneticButton } from '@/components/magnetic-button'

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
    <div className="pt-32 md:pt-40">
      <section className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <span aria-hidden="true">←</span> All Projects
          </Link>
        </Reveal>

        <TextReveal
          as="h1"
          text={project.client}
          className="mt-8 max-w-4xl font-heading text-4xl font-black uppercase leading-[1.05] tracking-tight text-balance md:text-6xl"
        />

        <Reveal delay={0.15}>
          <dl className="mt-10 flex flex-wrap gap-x-14 gap-y-6 border-y border-border py-6">
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Area
              </dt>
              <dd className="mt-1.5 font-heading text-lg font-bold">
                {project.area}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Location
              </dt>
              <dd className="mt-1.5 font-heading text-lg font-bold">
                {project.location}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Category
              </dt>
              <dd className="mt-1.5 font-heading text-lg font-bold">
                {project.category}
              </dd>
            </div>
          </dl>
        </Reveal>

        {/* Immersive gallery */}
        <div className="mt-14 flex flex-col gap-6">
          {project.images.map((image, i) => (
            <ImageReveal
              key={image.src}
              className={`rounded-3xl ${
                i % 3 === 0 ? 'aspect-[16/9]' : 'aspect-[16/10] md:w-4/5'
              } ${i % 3 === 2 ? 'md:self-end' : ''}`}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={`${project.client} interiors in ${image.caption} — view ${i + 1}`}
                loading={i === 0 ? 'eager' : 'lazy'}
                className="h-full w-full object-cover"
              />
            </ImageReveal>
          ))}
        </div>

        {/* Next project */}
        <div className="my-24 flex flex-col items-start gap-8 rounded-[2.5rem] bg-secondary p-10 text-secondary-foreground md:my-36 md:flex-row md:items-center md:justify-between md:p-16">
          <div>
            <p className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-primary">
              Next Project
            </p>
            <h2 className="mt-4 font-heading text-2xl font-black uppercase tracking-tight text-balance md:text-4xl">
              {next.client}
            </h2>
            <p className="mt-2 text-secondary-foreground/70">
              {next.area} · {next.location}
            </p>
          </div>
          <MagneticButton href={`/projects/${next.slug}`} variant="light">
            View Case Study
          </MagneticButton>
        </div>
      </section>
    </div>
  )
}

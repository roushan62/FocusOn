import type { Metadata } from 'next'
import { ProjectsGallery } from '@/components/projects-gallery'
import { Reveal, TextReveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Browse our curated portfolio spanning hospitality, offices, and retail. Each project reflects our signature design and styling approach.',
}

export default function ProjectsPage() {
  return (
    <div className="pt-32 md:pt-40">
      <section className="mx-auto max-w-7xl px-4 pb-24 md:px-8 md:pb-36">
        <Reveal>
          <p className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-primary">
            Portfolio
          </p>
        </Reveal>
        <TextReveal
          as="h1"
          text="Spaces Styled. Stories Realized."
          className="mt-6 max-w-4xl font-heading text-4xl font-black uppercase leading-[1.05] tracking-tight text-balance md:text-7xl"
        />
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-xl leading-relaxed text-muted-foreground text-pretty">
            Browse our curated portfolio spanning hospitality, offices, and
            retail. Each project reflects our signature design and styling
            approach.
          </p>
        </Reveal>

        <div className="mt-16">
          <ProjectsGallery />
        </div>
      </section>
    </div>
  )
}

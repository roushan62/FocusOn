import type { Metadata } from 'next'
import { company, projects, stats, whyChooseUs } from '@/lib/data'
import { Counter } from '@/components/counter'
import { ImageReveal, Reveal, TextReveal } from '@/components/reveal'
import { MagneticButton } from '@/components/magnetic-button'

export const metadata: Metadata = {
  title: 'About',
  description:
    'We are stylists of modern-day spaces. Design, build, and style — FocusOn Interiors transforms interiors into curated experiences.',
}

export default function AboutPage() {
  return (
    <div className="pt-32 md:pt-40">
      <section className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <p className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-primary">
            About
          </p>
        </Reveal>
        <TextReveal
          as="h1"
          text={company.heroTitle}
          className="mt-6 max-w-5xl font-heading text-4xl font-black uppercase leading-[1.05] tracking-tight text-balance md:text-7xl"
        />
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {company.heroSubtitle}
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap gap-4">
            <MagneticButton href="/projects" variant="primary">
              View Our Work
            </MagneticButton>
            <MagneticButton href="/contact" variant="outline">
              Book a Consultation
            </MagneticButton>
          </div>
        </Reveal>

        <ImageReveal className="mt-20 aspect-[16/8] rounded-[2.5rem]">
          <img
            src={projects[0].images[0] || "/placeholder.svg"}
            alt={`${projects[0].client} interiors in ${projects[0].location}`}
            className="h-full w-full object-cover"
          />
        </ImageReveal>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-36">
        <Reveal>
          <p className="max-w-3xl font-heading text-2xl font-bold leading-snug tracking-tight text-balance md:text-4xl">
            {company.intro}
          </p>
        </Reveal>
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-5">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`bg-card p-6 md:p-8 ${i === stats.length - 1 ? 'col-span-2 md:col-span-1' : ''}`}
            >
              <Reveal delay={i * 0.08}>
                <p className="font-heading text-4xl font-black tracking-tight md:text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                  {stat.label}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-secondary py-24 text-secondary-foreground md:py-36">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal>
            <p className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-primary">
              Why Choose Us
            </p>
            <h2 className="mt-5 font-heading text-3xl font-black uppercase tracking-tight text-balance md:text-5xl">
              One Roof. One Vision. One Team.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {whyChooseUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.12}>
                <div className="glass-dark h-full rounded-3xl p-8 transition-transform duration-500 hover:-translate-y-2 md:p-10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 font-heading text-sm font-bold text-primary">
                    {`0${i + 1}`}
                  </span>
                  <h3 className="mt-8 font-heading text-xl font-bold uppercase tracking-tight md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-secondary-foreground/70 text-pretty">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

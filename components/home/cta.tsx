import { contact } from '@/lib/data'
import { Reveal, TextReveal } from '@/components/reveal'
import { MagneticButton } from '@/components/magnetic-button'

export function Cta() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-36">
      <div className="glass relative overflow-hidden rounded-[2.5rem] p-10 shadow-xl shadow-foreground/5 md:p-20">
        <div
          className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10"
          aria-hidden="true"
        />
        <Reveal>
          <p className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-primary">
            Contact
          </p>
        </Reveal>
        <TextReveal
          text="Let's style and create your next space together"
          className="mt-6 max-w-3xl font-heading text-3xl font-black uppercase leading-[1.1] tracking-tight text-balance md:text-6xl"
        />
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground text-pretty">
            Whether it&apos;s a home, office, or bespoke venture, tell us your
            ideas and we will create something extraordinary.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4">
            <MagneticButton href="/contact" variant="primary">
              Book a Consultation
            </MagneticButton>
            <a
              href={`mailto:${contact.email}`}
              className="font-heading text-lg font-bold tracking-tight transition-colors hover:text-primary"
            >
              {contact.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

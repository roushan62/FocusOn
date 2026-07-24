import { services } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { MagneticButton } from '@/components/magnetic-button'

export function ServicesPreview() {
  return (
    <section className="bg-secondary py-24 text-secondary-foreground md:py-36">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-primary">
              Featured Services
            </p>
            <h2 className="mt-5 max-w-2xl font-heading text-3xl font-black uppercase tracking-tight text-balance md:text-5xl">
              Design, Build & Turnkey Solutions
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <MagneticButton href="/services" variant="light">
              All Services
            </MagneticButton>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.05}>
              <div className="group grid gap-4 border-t border-secondary-foreground/10 py-8 transition-colors hover:bg-secondary-foreground/5 md:grid-cols-[80px_1fr_1.2fr] md:items-baseline md:gap-8 md:py-10">
                <span className="font-heading text-sm font-bold text-primary">
                  {`0${i + 1}`}
                </span>
                <h3 className="font-heading text-xl font-bold tracking-tight transition-colors group-hover:text-primary md:text-2xl">
                  {service.title}
                </h3>
                <p className="leading-relaxed text-secondary-foreground/70 text-pretty">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

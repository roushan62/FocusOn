import { industries } from '@/lib/data'
import { Reveal } from '@/components/reveal'

export function Industries() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-36">
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
        <Reveal>
          <p className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-primary">
            Industries Served
          </p>
          <h2 className="mt-5 font-heading text-3xl font-black uppercase tracking-tight text-balance md:text-5xl">
            Trusted Across Sectors
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground text-pretty">
            Our clients trust us to deliver spaces that reflect their vision,
            values, and lifestyle — across every industry we serve.
          </p>
        </Reveal>

        <ul className="flex flex-wrap content-start gap-3">
          {industries.map((industry, i) => (
            <Reveal key={industry} delay={i * 0.06}>
              <li className="glass rounded-full px-6 py-3.5 font-heading text-sm font-semibold uppercase tracking-wider shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground">
                {industry}
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

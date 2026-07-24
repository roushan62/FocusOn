import { company, stats } from '@/lib/data'
import { Counter } from '@/components/counter'
import { Reveal, TextReveal } from '@/components/reveal'

export function Intro() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-36">
      <Reveal>
        <p className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-primary">
          Company Introduction
        </p>
      </Reveal>

      <TextReveal
        text={company.intro}
        className="mt-8 max-w-4xl font-heading text-3xl font-bold leading-[1.15] tracking-tight text-balance md:text-5xl"
      />

      <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:mt-24 md:grid-cols-5">
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
  )
}

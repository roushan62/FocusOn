import { whyChooseUs } from '@/lib/data'
import { Reveal } from '@/components/reveal'

export function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-36">
      <Reveal>
        <p className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-primary">
          Why Choose Us
        </p>
        <h2 className="mt-5 max-w-2xl font-heading text-3xl font-black uppercase tracking-tight text-balance md:text-5xl">
          One Roof. One Vision. One Team.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {whyChooseUs.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.12}>
            <div className="glass group h-full rounded-3xl p-8 shadow-lg shadow-foreground/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-foreground/10 md:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-heading text-sm font-bold text-primary">
                {`0${i + 1}`}
              </span>
              <h3 className="mt-8 font-heading text-xl font-bold uppercase tracking-tight md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

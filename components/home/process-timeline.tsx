import { process } from '@/lib/data'
import { Reveal } from '@/components/reveal'

export function ProcessTimeline() {
  return (
    <section className="bg-secondary py-24 text-secondary-foreground md:py-36">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <p className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-primary">
            Process
          </p>
          <h2 className="mt-5 max-w-3xl font-heading text-3xl font-black uppercase tracking-tight text-balance md:text-5xl">
            The Art and Order of Styling Spaces
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-secondary-foreground/70 text-pretty">
            Our structured yet creative process ensures clarity while allowing
            design poetry to flourish.
          </p>
        </Reveal>

        <ol className="relative mt-16 flex flex-col gap-0 md:mt-20">
          {process.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.08}>
              <li className="group relative grid gap-3 border-t border-secondary-foreground/10 py-8 md:grid-cols-[120px_1fr_1.4fr] md:items-baseline md:gap-8 md:py-10">
                <span className="font-heading text-4xl font-black text-primary/60 transition-colors duration-300 group-hover:text-primary md:text-5xl">
                  {step.step}
                </span>
                <h3 className="font-heading text-xl font-bold uppercase tracking-tight md:text-2xl">
                  {step.title}
                </h3>
                <p className="leading-relaxed text-secondary-foreground/70 text-pretty">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

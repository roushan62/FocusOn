import { clientele } from '@/lib/data'
import { Reveal } from '@/components/reveal'

export function Clients() {
  const marqueeNames = [...clientele.names, ...clientele.names]

  return (
    <section className="overflow-hidden py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <p className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-primary">
            Clientele
          </p>
          <p className="mt-6 max-w-3xl font-heading text-2xl font-bold leading-snug tracking-tight text-balance md:text-3xl">
            {clientele.description}
          </p>
        </Reveal>
      </div>

      <div
        className="group mt-14 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        aria-label="Our clients"
      >
        <div className="flex w-max animate-[marquee_30s_linear_infinite] items-center gap-16 pr-16 group-hover:[animation-play-state:paused]">
          {marqueeNames.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap font-heading text-2xl font-black uppercase tracking-tight text-foreground/25 transition-colors hover:text-primary md:text-4xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}

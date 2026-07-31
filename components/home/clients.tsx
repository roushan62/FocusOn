'use client'

import { clientele } from '@/lib/data'
import { Reveal } from '@/components/reveal'

export function Clients() {
  const half = Math.ceil(clientele.names.length / 2)
  const line1 = clientele.names.slice(0, half)
  const line2 = clientele.names.slice(half)

  return (
    <section className="overflow-hidden py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <p className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-primary">
            Clientele
          </p>
          <p className="mt-6 max-w-3xl font-heading text-2xl font-bold leading-snug tracking-tight text-balance md:text-3xl">
            {clientele.description}
          </p>
          <p className="mt-4 max-w-3xl text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
            {clientele.sectors}
          </p>
        </Reveal>

        {/* Client logo grid */}
        <div className="mt-14 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {clientele.logos.map((logo, i) => (
            <Reveal key={logo.src} delay={(i % 8) * 0.04}>
              <div className="flex aspect-square items-center justify-center rounded-2xl bg-card p-4 shadow-sm ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <img
                  src={logo.src || '/placeholder.svg'}
                  alt={logo.alt}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Marquee Line 1 — Right to Left */}
      <div
        className="group mt-14 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        aria-label="Our clients line 1"
      >
        <div className="flex w-max animate-[marqueeRTL_35s_linear_infinite] items-center gap-16 pr-16 group-hover:[animation-play-state:paused]">
          {[...line1, ...line1].map((name, i) => (
            <span
              key={`1-${name}-${i}`}
              className="whitespace-nowrap font-heading text-2xl font-black uppercase tracking-tight text-foreground/25 transition-colors hover:text-primary md:text-4xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* Marquee Line 2 — Left to Right */}
      <div
        className="group mt-6 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        aria-label="Our clients line 2"
      >
        <div className="flex w-max animate-[marqueeLTR_35s_linear_infinite] items-center gap-16 pr-16 group-hover:[animation-play-state:paused]">
          {[...line2, ...line2].map((name, i) => (
            <span
              key={`2-${name}-${i}`}
              className="whitespace-nowrap font-heading text-2xl font-black uppercase tracking-tight text-foreground/25 transition-colors hover:text-primary md:text-4xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marqueeRTL {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marqueeLTR {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  )
}

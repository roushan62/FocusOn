import type { Metadata } from 'next'
import { process, services } from '@/lib/data'
import { Reveal, TextReveal } from '@/components/reveal'
import { MagneticButton } from '@/components/magnetic-button'
import { ServiceBenefits } from '@/components/home/service-benefits'
import { ServiceFeatures } from '@/components/home/service-features'
import { ServicePackages } from '@/components/home/service-packages'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Design-build, general contracting, interior fit-outs, remodeling, project management, and construction works — end-to-end turnkey solutions by FocusOn Interiors.',
}

export default function ServicesPage() {
  return (
    <div className="pt-32 md:pt-40">
      <section className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <p className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-primary">
            Services
          </p>
        </Reveal>
        <TextReveal
          as="h1"
          text="End-to-End Turnkey Solutions"
          className="mt-6 max-w-4xl font-heading text-4xl font-black uppercase leading-[1.05] tracking-tight text-balance md:text-7xl"
        />

        <div className="mt-16 grid gap-6 md:mt-24 md:grid-cols-2">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={i * 0.08}
              className={i === 0 ? 'md:col-span-2' : ''}
            >
              <article className="glass group h-full rounded-3xl p-8 shadow-lg shadow-foreground/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-foreground/10 md:p-12">
                <span className="font-heading text-sm font-bold text-primary">
                  {`0${i + 1}`}
                </span>
                <h2 className="mt-4 font-heading text-xl font-bold uppercase tracking-tight transition-colors group-hover:text-primary md:text-2xl">
                  {service.title}
                </h2>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground text-pretty">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex justify-center">
            <MagneticButton href="/contact" variant="primary">
              Get a Service Estimate
            </MagneticButton>
          </div>
        </Reveal>
      </section>

      <ServiceBenefits />
      <ServiceFeatures />
      <ServicePackages />

      {/* Process */}
      <section className="mt-24 bg-secondary py-24 text-secondary-foreground md:mt-36 md:py-36">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal>
            <p className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-primary">
              Process
            </p>
            <h2 className="mt-5 max-w-3xl font-heading text-3xl font-black uppercase tracking-tight text-balance md:text-5xl">
              The Art and Order of Styling Spaces
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-secondary-foreground/70 text-pretty">
              Our structured yet creative process ensures clarity while
              allowing design poetry to flourish.
            </p>
          </Reveal>

          <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {process.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.1}>
                <li className="glass-dark h-full rounded-3xl p-7 transition-transform duration-500 hover:-translate-y-2">
                  <span className="font-heading text-3xl font-black text-primary">
                    {step.step}
                  </span>
                  <h3 className="mt-5 font-heading text-base font-bold uppercase tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-secondary-foreground/70 text-pretty">
                    {step.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </div>
  )
}

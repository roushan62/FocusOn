import type { Metadata } from 'next'
import { career, contact } from '@/lib/data'
import { Reveal, TextReveal } from '@/components/reveal'
import { MagneticButton } from '@/components/magnetic-button'

export const metadata: Metadata = {
  title: 'Career',
  description:
    'Join the FocusOn team. We are always looking for passionate designers, project managers, and thinkers who want to create impact through design.',
}

export default function CareerPage() {
  return (
    <div className="pt-24 md:pt-28">
      <section className="mx-auto max-w-7xl px-4 pb-24 md:px-8 md:pb-36">
        <Reveal>
          <p className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-primary">
            Careers
          </p>
        </Reveal>
        <TextReveal
          as="h1"
          text={career.title}
          className="mt-6 max-w-4xl font-heading text-4xl font-black uppercase leading-[1.05] tracking-tight text-balance md:text-7xl"
        />
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {career.intro}
          </p>
        </Reveal>

        {/* Open positions */}
        <div className="mt-20">
          <Reveal>
            <h2 className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-primary">
              Open Positions
            </h2>
          </Reveal>

          {career.openings.length > 0 ? (
            <ul className="mt-8 flex flex-col gap-4">
              {career.openings.map((job) => (
                <Reveal key={job.title}>
                  <li className="glass flex flex-col gap-4 rounded-3xl p-8 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="font-heading text-xl font-bold tracking-tight">
                        {job.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {job.location} · {job.type}
                      </p>
                    </div>
                    <MagneticButton
                      href={`mailto:${career.resumeEmail}`}
                      variant="primary"
                    >
                      Apply Now
                    </MagneticButton>
                  </li>
                </Reveal>
              ))}
            </ul>
          ) : (
            <Reveal delay={0.1}>
              <div className="glass mt-8 rounded-3xl p-10 md:p-14">
                <p className="max-w-2xl font-heading text-xl font-bold leading-snug tracking-tight md:text-2xl">
                  We are not listing specific openings right now — but we are
                  always hiring for attitude and talent.
                </p>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                  Designers, project managers, site engineers, and execution
                  specialists: introduce yourself and tell us how you can
                  create impact through design.
                </p>
              </div>
            </Reveal>
          )}
        </div>

        {/* Resume CTA */}
        <Reveal delay={0.15}>
          <div className="mt-16 flex flex-col items-start gap-8 rounded-[2.5rem] bg-secondary p-10 text-secondary-foreground md:flex-row md:items-center md:justify-between md:p-16">
            <div>
              <p className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-primary">
                {career.resumeNote}
              </p>
              <a
                href={`mailto:${career.resumeEmail}`}
                className="mt-4 block break-all font-heading text-2xl font-black tracking-tight transition-colors hover:text-primary md:text-4xl"
              >
                {career.resumeEmail}
              </a>
            </div>
            <MagneticButton
              href={`mailto:${career.resumeEmail}`}
              variant="light"
            >
              Send Your Resume
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-12 text-sm text-muted-foreground">
            Prefer WhatsApp?{' '}
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:underline"
            >
              Chat with our team
            </a>
            .
          </p>
        </Reveal>
      </section>
    </div>
  )
}

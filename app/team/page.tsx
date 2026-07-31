import type { Metadata } from 'next'
import { team } from '@/lib/data'
import { Reveal, TextReveal } from '@/components/reveal'
import { MagneticButton } from '@/components/magnetic-button'
import { TeamSlider } from '@/components/team-slider'

const prefix = process.env.NEXT_PUBLIC_STATIC_EXPORT === '1' ? '/FocusOn' : ''

export const metadata: Metadata = {
  title: 'Team',
  description:
    'Our stylists behind every space. Focused, experienced, and collaborative — our leadership team drives every project to perfection across India.',
}

function TeamPhoto({ src, alt, aspect }: { src: string; alt: string; aspect?: string }) {
  const imgSrc = src?.startsWith('/') ? `${prefix}${src}` : src
  const aspectClass = aspect || 'aspect-[4/5]'
  return (
    <div className={`w-full overflow-hidden bg-primary relative ${aspectClass}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
      <img
        src={imgSrc || '/placeholder.svg'}
        alt={alt}
        loading="lazy"
        className="relative z-10 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        style={{ objectPosition: 'center top' }}
      />
    </div>
  )
}

export default function TeamPage() {
  return (
    <div className="pt-32 md:pt-40">
      <section className="mx-auto max-w-7xl px-4 pb-24 md:px-8 md:pb-36">
        <Reveal>
          <p className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-primary">
            Meet the Team
          </p>
        </Reveal>
        <TextReveal
          as="h1"
          text="Our Stylists Behind Every Space"
          className="mt-6 max-w-4xl font-heading text-4xl font-black uppercase leading-[1.05] tracking-tight text-balance md:text-7xl"
        />
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-xl leading-relaxed text-muted-foreground text-pretty">
            {team.intro}
          </p>
        </Reveal>

        {/* Team Group Photo */}
        <Reveal delay={0.3}>
          <div className="mt-16 overflow-hidden rounded-3xl shadow-lg shadow-foreground/10 ring-1 ring-border">
            <img
              src={team.groupPhoto || '/placeholder.svg'}
              alt="The FocusOn Interiors team"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        {/* Super Senior Leaders */}
        <div className="mt-16 md:mt-20">
          <Reveal>
            <p className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-primary">
              Super Senior Leaders
            </p>
          </Reveal>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {team.leadership.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.12}>
                <article className="glass group h-full overflow-hidden rounded-2xl shadow-lg shadow-foreground/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20">
                  <TeamPhoto
                    src={member.photo}
                    alt={`${member.name}, ${member.role} of FocusOn Interiors`}
                    aspect={member.photoAspect}
                  />
                  <div className="p-5 md:p-7">
                    <p className="font-heading text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                      {member.role}
                    </p>
                    <h2 className="mt-1 font-heading text-2xl font-black uppercase tracking-tight text-foreground md:text-3xl">
                      {member.name}
                    </h2>
                    <p className="mt-3 leading-relaxed text-muted-foreground text-sm text-pretty">
                      {member.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Senior Management Team */}
        <div className="mt-16 md:mt-20">
          <Reveal>
            <p className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-primary">
              Senior Management Team
            </p>
          </Reveal>
          <div className="mt-6">
            <TeamSlider members={team.senior} />
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.senior.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.08}>
                <article className="group h-full overflow-hidden rounded-2xl bg-card shadow-lg shadow-foreground/5 ring-1 ring-border transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20">
                  <TeamPhoto
                    src={member.photo}
                    alt={`${member.name}, ${member.role}`}
                    aspect={member.photoAspect}
                  />
                  <div className="p-4 md:p-5">
                    <h3 className="font-heading text-sm md:text-base font-bold tracking-tight text-foreground">
                      {member.name}
                    </h3>
                    <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                      {member.role}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {member.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex justify-center md:mt-16">
            <MagneticButton href="/career" variant="primary">
              Join the FocusOn Team
            </MagneticButton>
          </div>
        </Reveal>
      </section>
    </div>
  )
}

import type { Metadata } from 'next'
import { team } from '@/lib/data'
import { Reveal, TextReveal } from '@/components/reveal'
import { MagneticButton } from '@/components/magnetic-button'
import { TeamSlider } from '@/components/team-slider'

export const metadata: Metadata = {
  title: 'Team',
  description:
    'Our stylists behind every space. Focused, experienced, and collaborative — our leadership team drives every project to perfection across India.',
}

export default function TeamPage() {
  const allTeamMembers = [...team.leadership, ...team.senior]

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
            Focused, experienced, and collaborative, our leadership team drives
            every project to perfection across India.
          </p>
        </Reveal>

        {/* Team Group Photo */}
        <Reveal delay={0.3}>
          <div className="mt-16 overflow-hidden rounded-3xl shadow-lg shadow-foreground/10">
            <img
              src="https://focusoninteriors.com/wp-content/uploads/2026/03/Team-picture-focus-on-1-2-e1774966015395.png"
              alt="FocusOn Interiors Team"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        {/* Team Member Slider */}
        <div className="mt-20 md:mt-32">
          <Reveal>
            <p className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-primary">
              Our Leadership
            </p>
          </Reveal>
          <div className="mt-8">
            <TeamSlider members={allTeamMembers} />
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 flex justify-center md:mt-24">
            <MagneticButton href="/contact" variant="primary">
              Join the FocusOn Team
            </MagneticButton>
          </div>
        </Reveal>
      </section>
    </div>
  )
}

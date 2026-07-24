import { Reveal } from '@/components/reveal'
import { Award, Trophy, Star, Zap } from 'lucide-react'

const awards = [
  {
    icon: Award,
    title: 'Design Excellence',
    description: 'Recognized for innovative design solutions',
  },
  {
    icon: Trophy,
    title: 'Quality Assured',
    description: 'ISO 9001:2015 certified for quality management',
  },
  {
    icon: Star,
    title: 'Client Rated 5-Star',
    description: '99% customer satisfaction rate',
  },
  {
    icon: Zap,
    title: 'Industry Leader',
    description: '15M+ Sq. Ft. of successfully delivered projects',
  },
]

export function AwardsRecognition() {
  return (
    <section className="py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-primary mb-4">
              Our Credentials
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-black uppercase tracking-tight text-balance">
              Awards & Recognition
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, i) => {
            const Icon = award.icon
            return (
              <Reveal key={award.title} delay={i * 0.1}>
                <div className="glass rounded-3xl p-8 text-center hover:-translate-y-2 transition-transform duration-300">
                  <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading text-lg font-bold uppercase tracking-tight mb-2">
                    {award.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{award.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

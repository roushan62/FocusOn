'use client'

import { Reveal, TextReveal } from '@/components/reveal'
import { CheckCircle2, Clock, Users, Zap } from 'lucide-react'

const benefits = [
  {
    icon: CheckCircle2,
    title: 'Quality Assurance',
    description: 'Rigorous quality checks at every stage of execution'
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'Strict project scheduling with accountability'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Skilled professionals with 10+ years of experience'
  },
  {
    icon: Zap,
    title: 'Innovative Solutions',
    description: 'Latest materials and design techniques'
  }
]

export function ServiceBenefits() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-36">
      <Reveal>
        <p className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-primary">
          Why Choose Us
        </p>
        <h2 className="mt-6 max-w-3xl font-heading text-3xl font-black uppercase leading-tight tracking-tight text-balance md:text-5xl">
          Trusted Excellence in Every Project
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, i) => {
          const Icon = benefit.icon
          return (
            <Reveal key={benefit.title} delay={i * 0.1}>
              <div className="group rounded-2xl bg-gradient-to-br from-foreground/5 to-foreground/0 p-8 transition-all duration-500 hover:from-primary/10 hover:to-primary/5 hover:-translate-y-1">
                <Icon className="h-10 w-10 text-primary transition-transform duration-500 group-hover:scale-110" />
                <h3 className="mt-6 font-heading text-lg font-bold">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

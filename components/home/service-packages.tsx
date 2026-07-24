'use client'

import { Reveal } from '@/components/reveal'
import { CheckCircle } from 'lucide-react'
import { MagneticButton } from '@/components/magnetic-button'

const packages = [
  {
    name: 'Design Consultation',
    price: 'Custom Quote',
    duration: '2-4 weeks',
    description: 'Concept development and design direction',
    features: [
      'Concept ideation & mood boards',
      '3D visualization & renders',
      'Material & color palette selection',
      'Space planning & layout',
      'Post-consultation support'
    ]
  },
  {
    name: 'Full Design & Build',
    price: 'Custom Quote',
    duration: '8-16 weeks',
    description: 'Complete design and execution solution',
    features: [
      'Full design development',
      'Construction & build works',
      'Procurement & project management',
      'Site supervision & quality checks',
      'Installation & styling',
      'Post-handover warranty'
    ],
    featured: true
  },
  {
    name: 'Renovation & Refurbishment',
    price: 'Custom Quote',
    duration: '6-12 weeks',
    description: 'Transform existing spaces',
    features: [
      'Space assessment & planning',
      'Renovation design',
      'Material sourcing',
      'Execution oversight',
      'Finishing & styling',
      'Handover support'
    ]
  }
]

export function ServicePackages() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-36">
      <Reveal>
        <p className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-primary">
          Service Packages
        </p>
        <h2 className="mt-6 max-w-3xl font-heading text-3xl font-black uppercase leading-tight tracking-tight text-balance md:text-5xl">
          Flexible Solutions for Every Project
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Choose the package that best fits your project needs, or let us customize a solution tailored to your requirements.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {packages.map((pkg, i) => (
          <Reveal key={pkg.name} delay={i * 0.1}>
            <div
              className={`group relative rounded-3xl transition-all duration-500 ${
                pkg.featured
                  ? 'scale-100 border-2 border-primary bg-gradient-to-br from-primary/10 to-primary/5 p-8 shadow-2xl shadow-primary/10 md:scale-105'
                  : 'border border-foreground/10 bg-card p-8 hover:-translate-y-2 hover:shadow-lg hover:shadow-foreground/5'
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-8">
                  <span className="bg-primary px-4 py-1 font-heading text-xs font-bold uppercase tracking-wider text-background">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mt-2">
                <h3 className="font-heading text-2xl font-bold">{pkg.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{pkg.description}</p>

                <div className="mt-6 space-y-2">
                  <p className="font-heading text-3xl font-black text-primary">
                    {pkg.price}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Timeline: {pkg.duration}
                  </p>
                </div>
              </div>

              <ul className="mt-8 space-y-4">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <MagneticButton
                href="/contact"
                variant={pkg.featured ? 'primary' : 'outline'}
                className="mt-8 w-full"
              >
                Get Started
              </MagneticButton>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

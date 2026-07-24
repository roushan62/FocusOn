'use client'

import { Reveal } from '@/components/reveal'
import { Palette, Hammer, Eye, Lightbulb, Layers, CheckCircle2 } from 'lucide-react'

const serviceHighlights = [
  {
    icon: Palette,
    title: 'Design Excellence',
    items: ['Conceptual Design', 'Material Selection', 'Color Schemes', '3D Visualization']
  },
  {
    icon: Hammer,
    title: 'Execution Mastery',
    items: ['Quality Construction', 'Expert Craftsmanship', 'On-Time Delivery', 'Precision Work']
  },
  {
    icon: Eye,
    title: 'Quality Control',
    items: ['Multi-Stage Inspections', 'Standards Compliance', 'Client Approvals', 'Final Verification']
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    items: ['Latest Technologies', 'Sustainable Materials', 'Smart Solutions', 'Future-Ready Design']
  },
  {
    icon: Layers,
    title: 'Project Management',
    items: ['Budget Control', 'Timeline Management', 'Resource Planning', 'Risk Mitigation']
  },
  {
    icon: CheckCircle2,
    title: 'Support & Warranty',
    items: ['Post-Handover Support', 'Maintenance Guidance', 'Warranty Coverage', '24/7 Assistance']
  }
]

export function ServiceFeatures() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-36">
      <Reveal>
        <p className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-primary">
          What We Deliver
        </p>
        <h2 className="mt-6 max-w-3xl font-heading text-3xl font-black uppercase leading-tight tracking-tight text-balance md:text-5xl">
          Comprehensive Service Features
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {serviceHighlights.map((highlight, i) => {
          const Icon = highlight.icon
          return (
            <Reveal key={highlight.title} delay={i * 0.08}>
              <div className="group rounded-2xl border border-foreground/10 bg-card p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                <div className="flex items-start gap-4">
                  <Icon className="h-8 w-8 flex-shrink-0 text-primary transition-transform duration-500 group-hover:scale-110" />
                  <h3 className="font-heading text-lg font-bold">
                    {highlight.title}
                  </h3>
                </div>

                <ul className="mt-6 space-y-2">
                  {highlight.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

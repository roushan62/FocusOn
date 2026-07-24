import type { Metadata } from 'next'
import { FAQ } from '@/components/home/faq'
import { Reveal, TextReveal } from '@/components/reveal'
import { MagneticButton } from '@/components/magnetic-button'

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Got questions about our interior design services? Find answers to commonly asked questions about timelines, costs, and our process.',
}

export default function FAQPage() {
  return (
    <div className="pt-32 md:pt-40">
      <section className="mx-auto max-w-7xl px-4 pb-24 md:px-8 md:pb-36">
        <Reveal>
          <p className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-primary">
            FAQ
          </p>
        </Reveal>
        <TextReveal
          as="h1"
          text="Common Questions Answered"
          className="mt-6 max-w-4xl font-heading text-4xl font-black uppercase leading-[1.05] tracking-tight text-balance md:text-7xl"
        />
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-xl leading-relaxed text-muted-foreground text-pretty">
            Have a question about our services, process, or pricing? Find the answers below or reach out to our team directly.
          </p>
        </Reveal>

        <div className="mt-16">
          <FAQ />
        </div>

        <Reveal delay={0.2}>
          <div className="mt-20 flex justify-center">
            <MagneticButton href="/contact" variant="primary">
              Contact Us for More Details
            </MagneticButton>
          </div>
        </Reveal>
      </section>
    </div>
  )
}

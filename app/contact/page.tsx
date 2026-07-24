import type { Metadata } from 'next'
import { contact } from '@/lib/data'
import { Reveal, TextReveal } from '@/components/reveal'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Let's style and create your next space together. Reach FocusOn Interiors in Gurugram by phone, email, WhatsApp, or visit our office.",
}

export default function ContactPage() {
  return (
    <div className="pt-32 md:pt-40">
      <section className="mx-auto max-w-7xl px-4 pb-24 md:px-8 md:pb-36">
        <Reveal>
          <p className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-primary">
            Contact
          </p>
        </Reveal>
        <TextReveal
          as="h1"
          text="Let's Style and Create Your Next Space Together"
          className="mt-6 max-w-5xl font-heading text-4xl font-black uppercase leading-[1.05] tracking-tight text-balance md:text-7xl"
        />
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Whether it&apos;s a home, office, or bespoke venture, tell us your
            ideas and we will create something extraordinary.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          <Reveal>
            <a
              href={`mailto:${contact.email}`}
              className="glass group block h-full rounded-3xl p-8 shadow-lg shadow-foreground/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl md:p-10"
            >
              <p className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-primary">
                Email
              </p>
              <p className="mt-5 break-all font-heading text-xl font-bold tracking-tight transition-colors group-hover:text-primary md:text-2xl">
                {contact.email}
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Write to us anytime — we respond promptly.
              </p>
            </a>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="glass h-full rounded-3xl p-8 shadow-lg shadow-foreground/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl md:p-10">
              <p className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-primary">
                Phone
              </p>
              <ul className="mt-5 flex flex-col gap-2">
                {contact.phones.map((phone) => (
                  <li key={phone.href}>
                    <a
                      href={phone.href}
                      className="font-heading text-xl font-bold tracking-tight transition-colors hover:text-primary md:text-2xl"
                    >
                      {phone.label}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                Call us to discuss your project.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <a
              href={contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass group block h-full rounded-3xl p-8 shadow-lg shadow-foreground/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl md:p-10"
            >
              <p className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-primary">
                Address
              </p>
              <p className="mt-5 font-heading text-xl font-bold leading-snug tracking-tight transition-colors group-hover:text-primary md:text-2xl">
                {contact.address}
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Open in Google Maps <span aria-hidden="true">→</span>
              </p>
            </a>
          </Reveal>
        </div>

        {/* Form + Map */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex h-full flex-col overflow-hidden rounded-3xl shadow-lg">
              <iframe
                title="FocusOn Interiors office location on Google Maps"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  contact.address,
                )}&output=embed`}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="min-h-[420px] flex-1 border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

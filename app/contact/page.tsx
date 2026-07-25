'use client'

import { useState } from 'react'
import { offices, vendorEmail, contact } from '@/lib/data'
import { Reveal, TextReveal } from '@/components/reveal'
import { MapPin, Mail, Phone, ChevronDown, Building2, Star, ShoppingCart } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ContactPage() {
  const [openCity, setOpenCity] = useState<string | null>(null)

  function toggle(city: string) {
    setOpenCity((prev) => (prev === city ? null : city))
  }

  return (
    <div className="pt-24 md:pt-28">
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
            Connect with our regional offices across India. Click a branch to view full details and
            reach out directly.
          </p>
        </Reveal>

        {/* Branch Accordion */}
        <div className="mt-16 space-y-4">
          {offices.map((office, i) => (
            <Reveal key={office.city} delay={i * 0.08}>
              <div className="glass overflow-hidden rounded-2xl md:rounded-3xl shadow-lg shadow-foreground/5 ring-1 ring-border transition-all duration-500">
                <button
                  onClick={() => toggle(office.city)}
                  className="flex w-full items-center justify-between px-6 py-5 md:px-8 md:py-6 text-left"
                  aria-expanded={openCity === office.city}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 shrink-0">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h2 className="font-heading text-xl md:text-2xl font-black uppercase tracking-tight">
                          {office.city}
                        </h2>
                        {office.isHq && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                            <Star className="h-2.5 w-2.5" /> HQ
                          </span>
                        )}
                      </div>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {office.email}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: openCity === office.city ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openCity === office.city && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-border px-6 py-6 md:px-8 md:py-8">
                        {/* Contact cards */}
                        <div className="grid gap-4 md:grid-cols-3">
                          {/* Address */}
                          <div className="rounded-xl bg-card p-5 ring-1 ring-border">
                            <div className="flex items-center gap-2 text-primary mb-3">
                              <MapPin className="h-4 w-4" />
                              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                                Address
                              </span>
                            </div>
                            {office.name && (
                              <p className="text-xs font-semibold text-foreground mb-1">{office.name}</p>
                            )}
                            {office.address.map((line, idx) => (
                              <p key={idx} className="text-sm leading-relaxed text-muted-foreground">
                                {line}
                              </p>
                            ))}
                          </div>

                          {/* Email */}
                          <div className="rounded-xl bg-card p-5 ring-1 ring-border">
                            <div className="flex items-center gap-2 text-primary mb-3">
                              <Mail className="h-4 w-4" />
                              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                                Email
                              </span>
                            </div>
                            <a
                              href={`mailto:${office.email}`}
                              className="text-sm font-semibold text-foreground break-all transition-colors hover:text-primary"
                            >
                              {office.email}
                            </a>
                            <p className="text-xs text-muted-foreground mt-1">
                              {office.isHq
                                ? 'Head Office'
                                : office.name
                                  ? office.name
                                  : 'Regional Office'}
                            </p>
                          </div>

                          {/* Phone */}
                          <div className="rounded-xl bg-card p-5 ring-1 ring-border">
                            <div className="flex items-center gap-2 text-primary mb-3">
                              <Phone className="h-4 w-4" />
                              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                                Phone
                              </span>
                            </div>
                            {office.phone ? (
                              <a
                                href={`tel:${office.phone.replace(/[^+\d]/g, '')}`}
                                className="text-sm font-semibold text-foreground transition-colors hover:text-primary"
                              >
                                {office.phone}
                              </a>
                            ) : (
                              <a
                                href={`tel:${contact.phones[0].href.replace('tel:', '')}`}
                                className="text-sm font-semibold text-foreground transition-colors hover:text-primary"
                              >
                                {contact.phones[0].label}
                              </a>
                            )}
                            <p className="text-xs text-muted-foreground mt-1">Contact via phone</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}

          {/* Vendor Section */}
          <Reveal delay={0.35}>
            <div className="glass overflow-hidden rounded-2xl md:rounded-3xl shadow-lg shadow-foreground/5 ring-1 ring-border">
              <div className="flex items-center gap-4 px-6 py-5 md:px-8 md:py-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10 shrink-0">
                  <ShoppingCart className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h2 className="font-heading text-xl md:text-2xl font-black uppercase tracking-tight">
                      Vendor Registration
                    </h2>
                    <span className="inline-flex items-center rounded-full bg-green-500/10 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-green-600">
                      Pan India
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    For vendor enquiries and partnerships across India
                  </p>
                </div>
              </div>
              <div className="border-t border-border px-6 py-5 md:px-8">
                <a
                  href={`mailto:${vendorEmail}`}
                  className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-green-700"
                >
                  <Mail className="h-4 w-4" />
                  {vendorEmail}
                </a>
                <p className="mt-3 text-xs text-muted-foreground">
                  Send your company profile, portfolio, and credentials to register as a vendor.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Map */}
        <Reveal delay={0.4}>
          <div className="mt-16 overflow-hidden rounded-2xl md:rounded-3xl shadow-lg ring-1 ring-border">
            <iframe
              title="FocusOn Interiors - Delhi HQ location on Google Maps"
              src="https://www.google.com/maps?q=C-19+Second+Floor+Dilshad+Colony+Delhi+110095&output=embed"
              width="100%"
              height="380"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            />
          </div>
        </Reveal>
      </section>
    </div>
  )
}

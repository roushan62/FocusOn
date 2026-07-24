'use client'

import { useState } from 'react'
import { contact } from '@/lib/data'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass rounded-3xl p-8 shadow-lg shadow-foreground/5 md:p-10"
      aria-label="Contact form"
    >
      <h2 className="font-heading text-xl font-black uppercase tracking-tight md:text-2xl">
        Send Us a Message
      </h2>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-semibold">
            Name <span className="text-primary">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="rounded-xl border border-border bg-card px-4 py-3 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-semibold">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="rounded-xl border border-border bg-card px-4 py-3 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="email" className="text-sm font-semibold">
            Email <span className="text-primary">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="rounded-xl border border-border bg-card px-4 py-3 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="message" className="text-sm font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="rounded-xl border border-border bg-card px-4 py-3 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
          />
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium tracking-wide text-primary-foreground transition-colors duration-300 hover:bg-foreground hover:text-background disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending…' : 'Submit'}
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </button>

        <a
          href={contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
        >
          Chat on WhatsApp
        </a>
      </div>

      <p aria-live="polite" className="mt-5 text-sm">
        {status === 'sent' && (
          <span className="font-semibold text-primary">
            Thank you — your message has been received. We will get back to
            you shortly.
          </span>
        )}
        {status === 'error' && (
          <span className="font-semibold text-destructive">
            Something went wrong. Please email us directly at {contact.email}.
          </span>
        )}
      </p>
    </form>
  )
}

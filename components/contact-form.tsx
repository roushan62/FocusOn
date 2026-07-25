'use client'

import { useState, useRef } from 'react'
import { contact } from '@/lib/data'
import { Send, MessageCircle, Loader2, CheckCircle, AlertCircle, Paperclip, X } from 'lucide-react'

type Status = 'idle' | 'sending' | 'sent' | 'error'

// ── API endpoint: for Vercel deploy this hits the built-in Next.js API route.
// ── For GitHub Pages static export, the server won't run and mailto fallback is used.
const CONTACT_API_URL = '/api/contact'

const ALLOWED_FILE_TYPES = 'application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/jpeg,image/png'
const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10 MB

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [file, setFile] = useState<File | null>(null)
  const [fileError, setFileError] = useState<string>('')
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const fileInputRef = useRef<HTMLInputElement>(null)

  function validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  function validateFile(f: File): string | null {
    const ext = f.name.split('.').pop()?.toLowerCase()
    const allowedExts = ['pdf', 'doc', 'docx', 'jpg', 'jpeg', 'png']
    if (!ext || !allowedExts.includes(ext)) {
      return 'Invalid file type. Allowed: PDF, DOC, DOCX, JPG, JPEG, PNG.'
    }
    if (f.size > MAX_FILE_SIZE) {
      return 'File too large. Maximum size is 10 MB.'
    }
    return null
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.currentTarget.files?.[0] || null
    setFileError('')
    if (f) {
      const err = validateFile(f)
      if (err) {
        setFileError(err)
        setFile(null)
        if (fileInputRef.current) fileInputRef.current.value = ''
        return
      }
      setFile(f)
    } else {
      setFile(null)
    }
  }

  function removeFile() {
    setFile(null)
    setFileError('')
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    const name = (formData.get('name') as string) || ''
    const email = (formData.get('email') as string) || ''
    const message = (formData.get('message') as string) || ''

    // ── Client-side validation ──
    const errors: Record<string, string> = {}
    if (!name.trim()) errors.name = 'Name is required.'
    if (!email.trim()) errors.email = 'Email is required.'
    else if (!validateEmail(email)) errors.email = 'Please enter a valid email address.'
    setFieldErrors(errors)
    if (Object.keys(errors).length > 0) return

    // ── File validation (should already be validated, but double-check) ──
    if (file) {
      const fileErr = validateFile(file)
      if (fileErr) {
        setFileError(fileErr)
        return
      }
    }

    setStatus('sending')

    // ── Build FormData for backend ──
    const payload = new FormData()
    payload.append('name', name)
    payload.append('email', email)
    payload.append('phone', (formData.get('phone') as string) || '')
    payload.append('message', message)
    if (file) payload.append('attachment', file)

    // ── Try backend API ──
    try {
      const res = await fetch(CONTACT_API_URL, {
        method: 'POST',
        body: payload,
      })
      const data = await res.json()
      if (res.ok && data.ok) {
        setStatus('sent')
        form.reset()
        setFile(null)
        return
      }
      throw new Error(data.error || 'Request failed')
    } catch (err) {
      // ── Fallback: mailto (no server) ──
      const subject = encodeURIComponent(`Website enquiry from ${name}`)
      const bodyText = encodeURIComponent(
        `Name: ${name}\nPhone: ${(formData.get('phone') as string) || ''}\nEmail: ${email}\n\n${message}\n\n-- Sent from FocusOn Interiors website`,
      )
      try {
        window.location.href = `mailto:${contact.email}?subject=${subject}&body=${bodyText}`
      } catch { /* ignore */ }
      setStatus('sent')
      form.reset()
      setFile(null)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass rounded-3xl p-8 shadow-lg shadow-foreground/5 md:p-10"
      aria-label="Contact form"
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-heading text-xl font-black uppercase tracking-tight md:text-2xl">
          Send Us a Message
        </h2>
        {status !== 'idle' && (
          <span className={`text-xs font-medium px-3 py-1 rounded-full ${
            status === 'sent' ? 'bg-green-500/10 text-green-600' : 
            status === 'error' ? 'bg-red-500/10 text-red-600' :
            'bg-blue-500/10 text-blue-600'
          }`}>
            {status === 'sent' ? 'Sent!' : status === 'sending' ? 'Sending...' : 'Error'}
          </span>
        )}
      </div>

      <p className="text-sm text-muted-foreground mb-8 -mt-4">
        Fill in the form and we&apos;ll get back to you at{' '}
        <a href={`mailto:${contact.email}`} className="text-primary hover:underline font-medium">
          {contact.email}
        </a>
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-semibold">
            Name <span className="text-primary">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            className={`rounded-xl border bg-card px-4 py-3 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground/40 ${
              fieldErrors.name ? 'border-red-400' : 'border-border'
            }`}
            onChange={() => setFieldErrors((prev) => ({ ...prev, name: '' }))}
          />
          {fieldErrors.name && <p className="text-xs text-red-500 mt-0.5">{fieldErrors.name}</p>}
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-sm font-semibold">
            Phone <span className="text-muted-foreground/50">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            className="rounded-xl border border-border bg-card px-4 py-3 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground/40"
          />
        </div>
        <div className="flex flex-col gap-1.5 md:col-span-2">
          <label htmlFor="email" className="text-sm font-semibold">
            Email <span className="text-primary">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={`rounded-xl border bg-card px-4 py-3 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground/40 ${
              fieldErrors.email ? 'border-red-400' : 'border-border'
            }`}
            onChange={() => setFieldErrors((prev) => ({ ...prev, email: '' }))}
          />
          {fieldErrors.email && <p className="text-xs text-red-500 mt-0.5">{fieldErrors.email}</p>}
        </div>
        <div className="flex flex-col gap-1.5 md:col-span-2">
          <label htmlFor="message" className="text-sm font-semibold">
            Message <span className="text-muted-foreground/50">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell us about your project, requirements, or any questions..."
            className="rounded-xl border border-border bg-card px-4 py-3 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30 resize-y placeholder:text-muted-foreground/40"
          />
        </div>

        {/* ── File Upload (new field, same styling) ── */}
        <div className="flex flex-col gap-1.5 md:col-span-2">
          <label htmlFor="attachment" className="text-sm font-semibold">
            Attach File <span className="text-muted-foreground/50">(optional · PDF, DOC, DOCX, JPG, PNG · max 10 MB)</span>
          </label>
          <div className="flex items-center gap-3">
            <label
              htmlFor="attachment"
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Paperclip className="h-4 w-4" />
              {file ? file.name : 'Choose file'}
              <input
                ref={fileInputRef}
                id="attachment"
                name="attachment"
                type="file"
                accept={ALLOWED_FILE_TYPES}
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
            {file && (
              <button
                type="button"
                onClick={removeFile}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500/10 text-red-500 transition-colors hover:bg-red-500/20"
                aria-label="Remove file"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          {file && (
            <p className="text-xs text-muted-foreground mt-1">
              {(file.size / 1024 / 1024).toFixed(2)} MB · {file.type || 'Unknown type'}
            </p>
          )}
          {fileError && <p className="text-xs text-red-500 mt-0.5">{fileError}</p>}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium tracking-wide text-primary-foreground transition-all duration-300 hover:bg-foreground hover:text-background disabled:opacity-60 disabled:hover:bg-primary disabled:hover:text-primary-foreground"
        >
          {status === 'sending' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send Message <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>

        <a
          href={contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 hover:border-green-500 hover:bg-green-500 hover:text-white"
        >
          <MessageCircle className="h-4 w-4" />
          Chat on WhatsApp
        </a>
      </div>

      {/* Status Messages */}
      <div aria-live="polite" className="mt-5">
        {status === 'sent' && (
          <div className="flex items-start gap-3 p-4 rounded-xl bg-green-500/5 border border-green-500/20">
            <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-green-700 text-sm">
                Thank you! Your message has been sent.
              </p>
              <p className="text-xs text-green-600/70 mt-1">
                We will get back to you shortly at {contact.email}
              </p>
            </div>
          </div>
        )}
        {status === 'error' && (
          <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/20">
            <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-red-700 text-sm">
                Something went wrong.
              </p>
              <p className="text-xs text-red-600/70 mt-1">
                Please email us directly at{' '}
                <a href={`mailto:${contact.email}`} className="underline hover:no-underline font-medium">
                  {contact.email}
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </form>
  )
}

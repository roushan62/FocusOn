import Link from 'next/link'
import Image from 'next/image'
import { contact, navLinks } from '@/lib/data'

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="FocusOn Interiors logo"
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-contain"
              />
              <span className="font-heading text-base font-bold uppercase tracking-[0.18em]">
                FocusOn <span className="text-primary">Interiors</span>
              </span>
            </Link>
            <p className="mt-5 text-pretty leading-relaxed text-secondary-foreground/70">
              Spaces Styled, Stories Told. Design, build, and style — we
              transform interiors into curated experiences.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Explore
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary-foreground/80 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="max-w-sm">
            <h3 className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Contact
            </h3>
            <ul className="mt-5 flex flex-col gap-3 text-secondary-foreground/80">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="transition-colors hover:text-primary"
                >
                  {contact.email}
                </a>
              </li>
              {contact.phones.map((phone) => (
                <li key={phone.href}>
                  <a
                    href={phone.href}
                    className="transition-colors hover:text-primary"
                  >
                    {phone.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed transition-colors hover:text-primary"
                >
                  {contact.address}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-secondary-foreground/10 pt-8">
          <p className="text-sm text-secondary-foreground/50">
            {'Copyright: © 2026 FocusOn Interiors: Spaces Styled, Stories Told'}
          </p>
        </div>
      </div>
    </footer>
  )
}

import Link from 'next/link'
import React from 'react'
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'

import { Logo } from '@/components/Logo/Logo'

const footerLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#standards', label: 'Standards' },
  { href: '/#contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-[#0f0d0a] text-[#efe5d7]">
      <div className="container grid gap-10 py-14 lg:grid-cols-[1.15fr_0.7fr_0.85fr]">
        <div className="space-y-5">
          <Link className="inline-flex text-[#f5ede2]" href="/">
            <Logo />
          </Link>
          <p className="max-w-xl text-sm leading-7 text-[#cfbfa9]">
            Coloss Development creates premium residential and mixed-use destinations shaped
            around better neighborhoods, stronger long-term value and a more thoughtful daily
            living experience.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              aria-label="Call Coloss Development"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-[#efe5d7] transition hover:border-[#d0a46a] hover:text-[#d0a46a]"
              href="tel:+9950322888877"
            >
              <Phone className="h-4 w-4" />
            </a>
            <a
              aria-label="Email Coloss Development"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-[#efe5d7] transition hover:border-[#d0a46a] hover:text-[#d0a46a]"
              href="mailto:info@coloss-development.com"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              aria-label="Coloss Development on Facebook"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-[#efe5d7] transition hover:border-[#d0a46a] hover:text-[#d0a46a]"
              href="https://www.facebook.com/ColossDighomi"
              rel="noreferrer"
              target="_blank"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              aria-label="Coloss Development on Instagram"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-[#efe5d7] transition hover:border-[#d0a46a] hover:text-[#d0a46a]"
              href="https://www.instagram.com/coloss_development"
              rel="noreferrer"
              target="_blank"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-[#d0a46a]">
            Navigation
          </p>
          <nav className="grid gap-3">
            {footerLinks.map((item) => (
              <Link
                className="text-sm text-[#efe5d7] transition hover:text-[#d0a46a]"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#d0a46a]">
            Contact
          </p>
          <a
            className="flex items-start gap-3 text-sm leading-7 text-[#cfbfa9] transition hover:text-white"
            href="tel:+9950322888877"
          >
            <Phone className="mt-1 h-4 w-4 flex-none text-[#d0a46a]" />
            <span>+995 032 288 88 77</span>
          </a>
          <a
            className="flex items-start gap-3 text-sm leading-7 text-[#cfbfa9] transition hover:text-white"
            href="mailto:info@coloss-development.com"
          >
            <Mail className="mt-1 h-4 w-4 flex-none text-[#d0a46a]" />
            <span>info@coloss-development.com</span>
          </a>
          <a
            className="flex items-start gap-3 text-sm leading-7 text-[#cfbfa9] transition hover:text-white"
            href="https://maps.app.goo.gl/MMtLgUDr6sLE1dQZ9"
            rel="noreferrer"
            target="_blank"
          >
            <MapPin className="mt-1 h-4 w-4 flex-none text-[#d0a46a]" />
            <span>Coloss Krtsanisi, Tbilisi, Georgia</span>
          </a>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="container flex flex-col gap-2 py-5 text-xs text-[#a69682] md:flex-row md:items-center md:justify-between">
          <p>{new Date().getFullYear()} Coloss Development. Crafted for a premium residential brand presence.</p>
          <p>Public contact details and project imagery referenced from current company materials.</p>
        </div>
      </div>
    </footer>
  )
}

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { Logo } from '@/components/Logo/Logo'

const navItems = [
  { href: '/#about', label: 'About' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#standards', label: 'Standards' },
  { href: '/#contact', label: 'Contact' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#13100c]/84 backdrop-blur-xl">
      <div className="container flex items-center justify-between gap-6 py-4">
        <Link className="text-[#f7efe4]" href="/">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              className="text-sm font-medium tracking-[0.18em] text-[#efe4d5]/78 uppercase transition hover:text-[#d7b17a]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            className="hidden rounded-full border border-white/14 px-4 py-2 text-sm font-medium text-[#efe4d5] transition hover:border-[#d7b17a]/70 hover:text-white sm:inline-flex"
            href="tel:+9950322888877"
          >
            +995 032 288 88 77
          </a>
          <Link
            className="inline-flex items-center gap-2 rounded-full bg-[#d0a46a] px-4 py-2 text-sm font-semibold text-[#16110b] transition hover:bg-[#ddb67d]"
            href="/#contact"
          >
            Book a presentation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  )
}

'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const links = [
  ['Solutions', '#systems'],
  ['How We Work', '#process'],
  ['Case Studies', '#case-studies'],
  ['Intelligence', '#intelligence'],
  ['About', '/about'],
] as const;

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-2.5" aria-label="Nexoreya">
      <span className="relative grid h-7 w-7 place-items-center overflow-hidden rounded-[7px] bg-[#151617] text-sm font-black text-white">
        <span className="absolute left-[5px] top-[4px] h-[17px] w-[6px] -skew-y-[28deg] bg-[#A3FF3F]" />
        <span className="absolute left-[11px] top-[5px] h-[17px] w-[6px] -skew-y-[28deg] bg-white" />
        <span className="absolute left-[17px] top-[3px] h-[19px] w-[5px] -skew-y-[28deg] bg-[#A3FF3F]" />
      </span>
      {!compact && <span className="font-[family-name:var(--font-manrope)] text-[13px] font-extrabold tracking-[.2em]">NEXOREYA</span>}
    </span>
  );
}

export function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-50 border-b border-black/[.07] bg-[#FAFAF8]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" onClick={() => setOpen(false)}><BrandMark /></Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {links.map(([label, href]) => <Link key={label} href={href} className="text-[10px] font-semibold uppercase tracking-[.13em] text-black/55 transition-colors hover:text-black">{label}</Link>)}
        </nav>
        <Link href="/contact" className="hidden items-center gap-2 rounded-full bg-[#151617] px-5 py-3 text-[10px] font-bold uppercase tracking-[.12em] text-white transition-transform hover:-translate-y-0.5 lg:flex">Book a Growth Strategy Session <ArrowUpRight size={13} /></Link>
        <button type="button" className="grid h-10 w-10 place-items-center rounded-full border border-black/10 lg:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(v => !v)}>{open ? <X size={18} /> : <Menu size={18} />}</button>
      </div>
      <AnimatePresence>
        {open && <motion.nav id="mobile-menu" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-black/[.07] bg-[#FAFAF8] lg:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col px-5 py-5 sm:px-8">
            {links.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)} className="border-b border-black/[.07] py-4 text-sm font-semibold">{label}</Link>)}
            <Link href="/contact" onClick={() => setOpen(false)} className="mt-5 inline-flex items-center justify-between rounded-full bg-[#151617] px-5 py-4 text-[10px] font-bold uppercase tracking-[.12em] text-white">Book a Growth Strategy Session <ArrowUpRight size={14} /></Link>
          </div>
        </motion.nav>}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return <footer className="border-t border-white/10 bg-[#090A0A] text-white">
    <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
      <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr_auto]">
        <div><BrandMark /><p className="mt-6 max-w-xs text-sm leading-6 text-white/45">AI-powered growth & digital transformation.</p></div>
        <div><p className="eyebrow text-white/35">Navigate</p><div className="mt-5 grid gap-3 text-sm text-white/65"><Link href="#systems">Solutions</Link><Link href="#process">How We Work</Link><Link href="#case-studies">Case Studies</Link><Link href="#intelligence">Intelligence</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div></div>
        <div><p className="eyebrow text-white/35">Solutions</p><div className="mt-5 grid gap-3 text-sm text-white/65"><Link href="/solutions/growth-strategy">Growth Strategy</Link><Link href="/solutions/intelligent-growth-systems">Intelligent Growth Systems</Link><Link href="/solutions/digital-experience">Digital Experience</Link><Link href="/solutions/demand-content">Demand & Content</Link></div></div>
        <div><p className="eyebrow text-white/35">Next step</p><p className="mt-5 max-w-[180px] text-sm leading-6 text-white/55">Identify the constraint. Engineer the system.</p></div>
        <Link href="/contact" className="self-start inline-flex items-center gap-2 rounded-full bg-[#A3FF3F] px-5 py-3 text-[10px] font-bold uppercase tracking-[.12em] text-[#151617]">Book a Growth Strategy Session <ArrowUpRight size={13} /></Link>
      </div>
      <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-5 text-[9px] font-semibold uppercase tracking-[.2em] text-white/30 sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Nexoreya</span><span>Growth, Engineered.</span></div>
    </div>
  </footer>;
}

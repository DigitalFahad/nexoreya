'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Menu, MoveRight } from 'lucide-react';
import { ConnectedIntelligence } from '@/components/connected-intelligence';

const capabilities = [
  ['01', 'AI Strategy & Transformation', 'Turn AI from a collection of experiments into an operating advantage.'],
  ['02', 'Intelligent Automation', 'Design connected workflows that remove friction, accelerate teams and scale execution.'],
  ['03', 'Digital Growth Systems', 'Build the digital experiences, funnels and infrastructure that convert attention into growth.'],
];

export default function Home() {
  return (
    <main className="noise overflow-hidden">
      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
        <a href="#" className="font-[family-name:var(--font-manrope)] text-xl font-extrabold tracking-[-.04em]">NEXOREYA<span className="text-[#7ebd16]">.</span></a>
        <div className="hidden items-center gap-9 text-[11px] font-semibold uppercase tracking-[.18em] text-black/55 md:flex"><a href="#capabilities">Capabilities</a><a href="#approach">Approach</a><a href="#contact">Contact</a></div>
        <a href="#contact" className="hidden items-center gap-2 rounded-full border border-black/10 px-5 py-3 text-[10px] font-bold uppercase tracking-[.2em] md:flex">Start a conversation <ArrowUpRight size={14} /></a>
        <button className="rounded-full border border-black/10 p-3 md:hidden" aria-label="Open menu"><Menu size={18} /></button>
      </nav>

      <section className="grid-bg relative mx-4 overflow-hidden rounded-[34px] bg-[#eef2ec] px-6 pb-16 pt-14 sm:px-10 lg:mx-6 lg:px-16 lg:pb-20 lg:pt-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_.98fr] lg:gap-8">
          <div>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="mb-7 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.3em] text-black/45"><span className="h-2 w-2 rounded-full bg-[#8fca22]" /> AI-Powered Growth & Digital Transformation</motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .08 }} className="max-w-4xl font-[family-name:var(--font-manrope)] text-[clamp(3.3rem,7vw,7.3rem)] font-extrabold leading-[.88] tracking-[-.065em]">Build what&apos;s <span className="text-black/35">next.</span></motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8, delay: .2 }} className="mt-8 max-w-xl text-base leading-7 text-black/60 md:text-lg">Nexoreya connects strategy, technology, automation and AI into intelligent systems designed to make ambitious businesses faster, smarter and more scalable.</motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .3 }} className="mt-9 flex flex-wrap gap-3"><a href="#contact" className="group inline-flex items-center gap-4 rounded-full bg-[#0b1714] px-6 py-4 text-[11px] font-bold uppercase tracking-[.16em] text-white">Explore what&apos;s possible <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a><a href="#capabilities" className="inline-flex items-center gap-3 rounded-full border border-black/15 px-6 py-4 text-[11px] font-bold uppercase tracking-[.16em]">Our capabilities <MoveRight size={15} /></a></motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: .12 }}><ConnectedIntelligence /></motion.div>
        </div>
        <div className="mx-auto mt-14 flex max-w-7xl flex-wrap gap-x-12 gap-y-3 border-t border-black/10 pt-6 text-[9px] font-bold uppercase tracking-[.25em] text-black/35"><span>Strategy</span><span>AI</span><span>Automation</span><span>Digital</span><span>Growth</span></div>
      </section>

      <section id="capabilities" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><p className="text-[10px] font-bold uppercase tracking-[.3em] text-black/35">What we do</p><h2 className="mt-5 max-w-md font-[family-name:var(--font-manrope)] text-4xl font-extrabold leading-tight tracking-[-.045em] md:text-5xl">From fragmented digital efforts to <span className="text-black/35">one intelligent growth system.</span></h2></div><div>{capabilities.map(([number, title, copy]) => <div key={number} className="group border-t border-black/10 py-7"><div className="grid gap-4 md:grid-cols-[60px_1fr_1fr] md:items-start"><span className="text-[10px] font-bold tracking-[.2em] text-black/30">{number}</span><h3 className="font-[family-name:var(--font-manrope)] text-xl font-bold tracking-[-.02em]">{title}</h3><p className="max-w-sm text-sm leading-6 text-black/50">{copy}</p></div></div>)}</div></div>
      </section>

      <section id="approach" className="bg-[#0b1714] px-6 py-24 text-white lg:px-10 lg:py-32"><div className="mx-auto max-w-7xl"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#b8ff39]/65">The Nexoreya approach</p><h2 className="mt-5 font-[family-name:var(--font-manrope)] text-4xl font-extrabold leading-tight tracking-[-.045em] md:text-6xl">Intelligence is most powerful when everything is <span className="text-white/30">connected.</span></h2></div><div className="grid gap-8 border-t border-white/10 pt-7 md:grid-cols-3"><div><div className="text-3xl font-bold">01</div><p className="mt-3 text-sm leading-6 text-white/50">Understand the business, not just the technology.</p></div><div><div className="text-3xl font-bold">02</div><p className="mt-3 text-sm leading-6 text-white/50">Design the system around outcomes and leverage.</p></div><div><div className="text-3xl font-bold">03</div><p className="mt-3 text-sm leading-6 text-white/50">Build, integrate and continuously evolve.</p></div></div></div></div></section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36"><div className="rounded-[32px] border border-black/10 bg-[#eef2ec] p-8 md:p-14 lg:p-20"><p className="text-[10px] font-bold uppercase tracking-[.3em] text-black/35">Ready for what&apos;s next?</p><div className="mt-5 grid items-end gap-10 lg:grid-cols-[1fr_auto]"><h2 className="max-w-3xl font-[family-name:var(--font-manrope)] text-5xl font-extrabold leading-[.94] tracking-[-.055em] md:text-7xl">Let&apos;s build an unfair digital advantage.</h2><a href="mailto:hello@nexoreya.com" className="group inline-flex shrink-0 items-center gap-4 rounded-full bg-[#0b1714] px-7 py-5 text-[11px] font-bold uppercase tracking-[.18em] text-white">Start a conversation <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a></div></div></section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-black/10 px-6 py-8 text-[10px] font-semibold uppercase tracking-[.2em] text-black/35 md:flex-row md:items-center md:justify-between lg:px-10"><span>© 2026 Nexoreya</span><span>AI-Powered Growth & Digital Transformation</span></footer>
    </main>
  );
}

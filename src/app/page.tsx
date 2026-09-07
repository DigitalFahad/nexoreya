'use client';

import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import { ConnectedIntelligence } from '@/components/connected-intelligence';
import { Footer, Navigation } from '@/components/site-shell';
import { Button, CaseStudiesSection, EquationSection, Eyebrow, FinalCTA, FlowSection, FounderSection, IntelligenceSection, MethodSection, MomentumSection, ProcessSection, ProofSection, SectionHeading, SystemsSection } from '@/components/home-sections';

export default function Home() {
  return <div className="min-h-screen bg-[#FAFAF8] text-[#151617]">
    <Navigation />
    <main>
      <section className="relative overflow-hidden border-b border-black/10 bg-[#FAFAF8]">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="container relative grid min-h-[calc(100svh-76px)] items-center gap-10 py-16 lg:grid-cols-[.93fr_1.07fr] lg:gap-0 lg:py-20">
          <div className="relative z-10 pb-8 lg:pr-8">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}><Eyebrow>AI-powered growth & digital transformation</Eyebrow></motion.div>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .08 }} className="mt-6 max-w-3xl font-[family-name:var(--font-manrope)] text-[clamp(4.25rem,8.6vw,8.7rem)] font-extrabold leading-[.83] tracking-[-.075em]">Growth,<br /><span className="text-[#151617]">Engineered.</span></motion.h1>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .2 }} className="mt-8 max-w-xl text-base leading-7 text-black/55 md:text-lg">We design and build the systems that connect strategy, AI, technology and execution into measurable business growth.</motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .3 }} className="mt-8 flex flex-wrap gap-3"><Button href="/contact">Book a Growth Strategy Session</Button><Button href="#process" secondary>Explore How We Work</Button></motion.div>
            <div className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-black/10 pt-5 text-[9px] font-bold uppercase tracking-[.18em] text-black/35"><span>Strategy</span><span>AI</span><span>Technology</span><span>Execution</span><span>Growth</span></div>
          </div>
          <motion.div initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: .12 }} className="relative lg:-mr-10"><ConnectedIntelligence /></motion.div>
        </div>
        <div className="absolute bottom-0 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[9px] font-bold uppercase tracking-[.2em] text-black/25 lg:flex"><ArrowDownRight size={13} /> Connected systems</div>
      </section>

      <MomentumSection />
      <FlowSection />
      <MethodSection />
      <SystemsSection />
      <EquationSection />
      <ProofSection />
      <CaseStudiesSection />
      <FounderSection />
      <ProcessSection />
      <IntelligenceSection />
      <FinalCTA />
    </main>
    <Footer />
  </div>;
}

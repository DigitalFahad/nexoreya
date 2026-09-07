import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { BrandMark, Footer, Navigation } from '@/components/site-shell';

export function PlaceholderPage({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <div className="min-h-screen bg-[#FAFAF8] text-[#151617]"><Navigation /><main className="container py-24 sm:py-32 lg:py-40"><Link href="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.14em] text-black/45 hover:text-black"><ArrowLeft size={13} /> Back to home</Link><div className="mt-20 max-w-4xl"><p className="eyebrow text-black/40">{eyebrow}</p><h1 className="mt-6 font-[family-name:var(--font-manrope)] text-[clamp(3.5rem,8vw,7.5rem)] font-extrabold leading-[.86] tracking-[-.07em]">{title}</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-black/50">{description}</p><div className="mt-10 flex flex-wrap gap-3"><Link href="/contact" className="inline-flex items-center gap-3 rounded-full bg-[#151617] px-6 py-4 text-[10px] font-bold uppercase tracking-[.14em] text-white">Book a Growth Strategy Session <ArrowUpRight size={14} /></Link><Link href="/" className="inline-flex items-center gap-3 rounded-full border border-black/15 px-6 py-4 text-[10px] font-bold uppercase tracking-[.14em]">Explore Nexoreya</Link></div></div></main><Footer /></div>;
}

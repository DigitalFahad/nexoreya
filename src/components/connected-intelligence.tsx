'use client';

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

const nodes = [
  { x: 18, y: 24, label: 'STRATEGY' },
  { x: 79, y: 22, label: 'AI' },
  { x: 82, y: 72, label: 'EXECUTION' },
  { x: 18, y: 75, label: 'DIGITAL' },
  { x: 50, y: 9, label: 'SYSTEMS' },
];

export function ConnectedIntelligence() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 60, damping: 22 });
  const sy = useSpring(y, { stiffness: 60, damping: 22 });
  const orbX = useTransform(sx, [-1, 1], [-22, 22]);
  const orbY = useTransform(sy, [-1, 1], [-18, 18]);

  useEffect(() => {
    if (reduceMotion) return;
    const node = ref.current;
    if (!node) return;
    const move = (event: MouseEvent) => {
      const r = node.getBoundingClientRect();
      x.set(Math.max(-1, Math.min(1, (event.clientX - (r.left + r.width / 2)) / (r.width / 2))));
      y.set(Math.max(-1, Math.min(1, (event.clientY - (r.top + r.height / 2)) / (r.height / 2))));
    };
    const leave = () => { x.set(0); y.set(0); };
    node.addEventListener('mousemove', move);
    node.addEventListener('mouseleave', leave);
    return () => { node.removeEventListener('mousemove', move); node.removeEventListener('mouseleave', leave); };
  }, [reduceMotion, x, y]);

  return <div ref={ref} className="relative mx-auto aspect-square w-full max-w-[620px] overflow-hidden rounded-[28px] bg-[#090A0A] lg:rounded-[36px]" aria-label="Connected Intelligence visualization showing strategy, AI, systems, digital and execution connected around growth">
    <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'linear-gradient(rgba(163,255,63,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(163,255,63,.08) 1px, transparent 1px)', backgroundSize: '54px 54px' }} />
    <motion.div style={{ x: reduceMotion ? 0 : orbX, y: reduceMotion ? 0 : orbY }} className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A3FF3F]/20 blur-3xl sm:h-64 sm:w-64" />
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <g fill="none" stroke="rgba(163,255,63,.3)" strokeWidth=".16">
        <path d="M18 24 L50 50 L79 22 M18 75 L50 50 L82 72 M50 9 L50 50 M18 24 L18 75 M79 22 L82 72" />
      </g>
      <g fill="rgba(163,255,63,.75)">{nodes.map(n => <circle key={n.label} cx={n.x} cy={n.y} r=".55" />)}<circle cx="50" cy="50" r=".8" /></g>
    </svg>
    <div className="absolute left-1/2 top-1/2 grid h-32 w-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#A3FF3F]/35 bg-[#111411]/85 text-center shadow-[0_0_80px_rgba(163,255,63,.1)] backdrop-blur-xl sm:h-40 sm:w-40">
      <div><span className="text-[8px] font-bold uppercase tracking-[.3em] text-[#A3FF3F]">Nexoreya</span><p className="mt-2 font-[family-name:var(--font-manrope)] text-base font-bold leading-tight text-white sm:text-xl">Connected<br />Intelligence</p></div>
    </div>
    {nodes.map((node, i) => <motion.div key={node.label} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${node.x}%`, top: `${node.y}%` }} animate={reduceMotion ? undefined : { y: [0, i % 2 ? -5 : 5, 0] }} transition={reduceMotion ? undefined : { duration: 4 + i * .5, repeat: Infinity, ease: 'easeInOut' }}><div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[.06] px-2.5 py-2 backdrop-blur-md sm:px-3"><span className="h-1.5 w-1.5 rounded-full bg-[#A3FF3F] shadow-[0_0_10px_#A3FF3F]" /><span className="text-[8px] font-bold tracking-[.16em] text-white/65 sm:text-[9px]">{node.label}</span></div></motion.div>)}
    <div className="absolute bottom-5 left-5 right-5 flex justify-between text-[8px] font-semibold uppercase tracking-[.18em] text-white/25 sm:left-7 sm:right-7"><span>Connect</span><span>Engineer</span><span>Measure</span></div>
  </div>;
}

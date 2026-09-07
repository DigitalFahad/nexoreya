'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

export function ConnectedIntelligence() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 55, damping: 20 });
  const sy = useSpring(y, { stiffness: 55, damping: 20 });
  const orbX = useTransform(sx, [-1, 1], [-28, 28]);
  const orbY = useTransform(sy, [-1, 1], [-20, 20]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const move = (event: MouseEvent) => {
      const r = node.getBoundingClientRect();
      x.set((event.clientX - (r.left + r.width / 2)) / (r.width / 2));
      y.set((event.clientY - (r.top + r.height / 2)) / (r.height / 2));
    };
    node.addEventListener('mousemove', move);
    return () => node.removeEventListener('mousemove', move);
  }, [x, y]);

  const nodes = [
    { left: '18%', top: '26%', label: 'STRATEGY' },
    { left: '78%', top: '23%', label: 'AI' },
    { left: '70%', top: '73%', label: 'AUTOMATION' },
    { left: '24%', top: '76%', label: 'DIGITAL' },
  ];

  return (
    <div ref={ref} className="relative mx-auto aspect-square w-full max-w-[620px] overflow-hidden rounded-[36px] border border-black/10 bg-[#0b1714] shadow-2xl shadow-black/10">
      <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'linear-gradient(rgba(184,255,57,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(184,255,57,.08) 1px, transparent 1px)', backgroundSize: '52px 52px' }} />
      <motion.div style={{ x: orbX, y: orbY }} className="hero-orb absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b8ff39]/80 opacity-80 shadow-[0_0_110px_45px_rgba(184,255,57,.22)]" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <g fill="none" stroke="rgba(184,255,57,.32)" strokeWidth=".18">
          <path d="M18 26 L50 50 L78 23 M24 76 L50 50 L70 73 M18 26 L24 76 M78 23 L70 73" />
        </g>
      </svg>
      <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#b8ff39]/50 bg-[#101f1a]/80 backdrop-blur-xl">
        <div className="text-center"><div className="text-[10px] font-semibold tracking-[.35em] text-[#b8ff39]">NEXOREYA</div><div className="mt-2 font-[family-name:var(--font-manrope)] text-xl font-bold text-white">Connected<br />Intelligence</div></div>
      </div>
      {nodes.map((node, i) => (
        <motion.div key={node.label} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: node.left, top: node.top }} animate={{ y: [0, i % 2 ? -7 : 7, 0] }} transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[.07] px-3 py-2 backdrop-blur-md"><span className="h-2 w-2 rounded-full bg-[#b8ff39] shadow-[0_0_12px_#b8ff39]" /><span className="text-[9px] font-bold tracking-[.22em] text-white/70">{node.label}</span></div>
        </motion.div>
      ))}
      <div className="absolute bottom-5 left-6 right-6 flex justify-between text-[9px] font-medium tracking-[.25em] text-white/35"><span>ORCHESTRATE</span><span>ACCELERATE</span><span>EVOLVE</span></div>
    </div>
  );
}

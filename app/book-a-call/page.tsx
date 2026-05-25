'use client';


import { motion, Variants } from 'framer-motion';
import { InlineWidget } from 'react-calendly';

/* ── Animation variants ── */
const heroEase = [0.16, 1, 0.3, 1] as const;

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [...heroEase] as [number, number, number, number] },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] },
  },
};

/* ── Trust signals ── */
const trustItems = [
  {
    icon: (
      <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    label: '15-Minute Call',
    desc: 'Quick, focused, no pressure.',
  },
  {
    icon: (
      <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    label: 'No Commitment',
    desc: 'Just a conversation.',
  },
  {
    icon: (
      <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
    label: 'Talk to a Strategist',
    desc: 'Not a sales rep.',
  },
];

export default function BookACall() {
  return (
    <main className="bg-black text-white overflow-hidden min-h-screen">



      <section className="pt-32 md:pt-44 pb-20 md:pb-32">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">

          {/* ── Header ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center mb-14 md:mb-20"
          >
            <motion.span
              variants={staggerItem}
              className="inline-flex items-center gap-2 bg-red-900/30 text-red-400 text-xs font-medium px-4 py-1.5 rounded-full border border-red-800/40 mb-8"
            >
              Schedule a Call
            </motion.span>

            <motion.h1
              variants={staggerItem}
              className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-white mb-5"
            >
              Let&apos;s Talk About{' '}
              <span className="bg-red-700 text-white px-3 py-0.5 rounded-xl inline-block">
                Your Brand.
              </span>
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-zinc-400 text-lg leading-relaxed max-w-xl mx-auto"
            >
              Pick a time that works for you. We&apos;ll spend 15 minutes learning about your
              goals and how we can help you grow.
            </motion.p>
          </motion.div>

          {/* ── Trust pills ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center justify-center gap-4 mb-14"
          >
            {trustItems.map((item) => (
              <motion.div
                key={item.label}
                variants={staggerItem}
                className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-3 hover:border-zinc-700 transition-colors duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-red-900/20 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <span className="text-white text-sm font-medium block">{item.label}</span>
                  <span className="text-zinc-500 text-xs">{item.desc}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Calendly widget ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.35 }}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl shadow-black/50"
          >
            {/* Thin red accent bar at top */}
            <div className="h-1 w-full bg-gradient-to-r from-red-700 via-red-600 to-red-800" />

            {/* Calendly inline widget */}
            <InlineWidget 
              url="https://calendly.com/medicisocial-info/15min" 
              styles={{ minWidth: '320px', height: '700px' }} 
            />
          </motion.div>

          {/* ── Footer note ── */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
            className="text-center text-zinc-600 text-sm mt-8"
          >
            Prefer to reach out directly?{' '}
            <a
              href="mailto:info@medicisocial.com"
              className="text-zinc-400 hover:text-white transition-colors duration-200 underline underline-offset-4"
            >
              info@medicisocial.com
            </a>
          </motion.p>

        </div>
      </section>
    </main>
  );
}

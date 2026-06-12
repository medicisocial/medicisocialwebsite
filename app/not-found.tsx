'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const heroEase = [0.16, 1, 0.3, 1] as const;

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: heroEase } },
};

const shortcuts = [
  { label: 'Homepage', href: '/', desc: 'Explore our strategy & creators.' },
  { label: 'Our Services', href: '/services', desc: 'Social, content, and web design.' },
  { label: 'Our Work', href: '/work', desc: 'See our case studies & media.' },
  { label: 'Contact Us', href: '/contact', desc: 'Get in touch to grow your brand.' },
];

export default function NotFound() {
  return (
    <div className="relative min-h-[85vh] overflow-hidden flex flex-col items-center justify-center text-center px-4 py-20 bg-black">
      {/* Background crimson radial glow */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(129,1,0,0.12)_0%,transparent_60%)] pointer-events-none" 
        aria-hidden="true"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-xl w-full"
      >
        {/* Giant textured 404 */}
        <motion.div variants={staggerItem} className="select-none">
          <span className="text-[10rem] md:text-[13rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-950 leading-none tracking-tighter">
            404
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1 
          variants={staggerItem}
          className="text-3xl md:text-4xl font-serif text-white tracking-tight mt-6"
        >
          Looks Like You&apos;re Lost.
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          variants={staggerItem}
          className="text-zinc-400 mt-3 max-w-sm mx-auto text-sm leading-relaxed"
        >
          The page you are looking for doesn&apos;t exist, or has been moved to a new destination.
        </motion.p>

        {/* Shortcuts grid */}
        <motion.div 
          variants={staggerItem}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto mt-10 w-full text-left"
        >
          {shortcuts.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group block p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-red-900/40 hover:bg-zinc-900/60 hover:scale-[1.01] transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-white text-sm font-medium group-hover:text-red-500 transition-colors duration-300">
                  {item.label}
                </span>
                <svg 
                  className="w-4 h-4 text-zinc-600 group-hover:text-red-500 group-hover:translate-x-1 transition-all duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <span className="text-zinc-500 text-xs leading-normal">
                {item.desc}
              </span>
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

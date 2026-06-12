'use client';

import { useEffect } from 'react';
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

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an external service (e.g. Sentry) in production
    console.error(error);
  }, [error]);

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
        className="relative z-10 max-w-md w-full"
      >
        {/* Animated Warning Circle */}
        <motion.div
          variants={staggerItem}
          className="w-20 h-20 bg-red-950/40 border border-red-800/40 rounded-full flex items-center justify-center mx-auto mb-6 text-red-500 shadow-lg shadow-red-950/20"
        >
          <svg className="w-10 h-10 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.008v.008H12v-.008z" />
          </svg>
        </motion.div>

        {/* Heading */}
        <motion.h1 
          variants={staggerItem}
          className="text-3xl md:text-4xl font-serif text-white tracking-tight"
        >
          Something Went Wrong.
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          variants={staggerItem}
          className="text-zinc-400 mt-3 max-w-sm mx-auto text-sm leading-relaxed"
        >
          An unexpected server or rendering error occurred. Our technical team has been notified.
        </motion.p>

        {/* Action CTAs */}
        <motion.div 
          variants={staggerItem}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10 w-full"
        >
          <button
            onClick={reset}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-red-700 hover:bg-red-600 text-white rounded-full hover:scale-[1.02] transition-all duration-300 text-sm font-medium cursor-pointer"
          >
            Try Again
          </button>
          
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/40 text-white rounded-full hover:scale-[1.02] transition-all duration-300 text-sm font-medium cursor-pointer"
          >
            Return Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

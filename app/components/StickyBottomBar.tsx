'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function StickyBottomBar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  // Hide on conversion pages (Contact, Book a Call)
  const isConversionPage = pathname === '/contact' || pathname === '/book-a-call';

  useEffect(() => {
    if (isConversionPage) {
      setIsVisible(false);
      return;
    }

    const handleScroll = () => {
      // Show after scrolling 150px
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount in case page is loaded scrolled down
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isConversionPage]);

  if (isConversionPage) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-black/80 backdrop-blur-lg border-t border-zinc-800/80 px-5 py-4 pb-[calc(16px+env(safe-area-inset-bottom))] shadow-2xl shadow-black/80 pointer-events-auto"
        >
          <div className="flex items-center gap-3 w-full max-w-md mx-auto">
            <Link
              id="sticky-btn-contact"
              href="/contact"
              className="flex-1 py-3.5 text-center border border-zinc-700/80 bg-zinc-900/60 text-white text-sm font-semibold rounded-full hover:bg-zinc-800 transition-colors active:scale-[0.98] active:bg-zinc-900/80 duration-150 touch-manipulation contact-cta-click select-none"
            >
              Inquire Now
            </Link>
            <Link
              id="sticky-btn-book-call"
              href="/book-a-call"
              className="flex-1 py-3.5 text-center bg-red-700 text-white text-sm font-semibold rounded-full hover:bg-red-600 transition-colors active:scale-[0.98] active:bg-red-800 duration-150 touch-manipulation book-call-cta-click select-none"
            >
              Book a Call
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

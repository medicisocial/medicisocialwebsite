'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const heroEase = [0.16, 1, 0.3, 1] as const;

export default function TermsClient() {
  return (
    <main className="bg-black text-white overflow-hidden min-h-screen relative">
      {/* Background crimson radial glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(circle_at_center,rgba(129,1,0,0.06)_0%,transparent_60%)] pointer-events-none z-0" 
        aria-hidden="true"
      />

      <section className="relative z-10 pt-32 md:pt-44 pb-20 md:pb-28">
        <div className="max-w-3xl mx-auto px-5">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: heroEase }}
            className="mb-12"
          >
            <span className="inline-flex items-center gap-2 bg-red-900/30 text-red-400 text-xs font-medium px-4 py-1.5 rounded-full border border-red-800/40 mb-6">
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-serif">
              Terms & Conditions
            </h1>
            <p className="text-zinc-500 text-sm">
              Last Updated: June 12, 2026
            </p>
          </motion.div>

          {/* Content block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: heroEase }}
            className="prose prose-invert max-w-none text-zinc-400 text-sm md:text-base leading-relaxed flex flex-col gap-8"
          >
            <div>
              <p>
                Welcome to the website of Medici Social (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By accessing or using our website, you agree to comply with and be bound by the following Terms & Conditions. Please read them carefully.
              </p>
            </div>

            <hr className="border-zinc-800" />

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">1. Use of the Site</h2>
              <p>
                This website is provided for informational and B2B marketing consultation purposes. You agree to use this site only for lawful purposes and in a manner that does not infringe upon the rights of, restrict, or inhibit the use of this site by any third party.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">2. Intellectual Property</h2>
              <p>
                All content, trademarks, logos, case studies, graphics, design assets, and code displayed on this website are the intellectual property of Medici Social and are protected by copyright and intellectual property laws. You may not copy, reproduce, distribute, or modify any materials without our prior written consent.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">3. B2B Inquiries & Communication</h2>
              <p className="mb-4">
                By submitting our contact or discovery forms, you represent that all information provided is accurate and complete. You explicitly agree that:
              </p>
              <ul className="list-disc list-inside pl-4 flex flex-col gap-2">
                <li>We may contact you by email, phone, or SMS regarding your inquiry.</li>
                <li>You have the right to opt out of promotional communications at any time.</li>
                <li>Providing contact info is voluntary and consent is not required to purchase any services.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">4. Limitation of Liability</h2>
              <p>
                The information on this website is provided on an &quot;as is&quot; basis. While we strive to maintain accurate information, we make no representations or warranties of any kind regarding the completeness, accuracy, or availability of the website content. Medici Social shall not be liable for any direct or indirect damages arising out of your use of or inability to access this site.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">5. Governing Law</h2>
              <p>
                These Terms & Conditions are governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law principles. Any legal action arising from these terms shall be filed in the courts of Houston, Harris County, Texas.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">6. Updates to Terms</h2>
              <p>
                We reserve the right to modify these Terms & Conditions at any time. Any updates will be posted on this page with an updated &quot;Last Updated&quot; timestamp. Your continued use of the site after updates are posted constitutes your agreement to the modified terms.
              </p>
            </div>

            <div className="pt-8 border-t border-zinc-800 flex items-center justify-between">
              <Link
                href="/"
                className="text-sm text-zinc-400 hover:text-red-500 transition-colors duration-200 flex items-center gap-2"
              >
                ← Return to Homepage
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-zinc-400 hover:text-red-500 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

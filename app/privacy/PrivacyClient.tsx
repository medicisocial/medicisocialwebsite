'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const heroEase = [0.16, 1, 0.3, 1] as const;

export default function PrivacyClient() {
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
              Privacy Policy
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
                At Medici Social, we respect your privacy and are committed to protecting any personal data you share with us. This Privacy Policy describes how we collect, use, and safeguard your information when you visit our website or inquire about our B2B digital marketing services.
              </p>
            </div>

            <hr className="border-zinc-800" />

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">1. Information We Collect</h2>
              <p className="mb-4">
                We only collect information that you voluntarily provide directly to us through our contact forms, email communications, and appointment scheduling tools. This includes:
              </p>
              <ul className="list-disc list-inside pl-4 flex flex-col gap-2">
                <li><strong className="text-white">Contact details:</strong> Name, business email address, phone number.</li>
                <li><strong className="text-white">Business details:</strong> Company name, website URL, social media profiles, and marketing goals.</li>
                <li><strong className="text-white">Communications:</strong> Any message details, timeline expectations, or inquiry specifics submitted.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">2. Tracking Cookies and Pixels</h2>
              <p className="mb-4">
                We use tracking pixels (such as Meta/Facebook Pixel) to analyze site traffic, understand user engagement, and optimize our B2B advertising campaigns. These tools collect technical data, including:
              </p>
              <ul className="list-disc list-inside pl-4 flex flex-col gap-2">
                <li>IP address, browser type, operating system.</li>
                <li>Pages visited and actions taken on our site (e.g., loading a page or completing our contact form).</li>
              </ul>
              <p className="mt-4">
                You can choose to accept or decline cookie tracking. Clicking &quot;Decline&quot; on our cookie consent banner will prevent cookies and pixels from tracking your browsing activity on our website.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">3. How We Use Your Information</h2>
              <p className="mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside pl-4 flex flex-col gap-2">
                <li>Respond to your service requests, project inquiries, or scheduling bookings.</li>
                <li>Provide B2B digital marketing proposals and consultation services.</li>
                <li>Improve our website, services, and advertising campaigns.</li>
                <li>Send transactional email or SMS notifications related to scheduled discovery calls.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">4. Information Sharing and Disclosure</h2>
              <p>
                We do not sell, rent, or lease your contact information or business data to third parties. We only share information with trusted third-party service providers (such as Calendly for appointment bookings) to perform necessary business actions on our behalf. All service providers are bound by strict confidentiality terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">5. Data Security</h2>
              <p>
                We implement standard administrative and technical security measures (including SSL encryption) to protect your personal and business data against unauthorized access, loss, or alteration. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">6. Contact Us</h2>
              <p>
                If you have any questions or concerns about our Privacy Policy or data practices, please reach out to us at{' '}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'mailto:' + 'info' + '@' + 'medicisocial.com';
                  }}
                  className="text-red-500 hover:text-red-400 transition-colors underline"
                >
                  info&#64;medicisocial.com
                </a>
                .
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
                href="/terms"
                className="text-sm text-zinc-400 hover:text-red-500 transition-colors duration-200"
              >
                Terms & Conditions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

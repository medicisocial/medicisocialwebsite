'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

/* ── Animation variants (from UI_UX_SPEC.md) ── */
const heroEase = [0.16, 1, 0.3, 1] as const;
const scrollEase = [0.21, 0.47, 0.32, 0.98] as const;

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [...heroEase] as [number, number, number, number] } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [...scrollEase] as [number, number, number, number] } },
};

/* ── Contact info data ── */
const contactInfo = [
  {
    label: 'Response Time',
    value: 'Within 24 hours',
    href: null,
    icon: (
      <svg className="w-4 h-4 text-red-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
];

/* ── Form field config ── */
const inputClasses =
  'w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3.5 text-white text-base placeholder:text-zinc-500 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-red-600/30 transition-colors duration-200';

export default function ContactClient() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formLoadTime, setFormLoadTime] = useState<number>(0);
  const [selectedService, setSelectedService] = useState<string>('');

  useEffect(() => {
    setFormLoadTime(Date.now());
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Contact');
    }
  }, []);

  return (
    <main className="bg-black text-white overflow-hidden">
      <section className="pt-32 md:pt-44 pb-20 md:pb-28">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

            {/* ───────── LEFT COLUMN — Copy & Info ───────── */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {/* Section pill */}
              <motion.span
                variants={staggerItem}
                className="inline-flex items-center gap-2 bg-red-900/30 text-red-400 text-xs font-medium px-4 py-1.5 rounded-full border border-red-800/40 mb-8"
              >
                Get in Touch
              </motion.span>

              {/* H1 */}
              <motion.h1
                variants={staggerItem}
                className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white mb-6"
              >
                Let&apos;s Build Something Timeless.
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={staggerItem}
                className="text-zinc-400 text-lg leading-relaxed max-w-md mb-10"
              >
                Connect with us to discuss your brands next move.
              </motion.p>

              {/* Contact Info List */}
              <motion.div variants={staggerItem} className="flex flex-col gap-6 mt-4 mb-12">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <span className="text-zinc-500 text-xs uppercase tracking-wider block">{info.label}</span>
                      {info.href ? (
                        <a
                          id="email-cta-contact"
                          href={info.href}
                          className="text-white hover:text-red-500 font-medium transition-colors duration-200 email-cta-click mailto-link"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-white font-medium">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Social links */}
              <motion.div variants={staggerItem} className="pt-8 border-t border-zinc-800">
                <span className="text-zinc-500 text-xs uppercase tracking-wider block mb-4">Follow us</span>
                <div className="flex items-center gap-4">
                  {[
                    { name: 'Instagram', href: 'https://www.instagram.com/medicisocial' },
                    { name: 'Facebook', href: 'https://www.facebook.com/medicisocial' },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 text-sm hover:text-red-500 transition-colors duration-200"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* ───────── RIGHT COLUMN — Form ───────── */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
            >
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-10 min-h-[550px] flex flex-col justify-center transition-all duration-300">
                {formStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: heroEase }}
                    className="text-center py-10 flex flex-col items-center justify-center"
                  >
                    {/* Animated Checkmark Circle */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.15, type: 'spring', stiffness: 200, damping: 15 }}
                      className="w-20 h-20 bg-red-950/40 border border-red-800/40 rounded-full flex items-center justify-center mb-6 text-red-500 shadow-lg shadow-red-950/20"
                    >
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <motion.path
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ delay: 0.35, duration: 0.4, ease: 'easeOut' }}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Message Received!</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mx-auto mb-8">
                      Thank you for reaching out. We&apos;ve received your message and our team will get back to you within 24 hours.
                    </p>
                    
                    <button
                      onClick={() => {
                        setFormStatus('idle');
                        setSelectedService('');
                      }}
                      className="inline-flex items-center gap-2 text-zinc-400 hover:text-white text-xs uppercase tracking-wider font-semibold transition-colors duration-200"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                      </svg>
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="text-xl font-semibold text-white mb-1">Send Us A Message</h2>
                    <p className="text-zinc-500 text-sm mb-8">Fill out the form below and we&apos;ll be in touch.</p>

                    <form
                      id="contact-form"
                      onSubmit={async (e) => {
                        e.preventDefault();
                        setFormStatus('submitting');
                        const form = e.currentTarget;
                        const honeypot = (form.elements.namedItem('website_url') as HTMLInputElement)?.value;
                        
                        // Client-side spam detection (honeypot + speed check)
                        const submissionTime = Date.now();
                        const durationInSeconds = formLoadTime ? (submissionTime - formLoadTime) / 1000 : 0;
                        const isSpam = honeypot || (formLoadTime && durationInSeconds < 3);

                        if (isSpam) {
                          // Simulate submission delay and silently succeed
                          setTimeout(() => {
                            form.reset();
                            setSelectedService('');
                            setFormStatus('success');
                          }, 1000);
                          return;
                        }

                        const formData = new FormData(form);
                        try {
                          const response = await fetch('/api/contact', {
                            method: 'POST',
                            body: formData,
                          });
                          if (response.ok) {
                            setFormStatus('success');
                            if (typeof window !== 'undefined' && (window as any).fbq) {
                              (window as any).fbq('track', 'Lead');
                            }
                            form.reset();
                            setSelectedService('');
                          } else {
                            setFormStatus('error');
                          }
                        } catch (err) {
                          setFormStatus('error');
                        }
                      }}
                      className="space-y-5"
                    >
                      {/* Honeypot — invisible to real users */}
                      <div className="absolute w-0 h-0 opacity-0 -z-10 pointer-events-none overflow-hidden" aria-hidden="true">
                        <input
                          type="text"
                          name="website_url"
                          tabIndex={-1}
                          autoComplete="off"
                        />
                      </div>
                      {/* Name + Email row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="contact-name" className="text-zinc-400 text-xs uppercase tracking-wider block mb-2">
                            Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="contact-name"
                            name="name"
                            type="text"
                            placeholder="Name"
                            required
                            autoComplete="name"
                            className={inputClasses}
                          />
                        </div>
                        <div>
                          <label htmlFor="contact-email" className="text-zinc-400 text-xs uppercase tracking-wider block mb-2">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="contact-email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            required
                            autoComplete="email"
                            className={inputClasses}
                          />
                        </div>
                      </div>

                      {/* Company + Phone row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="contact-company" className="text-zinc-400 text-xs uppercase tracking-wider block mb-2">
                            Company <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="contact-company"
                            name="company"
                            type="text"
                            placeholder="Company Name"
                            required
                            autoComplete="organization"
                            className={inputClasses}
                          />
                        </div>
                        <div>
                          <label htmlFor="contact-phone" className="text-zinc-400 text-xs uppercase tracking-wider block mb-2">
                            Phone <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="contact-phone"
                            name="phone"
                            type="tel"
                            placeholder="Phone Number"
                            required
                            autoComplete="tel"
                            className={inputClasses}
                          />
                        </div>
                      </div>

                      {/* What Service Are You Interested In? */}
                      <div>
                        <label htmlFor="contact-service" className="text-zinc-400 text-xs uppercase tracking-wider block mb-2">
                          What can we help you with?
                        </label>
                        <select
                          id="contact-service"
                          name="service"
                          className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23a1a1aa%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.22%208.22a.75%20.75%200%200%201%201.06%200L10%2011.94l3.72-3.72a.75%20.75%200%201%201%201.06%201.06l-4.25%204.25a.75%20.75%200%200%201-1.06%200L5.22%209.28a.75%20.75%200%200%201%200-1.06z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.1rem_auto] bg-[right_1rem_center] bg-no-repeat pr-10 ${
                            selectedService === '' ? '!text-zinc-500' : 'text-white'
                          }`}
                          value={selectedService}
                          onChange={(e) => setSelectedService(e.target.value)}
                        >
                          <option value="" disabled className="text-zinc-500 bg-zinc-950">Select a service...</option>
                          <option value="social-media" className="text-white bg-zinc-950">Social Media Management</option>
                          <option value="content-creation" className="text-white bg-zinc-950">Content Creation & Branding</option>
                          <option value="paid-ads" className="text-white bg-zinc-950">Paid Advertising</option>
                          <option value="web-development" className="text-white bg-zinc-950">Web Design & Development</option>
                          <option value="multiple" className="text-white bg-zinc-950">Multiple Services / All of the Above</option>
                          <option value="other" className="text-white bg-zinc-950">Other / Strategy Session</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="contact-message" className="text-zinc-400 text-xs uppercase tracking-wider block mb-2">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          required
                          rows={5}
                          placeholder="Tell us about your project, goals, and timeline..."
                          className={`${inputClasses} resize-none`}
                        />
                      </div>

                      {/* Where Have You Seen Us? */}
                      <div>
                        <span className="text-zinc-400 text-xs uppercase tracking-wider block mb-3">
                          Where Have You Seen Us?
                        </span>
                        <div className="grid grid-cols-2 gap-3">
                          {['Facebook', 'Instagram', 'TikTok', 'LinkedIn', 'YouTube', 'Google'].map((platform) => (
                            <label key={platform} className="flex items-center gap-3 cursor-pointer group">
                              <input
                                type="checkbox"
                                name="referral"
                                value={platform.toLowerCase()}
                                className="w-4 h-4 rounded border-zinc-700 bg-zinc-900 text-red-600 focus:ring-red-600/30 focus:ring-offset-0 focus:ring-1 cursor-pointer accent-red-600"
                              />
                              <span className="text-sm text-zinc-400 group-hover:text-red-500 transition-colors duration-200">{platform}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Submit */}
                      <button
                        id="contact-form-submit-btn"
                        type="submit"
                        disabled={formStatus === 'submitting'}
                        className="w-full flex justify-center items-center gap-2 bg-red-700 text-white text-sm font-medium py-4 rounded-full hover:bg-red-600 hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 transition-all duration-300 mt-2 contact-submit-click touch-manipulation"
                      >
                        {formStatus === 'submitting' ? (
                          <>
                            <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          'Send Message'
                        )}
                      </button>

                      {formStatus === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-red-950/20 border border-red-900/40 rounded-lg p-4 flex items-center gap-3 mt-4"
                        >
                          <svg className="w-5 h-5 text-red-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                          </svg>
                          <p className="text-red-400 text-xs leading-normal">
                            Oops! There was a problem sending your message. Please verify your connection and try again.
                          </p>
                        </motion.div>
                      )}

                      <p className="text-zinc-400 text-xs text-center mt-4 leading-relaxed max-w-md mx-auto">
                        By submitting, you agree to receive email and SMS communications from Medici Social at the contact info provided. Consent is not a condition of purchase. Message/data rates may apply. View our{' '}
                        <Link href="/privacy" className="underline hover:text-red-500 transition-colors duration-200">
                          Privacy Policy
                        </Link>{' '}
                        and{' '}
                        <Link href="/terms" className="underline hover:text-red-500 transition-colors duration-200">
                          Terms & Conditions
                        </Link>
                        .
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
}

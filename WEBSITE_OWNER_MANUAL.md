# Website Owner's Manual — Medici Social

Welcome to your official Website Owner's Manual. This guide provides a premium, non-technical breakdown of the complete feature set, custom components, and optimization audits built into your website. It details how the system is structured, how it remains secure and compliant, and how to make updates.

---

## 1. Executive Summary & Tech Stack

Your website is custom-engineered using modern, industry-leading technologies optimized for speed, reliability, and security:

*   **Next.js (v16.2):** The server-side framework. It pre-renders pages into static HTML on the server. Search engines (like Google) can parse the site instantly, giving you a competitive edge in search rankings.
*   **Tailwind CSS:** A premium utility-first CSS engine. It compiles a highly optimized stylesheet containing only the classes actually used, reducing page load times compared to traditional websites.
*   **Vercel Hosting:** Your codebase is optimized for deployment on the Vercel Edge Network. This delivers your pages from servers closest to your visitors, leading to near-instantaneous visual loads.
*   **AVIF & WebP Image Compression:** Image delivery is optimized to automatically compress assets into `AVIF` (and fallback `WebP`) formats, shrinking visual asset payloads by 50–70% while preserving high-definition details.

---

## 2. Page & Layout Architecture

The site structure is divided into distinct, responsive pages matching your marketing strategy:

*   **Homepage (`/`):** Splits text copy and a vertical video showcase. Includes a client logo slider, a core services summary, a testimonial carousel, a custom 3D card deck carousel (on mobile), and a final call-to-action (CTA).
*   **Services (`/services`):** Details your core business verticals: Social Media Marketing, Content Creation, Web Design & SEO, and AI Integrations, with individual callouts for deliverables.
*   **Work (`/work`):** Features premium, full-width case studies (Plume, Arco Fit, ARA Med Spa) with callouts highlighting performance data and project scopes.
*   **About (`/about`):** Contains your brand story, core values in an asymmetric bento grid, and editorial team profile layouts.
*   **Contact (`/contact`):** A customized marketing lead form, designed for maximum B2B prospect conversion.
*   **Book a Call (`/book-a-call`):** Integrates Calendly directly for seamless booking of consultation calls.
*   **Privacy Policy (`/privacy`):** Explains data handling, pixel tracking policies, and consent management.
*   **Terms & Conditions (`/terms`):** Lists intellectual property ownership, governed laws, and user conditions.

---

## 3. SEO, Schema, & Metadata Audits

Search Engine Optimization (SEO) is built directly into every page layout:

*   **Semantic HTML Tags:** Every page is audited to contain exactly one primary `<h1>` heading (for optimal indexing) and logical sub-heading hierarchies (`<h2>`, `<h3>`).
*   **Local SEO & Geo-Targeting:** Symmetrical page descriptions target Fulshear, Texas, and the Houston metro market to capture local search intent for digital marketing, web design, and SEO services.
*   **Structured Schema Data (`JSON-LD`):** Implements automated Schema.org configurations (via [SchemaOrg.tsx](file:///d:/websites/medici-new/medicisocialwebsite/app/components/SchemaOrg.tsx)). This injects metadata about your marketing agency, physical location, opening hours, contact details, and social links directly into page headers for search engine crawlers.
*   **OpenGraph & Twitter Cards:** Complete metadata configurations for social platforms (such as Facebook, Instagram, LinkedIn, and Twitter) are set up. When links are shared, they display your custom brand image (`og-image.webp`), descriptions, and titles.
*   **Favicons & Apple Icons:** Implements Next.js dynamic icon handling, delivering high-resolution `favicon.ico`, `icon.tsx` (PNG), and `apple-icon.tsx` formats for bookmarks and mobile home screens.
*   **Search Engine Configs:** An automated [sitemap.ts](file:///d:/websites/medici-new/medicisocialwebsite/app/sitemap.ts) registers all active paths (including `/privacy` and `/terms`) to Google, while [robots.ts](file:///d:/websites/medici-new/medicisocialwebsite/app/robots.ts) governs search crawler rules.

---

## 4. Custom Components & Interactive Ergonomics

We built premium, interactive elements tailored for touchscreens and desktop viewports:

*   **Interactive FAQ Accordion:** A custom, keyboard-accessible accordion component ([FaqAccordion.tsx](file:///d:/websites/medici-new/medicisocialwebsite/app/components/FaqAccordion.tsx)) that displays answers with smooth height transitions and dynamic toggle controls.
*   **Testimonial Slider:** An animated carousel ([TestimonialCarousel.tsx](file:///d:/websites/medici-new/medicisocialwebsite/app/components/TestimonialCarousel.tsx)) that rotates quotes every 5 seconds with slide animations and accessible dot selectors.
*   **3D Deck Carousel:** On mobile devices, a touch-responsive 3D cards carousel ([DepthDeckCarousel.tsx](file:///d:/websites/medici-new/medicisocialwebsite/app/components/DepthDeckCarousel.tsx)) allows users to swipe through work highlights with depth-scaling transitions.
*   **Mobile Sticky Action Bar:** A floating bottom bar ([StickyBottomBar.tsx](file:///d:/websites/medici-new/medicisocialwebsite/app/components/StickyBottomBar.tsx)) displays primary CTAs directly in the user's natural thumb zone on mobile screens. It automatically hides on conversion pages to maximize readability.
*   **iOS Touch & Zoom Optimizations:**
    *   Form input sizes are locked to a minimum of 16px to prevent mobile Safari from zooming in on focus.
    *   Tap targets are sized to at least 48x48 pixels.
    *   Buttons use the `touch-manipulation` CSS rule to bypass mobile double-tap delays.
    *   Viewport sizes use dynamic heights (`dvh` and `min-h-dvh`) to prevent Safari's top/bottom browser bars from clipping page content.

---

## 5. B2B Contact Form & Conversion Logic

The contact form in [ContactClient.tsx](file:///d:/websites/medici-new/medicisocialwebsite/app/contact/ContactClient.tsx) is optimized for B2B lead generation:

*   **Comprehensive Lead Fields:** Asks for required name, email, phone number, and company, along with service interests and custom project messages.
*   **Asterisk Validation:** Symmetrical labels display required indicator asterisks (`*`) in high-contrast red.
*   **State-Aware Fields:** Dropdowns and text areas are linked to state trackers, displaying muted placeholder colors (`text-zinc-500`) when empty, and switching to clean white text upon selection.
*   **Submit Feedback:** Submit buttons display animated loading spinners during processing, and transition into animated checkmarks upon completion.
*   **Email Security:** Direct email links (such as on the booking page) use dynamic character code obfuscation to hide raw text strings from scrapers, preventing spam harvesting.

---

## 6. Security, Spam Protection, & HIPAA Audit

The site is secure and complies with web privacy standards:

*   **Anti-Spam Bot Honeypot:** The contact form is integrated with an invisible "honeypot" field (`website_url`). Automated spammers fill this hidden field. The server interceptor ([route.ts](file:///d:/websites/medici-new/medicisocialwebsite/app/api/contact/route.ts)) catches it and stops it from using your Formspree quotas.
*   **Speed Submission Blocks:** If a form is filled and submitted in less than 3 seconds (indicating a bot script), the client-side logic resets the form without making server requests.
*   **Content Security Policy (CSP):** Header configurations in [next.config.ts](file:///d:/websites/medici-new/medicisocialwebsite/next.config.ts) restrict script, stylesheet, and frame loadings to verified, secure origins (such as Vercel, Facebook Pixel, and Calendly).
*   **HIPAA Audit compliance:** The website is a B2B marketing channel and does not collect or store Protected Health Information (PHI). Standard form submissions do not require medical histories.
*   **Double-Opt-In Disclosures:** A clear consent notice beneath the contact form details that users agree to receive email/SMS communications at the contact info provided, meeting CAN-SPAM and TCPA compliance.

---

## 7. Analytics & Ads Conversion Tracking

The website is integrated with tracking events to analyze and optimize marketing campaigns:

*   **Global Meta Pixel:** The Meta/Facebook Pixel is loaded globally (via `layout.tsx`) to track traffic.
*   **Granular Conversion Events:** Key actions trigger custom tracking callbacks:
    *   **`PageView`:** Fires on every loaded URL.
    *   **`Contact`:** Fires when the contact form is successfully submitted.
    *   **`ViewContent`:** Fires when visitors navigate to the Services or About pages.
    *   **`InitiateBooking`:** Fires when a visitor loads the Book a Call page.
    *   **`Schedule`:** Listeners detect when a visitor schedules a call inside the Calendly widget iframe, immediately triggering an ads conversion tracking callback.

---

## 8. Error Pages & UX Recovery

Custom, user-centric error pages are configured to prevent visitor bounce:

*   **Textured 404 Screen (`not-found.tsx`):** Displays a large, textured "404" heading, Playfair Display serif fonts, a radial crimson backdrop glow, and a grid of links (Home, Services, Work, Contact) to help users find their way.
*   **Error Boundary Screen (`error.tsx`):** Catches code errors gracefully, rendering an animated warning indicator, side-by-side buttons to retry loading, or links to return home.

---

## 9. How to Make Updates

Because the website is pre-rendered for maximum speed, updates are committed directly into the repository. If you are comfortable editing files on GitHub, here is where standard copy is located:

### Copy & Text
*   **Service Card Lists:** Modify the `services` array at the top of [ServicesClient.tsx](file:///d:/websites/medici-new/medicisocialwebsite/app/services/ServicesClient.tsx).
*   **Case Studies details:** Modify the `caseStudies` array in [HomeClient.tsx](file:///d:/websites/medici-new/medicisocialwebsite/app/HomeClient.tsx) or [WorkClient.tsx](file:///d:/websites/medici-new/medicisocialwebsite/app/work/WorkClient.tsx).
*   **Team Bio Descriptions:** Edit the `team` array in [AboutClient.tsx](file:///d:/websites/medici-new/medicisocialwebsite/app/about/AboutClient.tsx).
*   **FAQ Questions:** Edit the `faqs` list in [FaqAccordion.tsx](file:///d:/websites/medici-new/medicisocialwebsite/app/components/FaqAccordion.tsx).

### Global Spacing & Themes
*   **CSS Style Tokens:** Colors, marquee scroll animations, custom selection highlights, and GPU animation helpers are defined in [globals.css](file:///d:/websites/medici-new/medicisocialwebsite/app/globals.css).
*   **Tailwind Extensions:** Font mappings and custom theme colors are configured in [tailwind.config.js](file:///d:/websites/medici-new/medicisocialwebsite/tailwind.config.js).

*Need help? If you are not comfortable making code modifications, simply contact your web developer or agency support to commit these changes on your behalf.*

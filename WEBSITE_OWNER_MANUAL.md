# Website Owner's Manual — Medici Social

Welcome to your new website! This manual is a non-technical, agency-grade guide designed to help you understand your website's technology, manage content updates, and review its built-in security, compliance, and performance optimizations.

---

## 1. Website Overview & Technology Stack

Your website is built on a modern, enterprise-grade architecture that ensures lightning-fast speed, robust security, and dynamic responsive capabilities:

- **Next.js (React Framework):** The core engine of your site. Next.js compiles pages into pre-rendered HTML on the server, which means search engines (like Google) can read your content instantly for excellent SEO rankings.
- **Tailwind CSS:** A premium utility styling framework. It allows us to create beautiful layouts, smooth custom gradients, and visual effects without loading large, bloated CSS stylesheets.
- **Vercel Hosting:** Your site is deployed on the Vercel Edge Network. This means visitors are served copy from servers closest to their geographical location, enabling near-instant load times.
- **Modern Image Formats (AVIF & WebP):** The website automatically compresses and serves images in `AVIF` or `WebP` formats. These formats are up to 70% smaller than traditional JPEGs, dramatically saving mobile data bandwidth for your visitors.

---

## 2. How to Make Updates

Because your site is pre-rendered for maximum speed, updates are made directly in the codebase. This ensures there is no slow database loading or insecure WordPress plugins. 

If you are comfortable editing files in the repository or using GitHub, here is where standard details are located:

### Updating Contact Details & Services
- **Services Details:** The service cards and deliverables shown on the Services page are configured in the data block at the top of `app/services/ServicesClient.tsx`.
- **Contact Page Form Options:** The list of service checkboxes and dropdown options are found in the fields array inside `app/contact/ContactClient.tsx`.
- **About Page Team Details:** To edit bio text or add team members, modify the `team` array in `app/about/AboutClient.tsx`.

### Changing Hours, Email, or Social Media
- **Footer Links & Copyright:** The links, social profiles, and copyright info at the bottom of the site are in `app/components/Footer.tsx`.
- **Primary CTAs:** The booking links (to Calendly) and contact page links are integrated in `app/components/Navbar.tsx` and `app/components/StickyBottomBar.tsx`.

*Need help? If you are not comfortable making code changes, simply contact your web developer or agency support to commit these text changes on your behalf.*

---

## 3. Speed & Performance Optimizations

Your website has been audited and tuned to meet the highest industry performance standards:

- **Image & Asset Priority:** The main brand logo in the header uses the Next.js `priority` loading tag, forcing the browser to fetch it first.
- **Video Preloads & Poster Images:** The homepage hero background video is optimized with preloading and a static fallback thumbnail (`hero-poster.webp`). This avoids blank screens or container flashes during loading and reduces Largest Contentful Paint (LCP) times.
- **System Fonts Swap:** Web typography relies on the Next.js font system using the `display: "swap"` attribute. This loads system fonts instantly and swaps in your custom typography once downloaded, preventing text flickering (FOIT) or layout jumps.

---

## 4. Mobile Ergonomics & Tap Targets

More than 60% of your visitors will view the site from a smartphone. We have built-in responsive logic to ensure a seamless mobile experience:

- **Thumb Zone Action Bar:** On mobile viewports, a sticky, glassmorphic action bar floats at the bottom of the screen. This places your primary calls to action ("Inquire Now" and "Book a Call") directly in the user's natural thumb zone. It automatically hides on conversion pages (`/contact` and `/book-a-call`) to prevent screen clutter.
- **Safe Area Margins:** The mobile menu and bottom action bar respect iOS/Android safe area layout guides, ensuring they never overlap home indicators or system navigation bars.
- **Instant Tap Response:** Touch targets (like the hamburger menu button) are sized to at least 48x48 pixels. They utilize the CSS `touch-manipulation` property, which completely bypasses mobile double-tap delays for instant touch feedback.
- **Prevent Form Zooming:** Form input text fields are set to `text-base` (16px) font sizes. This prevents iPhones from forcefully zooming into fields when focused, keeping your layout intact.

---

## 5. Privacy, Compliance & Security

Security and legal compliance are built directly into your website's codebase:

- **Spam Bot Protection:** The contact page includes a server-side "honeypot" field. This invisible input intercepts automated spam bots. If filled, it immediately halts submission without forwarding the spam to your email quota.
- **Legal Route Coverage:** Links to a **Privacy Policy** (`/privacy`) and **Terms & Conditions** (`/terms`) are present in the global footer, and are fully registered in the automated `sitemap.xml` file.

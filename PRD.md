# Product Requirements Document (PRD)
**Project:** Amorcakes and Bakery Landing Page

## 1. Project Overview
Amorcakes and Bakery requires a modern, elegant, and visually appealing landing page. The primary purpose of this single-page website is to showcase the brand's artisanal bakery products, build customer trust, and drive conversions via WhatsApp orders.

## 2. Business Context
Amorcakes and Bakery is a premium local bakery specializing in artisan breads, sweet pastries, and custom cakes. They do not currently require a full e-commerce backend (no cart, no payment gateway). The goal is lead generation and direct orders via WhatsApp communication.

## 3. Project Goals
- Establish a strong, premium online brand presence.
- Showcase high-quality product photography.
- Provide clear information on offerings and location.
- Convert visitors into customers by directing them to a WhatsApp ordering flow.

## 4. Target Audience
- Local residents looking for high-quality, fresh-baked goods.
- Event planners or individuals seeking custom cakes.
- Coffee and pastry enthusiasts.

## 5. User Personas
- **The Occasion Buyer (Sarah, 34):** Looking for a beautiful custom cake for her child's birthday. Needs to see examples and contact the bakery easily.
- **The Weekend Foodie (Mark, 28):** Loves artisan croissants and coffee. Browses on mobile to see what's fresh and find the location/opening hours.

## 6. User Problems & Needs
- **Need:** High-quality visual proof of product quality.
- **Problem:** Many local bakeries lack an updated online menu/gallery.
- **Solution:** A highly visual landing page with clear categories and an appetizing gallery.

## 7. Website Objectives
- 100% of CTAs must lead to the designated WhatsApp number.
- Load time under 2.5 seconds to prevent mobile bounce.
- Seamless responsive experience on all mobile devices.

## 8. Sitemap
*Single Page Application / Landing Page with anchor scroll navigation.*
- Home
- Menu (Categories)
- About Us
- Gallery
- Contact

## 9. Landing Page Structure (Top to Bottom)
1.  **Navigation Bar:** Logo, Anchor Links, "Order Now" (WhatsApp) CTA.
2.  **Hero Section:** Headline ("Freshly Baked, Just for You!"), Subheadline, Primary CTA, Collage-style bakery imagery.
3.  **Why Choose Us / Features:** Brief value propositions (e.g., Daily baked, premium ingredients) separated by decorative dividers.
4.  **Product Categories (Menu):** Grid of cards (e.g., Artisan Breads, Sweet Pastries, Custom Cakes) with "View Bakery" buttons.
5.  **Gallery / Visit Us Today:** Masonry or grid layout showing various products and the physical store atmosphere.
6.  **Footer:** Logo, Address, Operating Hours, Social Media Links, Copyright.

## 10. Functional Requirements
- **Anchor Scrolling:** Clicking nav links should smoothly scroll to the respective section.
- **WhatsApp Integration:** All "Order Now" buttons must open a WhatsApp chat with a pre-filled message (e.g., "Hello Amorcakes, I would like to make an order...").
- **Mobile Menu:** A functional hamburger menu for screen widths under 768px.

## 11. Non-Functional Requirements
- **Performance:** Images must be optimized (WebP format) and lazy-loaded.
- **Usability:** High contrast text, readable typography.
- **Reliability:** No broken links, seamless cross-browser support (Chrome, Safari, Edge).

## 12. User Journey
1. User lands on page, sees appetizing Hero section.
2. User scrolls down, reads "Why Choose Us."
3. User views product categories to find what they want.
4. User gets convinced by the Gallery imagery.
5. User clicks "Visit Us Today" or "Order Now," redirecting to Maps or WhatsApp.

## 13. CTA & Conversion Strategy
- **Primary CTA:** "Order Now" (Hero, Header) -> Links to WhatsApp.
- **Secondary CTAs:** "View Bakery" (Category Cards) -> Links to specific WhatsApp inquiries or scrolls to gallery.
- **Location CTA:** "Visit Us Today" -> Opens Google Maps.

## 14. Responsive Requirements
- Fully fluid layout.
- Images scale without distortion.
- Touch targets (buttons/links) minimum 44x44px for mobile interaction.

## 15. SEO Requirements
- Proper semantic HTML5 (H1, H2, Main, Section, Nav, Footer).
- Meta title: "Amorcakes and Bakery | Freshly Baked Artisan Pastries & Cakes"
- Meta description.
- Alt tags on all bakery images.

## 16. Accessibility Requirements
- Follow WCAG 2.1 AA guidelines.
- ARIA labels for mobile menu toggle.
- Keyboard navigable layout.

## 17. Technical Requirements
- Framework: Recommended modern static site generator (Astro or Next.js) + Tailwind CSS.
- Hosting ready (Vercel, Netlify, or similar).

## 18. Assumptions & Constraints
- **Assumptions:** WhatsApp is the sole ordering platform. The bakery currently operates at a single physical location.
- **Constraints:** Limited to a single-page scope. No backend database required.

## 19. Out of Scope
- E-commerce cart and checkout functionality.
- User accounts / Authentication.
- Dynamic CMS (Content Management System) for menu updates (static data is fine for v1).
- Payment gateways.

## 20. Acceptance Criteria
- Page perfectly matches the `design.md` visual guidelines.
- All CTAs correctly link to WhatsApp or Maps.
- Page achieves 90+ on Google Lighthouse (Performance, Accessibility, SEO).
- Page is fully usable and visually uncompromised on mobile devices (320px width and up).
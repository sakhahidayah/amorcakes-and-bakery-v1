# AI Coding Agent Instructions
**Project:** Amorcakes and Bakery Landing Page

## 1. Project Overview
This document serves as the implementation manual for AI coding agents generating the Amorcakes and Bakery landing page. The goal is to build a responsive, static, high-performance, single-page website strictly adhering to the provided PRD and Design guidelines.

## 2. Mandatory Documentation Reading
- **STOP.** Do not write a single line of code until you have parsed and understood:
  1. `PRD.md` - For functional requirements, content structure, and business logic.
  2. `design.md` - For color palettes, typography, spacing, and component styling.

## 3. Development Principles
- **Design Fidelity:** The final output must closely match the visual intent described in `design.md` and derived from `design-web-bakkery.jpg`.
- **Simplicity:** Keep the codebase lightweight. Do not overengineer.
- **Modularity:** Build reusable UI components (e.g., `Button`, `SectionHeading`, `ProductCard`).

## 4. Technology Stack Guidelines
*First, inspect the workspace. If no project exists, initialize using the following recommended stack:*
- **Framework:** Astro (preferred for static speed) or Next.js (App Router, React). 
- **Styling:** Tailwind CSS (mandatory for rapid, consistent styling matching the design system).
- **Icons:** `lucide-react` (if using React) or standard SVGs.
- **Fonts:** Google Fonts (Playfair Display, Lato).

## 5. Project Architecture (Next.js Example)
A standard single-page architecture:
- `src/app/page.tsx` (Main layout integrating all sections)
- `src/components/ui/` (Buttons, Cards)
- `src/components/sections/` (Hero, About, Categories, Gallery, Footer)
- `src/lib/` (Constants like WhatsApp Number, Menu Data)

## 6. Folder Structure Guidelines
Separate layout sections into distinct files to maintain readability. Keep dummy data/constants separate from component logic.

## 7. Component Development Rules
- Use semantic HTML tags (`<nav>`, `<section>`, `<article>`, `<footer>`).
- Ensure all components are stateless where possible (functional components).
- Map configuration data (like product lists or gallery images) from an array rather than hardcoding repeating UI blocks.

## 8. Styling Conventions
- Rely exclusively on Tailwind CSS utility classes.
- Extend the `tailwind.config.js` with the specific colors defined in `design.md` (e.g., `brand-brown`, `brand-cream`, `brand-accent`). Do not use arbitrary arbitrary brackets (e.g., `bg-[#5A3B2C]`) inside components; configure them properly.
- typography must use configured font families (e.g., `font-serif`, `font-sans`).

## 9. Responsive Implementation Rules
- **Mobile First:** Write base Tailwind classes for mobile, then use `md:` and `lg:` prefixes for desktop.
- Hide desktop navigations and show hamburger menus on screens `< 768px` (`md`).

## 10. Image Optimization
- Use the framework's native image optimization (e.g., `next/image` in Next.js).
- Provide placeholders if actual imagery is missing. Use `aspect-ratio` utility classes to prevent layout shifts.
- Crucial: The hero images require a cutout effect (transparent PNGs/WebPs) with Tailwind drop-shadow classes (`drop-shadow-xl`), NOT box-shadows.

## 11. Accessibility Standards
- Apply `aria-label` to buttons without text (like icon-only hamburger menus).
- Ensure high contrast.
- Maintain correct heading hierarchy (one `<h1>`, followed sequentially by `<h2>`, `<h3>`).

## 12. Performance Guidelines
- Do not import heavy external libraries for simple animations. Use Tailwind's built-in `transition` and `animate` utilities.
- Avoid large client-side bundles. Use Server Components by default if using Next.js App Router.

## 13. SEO Implementation
- Ensure `<title>` and `<meta name="description">` are populated dynamically or statically in the root layout.

## 14. Code Quality Standards
- Use TypeScript for all components and data structures.
- Define interfaces for data (e.g., `ProductCardProps`, `SectionProps`).
- Run a linter (ESLint) and formatter (Prettier) before finalizing.

## 15. Naming Conventions
- Components: PascalCase (e.g., `ProductCard.tsx`).
- Variables/Functions: camelCase (e.g., `handleMenuToggle`).
- Interfaces: PascalCase, typically starting with 'I' or ending with 'Props' (e.g., `ProductProps`).

## 16. Error Handling
- Fail gracefully. If an image fails to load, ensure a fallback styling keeps the layout intact.

## 17. Testing Requirements
- Code must compile without TypeScript or ESLint errors.
- Verify manual responsiveness by testing Tailwind breakpoints (`sm`, `md`, `lg`, `xl`).

## 18. Git & Change Management
- If integrating with Git, use semantic commit messages (e.g., `feat: add hero section`, `style: configure tailwind colors`).

## 19. Prohibited Practices
- **DO NOT** create a generic SaaS template (no dark mode dashboards, no charts).
- **DO NOT** invent a backend database, shopping cart logic, or user authentication. This is strict landing page territory.
- **DO NOT** deviate from the `design.md` color scheme.

## 20. Definition of Done
- All sections from `PRD.md` are implemented.
- Tailwind config reflects `design.md`.
- Layout is responsive down to 320px width.
- Lighthouse score exceeds 90 across all categories.
- No dummy/Lorem Ipsum text remains (use relevant bakery copy placeholders).
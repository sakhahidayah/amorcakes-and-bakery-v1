# Design System & Visual Direction
**Project:** Amorcakes and Bakery Landing Page

## 1. Project Design Overview
The Amorcakes and Bakery landing page design aims to evoke warmth, craftsmanship, and elegance. The design leverages high-quality appetizing imagery, a warm neutral color palette, and classic typography to create an inviting, premium bakery experience. 

## 2. Brand Personality
- **Warm & Inviting:** Feels like stepping into a cozy, high-end local bakery.
- **Artisanal & Premium:** Highlights the handcrafted nature of the pastries.
- **Elegant yet Accessible:** Sophisticated visual language without feeling intimidating.
- **Appetite-Inducing:** Relies heavily on high-quality, warm-toned photography.

## 3. Visual Direction
Based on the reference image `design-web-bakkery.jpg`, the visual direction is "Modern Rustic Elegance." It uses a minimal, warm cream background to let the vibrant, golden-brown colors of the baked goods stand out. Soft shadows and floating elements give depth without relying on harsh borders or boxy containers.

## 4. Design Inspiration Analysis (from `design-web-bakkery.jpg`)
- **Atmosphere:** Sunlit, natural, comforting.
- **Layouts:** Collage-style hero image arrangements, clean grid-based product sections.
- **Shapes:** Pill-shaped buttons, soft rounded edges on containers, avoiding sharp 90-degree angles to maintain a soft feel.
- **Decorations:** Subtle vector flourishes (like tiny wheat/leaf icons) to divide sections or accompany headers.

## 5. Color Palette
*(Note: Hex codes are approximate assumptions based on the reference image and should be refined with the final brand assets).*
- **Primary Color:** Deep Cocoa Brown (`#5A3B2C`) - Used for primary buttons, prominent headings, and footer backgrounds.
- **Secondary Color:** Warm Caramel (`#C28E5C`) - Used for hover states, accents, and secondary text.
- **Background Color 1:** Soft Cream (`#F7F4F0`) - The dominant background color for the website.
- **Background Color 2:** Light Beige (`#EBE5DC`) - Used for subtle section differentiation or product cards.
- **Text Color (Primary):** Dark Espresso (`#2C1E16`) - Used for body copy (softer and warmer than pure black).
- **Text Color (Inverted):** Pure White (`#FFFFFF`) - Used for text inside Primary Color buttons or dark sections.

## 6. Typography System
*(Note: Font families are suggested matches for the reference image).*
- **Heading Font:** *Playfair Display* (or similar elegant Serif). Used for all major section titles and the Hero text. 
  - H1: 48px/56px (Mobile: 36px)
  - H2: 36px/44px (Mobile: 28px)
  - H3: 24px/32px (Mobile: 20px)
- **Body Font:** *Lato* or *Montserrat* (Clean Sans-Serif). Used for descriptions, navigation, and general UI text to balance the ornate headings.
  - Body Large: 18px (Mobile: 16px)
  - Body Regular: 16px (Mobile: 14px)
- **Navigation & Buttons:** Sans-serif, medium to bold weight, often uppercase with slight letter-spacing.

## 7. Layout Guidelines
- **Max Width:** Container max-width of 1200px for desktop to ensure content doesn't stretch too far.
- **Alignment:** Centralized alignment for section headers and Hero text. Left-aligned for product card text.
- **Grid:** 12-column grid system. 3-column layout for product categories on desktop, stacking to 1-column on mobile.

## 8. Spacing System
- Use an 8px base spacing scale (8, 16, 24, 32, 48, 64, 96, 128).
- **Section Padding:** Minimum 80px top and bottom (Desktop), 48px (Mobile).
- **Element Spacing:** 16px to 24px between headings and body text. 32px between text and buttons.

## 9. Component Design Guidelines
- **Navigation Bar:** Transparent or solid Soft Cream background. Logo on left/center, links centered, CTA button on the right. Sticky on scroll with a subtle drop shadow.
- **Buttons (Primary CTA):** Pill-shaped (fully rounded corners, e.g., `border-radius: 9999px`). Deep Cocoa Brown background, White text. Hover state: Lighten to Warm Caramel.
- **Product Cards:** Light Beige background, soft border radius (12px), subtle drop shadow (`box-shadow: 0 4px 6px rgba(0,0,0,0.05)`). Image placed at the top, Title, short description, and a pill-shaped secondary button at the bottom.
- **Hero Section:** Large, prominent typography surrounded by floating, high-quality, cutout images of pastries with soft drop shadows to create a multi-layered, organic collage effect.

## 10. Image & Photography Guidelines
- **Style:** Warm lighting, high contrast, top-down or 45-degree angles.
- **Treatment:** Hero images should have transparent backgrounds (cutouts) with soft CSS drop shadows. Gallery/Card images should be standard rectangles with slightly rounded corners.
- **Content:** Croissants, artisan breads, custom cakes.

## 11. Iconography
- Minimalist, thin-line icons.
- Use simple leaf/wheat vectors as section dividers (as seen in the "Why Choose Us" section).

## 12. Responsive Design Guidelines
- **Mobile First:** Start with a stacked (1-column) layout.
- **Typography Scaling:** Reduce heading sizes by ~20-30% on screens under 768px.
- **Navigation:** Convert desktop links to a hamburger menu on mobile.

## 13. Interaction & Animation Guidelines
- **Hover Effects:** Smooth color transitions on buttons (200ms ease-in-out). Image scale-up slightly on card hover.
- **Scroll:** Fade-up reveal animations for sections as they enter the viewport to maintain an elegant feel.

## 14. Accessibility Guidelines
- **Contrast:** Ensure all text passes WCAG AA contrast ratios (especially Dark Espresso against Soft Cream).
- **Alt Text:** All bakery images must have descriptive alt text.
- **Focus States:** Visible focus rings for keyboard navigation.

## 15. Design Do's and Don'ts
- **DO:** Use generous white space to let the images breathe.
- **DO:** Stick to the warm, limited color palette.
- **DON'T:** Use harsh, dark, generic box shadows. Keep shadows soft and diffused.
- **DON'T:** Use sharp 90-degree corners on buttons. Always use pill shapes.
- **DON'T:** Clutter the hero section with too much text; let the imagery sell the product.
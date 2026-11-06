"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { siteConfig } from "@/src/config/siteConfig";
import { buildWhatsAppLink } from "@/src/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const orderLink = buildWhatsAppLink(
  siteConfig.contact.whatsappNumber,
  siteConfig.ordering.defaultMessage,
);

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousDocumentOverflow = document.documentElement.style.overflow;
    const menuButton = menuButtonRef.current;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const desktopMediaQuery = window.matchMedia("(min-width: 768px)");

    function handleViewportChange(event: MediaQueryListEvent) {
      if (event.matches) {
        setIsMenuOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        return;
      }

      if (event.key !== "Tab" || !drawerRef.current) {
        return;
      }

      const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    desktopMediaQuery.addEventListener("change", handleViewportChange);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousDocumentOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      desktopMediaQuery.removeEventListener("change", handleViewportChange);
      menuButton?.focus();
    };
  }, [isMenuOpen]);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-almond-cream/80 bg-warm-flour-cream/90 shadow-[0_4px_18px_rgba(62,39,30,0.06)] backdrop-blur-md">
      <Container>
        <nav
          aria-label="Main navigation"
          className="flex min-h-20 items-center justify-between gap-2 sm:gap-6"
        >
          <a
            href="#home"
            className="min-w-0 truncate font-display text-xl leading-none font-semibold tracking-[-0.03em] text-espresso-walnut transition-colors hover:text-roasted-cinnamon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-amber-gold focus-visible:ring-offset-4 focus-visible:ring-offset-warm-flour-cream sm:text-2xl lg:text-3xl"
          >
            {siteConfig.brandName}
          </a>

          <div className="hidden items-center gap-3 md:flex lg:gap-7">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative py-3 text-[0.65rem] font-semibold tracking-[0.1em] text-dark-espresso uppercase transition-colors hover:text-roasted-cinnamon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-amber-gold focus-visible:ring-offset-4 focus-visible:ring-offset-warm-flour-cream lg:text-xs lg:tracking-[0.14em]"
              >
                {item.label}
                <span className="absolute right-0 bottom-1 left-0 h-px origin-left scale-x-0 bg-warm-amber-gold transition-transform duration-200 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
              </a>
            ))}
          </div>

          {orderLink ? (
            <Button
              href={orderLink}
              target="_blank"
              rel="noreferrer"
              className="px-4 text-[0.65rem] lg:px-6 lg:text-sm"
            >
              Order Now
            </Button>
          ) : (
            <span
              aria-label={siteConfig.contact.whatsappLabel}
              className="hidden min-h-11 cursor-not-allowed items-center justify-center rounded-full bg-espresso-walnut/40 px-5 py-3 text-xs font-semibold tracking-[0.08em] text-pure-white uppercase md:inline-flex"
            >
              Order Now
            </span>
          )}

          <button
            ref={menuButtonRef}
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation-drawer"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-espresso-walnut transition-colors hover:bg-almond-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-amber-gold md:hidden"
          >
            {isMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </nav>
      </Container>

      <div
        className={`fixed inset-0 z-50 md:hidden ${isMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!isMenuOpen}
      >
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={closeMenu}
          tabIndex={isMenuOpen ? 0 : -1}
          className={`absolute inset-0 bg-dark-roast/25 transition-opacity duration-200 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
        />
        <aside
          id="mobile-navigation-drawer"
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          inert={!isMenuOpen ? true : undefined}
          className={`absolute top-0 right-0 flex h-dvh max-h-dvh w-[min(88vw,22rem)] flex-col overflow-y-auto overscroll-contain bg-warm-flour-cream p-6 shadow-[-12px_0_30px_rgba(42,24,16,0.12)] transition-transform duration-200 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between border-b border-almond-cream pb-5">
            <span className="font-display text-2xl font-semibold text-espresso-walnut">
              {siteConfig.brandName}
            </span>
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMenu}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-espresso-walnut transition-colors hover:bg-almond-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-amber-gold"
            >
              <X size={22} aria-hidden="true" />
            </button>
          </div>

          <div className="flex flex-col gap-2 py-8">
            {siteConfig.navigation.map((item, index) => (
              <a
                key={item.href}
                ref={index === 0 ? firstLinkRef : undefined}
                href={item.href}
                onClick={closeMenu}
                className="rounded-2xl px-4 py-4 text-sm font-semibold tracking-[0.12em] text-dark-espresso uppercase transition-colors hover:bg-almond-cream hover:text-roasted-cinnamon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-amber-gold"
              >
                {item.label}
              </a>
            ))}
          </div>

          {orderLink ? (
            <Button href={orderLink} target="_blank" rel="noreferrer" onClick={closeMenu}>
              Order Now
            </Button>
          ) : (
            <span className="mt-auto rounded-2xl bg-almond-cream px-4 py-4 text-center text-xs font-semibold tracking-[0.08em] text-espresso-walnut/60 uppercase">
              WhatsApp contact to be confirmed
            </span>
          )}
        </aside>
      </div>
    </header>
  );
}

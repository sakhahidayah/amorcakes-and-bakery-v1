import { MessageCircle } from "lucide-react";

import { siteConfig } from "@/src/config/siteConfig";
import { buildWhatsAppLink } from "@/src/lib/whatsapp";

const whatsappLink = buildWhatsAppLink(
  siteConfig.contact.whatsappNumber,
  siteConfig.ordering.defaultMessage,
);

export function FloatingWhatsApp() {
  if (!whatsappLink) {
    return null;
  }

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Amorcakes and Bakery on WhatsApp"
      className="fixed right-5 bottom-5 z-30 inline-flex min-h-12 min-w-12 items-center justify-center rounded-full bg-espresso-walnut p-3 text-pure-white shadow-[0_8px_24px_rgba(42,24,16,0.2)] transition-colors duration-200 hover:bg-roasted-cinnamon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-amber-gold focus-visible:ring-offset-4 focus-visible:ring-offset-warm-flour-cream sm:right-7 sm:bottom-7"
    >
      <MessageCircle size={21} strokeWidth={1.8} aria-hidden="true" />
      <span className="sr-only">WhatsApp</span>
    </a>
  );
}

import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/src/config/siteConfig";
import { buildWhatsAppLink } from "@/src/lib/whatsapp";

const currentYear = new Date().getFullYear();
const whatsappLink = buildWhatsAppLink(
  siteConfig.contact.whatsappNumber,
  siteConfig.ordering.defaultMessage,
);

const configuredSocialLinks = [
  { label: "Instagram", href: siteConfig.socialMedia.instagram },
  { label: "Facebook", href: siteConfig.socialMedia.facebook },
  { label: "TikTok", href: siteConfig.socialMedia.tiktok },
].filter((social): social is { label: string; href: string } => Boolean(social.href));

export function Footer() {
  return (
    <footer id="footer" className="border-t border-almond-cream bg-oat-linen">
      <Container>
        <div className="grid gap-10 py-14 sm:py-16 lg:grid-cols-12 lg:gap-12 lg:py-20">
          <div className="lg:col-span-5">
            <a
              href="#home"
              className="font-display text-3xl leading-none font-semibold tracking-[-0.03em] text-espresso-walnut transition-colors hover:text-roasted-cinnamon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-amber-gold focus-visible:ring-offset-4 focus-visible:ring-offset-oat-linen"
            >
              {siteConfig.brandName}
            </a>
            <p className="mt-5 max-w-sm text-sm leading-7 text-dark-espresso/70 sm:text-base sm:leading-8">
              Handcrafted breads, sweet pastries, and celebration cakes made for
              warm tables and memorable moments.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h2 className="font-sans text-xs font-semibold tracking-[0.16em] text-roasted-cinnamon uppercase">
              Explore
            </h2>
            <nav aria-label="Footer navigation" className="mt-4">
              <ul className="space-y-3">
                {siteConfig.navigation.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="inline-flex min-h-11 items-center text-sm text-dark-espresso/75 transition-colors hover:text-roasted-cinnamon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-amber-gold focus-visible:ring-offset-2 focus-visible:ring-offset-oat-linen"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="lg:col-span-4">
            <h2 className="font-sans text-xs font-semibold tracking-[0.16em] text-roasted-cinnamon uppercase">
              Find us
            </h2>
            <dl className="mt-4 space-y-4 text-sm leading-7 text-dark-espresso/75 sm:text-base">
              <div>
                <dt className="font-semibold text-espresso-walnut">Locations</dt>
                <dd>{siteConfig.location.branches.length} bakery and outlet locations</dd>
              </div>
              <div>
                <dt className="font-semibold text-espresso-walnut">Hours</dt>
                <dd>{siteConfig.businessHours.displayLabel}</dd>
              </div>
              <div>
                <dt className="font-semibold text-espresso-walnut">Email</dt>
                <dd>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="transition-colors hover:text-roasted-cinnamon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-amber-gold"
                  >
                    {siteConfig.contact.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-almond-cream py-6 text-sm text-dark-espresso/65 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {siteConfig.brandName}. All rights reserved.
          </p>

          {whatsappLink || configuredSocialLinks.length > 0 ? (
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {whatsappLink ? (
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-roasted-cinnamon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-amber-gold focus-visible:ring-offset-2 focus-visible:ring-offset-oat-linen"
                >
                  WhatsApp
                </a>
              ) : null}
              {configuredSocialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-roasted-cinnamon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-amber-gold focus-visible:ring-offset-2 focus-visible:ring-offset-oat-linen"
                >
                  {social.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </footer>
  );
}

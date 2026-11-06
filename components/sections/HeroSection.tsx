import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/src/config/siteConfig";
import { bakeryAssets } from "@/src/config/assetManifest";
import { buildWhatsAppLink } from "@/src/lib/whatsapp";

const heroAsset = bakeryAssets.find((asset) => asset.group === "hero");
const orderLink = buildWhatsAppLink(
  siteConfig.contact.whatsappNumber,
  siteConfig.ordering.defaultMessage,
);

export function HeroSection() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="section-padding overflow-hidden">
      <Container>
        <div className="relative isolate grid min-h-[38rem] items-center overflow-hidden rounded-[2rem] bg-oat-linen lg:min-h-[42rem]">
          <div className="absolute inset-0 -z-10">
            {heroAsset?.src ? (
              <Image
                src={heroAsset.src}
                alt={heroAsset.alt}
                fill
                priority
                sizes="(max-width: 767px) 100vw, 1200px"
                className="object-cover object-center"
              />
            ) : null}
            <div className="absolute inset-0 bg-dark-roast/25" />
          </div>

          <div className="relative z-10 px-6 py-10 sm:px-10 sm:py-14 lg:px-16">
            <div className="mx-auto max-w-xl rounded-[1.5rem] border border-almond-cream/90 bg-warm-flour-cream/95 p-8 text-center shadow-xl backdrop-blur-sm sm:p-12 lg:p-16">
              <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-roasted-cinnamon uppercase">
                Handcrafted with care
              </p>
              <h1 id="hero-heading" className="text-[clamp(2.5rem,12vw,3.75rem)] leading-[0.98]">
                Freshly Baked, Just for You!
              </h1>
              <p className="mx-auto mt-6 max-w-md text-base leading-7 text-dark-espresso/80 sm:text-lg sm:leading-8">
                Thoughtfully baked breads, pastries, and celebration cakes made
                for slow mornings, shared tables, and sweet occasions.
              </p>
              <div className="mt-8 flex justify-center">
                {orderLink ? (
                  <Button href={orderLink} target="_blank" rel="noreferrer">
                    Order Now
                  </Button>
                ) : (
                  <Button
                    disabled
                    aria-disabled="true"
                    title={siteConfig.contact.whatsappLabel}
                    className="cursor-not-allowed bg-espresso-walnut/45 hover:bg-espresso-walnut/45"
                  >
                    Order Now
                  </Button>
                )}
              </div>
              {!orderLink ? (
                <p className="mt-4 text-xs text-dark-espresso/55">
                  WhatsApp ordering details will be added once confirmed.
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

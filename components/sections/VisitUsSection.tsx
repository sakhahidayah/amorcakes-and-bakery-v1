import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/src/config/siteConfig";
import { visitUsImages } from "@/src/config/bakeryData";
import { buildWhatsAppLink } from "@/src/lib/whatsapp";
import { buildGoogleMapsSearchLink } from "@/src/lib/maps";

const visitUsAspectClasses = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[5/4]",
  square: "aspect-square",
};

const orderLink = buildWhatsAppLink(
  siteConfig.contact.whatsappNumber,
  siteConfig.ordering.defaultMessage,
);
const primaryBranch = siteConfig.location.branches[0];
const primaryDirectionsLink = primaryBranch
  ? buildGoogleMapsSearchLink(primaryBranch.address)
  : null;

export function VisitUsSection() {
  return (
    <section id="contact" aria-label="Visit Amorcakes and Bakery" className="section-padding">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
          <div className="lg:col-span-5">
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-roasted-cinnamon uppercase">
              Come by when you can
            </p>
            <h2 className="max-w-md text-5xl leading-[0.98] sm:text-6xl">
              Visit Us Today
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-dark-espresso/75 sm:text-lg sm:leading-8">
              We are preparing a welcoming place for good bread, sweet moments,
              and the simple pleasure of sharing something freshly baked.
            </p>

            <div className="mt-8 border-t border-almond-cream pt-6">
              <p className="text-xs font-semibold tracking-[0.14em] text-roasted-cinnamon uppercase">
                Our locations
              </p>
              <ul className="mt-4 max-h-80 space-y-4 overflow-y-auto pr-2">
                {siteConfig.location.branches.map((branch) => (
                  <li key={branch.name} className="border-b border-almond-cream/70 pb-4 last:border-0">
                    <p className="font-semibold text-espresso-walnut">{branch.name}</p>
                    <p className="mt-1 text-sm leading-6 text-dark-espresso/70">
                      {branch.address}
                    </p>
                    <a
                      href={buildGoogleMapsSearchLink(branch.address)}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex min-h-11 items-center text-xs font-semibold tracking-[0.08em] text-roasted-cinnamon uppercase underline decoration-almond-cream underline-offset-4 transition-colors hover:text-espresso-walnut focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-amber-gold"
                    >
                      Get directions
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-dark-espresso/65">
                Opening hours: {siteConfig.businessHours.displayLabel}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {siteConfig.location.googleMapsUrl || primaryDirectionsLink ? (
                <Button
                  href={siteConfig.location.googleMapsUrl ?? primaryDirectionsLink ?? "#contact"}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Directions
                </Button>
              ) : (
                <Button
                  disabled
                  aria-disabled="true"
                  title="Google Maps location to be confirmed"
                  className="cursor-not-allowed bg-espresso-walnut/45 hover:bg-espresso-walnut/45"
                >
                  Get Directions
                </Button>
              )}

              {orderLink ? (
                <Button href={orderLink} target="_blank" rel="noreferrer" variant="secondary">
                  Message Us
                </Button>
              ) : null}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:col-span-7 lg:grid-cols-12 lg:gap-5">
            {visitUsImages.map((image, index) => (
              <figure
                key={image.id}
                className={`group ${
                  index === 0
                    ? "col-span-1 lg:col-span-5 lg:row-span-2"
                    : index === 1
                      ? "col-span-1 lg:col-span-7"
                      : index === 2
                        ? "col-span-1 lg:col-span-3"
                        : "col-span-1 lg:col-span-4"
                }`}
              >
                <div
                  className={`relative overflow-hidden rounded-2xl bg-almond-cream ${visitUsAspectClasses[image.aspectRatio]}`}
                >
                  {image.imageSrc ? (
                    <Image
                      src={image.imageSrc}
                      alt={image.imageAlt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 1023px) 50vw, 40vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center px-4 text-center text-xs leading-6 text-dark-espresso/60">
                      {image.title}
                      <br />
                      <span className="ml-1">to be added</span>
                    </div>
                  )}
                </div>
              </figure>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

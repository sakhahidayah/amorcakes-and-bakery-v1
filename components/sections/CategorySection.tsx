import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { bakeryProductCategories } from "@/src/config/bakeryData";
import { siteConfig } from "@/src/config/siteConfig";
import { buildWhatsAppLink } from "@/src/lib/whatsapp";

export function CategorySection() {
  return (
    <section id="menu" aria-label="Bakery menu categories" className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="From the bakery"
          description="A provisional selection of the breads, pastries, and cakes that will shape the Amorcakes menu."
        >
          Something lovely for every table.
        </SectionHeading>

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {bakeryProductCategories.map((category) => {
            const categoryOrderLink = buildWhatsAppLink(
              siteConfig.contact.whatsappNumber,
              siteConfig.ordering.categoryMessage(category.name),
            );

            return (
              <article
                key={category.id}
                className="group overflow-hidden rounded-2xl border border-almond-cream bg-oat-linen"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-almond-cream">
                  {category.imageSrc ? (
                    <Image
                      src={category.imageSrc}
                      alt={category.imageAlt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center px-6 text-center text-sm text-dark-espresso/60">
                      Category image to be added
                    </div>
                  )}
                </div>

                <div className="flex min-h-64 flex-col p-6 sm:p-7">
                  <h3 className="text-3xl leading-tight text-espresso-walnut">
                    {category.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-dark-espresso/75 sm:text-base sm:leading-8">
                    {category.description}
                  </p>
                  <div className="mt-auto pt-7">
                    {categoryOrderLink ? (
                      <Button
                        href={categoryOrderLink}
                        target="_blank"
                        rel="noreferrer"
                        variant="secondary"
                      >
                        Ask about {category.name}
                      </Button>
                    ) : (
                      <Button href="#gallery" variant="secondary">
                        View Bakery
                      </Button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

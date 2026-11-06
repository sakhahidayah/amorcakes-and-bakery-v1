import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { bakeryGalleryItems } from "@/src/config/bakeryData";

const aspectClasses = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[5/4]",
  square: "aspect-square",
};

export function GallerySection() {
  return (
    <section id="gallery" aria-label="Bakery gallery" className="section-padding bg-oat-linen">
      <Container>
        <SectionHeading
          eyebrow="From our table"
          description="A visual placeholder for the textures, details, and generous moments that will tell the Amorcakes story."
        >
          A little beauty in every bake.
        </SectionHeading>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-12 lg:gap-6">
          {bakeryGalleryItems.map((item, index) => (
            <figure
              key={item.id}
              className={`group flex flex-col ${
                index === 0
                  ? "lg:col-span-4 lg:row-span-2"
                  : index === 1
                    ? "lg:col-span-8"
                    : index === 2
                      ? "lg:col-span-4"
                      : "lg:col-span-8"
              }`}
            >
              <div
                className={`relative overflow-hidden rounded-2xl bg-almond-cream ${aspectClasses[item.aspectRatio]}`}
              >
                {item.imageSrc ? (
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 66vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-2 px-6 text-center text-dark-espresso/65">
                    <span className="font-display text-2xl text-espresso-walnut">
                      {item.title}
                    </span>
                    <span className="max-w-xs text-xs leading-6">
                      Placeholder image to be added
                    </span>
                  </div>
                )}
              </div>
              <figcaption className="pt-3 text-sm leading-6 text-dark-espresso/70">
                {item.description}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

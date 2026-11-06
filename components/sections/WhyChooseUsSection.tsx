import { Heart, Sprout, Wheat } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const valuePropositions = [
  {
    title: "Freshly Baked",
    description:
      "A placeholder promise for warm, inviting bakes prepared with freshness in mind.",
    icon: Wheat,
  },
  {
    title: "Quality Ingredients",
    description:
      "A placeholder promise centered on thoughtful ingredient choices and honest flavor.",
    icon: Sprout,
  },
  {
    title: "Made with Care",
    description:
      "A placeholder promise for the small details that make every shared moment feel special.",
    icon: Heart,
  },
];

export function WhyChooseUsSection() {
  return (
    <section
      id="about"
      aria-label="Why choose Amorcakes and Bakery"
      className="section-padding bg-oat-linen"
    >
      <Container>
        <SectionHeading
          eyebrow="Why choose us"
          description="A provisional expression of the artisan spirit Amorcakes and Bakery is being built around."
        >
          Baked with intention, shared with joy.
        </SectionHeading>

        <div className="mt-12 grid grid-cols-1 md:mt-16 md:grid-cols-3">
          {valuePropositions.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="border-t border-espresso-walnut/15 py-8 first:border-t-0 md:border-t-0 md:border-l md:px-8 md:py-2 first:md:border-l-0 first:md:pl-0 last:md:pr-0"
            >
              <Icon
                aria-hidden="true"
                className="mb-6 text-roasted-cinnamon"
                size={28}
                strokeWidth={1.4}
              />
              <h3 className="text-2xl leading-tight text-espresso-walnut">
                {title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-7 text-dark-espresso/75 sm:text-base sm:leading-8">
                {description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

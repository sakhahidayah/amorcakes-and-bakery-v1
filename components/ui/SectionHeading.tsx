import type { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
  eyebrow?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  children,
  eyebrow,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment} ${className}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-roasted-cinnamon uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-[2rem] leading-tight font-semibold tracking-[-0.02em] text-espresso-walnut sm:text-5xl sm:leading-[1.1]">
        {children}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-dark-espresso/75 sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}

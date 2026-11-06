import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonBaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

type LinkButtonProps = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "href"> & {
    href: string;
  };

type NativeButtonProps = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: never;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

const variantClasses = {
  primary:
    "bg-espresso-walnut text-pure-white hover:bg-roasted-cinnamon focus-visible:ring-espresso-walnut",
  secondary:
    "bg-almond-cream text-espresso-walnut hover:bg-oat-linen focus-visible:ring-espresso-walnut",
};

export function Button(props: ButtonProps) {
  if ("href" in props) {
    const linkProps = props as LinkButtonProps;
    const {
      children,
      variant = "primary",
      className = "",
      href,
      ...anchorAttributes
    } = linkProps;
    const classes = `inline-flex min-h-11 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-[0.08em] uppercase transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-warm-flour-cream ${variantClasses[variant]} ${className}`;

    return (
      <a href={href} className={classes} {...anchorAttributes}>
        {children}
      </a>
    );
  }

  const buttonProps = props as NativeButtonProps;
  const {
    children,
    variant = "primary",
    className = "",
    ...buttonAttributes
  } = buttonProps;
  const classes = `inline-flex min-h-11 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-[0.08em] uppercase transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-warm-flour-cream ${variantClasses[variant]} ${className}`;

  return (
    <button type="button" className={classes} {...buttonAttributes}>
      {children}
    </button>
  );
}

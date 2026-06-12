import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type SharedProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "light" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  className?: string;
};

type ButtonProps = SharedProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type LinkProps = SharedProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

const variants = {
  primary: "bg-ink text-white shadow-lift hover:bg-ink-deep",
  secondary: "border border-ink/14 bg-white text-ink hover:bg-mist",
  light: "border border-white/24 bg-white/12 text-white backdrop-blur hover:bg-white/20",
  ghost: "text-ink hover:bg-ink/6",
  gold: "bg-gold text-ink shadow-lift hover:bg-[#E6A914]"
};

const sizes = {
  sm: "px-4 py-2.5 text-sm",
  md: "px-5 py-3.5 text-[15px]",
  lg: "px-7 py-4 text-base"
};

export function Button(props: ButtonProps | LinkProps) {
  const { children, variant = "primary", size = "md", className = "", ...rest } = props;
  const classes = `inline-flex items-center justify-center gap-2 rounded-md font-black transition duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href) {
    const linkProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <Link href={props.href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

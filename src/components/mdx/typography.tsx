import Link from "next/link";
import { type HTMLAttributes } from "react";

export function P({
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6" {...props}>
      {children}
    </p>
  );
}

export function A({
  children,
  href,
}: HTMLAttributes<HTMLAnchorElement> & { href?: string }) {
  if (!href) throw new Error("no href specified");

  return (
    <Link
      href={href}
      className="text-accent hover:text-accent/90 group-[.BLUE]:text-blue group-[.RED]:text-red group-[.bg-GREEN]:text-green group-[.YELLOW]:text-yellow"
    >
      {children}
    </Link>
  );
}

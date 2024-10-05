import { Link as SvgLink } from "lucide-react";
import { type HTMLAttributes } from "react";
import { type ClassNameValue } from "tailwind-merge";

import { cn } from "@/lib/utils";

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  id?: string;
  children?: React.ReactNode;
  linkClassName?: ClassNameValue;
};

const createHeading = (level: 1 | 2 | 3 | 4) =>
  function Heading({
    className,
    linkClassName,
    children,
    id,
    ...props
  }: HeadingProps) {
    const HeadingElement = `h${level}` as const;

    const iconSizes = [32, 24, 20, 16];

    const classNames = [
      "text-4xl font-extrabold lg:text-5xl",
      "mt-24 pb-2 text-4xl text-green bg-gradient-to-b from-green to-subtext1/80 bg-clip-text",
      "relative mt-16 text-2xl",
      "mt-8 text-xl",
    ];

    return (
      <a href={`#${id}`} className="group/heading">
        <HeadingElement
          className={cn(
            `scroll-m-20 font-semibold tracking-tight transition-colors ${classNames[level - 1]}`,
            className,
          )}
          {...props}
        >
          {children}
          <SvgLink
            className={cn(
              `mb-1 ml-2.5 inline text-accent opacity-0 transition-opacity group-hover/heading:opacity-100`,
              linkClassName,
            )}
            size={iconSizes[level - 1]}
          />
        </HeadingElement>
      </a>
    );
  };

export const H1 = createHeading(1);
export const H2 = createHeading(2);
export const H3 = createHeading(3);
export const H4 = createHeading(4);

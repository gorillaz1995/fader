"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";
import { usePageTransition } from "./transition";

type TLinkProps = Omit<ComponentProps<typeof Link>, "href"> & { href: string };

/** Internal link that plays the curtain transition before navigating. */
export const TLink = ({ href, onClick, target, ...props }: TLinkProps) => {
  const { navigate } = usePageTransition();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    const isModified = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
    if (event.defaultPrevented || isModified || target === "_blank") return;
    event.preventDefault();
    navigate(href.startsWith("#") ? `${window.location.pathname}${href}` : href);
  };

  return <Link href={href} target={target} onClick={handleClick} {...props} />;
};

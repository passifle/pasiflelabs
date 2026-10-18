"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Brand } from "@/components/brand";
import { Icon } from "@/components/icons";

const links = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Our thinking" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Brand />
        <nav className={`site-nav ${open ? "site-nav--open" : ""}`} aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} className={pathname === link.href ? "site-nav__link site-nav__link--active" : "site-nav__link"} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link className={`site-nav__mobile-cta ${pathname === "/contact" ? "site-nav__link--active" : ""}`} href="/contact" onClick={() => setOpen(false)}>
            Start a conversation <Icon name="ArrowUpRight" size={16} strokeWidth={1.7} />
          </Link>
        </nav>
        <div className="site-header__actions">
          <Link className="header-availability" href="/contact"><span />Taking on select projects</Link>
          <Link className="button button--small button--ghost site-header__cta" href="/contact">Start a conversation <Icon name="ArrowUpRight" size={15} strokeWidth={1.8} /></Link>
          <button className="menu-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
            <Icon name={open ? "X" : "Menu"} size={20} strokeWidth={1.6} />
          </button>
        </div>
      </div>
    </header>
  );
}

import Link from "next/link";
import { Brand } from "@/components/brand";
import { Icon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <Brand inverse />
            <p className="footer__lead">Strategy, systems, and experiences for companies ready to make their next move count.</p>
          </div>
          <div className="footer__links">
            <div><span className="footer__label">Explore</span><Link href="/services">Services</Link><Link href="/work">Our thinking</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div>
            <div><span className="footer__label">Say hello</span><a href="mailto:hello@passiflelabs.com">hello@passiflelabs.com</a><span>Bengaluru · working globally</span><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn <Icon name="ArrowUpRight" size={13} /></a></div>
          </div>
        </div>
        <div className="footer__bottom"><span>© {new Date().getFullYear()} Passifle Labs. Built with intention.</span><span>Privacy · Terms</span></div>
      </div>
    </footer>
  );
}

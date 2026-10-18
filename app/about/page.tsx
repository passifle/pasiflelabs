import Link from "next/link";
import { Icon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";

export const metadata = {
  title: "About — independent, curious, useful",
  description: "Learn how Passifle Labs works: a small senior consultancy for strategy, intelligent systems, and experience.",
  alternates: { canonical: "https://passiflelabs.com/about" },
};

const values = [
  ["01", "Curiosity with a point", "We ask better questions, then make sure the answers become useful decisions."],
  ["02", "Craft without theatre", "The work should look good because it works—not because it is hiding that it does not."],
  ["03", "Momentum over ceremony", "We create enough structure to move and enough space to notice what is changing."],
];

export default function AboutPage() {
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "AboutPage", name: "About Passifle Labs", description: metadata.description, url: "https://passiflelabs.com/about" }} />
    <section className="page-hero" id="main-content"><div className="container page-hero__inner"><div><p className="eyebrow">About Passifle Labs</p><h1>Small team.<br /><em>Big attention.</em></h1></div><p className="page-hero__note"><strong>We are an independent consultancy.</strong>Close to the work, close to the people doing it, and deliberately free from the machinery that makes simple things feel complicated.</p></div></section>
    <section className="section"><div className="container"><Reveal><div className="about-split"><span className="about-split__label">03 / Why we exist</span><div><h2>The best future is the one people can <em>actually use.</em></h2><div className="about-split__copy"><p>Passifle Labs exists for the space between ambition and implementation. The strategy that sounds right but has not yet changed the room. The AI idea that needs a workflow before it needs a model. The product that is powerful but asks too much of the people it is meant to serve.</p><p>We bring together strategic thinking, practical systems design, and a strong point of view on experience. The result is work that helps a business understand itself better—and gives its people a clearer way forward.</p></div></div></div></Reveal></div></section>
    <section className="section section--soft"><div className="container"><Reveal><div className="section-heading"><div><p className="eyebrow">How we show up</p><h2>The standards stay high. The ego stays low.</h2></div><p>We care about the quality of the thinking, the quality of the making, and the quality of the handoff.</p></div></Reveal><div className="values-grid">{values.map(([number, title, text]) => <article className="value-card" key={number}><div className="value-card__number">{number}</div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section"><div className="container"><Reveal><div className="about-note"><span className="about-note__mark"><Icon name="Asterisk" size={24} strokeWidth={1.2} /></span><blockquote>“Do work that gives people a better next step.”</blockquote></div></Reveal></div></section>
    <section className="section section--paper"><div className="container"><Reveal><div className="intro-grid"><span className="intro-grid__number">04 / The next step</span><div><h2>If you have a knot, <span>bring it here.</span></h2><div className="intro-grid__footer"><p>No pitch deck required. Tell us what is moving, what is stuck, and what you wish were clearer.</p><Link className="button button--dark" href="/contact">Start a conversation <Icon name="ArrowUpRight" size={16} /></Link></div></div></div></Reveal></div></section>
  </>;
}

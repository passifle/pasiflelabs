import Link from "next/link";
import { Icon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";

export const metadata = {
  title: "Services — strategy, AI systems, brand & digital",
  description: "Explore Passifle Labs services across strategy, AI systems, brand experience, and digital products.",
  alternates: { canonical: "https://passiflelabs.com/services" },
};

const services = [
  { number: "01", name: "Strategy", title: "A sharper answer to the question that matters.", copy: "When the market is noisy or the next move is expensive, we help teams find the position, offer, and story that creates momentum.", items: ["Positioning & narrative", "Offer architecture", "Customer and market clarity", "Strategic decision sprints"], icon: "Globe2" as const },
  { number: "02", name: "Intelligent systems", title: "AI that fits the way work really happens.", copy: "We identify the right opportunities for AI and automation, then design the workflow, guardrails, and experience that make them useful in practice.", items: ["AI opportunity mapping", "Workflow and agent design", "Knowledge systems", "Responsible AI foundations"], icon: "Sparkles" as const },
  { number: "03", name: "Brand & experience", title: "Make the promise impossible to misunderstand.", copy: "We translate a strategic truth into a brand and experience that feels coherent—from the first impression to the moment a customer chooses you.", items: ["Brand strategy", "Identity direction", "Experience principles", "Voice and messaging"], icon: "Layers3" as const },
  { number: "04", name: "Digital products", title: "Useful things, made to move.", copy: "We take products and services from fuzzy idea to tangible experience, with enough craft to earn attention and enough clarity to ship.", items: ["Product direction", "Service and UX design", "Prototype and validation", "Launch experience"], icon: "MoveUpRight" as const },
];

export default function ServicesPage() {
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "ItemList", name: "Passifle Labs services", itemListElement: services.map((service, index) => ({ "@type": "ListItem", position: index + 1, name: service.name, description: service.copy })) }} />
    <section className="page-hero" id="main-content"><div className="container page-hero__inner"><div><p className="eyebrow">The work</p><h1>Clarity is a <em>competitive</em> advantage.</h1></div><p className="page-hero__note"><strong>We do not sell a menu.</strong>We build the right combination of thinking, systems, and making for the moment your business is in.</p></div></section>
    <section className="section"><div className="container"><div className="services-grid">{services.map((service, index) => <Reveal key={service.number} className={`reveal-delay-${(index % 3) + 1}`}><article className="service-card"><div className="service-card__top"><span>{service.number} / {service.name}</span><Icon name={service.icon} size={21} strokeWidth={1.3} /></div><div className="service-card__icon"><Icon name={service.icon} size={23} strokeWidth={1.3} /></div><h2>{service.title}</h2><p>{service.copy}</p><div className="service-card__list">{service.items.map((item) => <span key={item}>{item}</span>)}</div></article></Reveal>)}</div></div></section>
    <section className="section section--paper"><div className="container"><Reveal><div className="intro-grid"><span className="intro-grid__number">02 / The right shape</span><div><h2>Sometimes it is a sprint. <span>Sometimes it is a new operating model.</span></h2><div className="intro-grid__footer"><p>We work in focused engagements, embedded partnerships, and the space between them. The format follows the problem—not the other way around.</p><Link className="button button--dark" href="/contact">Find your shape <Icon name="ArrowUpRight" size={16} /></Link></div></div></div></Reveal></div></section>
    <section className="section section--tight"><div className="container"><Reveal><div className="section-heading"><div><p className="eyebrow">How to begin</p><h2>Start with the thing that is stuck.</h2></div><p>You do not need a perfect brief. A real tension is enough. We will help you turn it into a useful first conversation.</p></div><Link className="button" href="/contact">Share the context <Icon name="ArrowUpRight" size={16} /></Link></Reveal></div></section>
  </>;
}

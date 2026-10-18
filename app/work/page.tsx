import Link from "next/link";
import { Icon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";

export const metadata = {
  title: "Our thinking — practical ideas for meaningful movement",
  description: "Read the Passifle Labs point of view on strategy, AI systems, brand, and digital experience.",
  alternates: { canonical: "https://passiflelabs.com/work" },
};

const examples = [
  { type: "Practice example / Strategy", year: "01", title: "From scattered offer to one story customers can repeat.", copy: "A positioning and offer architecture exercise for a growing services company ready to move up-market.", tags: ["Positioning", "Offer design"], tone: "work-card--orange" },
  { type: "Practice example / Intelligent systems", year: "02", title: "From AI curiosity to a workflow people actually trust.", copy: "A practical map from manual friction to a reviewable, measurable AI-assisted operating loop.", tags: ["AI systems", "Operations"], tone: "work-card--violet" },
  { type: "Practice example / Experience", year: "03", title: "From feature list to a product people know how to use.", copy: "An experience direction for a complex digital service that needed less explanation and more momentum.", tags: ["UX direction", "Digital product"], tone: "work-card--mint" },
];

export default function WorkPage() {
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Passifle Labs thinking", description: metadata.description, url: "https://passiflelabs.com/work" }} />
    <section className="page-hero" id="main-content"><div className="container page-hero__inner"><div><p className="eyebrow">Our thinking</p><h1>Useful ideas for <em>better moves.</em></h1></div><p className="page-hero__note"><strong>We keep the work close to reality.</strong>These practice examples show the kinds of problems we like to make clearer. The names are illustrative; the method is real.</p></div></section>
    <section className="section"><div className="container"><div className="work-grid">{examples.map((example, index) => <Reveal key={example.year} className={`reveal-delay-${(index % 3) + 1}`}><article className={`work-card ${example.tone}`}><div className="work-card__top"><span className="work-card__type">{example.type}</span><span className="work-card__year">{example.year}</span></div><div className="work-card__bottom"><h2>{example.title}</h2><p>{example.copy}</p><div className="work-card__tags">{example.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><Link className="work-card__link" href="/contact" aria-label={`Discuss ${example.title}`}><Icon name="ArrowUpRight" size={19} strokeWidth={1.4} /></Link></article></Reveal>)}</div></div></section>
    <section className="section section--soft"><div className="container"><Reveal><div className="process-grid"><div className="process-grid__copy"><p className="eyebrow">A working belief</p><h2>Make it <em>obvious.</em></h2><p>People rarely resist change because they hate the future. They resist because the path there is blurry, costly, or disconnected from the work in front of them.</p></div><div className="process-list"><div className="process-item"><span className="process-item__number">01</span><div><h3>Start with the tension</h3><p>The thing that keeps getting explained, delayed, or worked around is often the best starting point.</p></div><Icon name="ArrowUpRight" size={20} /></div><div className="process-item"><span className="process-item__number">02</span><div><h3>Build the bridge</h3><p>Strategy should make the next action clearer. Design should make it easier. Systems should make it repeatable.</p></div><Icon name="ArrowUpRight" size={20} /></div><div className="process-item"><span className="process-item__number">03</span><div><h3>Measure movement</h3><p>We look for evidence that the work is working: a better decision, a shorter loop, or a stronger response from the people it serves.</p></div><Icon name="ArrowUpRight" size={20} /></div></div></div></Reveal></div></section>
    <section className="section section--tight"><div className="container"><Reveal><div className="section-heading"><div><p className="eyebrow">Your turn</p><h2>What are you trying to make clearer?</h2></div><Link className="button" href="/contact">Start the conversation <Icon name="ArrowUpRight" size={16} /></Link></div></Reveal></div></section>
  </>;
}

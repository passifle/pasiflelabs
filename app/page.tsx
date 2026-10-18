import Link from "next/link";
import { CursorGlow } from "@/components/cursor-glow";
import { Icon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { ThreeSignalScene } from "@/components/three-signal-scene";

const faqs = [
  ["What does Passifle Labs do?", "We help ambitious teams clarify their direction, design better ways of working, and turn complex business ideas into useful systems and experiences."],
  ["Do you work with early-stage companies?", "Yes. We work with founders and established teams when the next decision matters: a new offer, a sharper position, an AI opportunity, or a digital experience that needs to perform."],
  ["Can you help us use AI responsibly?", "We start with the work, not the model. We identify where intelligence creates real leverage, then design the right guardrails, workflow, and human decision points around it."],
  ["How do engagements begin?", "Usually with a focused conversation and a short diagnostic. We learn what is moving, what is stuck, and what a valuable first outcome would look like before recommending a shape of work."],
];

export const metadata = {
  title: "Strategy, systems & experience for the next move",
  description: "Passifle Labs helps ambitious companies make complex ideas clear, useful, and ready to move.",
  alternates: { canonical: "https://passiflelabs.com" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "WebSite", name: "Passifle Labs", url: "https://passiflelabs.com", potentialAction: { "@type": "SearchAction", target: "https://passiflelabs.com/?q={search_term_string}", "query-input": "required name=search_term_string" } }} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) }} />
      <CursorGlow />
      <section className="home-hero" id="main-content">
        <div className="container home-hero__inner">
          <div className="home-hero__copy">
            <p className="eyebrow home-hero__kicker">Independent strategy + systems consultancy</p>
            <h1 className="display home-hero__title">Make the complex <span>move.</span></h1>
            <p className="lede home-hero__lede">Passifle Labs helps ambitious companies find the clear idea, build the intelligent system, and create the experience people remember.</p>
            <div className="home-hero__actions"><Link className="button" href="/contact">Start a conversation <Icon name="ArrowUpRight" size={16} strokeWidth={1.8} /></Link><Link className="button button--ghost" href="/services">See what we do <Icon name="ArrowRight" size={16} strokeWidth={1.8} /></Link></div>
            <div className="home-hero__meta">Strategy · AI systems · Brand · Digital experiences</div>
          </div>
          <div className="home-hero__visual" aria-hidden="true"><ThreeSignalScene /><span className="orbit-label orbit-label--strategy">Strategy</span><span className="orbit-label orbit-label--systems">Systems</span><span className="orbit-label orbit-label--experience">Experience</span><div className="hero-stamp">Ideas<br />into<br />motion</div></div>
          <span className="scroll-hint">Scroll to explore</span>
        </div>
      </section>

      <div className="marquee" aria-label="Passifle Labs capabilities"><div className="marquee__track">{Array.from({ length: 2 }).flatMap((_, index) => ["Strategy", "AI systems", "Brand experience", "Digital products", "Growth clarity"].map((item) => <span className="marquee__item" key={`${index}-${item}`}>{item}</span>))}</div></div>

      <section className="section" id="about-preview"><div className="container"><Reveal><div className="intro-grid"><span className="intro-grid__number">01 / The point of view</span><div><h2>Good work makes a business feel <span>more like itself.</span></h2><div className="intro-grid__footer"><p>Not louder. Not busier. Clearer. We work across strategy, systems, and experience to make the important thing easier to see—and easier to act on.</p><Link className="text-link" href="/about">Meet the thinking <Icon name="ArrowRight" size={15} /></Link></div></div></div></Reveal></div></section>

      <section className="section section--soft" id="capabilities"><div className="container"><Reveal><div className="section-heading"><div><p className="eyebrow">What we bring</p><h2>Four ways to move with intention.</h2></div><p>Bring us the tangled brief, the ambitious idea, or the system that has outgrown the way you run it.</p></div></Reveal><div className="capabilities-grid">{[["01", "Strategy", "Find the sharpest path through a crowded market, a changing offer, or a decision that has been waiting too long.", "Compass"], ["02", "Intelligent systems", "Use AI and automation where they create leverage—designed around people, policy, and the way work actually happens.", "Spark"], ["03", "Brand & experience", "Make the promise clear across the words, identity, product, and moments that shape how people choose you.", "Signal"], ["04", "Digital products", "Turn a service, platform, or internal tool into a useful experience that earns attention and keeps it.", "Build"]].map(([number, title, text, icon], index) => <Reveal className={`reveal-delay-${(index % 3) + 1}`} key={number}><article className="capability"><div className="capability__index"><span>{number}</span><span>{icon}</span></div><div className="capability__icon">{index === 0 ? <Icon name="Globe2" size={21} strokeWidth={1.3} /> : index === 1 ? <Icon name="Sparkles" size={21} strokeWidth={1.3} /> : index === 2 ? <Icon name="Layers3" size={21} strokeWidth={1.3} /> : <Icon name="MoveUpRight" size={21} strokeWidth={1.3} />}</div><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div></div></section>

      <section className="section"><div className="container"><Reveal><div className="process-grid"><div className="process-grid__copy"><p className="eyebrow">How we work</p><h2>Less theatre.<br /><em>More traction.</em></h2><p>We keep the work close to the outcome. Every engagement is shaped around a useful decision, a working prototype, or a system your team can keep moving with.</p></div><div className="process-list">{[["01", "See clearly", "We turn a broad question into the one that will change what happens next."], ["02", "Make it tangible", "We move quickly from language to models, prototypes, and experiences people can react to."], ["03", "Leave momentum", "We build capability with your team, so the work keeps getting better after we step out."]].map(([number, title, text]) => <div className="process-item" key={number}><span className="process-item__number">{number}</span><div><h3>{title}</h3><p>{text}</p></div><Icon name="ArrowUpRight" size={20} strokeWidth={1.3} /></div>)}</div></div></Reveal></div></section>

      <section className="section statement"><div className="container"><Reveal><div className="statement__inner"><span className="statement__index">02 / The invitation</span><div><h2>Bring us the thing that is <span>hard to explain.</span></h2><div className="statement__actions"><p>We are at our best when the opportunity is real, the answer is not obvious, and there is something worth making clearer.</p><Link className="button button--dark" href="/contact">Tell us what is moving <Icon name="ArrowUpRight" size={16} /></Link></div></div></div></Reveal></div></section>

      <section className="section section--tight"><div className="container"><Reveal><div className="section-heading"><div><p className="eyebrow">Questions, answered</p><h2>A little more clarity.</h2></div><Link className="text-link" href="/contact">Ask us directly <Icon name="ArrowUpRight" size={15} /></Link></div></Reveal><div className="faq-list">{faqs.map(([question, answer]) => <details className="faq-item" key={question}><summary>{question}<Icon name="Plus" size={18} strokeWidth={1.5} /></summary><p>{answer}</p></details>)}</div></div></section>
    </>
  );
}

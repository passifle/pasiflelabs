import { ContactForm } from "@/components/contact-form";
import { Icon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";

export const metadata = {
  title: "Contact — tell us what is moving",
  description: "Start a conversation with Passifle Labs about strategy, AI systems, brand experience, or digital products.",
  alternates: { canonical: "https://passiflelabs.com/contact" },
};

export default function ContactPage() {
  return <div className="contact-page"><JsonLd data={{ "@context": "https://schema.org", "@type": "ContactPage", name: "Contact Passifle Labs", url: "https://passiflelabs.com/contact", mainEntity: { "@type": "Organization", name: "Passifle Labs", email: "hello@passiflelabs.com" } }} /><section className="page-hero" id="main-content"><div className="container page-hero__inner"><div><p className="eyebrow">Start a conversation</p><h1>Tell us what is <em>moving.</em></h1></div><p className="page-hero__note"><strong>Bring the messy version.</strong>A half-formed idea, a stubborn problem, or the opportunity that keeps getting pushed to next quarter is more than enough to start.</p></div></section><section className="container contact-wrap"><aside className="contact-aside"><h2>Let’s make the next step clearer.</h2><p>Share a little context and we will come back with a thoughtful first response—not a generic sales sequence.</p><div className="contact-aside__details"><a href="mailto:hello@passiflelabs.com">hello@passiflelabs.com <Icon name="ArrowUpRight" size={14} /></a><span>Bengaluru · working globally</span><span>New project conversations · select availability</span></div></aside><ContactForm /></section></div>;
}

"use client";

import { FormEvent, useState } from "react";
import { Icon } from "@/components/icons";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return <div className="form-success"><div className="form-success__icon"><Icon name="CheckCircle2" size={26} /></div><p className="eyebrow">Message received</p><h2>Good. This is where the interesting part starts.</h2><p>This local preview captured your enquiry. Connect the form endpoint before launch so real submissions reach your team.</p><button className="button button--dark" type="button" onClick={() => setSubmitted(false)}>Send another note <Icon name="ArrowRight" size={16} /></button></div>;
  }

  return <form className="contact-form" onSubmit={onSubmit}>
    <div className="form-grid"><label><span>Your name</span><input name="name" required placeholder="Aditi Kapoor" /></label><label><span>Work email</span><input name="email" type="email" required placeholder="you@company.com" /></label><label><span>Company</span><input name="company" placeholder="Your company" /></label><label><span>What can we help with?</span><select name="service" defaultValue=""><option value="" disabled>Select one</option><option>Strategy and positioning</option><option>AI and intelligent systems</option><option>Brand and experience</option><option>Something more specific</option></select></label><label className="form-grid__full"><span>Tell us what is moving</span><textarea name="message" required placeholder="A little context is more useful than a perfect brief." rows={5} /></label></div>
    <div className="form-bottom"><p>We usually reply within two working days.</p><button className="button" type="submit">Send your note <Icon name="Send" size={15} /></button></div>
  </form>;
}

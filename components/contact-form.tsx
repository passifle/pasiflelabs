"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { Icon } from "@/components/icons";

type ContactFields = {
  name: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
  botcheck?: string;
};

export function ContactForm() {
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFields>({ mode: "onTouched" });

  const { submit: submitToWeb3Forms } = useWeb3Forms({
    access_key: accessKey || "",
    settings: {
      from_name: "Passifle Labs website",
      subject: "New enquiry from passiflelabs.com",
    },
    onSuccess: (message) => {
      setResult({ success: true, message: message || "Thanks — your note is on its way." });
      reset();
    },
    onError: (message) => {
      setResult({ success: false, message: message || "Something went wrong. Please email us directly." });
    },
  });

  function onSubmit(fields: ContactFields) {
    setResult(null);
    if (!accessKey) {
      setResult({ success: false, message: "The form is not configured yet. Please email hello@passiflelabs.com while the Web3Forms key is being added." });
      return;
    }
    void submitToWeb3Forms(fields);
  }

  return <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
    <input className="contact-form__botcheck" type="checkbox" tabIndex={-1} aria-hidden="true" {...register("botcheck")} />
    <div className="form-grid">
      <label className={errors.name ? "form-field--error" : ""}><span>Your name</span><input autoComplete="name" aria-invalid={Boolean(errors.name)} placeholder="Aditi Kapoor" {...register("name", { required: "Please tell us your name.", maxLength: { value: 80, message: "Keep your name under 80 characters." } })} />{errors.name && <small className="form-field__error">{errors.name.message}</small>}</label>
      <label className={errors.email ? "form-field--error" : ""}><span>Work email</span><input autoComplete="email" type="email" aria-invalid={Boolean(errors.email)} placeholder="you@company.com" {...register("email", { required: "Enter your email.", pattern: { value: /^\S+@\S+\.\S+$/, message: "Please enter a valid email." } })} />{errors.email && <small className="form-field__error">{errors.email.message}</small>}</label>
      <label><span>Company</span><input autoComplete="organization" placeholder="Your company" {...register("company")} /></label>
      <label><span>What can we help with?</span><select defaultValue="" {...register("service")}><option value="">Select one</option><option>Strategy and positioning</option><option>AI and intelligent systems</option><option>Brand and experience</option><option>Something more specific</option></select></label>
      <label className={`form-grid__full ${errors.message ? "form-field--error" : ""}`}><span>Tell us what is moving</span><textarea aria-invalid={Boolean(errors.message)} placeholder="A little context is more useful than a perfect brief." rows={5} {...register("message", { required: "Tell us a little about what is moving.", maxLength: { value: 4000, message: "Keep your message under 4,000 characters." } })} />{errors.message && <small className="form-field__error">{errors.message.message}</small>}</label>
    </div>
    {result && <div className={`contact-form__status ${result.success ? "contact-form__status--success" : "contact-form__status--error"}`} role="status"><Icon name={result.success ? "CheckCircle2" : "Mail"} className="contact-form__status-icon" size={16} /><span>{result.message}</span></div>}
    <div className="form-bottom"><p>{accessKey ? "We usually reply within two working days." : "Add the Web3Forms key to enable delivery."}</p><button className="button" type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending…" : "Send your note"} <Icon name="Send" size={15} /></button></div>
  </form>;
}

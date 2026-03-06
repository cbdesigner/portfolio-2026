"use client";

import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen theme-transition">
        <div className=" mx-auto px-8 md:px-16 py-22 text-center">
          <h1 className="font-heading text-display-lg tracking-display mb-4">{t.contact.thankYou}</h1>
          <p className="text-body-lg text-[var(--color-text-secondary)]">
            {t.contact.received}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen theme-transition">
      <div className=" mx-auto px-8 md:px-16 py-22">
        {/* Hero */}
        <header className="mb-12">
          <h1 className="font-heading text-display-lg tracking-display mb-4">{t.contact.title}</h1>
        </header>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-overline uppercase tracking-widest-caps text-[var(--color-text-tertiary)] mb-3 font-mono"
            >
              {t.contact.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-0 py-3 bg-transparent border-0 border-b border-[var(--color-border)] text-[var(--color-text-primary)] placeholder-[var(--color-text-tertiary)] focus:outline-none focus:border-[var(--color-text-primary)] transition-colors theme-transition"
              placeholder={t.contact.namePlaceholder}
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-overline uppercase tracking-widest-caps text-[var(--color-text-tertiary)] mb-3 font-mono"
            >
              {t.contact.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-0 py-3 bg-transparent border-0 border-b border-[var(--color-border)] text-[var(--color-text-primary)] placeholder-[var(--color-text-tertiary)] focus:outline-none focus:border-[var(--color-text-primary)] transition-colors theme-transition"
              placeholder={t.contact.emailPlaceholder}
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-overline uppercase tracking-widest-caps text-[var(--color-text-tertiary)] mb-3 font-mono"
            >
              {t.contact.message}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-0 py-3 bg-transparent border-0 border-b border-[var(--color-border)] text-[var(--color-text-primary)] placeholder-[var(--color-text-tertiary)] focus:outline-none focus:border-[var(--color-text-primary)] transition-colors resize-none theme-transition"
              placeholder={t.contact.messagePlaceholder}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full btn-ghost py-4 text-sm font-medium tracking-editorial uppercase"
          >
            {t.contact.send}
          </button>
        </form>
      </div>
    </div>
  );
}

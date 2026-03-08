"use client";

import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const PERSONAL_DOMAINS = [
  "gmail.com",
  "googlemail.com",
  "hotmail.com",
  "hotmail.es",
  "outlook.com",
  "outlook.es",
  "live.com",
  "live.cl",
  "yahoo.com",
  "yahoo.es",
  "yahoo.cl",
  "ymail.com",
  "aol.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "protonmail.com",
  "proton.me",
  "zoho.com",
  "mail.com",
  "gmx.com",
  "gmx.net",
  "fastmail.com",
  "tutanota.com",
  "tuta.io",
  "msn.com",
  "qq.com",
  "163.com",
  "126.com",
  "yandex.com",
  "yandex.ru",
];

function isPersonalEmail(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase();
  if (!domain) return false;
  return PERSONAL_DOMAINS.includes(domain);
}

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [emailError, setEmailError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      if (value && isPersonalEmail(value)) {
        setEmailError(t.contact.emailError);
      } else {
        setEmailError("");
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isPersonalEmail(formData.email)) {
      setEmailError(t.contact.emailError);
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen theme-transition">
        <div className="max-w-5xl mx-auto px-8 md:px-16 py-22 text-center">
          <h1 className="font-heading text-display-lg tracking-display mb-4">
            {t.contact.thankYou}
          </h1>
          <p className="text-body-lg text-[var(--color-text-secondary)]">
            {t.contact.received}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen theme-transition">
      <div className="max-w-5xl mx-auto px-8 md:px-16 py-22">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          {/* Left column — Title + Description */}
          <div className="flex flex-col justify-start">
            <h1 className="font-heading text-display-lg tracking-display mb-6">
              {t.contact.title}
            </h1>
            <p className="text-body-lg text-[var(--color-text-secondary)] leading-relaxed">
              {t.contact.description}
            </p>
          </div>

          {/* Right column — Form */}
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
                className={`w-full px-0 py-3 bg-transparent border-0 border-b text-[var(--color-text-primary)] placeholder-[var(--color-text-tertiary)] focus:outline-none transition-colors theme-transition ${
                  emailError
                    ? "border-red-500 focus:border-red-500"
                    : "border-[var(--color-border)] focus:border-[var(--color-text-primary)]"
                }`}
                placeholder={t.contact.emailPlaceholder}
              />
              {emailError && (
                <p className="mt-2 text-sm text-red-500">{emailError}</p>
              )}
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
    </div>
  );
}

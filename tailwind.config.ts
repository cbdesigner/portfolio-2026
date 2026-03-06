import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      colors: {
        surface: "var(--color-surface)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "text-tertiary": "var(--color-text-tertiary)",
        border: "var(--color-border)",
        "card-bg": "var(--color-card-bg)",
        "nav-bg": "var(--color-nav-bg)",
        overlay: "var(--color-overlay)",
      },
      fontSize: {
        "display-xl": [
          "clamp(3.75rem, 5vw + 1.25rem, 7.5rem)",
          { lineHeight: "0.95", letterSpacing: "-0.03em", fontWeight: "400" },
        ],
        "display-lg": [
          "clamp(2.75rem, 3.5vw + 0.75rem, 5rem)",
          { lineHeight: "1", letterSpacing: "-0.025em", fontWeight: "400" },
        ],
        "display-md": [
          "clamp(1.95rem, 2vw + 0.65rem, 2.75rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "400" },
        ],
        "body-lg": [
          "clamp(1.15rem, 0.5vw + 1rem, 1.4rem)",
          { lineHeight: "1.7", fontWeight: "400" },
        ],
        "body-md": [
          "clamp(1.05rem, 0.3vw + 0.95rem, 1.15rem)",
          { lineHeight: "1.7", fontWeight: "400" },
        ],
        caption: [
          "0.9rem",
          { lineHeight: "1.5", letterSpacing: "0.01em", fontWeight: "400" },
        ],
        overline: [
          "0.75rem",
          { lineHeight: "1.4", letterSpacing: "0.12em", fontWeight: "500" },
        ],
      },
      letterSpacing: {
        tightest: "-0.04em",
        display: "-0.025em",
        editorial: "0.04em",
        "widest-caps": "0.14em",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.2, 0, 0.2, 1)",
      },
      maxWidth: {
        editorial: "72rem",
        narrow: "48rem",
        reading: "40rem",
      },
    },
  },
  plugins: [],
};
export default config;

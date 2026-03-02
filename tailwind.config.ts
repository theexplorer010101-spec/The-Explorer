import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "rgb(var(--paper) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        "accent-2": "rgb(var(--accent-2) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "ui-serif", "Georgia", "serif"],
      },
      typography: ({ theme }) => ({
        explorer: {
          css: {
            "--tw-prose-body": theme("colors.ink"),
            "--tw-prose-headings": theme("colors.ink"),
            "--tw-prose-lead": theme("colors.muted"),
            "--tw-prose-links": theme("colors.accent"),
            "--tw-prose-bold": theme("colors.ink"),
            "--tw-prose-counters": theme("colors.muted"),
            "--tw-prose-bullets": theme("colors.muted"),
            "--tw-prose-hr": "rgb(0 0 0 / 0.08)",
            "--tw-prose-quotes": theme("colors.ink"),
            "--tw-prose-quote-borders": "rgb(0 0 0 / 0.10)",
            "--tw-prose-captions": theme("colors.muted"),
            "--tw-prose-code": theme("colors.ink"),
            "--tw-prose-pre-code": "rgb(244 244 245)",
            "--tw-prose-pre-bg": "rgb(17 24 39)",
            "--tw-prose-th-borders": "rgb(0 0 0 / 0.10)",
            "--tw-prose-td-borders": "rgb(0 0 0 / 0.08)",
            maxWidth: "none",
            fontSize: theme("fontSize.base")[0],
            lineHeight: theme("lineHeight.relaxed"),
            letterSpacing: "0.005em",
            a: {
              textDecoration: "underline",
              textDecorationThickness: "from-font",
              textUnderlineOffset: "0.18em",
            },
            h1: { fontFamily: theme("fontFamily.heading").join(",") },
            h2: { fontFamily: theme("fontFamily.heading").join(",") },
            h3: { fontFamily: theme("fontFamily.heading").join(",") },
            blockquote: {
              fontStyle: "normal",
              borderLeftWidth: "2px",
            },
            code: {
              fontWeight: "500",
              paddingInline: "0.25em",
              paddingBlock: "0.15em",
              borderRadius: "0.25rem",
              backgroundColor: "rgb(0 0 0 / 0.04)",
            },
            "code::before": { content: "''" },
            "code::after": { content: "''" },
            pre: {
              borderRadius: "0.75rem",
              padding: "1rem",
            },
            "pre code": {
              backgroundColor: "transparent",
              padding: "0",
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
} satisfies Config;


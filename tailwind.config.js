/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        nacelle: ["var(--font-nacelle)", "sans-serif"],
        mono: ["Roboto Mono", "monospace"]
      },
      fontSize: {
        xs: ["0.8125rem", { lineHeight: "1.5384" }],
        sm: ["0.875rem", { lineHeight: "1.5715" }],
        base: [
          "0.9375rem",
          { lineHeight: "1.5333", letterSpacing: "-0.0125em" },
        ],
        lg: ["1.125rem", { lineHeight: "1.5", letterSpacing: "-0.0125em" }],
        xl: ["1.25rem", { lineHeight: "1.5", letterSpacing: "-0.0125em" }],
        "2xl": ["1.5rem", { lineHeight: "1.415", letterSpacing: "-0.0268em" }],
        "3xl": [
          "1.75rem",
          { lineHeight: "1.3571", letterSpacing: "-0.0268em" },
        ],
        "4xl": ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.0268em" }],
        "5xl": ["3.5rem", { lineHeight: "1", letterSpacing: "-0.0268em" }],
        "6xl": ["4rem", { lineHeight: "1", letterSpacing: "-0.0268em" }],
        "7xl": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.0268em" }],
      },
      animation: {
        shine: "shine 5s ease-in-out 500ms infinite",
        blink : "blink 1s infinite",
      },
      keyframes: {
        shine: {
          "0%": { top: "0", transform: "scaleY(5)", opacity: "0" },
          "10%": { opacity: ".8" },
          "20%": { top: "100%", transform: "scaleY(10)", opacity: "0" },
          "100%": { top: "100%", transform: "scaleY(1)", opacity: "0" },
        },
        gradient: {
          to: { "background-position": "200% center" },
        },
        "code-1": {
          "0%": { opacity: 0 },
          "2.5%": { opacity: 1 },
          "97.5%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        "code-2": {
          "16.2%": { opacity: 0 },
          "18.75%": { opacity: 1 },
          "97.5%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        "code-3": {
          "32.5%": { opacity: 0 },
          "35%": { opacity: 1 },
          "97.5%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        "code-4": {
          "48.75%": { opacity: 0 },
          "51.25%": { opacity: 1 },
          "97.5%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        "code-5": {
          "65%": { opacity: 0 },
          "72.5%": { opacity: 1 },
          "97.5%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        "code-6": {
          "81.25%": { opacity: 0 },
          "83.75%": { opacity: 1 },
          "97.5%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        "code-7": {
          "85%": { opacity: 0 },
          "90%": { opacity: 1 },
          "97.5%": { opacity: 1 },
          "100%": { opacity: 0},
        },
        breath: {
          "0%, 100%": { transform: "scale(0.95)" },
          "50%": { transform: "scale(1.1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5%)" },
        },
        line: {
          "0%, 100%": { left: 0, opacity: 0 },
          "50%": { left: "100%", transform: "translateX(-100%)" },
          "10%, 40%, 60%, 90%": { opacity: 0 },
          "25%, 75%": { opacity: 1 },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        blink: {
          "0%" : { opacity: 1 },
          "50%" : { opacity: 0 },
          "100%" : { opacity: 1 },
        }
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

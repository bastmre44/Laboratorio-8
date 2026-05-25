/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#0A0A0F",
        surface: "#111118",
        card: "#16161F",

        accent: "#6C63FF",
        accentLight: "#8B85FF",
        accentGlow: "rgba(108, 99, 255, 0.35)",

        text: "#F5F7FA",
        muted: "#A1A1B5",

        border: "rgba(255,255,255,0.08)",
      },

      fontFamily: {
        heading: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },

      boxShadow: {
        glow: "0 0 30px rgba(108, 99, 255, 0.15)",
      },

      backgroundImage: {
        noise:
          "url('https://www.transparenttextures.com/patterns/asfalt-light.png')",
      },
    },
  },

  plugins: [],
}
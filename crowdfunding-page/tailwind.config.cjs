/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      cyan: {
        moderate: "hsl(176, 50%, 47%)",
        dark: "hsl(176, 72%, 28%)",
      },
      black: "hsl(0, 0%, 0%)",
      white: "hsl(100, 100%, 100%)",
      darkGray: "hsl(0, 0%, 48%)",
      "slate-50": "#f8fafc",
      "gray-300": "#d1d5db",
    },
    fontFamily: {
      sans: ["Commissioner", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-desktop": "url('images/image-hero-desktop.jpg')",
        "hero-mobile": "url('/images/image-hero-mobile.jpg')",
      },
    },
  },
  plugins: [],
};

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      width: {
        'fit-content': 'fit-content(20em)',
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0)',
      },
      backgroundColor: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        themeBackground: "var(--bg-base-100)",
        footer: "var(--bg-footer)",
        hoverCard: "var(--bg-hover-card)",
      },
      fontFamily: {
        alfaSlab: ["Alfa Slab One, cursive", ...defaultTheme.fontFamily.sans],
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
        jura: ["Jura", ...defaultTheme.fontFamily.sans],
        heebo: ["Heebo", ...defaultTheme.fontFamily.sans],
        ubuntu: ["Ubuntu, Lato, Journal, Merriweather", ...defaultTheme.fontFamily.sans]
      },
      textColor: {
        forePrimary: "var(--text-primary)",
        blogTextColor: "var(--color-font-blog)",
        dark: "var(--color-dark-text)",
        light: "var(--color-light-text)",
        darkHeading: "var(--color-dark-heading)"
      },
    },
  },
  variants: {
    extend: {},
  },
  
  plugins: [require("daisyui"), require('@themesberg/flowbite/plugin')],
  daisyui: {
    styled: false,
  },
};

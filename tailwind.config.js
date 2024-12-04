/** @type {import('tailwindcss').Config} */
const fiord = {
  '50': '#f3f7f8',
  '100': '#dfe9ee',
  '200': '#c3d5de',
  '300': '#99b6c7',
  '400': '#6890a8',
  '500': '#4d758d',
  '600': '#436177',
  '700': '#3a5062',
  '800': '#364654',
  '900': '#313d48',
  '950': '#1d262f',
}
fiord.DEFAULT = fiord["700"]
const lochmara = {
  '50': '#f1f9fe',
  '100': '#e3f1fb',
  '200': '#c0e3f7',
  '300': '#89cdf0',
  '400': '#4bb3e5',
  '500': '#239ad4',
  '600': '#1786c4', // Main
  '700': '#126392',
  '800': '#135379',
  '900': '#164664',
  '950': '#0e2d43',
}
lochmara.DEFAULT = lochmara["600"]
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: {height: "0"},
          to: {height: "var(--radix-accordion-content-height)"},
        },
        "accordion-up": {
          from: {height: "var(--radix-accordion-content-height)"},
          to: {height: "0"},
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        primary: fiord,
        secondary: lochmara,
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
  safelist: [
    {
      pattern: /gap-.+/,
    },
    {
      pattern: /grid.+/,
    }
  ],
};

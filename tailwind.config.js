/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "a690": { 'min': '690px' },
        '69210': { 'min': '691px', 'max': '999px' },
        'a999': { 'min': '1000px' },
        'b81t1199': { 'min': '810px', 'max': '1199px' },
        't809': { 'max': '809px' },
        't1199': { 'max': '1199px' },
        't690': { 'max': '690px' },
        't999': { 'max': '999px' },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        satoshimed: ['var(--font-satoshi-medium)'],
        neuton: ['var(--font-neuton)'],
        instrumentserif: ['var(--font-instrument-serif)'],

      },
    },
  },
  plugins: [],
};

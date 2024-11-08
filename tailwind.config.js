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
        'aft750': { 'min': '750px' },
        'aft990': { 'min': '990px' },
        'a999': { 'min': '1000px' },
        'b81t1199': { 'min': '810px', 'max': '1199px' },
        't749px': { 'max': '749px' },
        't690': { 'max': '690px' },
        't809': { 'max': '809px' },
        't999': { 'max': '999px' },
        't1199': { 'max': '1199px' },

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
      animation: {
        slideout: 'slideout .5s cubic-bezier(.87,0,.13,1)  forwards',
        enter: 'enter .8s forwards'
      },
      keyframes: {
        slideout: {
          '0%': { transform: 'scaleY(1)' },
          '100%': { transform: 'scaleY(0)' },
        },
        enter: {
          '0%': { visibility: 'visible' },
          '100%': { visibility: 'hidden' }
        }
      }
    },
  },
  plugins: [],
};

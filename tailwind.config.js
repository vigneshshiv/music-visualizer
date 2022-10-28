/**
 * Tailwind config for CSS
 */

/** 
 * @type {import('tailwindcss').Config} 
 */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0b0b0b',
        lite: '#f7f7f7'
      }
    },
  },
  plugins: [],
}

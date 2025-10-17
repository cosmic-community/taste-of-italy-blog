/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D4AF37',
        'primary-dark': '#B8962E',
        secondary: '#2C3E50',
        'secondary-light': '#34495E',
        accent: '#E74C3C',
        cream: '#FFF9F0',
        'warm-gray': '#F5F1E8',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
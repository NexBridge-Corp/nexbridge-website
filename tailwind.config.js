/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        border: 'var(--color-border)',
        primary: '#06B6D4',
        'text-base': 'var(--color-text)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        logo: ['Outfit', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(to right, #06B6D4, #6366F1, #A855F7)',
      },
    },
  },
  plugins: [],
}

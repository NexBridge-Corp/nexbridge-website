/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0F1C',
        surface: '#111827',
        border: '#1F2937',
        primary: '#06B6D4',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(to right, #06B6D4, #6366F1, #A855F7)',
      },
    },
  },
  plugins: [],
}

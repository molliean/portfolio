/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cobalt': '#4056A1',
        'corvette': '#F13C20',
        'lavender': '#C5CBE3',
        'dutch-white': '#EFE2BA',
        'harvest-gold': '#D79922',
        'dark-green': '#1A281F',
        'sage': '#B8D3D1',
        'blue-black': '#131E25',
        'aqua': '#5CFBBE'
      },
      fontFamily: {
        reddit: ['Reddit Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}


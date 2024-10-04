/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': "url('/src/assets/bgimg2.jpg')",
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        afacadflux: ['Afacad Flux', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

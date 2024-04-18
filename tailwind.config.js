/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '540px',
      },
      fontFamily: {
        primary: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        brand: '#FF385C',
      },
    },
  },
  plugins: [],
};

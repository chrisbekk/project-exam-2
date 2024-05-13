/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '430px',
      md: '835px',
      lg: '1280px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        primary: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        brand: '#FF385C',
      },
      keyframes: {
        bannerLeft: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        bannerRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(50%)' },
        },
      },
      animation: {
        bannerLeft: 'bannerLeft 5s linear infinite',
        bannerRight: 'bannerRight 5s linear infinite',
      },
    },
  },
  plugins: [],
};

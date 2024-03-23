/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'poppins' : ['Poppins', 'sans-serif'],
      },
      colors: {
        'beige' : '#F5EFE7',
        'blue' : '#1D5D9B',
        'd-blue' : '#213555',
      },
      height: {
        '1/10' : '10%',
        '1/5' : '20%',
        '9/10' : '90%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  extends: {
    Animation: {
      marquee: 'marquee 25s linear infinite',
    },
    keyframes: {
      marquee: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
    },
  }
}

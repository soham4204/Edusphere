/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#1A312C',
          DEFAULT: '#428475',
          light: '#89D7B7',
          bg: '#FFF4E1',
          'bg-dark': '#F5E8D0',
          muted: '#2D4A44',
        },
      },
      height: {
        '1/10': '10%',
        '1/5': '20%',
        '9/10': '90%',
      },
      boxShadow: {
        soft: '0 4px 24px -4px rgba(26, 49, 44, 0.08)',
        card: '0 8px 32px -8px rgba(26, 49, 44, 0.12)',
        glow: '0 0 40px -8px rgba(137, 215, 183, 0.5)',
        'glow-brand': '0 0 40px -8px rgba(66, 132, 117, 0.4)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-brand': 'linear-gradient(135deg, #428475 0%, #89D7B7 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1A312C 0%, #2D4A44 100%)',
        'gradient-hero': 'linear-gradient(180deg, #FFF4E1 0%, #F5E8D0 50%, #FFF4E1 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  variants: {
    extend: {
      backdropBlur: ['responsive'],
    },
  },
  plugins: [],
};

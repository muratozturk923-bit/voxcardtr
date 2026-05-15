/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#C9A84C',
          600: '#B8933A',
          700: '#9A7A2E',
          800: '#7D6124',
          900: '#5C461A',
        },
        champagne: {
          DEFAULT: '#C9A84C',
          light: '#E2C97A',
          dark: '#9A7A2E',
        },
        dark: {
          950: '#030305',
          900: '#080810',
          800: '#0D0D18',
          700: '#121220',
          600: '#1A1A2E',
          500: '#1E1E30',
          400: '#252540',
        },
        anthracite: {
          DEFAULT: '#1C1C1E',
          light: '#2C2C2E',
          dark: '#141416',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #E2C97A 50%, #C9A84C 100%)',
        'dark-gradient': 'linear-gradient(135deg, #080810 0%, #1A1A2E 100%)',
        'hero-gradient': 'radial-gradient(ellipse at top, #1A1A2E 0%, #080810 70%)',
        'card-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
      },
      boxShadow: {
        'gold': '0 0 30px rgba(201, 168, 76, 0.3)',
        'gold-lg': '0 0 60px rgba(201, 168, 76, 0.4)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.5)',
        'premium': '0 20px 60px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          from: { boxShadow: '0 0 20px rgba(201, 168, 76, 0.2)' },
          to: { boxShadow: '0 0 40px rgba(201, 168, 76, 0.5)' },
        },
      },
    },
  },
  plugins: [],
}

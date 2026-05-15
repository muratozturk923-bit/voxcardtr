/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#070708',
          900: '#0a0a0c',
          800: '#101014',
          700: '#16161c',
          600: '#1c1c24',
          500: '#23232d',
        },
        champagne: {
          50: '#fbf5e6',
          100: '#f4e8c8',
          200: '#ead29a',
          300: '#dcb86a',
          400: '#cfa14a',
          500: '#c08a32',
          600: '#a06f24',
          700: '#7c531a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        luxury: '0.18em',
      },
      boxShadow: {
        glass: '0 1px 0 0 rgba(255,255,255,0.06) inset, 0 30px 60px -20px rgba(0,0,0,0.6)',
        gold: '0 10px 40px -10px rgba(207,161,74,0.45)',
      },
      backgroundImage: {
        'gold-gradient':
          'linear-gradient(135deg, #f4e8c8 0%, #dcb86a 35%, #a06f24 65%, #f4e8c8 100%)',
        'gold-soft':
          'linear-gradient(135deg, rgba(244,232,200,0.95) 0%, rgba(220,184,106,0.95) 50%, rgba(160,111,36,0.95) 100%)',
        'ink-radial':
          'radial-gradient(60% 50% at 50% 0%, rgba(207,161,74,0.18) 0%, rgba(7,7,8,0) 70%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.9s ease-out both',
        'fade-in': 'fadeIn 1.2s ease-out both',
        'float-slow': 'float 8s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};

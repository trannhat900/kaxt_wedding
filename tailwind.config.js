/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#fef5f7',
          100: '#fce8ec',
          200: '#f9d5dd',
          300: '#f5b3c1',
          400: '#ef8499',
          500: '#e55571',
          600: '#d1355a',
          700: '#b02749',
          800: '#932342',
          900: '#7d213d',
        },
        champagne: {
          50: '#faf9f5',
          100: '#f5f2e8',
          200: '#ebe4d0',
          300: '#ddd2b0',
          400: '#ccbb8d',
          500: '#bea670',
          600: '#a88c5e',
          700: '#8b734f',
          800: '#745f45',
          900: '#60503b',
        },
        ivory: {
          50: '#fffff9',
          100: '#fffef0',
          200: '#fffcdb',
          300: '#fff9c2',
          400: '#fff39d',
          500: '#ffe978',
          600: '#f5d94d',
          700: '#e0c12f',
          800: '#bc9a1e',
          900: '#9a7b14',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        script: ['Great Vibes', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'petal-fall': 'petalFall 8s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        petalFall: {
          '0%': { transform: 'translateY(-10vh) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(110vh) rotate(360deg)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './App.tsx', './index.tsx', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        brand: {
          ivory: '#FFF9EF', navy: '#172B3A', 'navy-light': '#243b4e', 'navy-dark': '#0f1d27',
          orange: '#EF643E', 'orange-hover': '#dc532d', sage: '#CBD9C4', 'sage-light': '#EBF2E8',
          'sage-dark': '#9EB195', sand: '#F5EFE4', muted: '#5F707D', border: '#E8DEC9',
        },
      },
    },
  },
  plugins: [],
};

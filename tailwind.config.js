/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#57ABE1',
        accent: '#3a8ac1',
        'text-dark': '#0D1B2A',
        'text-light': '#E0E1DD',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 15px rgba(87, 171, 225, 0.5), 0 0 20px rgba(87, 171, 225, 0.3)',
      },
    },
  },
  plugins: [],
};

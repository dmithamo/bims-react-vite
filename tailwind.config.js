/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        base: '14px',
      },
      colors: {
        accent: 'rgb(var(--accent-rgb))',
        error: 'rgb(var(--error-rgb))',
        back: 'rgb(var(--background-rgb))',
        fore: 'rgb(var(--foreground-rgb))',
      },
      fontFamily: {
        sans: ['Circular Std', 'sans-serif'],
        bold: ['Circular Std Bold', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};

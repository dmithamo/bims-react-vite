/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        base: '12px',
      },
      colors: {
        accent: '#FF7F11',
        primary: '#000000',
        secondary: '#fdfdfc',
        background: '#ececd5',
        'background-input': '#cfcfcf',
        error: '#c00',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};

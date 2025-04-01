/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        // Light mode colors
        light: {
          bg: {
            main: '#FAFAFA',
            card: '#E5E5E5',
            sub: '#EDEDED',
          },
          text: {
            main: '#404040',
            title: '#171717',
            gray: '#737373',
            sub: '#525252',
          },
          stroke: {
            main: '#D4D4D4',
          },
        },
        // Dark mode colors
        dark: {
          bg: {
            main: '#171717',
            card: '#262626',
            sub: '#363636',
          },
          text: {
            main: '#b5b5b5',
            title: '#e5e5e5',
            gray: '#808080',
            sub: '#a3a3a3',
          },
          stroke: {
            main: '#404040',
          },
        },
      },
    },
  },
  plugins: [],
};

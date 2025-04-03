import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
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
            sub: '#E5E7ED',
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
            main: '#B5B5B5',
            title: '#E5E5E5',
            gray: '#808080',
            sub: '#A3A3A3',
          },
          stroke: {
            main: '#404040',
            sub: '#E5E7EB',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;

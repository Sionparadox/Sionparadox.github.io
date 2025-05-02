import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        cardBg: 'var(--cardBg)',
        subBg: 'var(--subBg)',
        foreground: 'var(--foreground)',
        title: 'var(--title)',
        greyText: 'var(--greyText)',
        subText: 'var(--subText)',
        strokeMain: 'var(--strokeMain)',
      },
    },
  },
  plugins: [],
};

export default config;

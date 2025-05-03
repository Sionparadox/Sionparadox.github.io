import React, { useLayoutEffect } from 'react';
import { useAtomValue } from 'jotai';
import { themeAtom } from '@/atoms/theme';

if (typeof window !== 'undefined') {
  const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
  const root = window.document.documentElement;
  if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  }
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useAtomValue(themeAtom);

  useLayoutEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute('data-theme', theme);
  }, [theme]);

  return <>{children}</>;
};

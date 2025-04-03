import { useEffect } from 'react';
import { useAtomValue } from 'jotai';
import { themeAtom } from '@/atoms/theme';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useAtomValue(themeAtom);

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute('data-theme', theme);
  }, [theme]);

  return <>{children}</>;
};

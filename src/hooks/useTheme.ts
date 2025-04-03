import { useAtom } from 'jotai';
import { themeAtom, toggleThemeAtom } from '@/atoms/theme';

export const useTheme = () => {
  const [theme, setTheme] = useAtom(themeAtom);
  const [, toggleTheme] = useAtom(toggleThemeAtom);

  return {
    theme,
    setTheme,
    toggleTheme,
  };
};

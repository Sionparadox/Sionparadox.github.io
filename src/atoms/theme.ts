import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export type Theme = 'light' | 'dark';

// 로컬스토리지와 연동된 atom
export const themeAtom = atomWithStorage<Theme>('theme', 'light');

// 테마 토글 atom
export const toggleThemeAtom = atom(null, (get, set) => {
  const currentTheme = get(themeAtom);
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  set(themeAtom, newTheme);
});

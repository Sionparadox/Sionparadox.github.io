import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

interface SidebarState {
  isOpen: boolean;
  toggle: () => void;
}

export const sidebarAtom = atomWithStorage<SidebarState>('sidebar', {
  isOpen: false,
  toggle: () => {},
});

export const setSidebarToggleAtom = atom(null, (get, set) => {
  const sidebar = get(sidebarAtom);
  set(sidebarAtom, {
    ...sidebar,
    toggle: () => {
      set(sidebarAtom, {
        ...sidebar,
        isOpen: !sidebar.isOpen,
      });
    },
  });
});

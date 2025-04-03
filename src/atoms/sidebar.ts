import { atom } from 'jotai';

interface SidebarState {
  isOpen: boolean;
  toggle: () => void;
}

const getInitialState = (): boolean => {
  const stored = localStorage.getItem('sidebar-open');
  return stored ? JSON.parse(stored) : false;
};

export const sidebarAtom = atom<SidebarState>({
  isOpen: getInitialState(),
  toggle: () => {},
});

export const setSidebarToggleAtom = atom(null, (get, set) => {
  const toggle = () => {
    const currentState = get(sidebarAtom);
    const newIsOpen = !currentState.isOpen;
    localStorage.setItem('sidebar-open', JSON.stringify(newIsOpen));
    set(sidebarAtom, {
      ...currentState,
      isOpen: newIsOpen,
    });
  };

  set(sidebarAtom, (prev) => ({
    ...prev,
    toggle,
  }));
});

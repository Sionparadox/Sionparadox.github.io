import { atom } from 'jotai';

export type ModalType = 'profile' | null;

export const modalAtom = atom<ModalType>(null);

export const setModalAtom = atom(null, (_, set, newModal: ModalType) => {
  set(modalAtom, newModal);
});

export const closeModalAtom = atom(null, (_, set) => {
  set(modalAtom, null);
});

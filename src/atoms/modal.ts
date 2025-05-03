import { atom } from 'jotai';

export type ModalType = 'profile' | null;

export const modalAtom = atom<ModalType>(null);

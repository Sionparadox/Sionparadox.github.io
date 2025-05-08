import { useAtom } from 'jotai';
import { modalAtom } from '@/atoms/modal';
import { useCallback, useEffect } from 'react';

export const useModal = () => {
  const [modalType, setModal] = useAtom(modalAtom);

  const openProfile = useCallback(() => setModal('profile'), [setModal]);
  const closeModal = useCallback(() => setModal(null), [setModal]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [closeModal]);

  return {
    modalType,
    openProfile,
    closeModal,
  };
};

import { useAtom } from 'jotai';
import { modalAtom } from '@/atoms/modal';

export const useModal = () => {
  const [modalType, setModal] = useAtom(modalAtom);

  const openProfile = () => setModal('profile');
  const closeModal = () => setModal(null);

  return {
    modalType,
    openProfile,
    closeModal,
  };
};

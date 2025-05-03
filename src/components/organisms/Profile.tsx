import { ProfileContent } from '../molecules/ProfileContent';
import IconButton from '../molecules/IconButton';
import { IoClose } from 'react-icons/io5';
import { useAtomValue, useSetAtom } from 'jotai';
import { modalAtom, closeModalAtom } from '@/atoms/modal';

export const Profile = () => {
  const modalType = useAtomValue(modalAtom);
  const closeModal = useSetAtom(closeModalAtom);

  if (modalType !== 'profile') return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => closeModal()} />
      <div className="border-strokeMain bg-background relative z-50 flex h-[320px] w-[480px] items-center justify-center rounded-lg border shadow-md">
        <div className="absolute right-2 top-2">
          <IconButton icon={<IoClose />} size="md" onClick={() => closeModal()} />
        </div>
        <ProfileContent />
      </div>
    </div>
  );
};

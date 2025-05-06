import { ProfileContent } from '../molecules/ProfileContent';
import IconButton from '../molecules/IconButton';
import { IoClose } from 'react-icons/io5';
import { useModal } from '@/hooks/useModal';

export const Profile = () => {
  const { modalType, closeModal } = useModal();

  if (modalType !== 'profile') return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={closeModal} />
      <div className="relative z-50 flex h-[320px] w-[480px] items-center justify-center rounded-lg border border-strokeMain bg-background shadow-md">
        <div className="absolute right-2 top-2">
          <IconButton icon={<IoClose />} size="md" onClick={closeModal} />
        </div>
        <ProfileContent />
      </div>
    </div>
  );
};

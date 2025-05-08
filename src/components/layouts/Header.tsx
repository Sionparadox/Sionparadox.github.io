import { FaRegCircleUser } from 'react-icons/fa6';
import IconButton from '../molecules/IconButton';
import { useModal } from '@/hooks/useModal';
import { AnimatedSidebarToggleButton } from '../molecules/AnimatedSidebarToggleButton';

export const Header = () => {
  const { openProfile } = useModal();

  return (
    <header className="flex h-16 items-center bg-background px-4 shadow-md shadow-strokeMain">
      <div className="flex w-full items-center">
        <AnimatedSidebarToggleButton />
        <div className="flex-1 text-center">
          <a href="/" className="text-2xl font-bold text-title hover:text-[26px]">
            Sion's Log
          </a>
        </div>
        <IconButton icon={<FaRegCircleUser />} onClick={openProfile} />
      </div>
    </header>
  );
};

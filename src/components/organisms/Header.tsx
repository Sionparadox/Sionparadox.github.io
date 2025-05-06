import { FaRegCircleUser } from 'react-icons/fa6';
import { SidebarToggleButton } from '../molecules/SidebarToggleButton';
import IconButton from '../molecules/IconButton';
import { useModal } from '@/hooks/useModal';

export const Header = () => {
  const { openProfile } = useModal();

  return (
    <header className="shadow-strokeMain flex h-16 items-center px-4 shadow-md bg-background">
      <div className="flex w-full items-center">
        <SidebarToggleButton />
        <div className="flex-1 text-center">
          <a href="/" className="text-title text-2xl font-bold hover:text-[26px]">
            Sion's Log
          </a>
        </div>
        <IconButton icon={<FaRegCircleUser />} onClick={openProfile} />
      </div>
    </header>
  );
};

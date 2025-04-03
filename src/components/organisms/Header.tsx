import { FaRegCircleUser } from 'react-icons/fa6';
import { Icon } from '../atoms/Icon';
import { SidebarToggleButton } from '../molecules/SidebarToggleButton';

export const Header = () => {
  return (
    <header className="border-light-stroke-main dark:border-dark-stroke-main sticky top-0 z-20 flex h-16 items-center justify-between border-b bg-light-bg-card px-4 dark:bg-dark-bg-card">
      <SidebarToggleButton />
      <div className="flex h-16 items-center justify-between px-4 text-light-text-title hover:text-gray-700 dark:text-dark-text-title dark:hover:text-gray-300">
        <a href="/" className="text-2xl font-bold">
          Sion's Log
        </a>

        <a href="/" className="p-2">
          <Icon size="lg">
            <FaRegCircleUser />
          </Icon>
        </a>
      </div>
    </header>
  );
};

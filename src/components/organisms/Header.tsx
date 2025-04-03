import { FaRegCircleUser } from 'react-icons/fa6';
import { Icon } from '../atoms/Icon';
import { SidebarToggleButton } from '../molecules/SidebarToggleButton';

export const Header = () => {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center px-4 shadow-sm shadow-light-stroke-main dark:shadow-dark-stroke-main">
      <div className="flex w-full items-center">
        <SidebarToggleButton />
        <div className="flex-1 text-center">
          <a
            href="/"
            className="text-2xl font-bold text-light-text-title hover:text-gray-700 dark:text-dark-text-title dark:hover:text-gray-300"
          >
            Sion's Log
          </a>
        </div>
        <a
          href="/"
          className="p-2 text-light-text-title hover:text-gray-700 dark:text-dark-text-title dark:hover:text-gray-300"
        >
          <Icon size="lg">
            <FaRegCircleUser />
          </Icon>
        </a>
      </div>
    </header>
  );
};

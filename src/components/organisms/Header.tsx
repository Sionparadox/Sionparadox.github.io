import { FaRegCircleUser } from 'react-icons/fa6';
import { SidebarToggleButton } from '../molecules/SidebarToggleButton';
import IconButton from '../molecules/IconButton';

export const Header = () => {
  return (
    <header className="shadow-strokeMain sticky top-0 z-20 flex h-16 items-center px-4 shadow-sm">
      <div className="flex w-full items-center">
        <SidebarToggleButton />
        <div className="flex-1 text-center">
          <a
            href="/"
            className="text-title text-2xl font-bold hover:text-gray-700 dark:hover:text-gray-300"
          >
            Sion's Log
          </a>
        </div>
        <a href="/" className="text-title p-2 hover:text-gray-700 dark:hover:text-gray-300">
          <IconButton onClick={() => {}}>
            <FaRegCircleUser />
          </IconButton>
        </a>
      </div>
    </header>
  );
};

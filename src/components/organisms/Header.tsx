import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { FaRegCircleUser } from 'react-icons/fa6';
import { Icon } from '../atoms/Icon';

interface HeaderProps {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
}

export const Header = ({ onToggleSidebar, isSidebarOpen }: HeaderProps) => {
  return (
    <header className="shadow-md">
      <div className="flex h-16 items-center justify-between px-4 text-light-text-title hover:text-gray-700 dark:text-dark-text-title dark:hover:text-gray-300">
        <button onClick={onToggleSidebar} className="rounded-mdfocus:outline-none p-2">
          {isSidebarOpen ? (
            <Icon size="lg">
              <RiCloseLine />
            </Icon>
          ) : (
            <Icon size="lg">
              <RiMenu3Line />
            </Icon>
          )}
        </button>

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

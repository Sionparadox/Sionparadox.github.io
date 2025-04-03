import { Icon } from '../atoms/Icon';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import { useAtomValue, useSetAtom } from 'jotai';
import { sidebarAtom, setSidebarToggleAtom } from '@/atoms/sidebar';

export const SidebarToggleButton = () => {
  const sidebar = useAtomValue(sidebarAtom);
  const setToggle = useSetAtom(setSidebarToggleAtom);

  return (
    <button
      onClick={setToggle}
      className="rounded-md p-2 hover:bg-light-bg-sub focus:outline-none dark:hover:bg-dark-bg-sub"
      aria-expanded={sidebar.isOpen}
      aria-controls="sidebar"
    >
      <Icon size="lg">{sidebar.isOpen ? <RiCloseLine /> : <RiMenu3Line />}</Icon>
    </button>
  );
};

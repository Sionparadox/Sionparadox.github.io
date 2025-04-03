import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import { useAtomValue } from 'jotai';
import { sidebarAtom } from '@/atoms/sidebar';
import IconButton from './IconButton';

export const SidebarToggleButton = () => {
  const sidebar = useAtomValue(sidebarAtom);

  return (
    <IconButton onClick={sidebar.toggle} size="lg">
      {sidebar.isOpen ? <RiCloseLine /> : <RiMenu3Line />}
    </IconButton>
  );
};

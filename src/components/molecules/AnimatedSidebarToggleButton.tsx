import { useAtomValue } from 'jotai';
import { sidebarAtom } from '@/atoms/sidebar';
import IconButton from './IconButton';
import { motion, AnimatePresence } from 'framer-motion';

const MenuIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M7 6L1 12L7 18" />
    <path d="M14 6L8 12L14 18" />
    <path d="M21 6L15 12L21 18" />
  </svg>
);

const AnimatedMenuIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="relative h-6 w-6">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="menu"
            initial={{ rotate: 0 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <MenuIcon />
          </motion.div>
        ) : (
          <motion.div
            key="arrow"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowIcon />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const AnimatedSidebarToggleButton = () => {
  const sidebar = useAtomValue(sidebarAtom);

  return (
    <IconButton
      onClick={sidebar.toggle}
      size="lg"
      icon={<AnimatedMenuIcon isOpen={sidebar.isOpen} />}
    />
  );
};

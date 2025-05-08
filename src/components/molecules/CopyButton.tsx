import { LuCheck, LuCopy, LuLink } from 'react-icons/lu';
import IconButton from './IconButton';
import useClipBoard from '@/hooks/useClipBoard';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

type CopyButtonProps = {
  type: 'link' | 'text';
  text?: string;
  size?: 'sm' | 'md' | 'lg';
};

const iconMap: Record<CopyButtonProps['type'], React.ReactNode> = {
  link: <LuLink />,
  text: <LuCopy />,
};

const CopyButton = ({ type, text, size = 'md' }: CopyButtonProps) => {
  const { isCopied, copy } = useClipBoard();

  const handleClick = () => {
    if (type === 'link') {
      copy(location.href);
    } else if (text) {
      copy(text);
    }
  };

  return (
    <IconButton
      size={size}
      icon={
        <AnimatePresence mode="wait">
          {isCopied ? (
            <motion.div
              key="check"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <LuCheck />
            </motion.div>
          ) : (
            <motion.div
              key={type}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {iconMap[type]}
            </motion.div>
          )}
        </AnimatePresence>
      }
      onClick={handleClick}
      disabled={isCopied}
    />
  );
};

export default CopyButton;

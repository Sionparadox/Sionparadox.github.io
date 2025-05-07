import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import IconButton from '../molecules/IconButton';
import { LuArrowUpToLine } from 'react-icons/lu';
const ScrollToTop = ({ expose = false }: { expose?: boolean }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return expose ? <IconButton onClick={handleClick} icon={<LuArrowUpToLine />} /> : null;
};

export default ScrollToTop;

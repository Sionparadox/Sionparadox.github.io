import IconButton from '../molecules/IconButton';
import { ThemeToggleButton } from '../molecules/ThemeToggleButton';
import ScrollToTop from '../atoms/ScrollToTop';
import { LuLink } from 'react-icons/lu';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { cn } from '@/utils/cn';

const FloatingWidget = () => {
  const isFixed = useScrollPosition(100);

  return (
    <div
      className={cn(
        'mx-auto flex min-h-80 w-60 flex-col rounded-lg border-2 border-strokeMain',
        isFixed && 'sticky top-36'
      )}
    >
      <div className="flex-1 p-4 text-title">
        <p className="text-center font-semibold">빠른이동</p>
      </div>
      <div className="flex items-center justify-between rounded-b-md bg-cardBg p-4">
        <IconButton icon={<LuLink />} />
        <ScrollToTop expose />
        <ThemeToggleButton />
      </div>
    </div>
  );
};

export default FloatingWidget;

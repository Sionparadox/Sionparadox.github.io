import IconButton from '../molecules/IconButton';
import { ThemeToggleButton } from '../molecules/ThemeToggleButton';
import ScrollToTop from '../atoms/ScrollToTop';
import { LuLink } from 'react-icons/lu';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { cn } from '@/utils/cn';
import { useLocation } from 'react-router-dom';
import { useHeaderScroll } from '@/hooks/useHeaderScroll';

const FloatingWidget = () => {
  const isFixed = useScrollPosition(100);
  const location = useLocation();
  const { headings, activeId, scrollToHeading } = useHeaderScroll(location);

  return (
    <div
      className={cn(
        'mx-auto flex min-h-80 w-60 flex-col rounded-lg border-2 border-strokeMain',
        isFixed && 'sticky top-36'
      )}
    >
      <div className="flex-1 p-4 text-title">
        <p className="mb-4 text-center font-semibold">빠른이동</p>
        <div className="flex flex-col gap-2 p-1">
          {headings.map((heading) => (
            <button
              key={heading.id}
              onClick={() => scrollToHeading(heading.id)}
              className={cn(
                'truncate text-left hover:font-semibold',
                heading.level === 2 && '',
                heading.level === 3 && 'ml-2',
                activeId === heading.id && 'text-blue-600 dark:text-blue-400'
              )}
            >
              {heading.text}
            </button>
          ))}
        </div>
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

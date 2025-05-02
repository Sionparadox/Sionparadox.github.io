import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

const IconButton = ({ children, className, size = 'md', ...props }: IconButtonProps) => {
  return (
    <button
      type="button"
      className={cn(
        'inline-flex items-center justify-center rounded-full transition-colors',
        'hover:bg-cardBg active:bg-subBg',
        'disabled:cursor-not-allowed disabled:opacity-50',
        {
          'p-2 text-lg': size === 'md',
          'p-1.5 text-base': size === 'sm',
          'p-2.5 text-xl': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;

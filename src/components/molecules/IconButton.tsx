import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Button } from '../atoms/Button';
import { cn } from '@/utils/cn';
interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  icon: ReactNode;
}

const SIZE_STYLES = {
  sm: 'h-8 w-8 text-base',
  md: 'h-9 w-9 text-xl',
  lg: 'h-10 w-10 text-2xl',
} as const;

const IconButton = ({ className, size = 'lg', icon, ...props }: IconButtonProps) => {
  return (
    <Button variant="ghost" size="fit" className={cn(SIZE_STYLES[size], className)} {...props}>
      {icon}
    </Button>
  );
};

export default IconButton;

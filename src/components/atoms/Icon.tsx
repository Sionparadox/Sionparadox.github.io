import { ReactElement, cloneElement } from 'react';
import { cn } from '@/utils/cn';

interface IconProps {
  children: ReactElement;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const Icon = ({ children, size = 'md', className }: IconProps) => {
  const iconSize = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
  };

  const icon = cloneElement(children, {
    className: cn(iconSize[size], className),
  });

  return icon;
};

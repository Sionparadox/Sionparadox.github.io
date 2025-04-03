import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

// 버튼 스타일 정의
const VARIANT_STYLES = {
  default: 'bg-light-bg-card hover:bg-light-bg-sub dark:bg-dark-bg-card dark:hover:bg-dark-bg-sub',
  outline:
    'border border-light-stroke-main hover:bg-light-bg-sub dark:border-dark-stroke-main dark:hover:bg-dark-bg-sub',
  ghost:
    'hover:bg-light-bg-sub hover:text-light-text-title dark:hover:bg-dark-bg-sub dark:hover:text-dark-text-title',
  link: 'text-light-text-title underline-offset-4 hover:underline dark:text-dark-text-title',
} as const;

// 버튼 크기 정의
const SIZE_STYLES = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4',
  lg: 'h-12 px-8 text-lg',
  fit: 'p-1',
} as const;

// 타입 정의
type ButtonVariant = keyof typeof VARIANT_STYLES;
type ButtonSize = keyof typeof SIZE_STYLES;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

// Button 컴포넌트
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', fullWidth = false, ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          VARIANT_STYLES[variant],
          SIZE_STYLES[size],
          fullWidth && 'w-full',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };

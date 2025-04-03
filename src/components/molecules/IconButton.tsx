import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';
import { ReactElement } from 'react';

interface IconButtonProps {
  children: ReactElement;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const IconButton = ({
  children,
  onClick,
  disabled = false,
  className,
  size = 'lg',
}: IconButtonProps) => {
  return (
    <Button variant="ghost" size="fit" onClick={onClick} disabled={disabled} className={className}>
      <Icon size={size}>{children}</Icon>
    </Button>
  );
};

export default IconButton;

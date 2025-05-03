import IconButton from './IconButton';
import { useTheme } from '@/hooks/useTheme';
import { FaMoon, FaSun } from 'react-icons/fa6';

export const ThemeToggleButton = ({ className }: { className?: string }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <IconButton
      onClick={toggleTheme}
      aria-label="테마 전환"
      className={className}
      icon={theme === 'dark' ? <FaSun /> : <FaMoon />}
    />
  );
};

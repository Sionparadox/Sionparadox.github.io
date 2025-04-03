import { Icon } from '@/components/atoms/Icon';
import { FaGithub } from 'react-icons/fa';
import { useTheme } from '@/hooks/useTheme';
function Test() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <button onClick={toggleTheme}>테마 변경</button>
      <p>{theme}</p>
      <Icon size="xl" className="text-yellow-500">
        <FaGithub />
      </Icon>
    </div>
  );
}

export default Test;

import { Icon } from '@/components/atoms/Icon';
import { Button } from '@/components/atoms/Button';
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

      <Button fullWidth onClick={() => alert('버튼 클릭')}>
        버튼
      </Button>
    </div>
  );
}

export default Test;

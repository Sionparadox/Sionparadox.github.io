import { Button } from '@/components/atoms/Button';
import { FaGithub } from 'react-icons/fa';
import { useTheme } from '@/hooks/useTheme';
import IconButton from '@/components/molecules/IconButton';
function Test() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <button onClick={toggleTheme}>테마 변경</button>
      <p className="text-greyText">{theme}</p>
      <IconButton onClick={toggleTheme}>
        <FaGithub />
      </IconButton>

      <Button fullWidth onClick={() => alert('버튼 클릭')}>
        버튼
      </Button>
      <div className="bg-cardBg">
        <p className="text-title">배경색</p>
      </div>
    </div>
  );
}

export default Test;

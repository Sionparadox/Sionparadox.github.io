import { Button } from '@/components/atoms/Button';
import { useTheme } from '@/hooks/useTheme';

function Test() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <button onClick={toggleTheme}>테마 변경</button>
      <p className="text-greyText">{theme}</p>

      <div className="flex gap-2">
        <Button onClick={() => alert('버튼 클릭')}>버튼</Button>
        <Button variant="ghost" onClick={() => alert('버튼 클릭')}>
          버튼
        </Button>
        <Button variant="link" onClick={() => alert('버튼 클릭')}>
          버튼
        </Button>
      </div>
    </div>
  );
}

export default Test;

import { Button } from '@/components/atoms/Button';
import RecentPost from '@/components/organisms/RecentPost';

import { useTheme } from '@/hooks/useTheme';

function Test() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="h-full w-full">
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
      <RecentPost />
    </div>
  );
}

export default Test;

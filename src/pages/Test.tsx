import { Button } from '@/components/atoms/Button';
import CategoryPost from '@/components/organisms/CategoryPost';

function Test() {
  return (
    <div className="h-full w-full">

      <div className="flex gap-2">
        <Button onClick={() => alert('버튼 클릭')}>버튼</Button>
        <Button variant="ghost" onClick={() => alert('버튼 클릭')}>
          버튼
        </Button>
        <Button variant="link" onClick={() => alert('버튼 클릭')}>
          버튼
        </Button>
      </div>
      <CategoryPost category="Frontend" />
    </div>
  );
}

export default Test;

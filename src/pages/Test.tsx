import { Button } from '@/components/atoms/Button';
import FloatingWidget from '@/components/organisms/FloatingWiget';

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
      <FloatingWidget />
    </div>
  );
}

export default Test;

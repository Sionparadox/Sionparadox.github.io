import { Button } from '@/components/atoms/Button';

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
    </div>
  );
}

export default Test;

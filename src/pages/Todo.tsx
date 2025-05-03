import { Link } from 'react-router-dom';

function Todo() {
  return (
    <div>
      <div className="flex gap-8">
        <div className="border-strokeMain mt-3 flex w-80 flex-col gap-2 border p-4">
          <h2 className="text-title mb-3 text-3xl font-bold">메인</h2>
          <TodoLine title="사이드바" isDone={true} />
          <TodoLine title="다크모드" isDone={true} />
          <TodoLine title="프로필 카드" isDone={true} />
          <TodoLine title="헤더 상단 고정 및 오버스크롤 방지" isDone={true} />
          <TodoLine title="레이아웃 조정(컨텐츠 박스 사이즈)" isDone={true} />
          <TodoLine title="반응형 레이아웃 조정" isDone={false} />
        </div>
        <div className="border-strokeMain mt-3 flex w-80 flex-col gap-2 border p-4">
          <h2 className="text-title mb-3 text-3xl font-bold">목록</h2>
          <TodoLine title="페이지 구현" isDone={false} />
          <TodoLine title="게시글 데이터 저장" isDone={false} />
        </div>
        <div className="border-strokeMain mt-3 flex w-80 flex-col gap-2 border p-4">
          <h2 className="text-title mb-3 text-3xl font-bold">게시글</h2>
          <TodoLine title="페이지 구현" isDone={false} />
          <TodoLine title="플로팅 네비게이터" isDone={false} />
          <TodoLine title="클립보드 복사" isDone={false} />
        </div>
      </div>
      <Link to="/test">테스트 페이지로 이동</Link>
    </div>
  );
}

export default Todo;

const TodoLine = ({ title, isDone }: { title: string; isDone: boolean }) => {
  return (
    <div className="border-strokeMain flex justify-between gap-2 border-b pb-2">
      <p>{title}</p>
      <p className={`${isDone ? 'text-green-500' : 'text-red-500'}`}>
        {isDone ? '완료' : '미완료'}
      </p>
    </div>
  );
};

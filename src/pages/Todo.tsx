import { Link } from 'react-router-dom';

function Todo() {
  return (
    <div>
      <h1 className="mb-7 border-b-2 border-strokeMain pb-7 text-3xl font-bold text-title">
        개발 도움을 위한 개발자 페이지
      </h1>
      <div className="flex gap-8">
        <div className="mt-3 flex w-80 flex-col gap-2 border border-strokeMain p-4">
          <h2 className="mb-3 text-3xl font-bold text-title">메인</h2>
          <TodoLine title="사이드바" isDone={true} />
          <TodoLine title="다크모드" isDone={true} />
          <TodoLine title="프로필 카드" isDone={true} />
          <TodoLine title="헤더 상단 고정 및 오버스크롤 방지" isDone={true} />
          <TodoLine title="레이아웃 조정(컨텐츠 박스 사이즈)" isDone={true} />
          <TodoLine title="반응형 레이아웃 조정" isDone={false} />
          <TodoLine title="ESC 입력 시 모달 닫기" isDone={false} />
        </div>
        <div className="mt-3 flex w-80 flex-col gap-2 border border-strokeMain p-4">
          <h2 className="mb-3 text-3xl font-bold text-title">목록</h2>
          <TodoLine title="최근 게시글 목록" isDone={true} />
          <TodoLine title="카테고리 별 게시글 목록" isDone={true} />
          <TodoLine title="게시글 데이터 저장" isDone={true} />
        </div>
        <div className="mt-3 flex w-80 flex-col gap-2 border border-strokeMain p-4">
          <h2 className="mb-3 text-3xl font-bold text-title">게시글</h2>
          <TodoLine title="단일 데이터 불러오기" isDone={true} />
          <TodoLine title="레이아웃 잡기" isDone={true} />
          <TodoLine title="레이아웃, 포스트 컴포넌트화" isDone={false} />
          <TodoLine title="footer로 라우팅" isDone={true} />
          <TodoLine title="마크다운 스타일 적용" isDone={false} />
          <TodoLine title="플로팅 위젯" isDone={true} />
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
    <div className="flex justify-between gap-2 border-b border-strokeMain pb-2">
      <p>{title}</p>
      <p className={`${isDone ? 'text-green-500' : 'text-red-500'}`}>
        {isDone ? '완료' : '미완료'}
      </p>
    </div>
  );
};

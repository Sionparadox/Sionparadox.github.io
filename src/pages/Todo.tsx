import { Link } from 'react-router-dom';
import { useState } from 'react';
import { LuChevronDown, LuChevronUp } from 'react-icons/lu';
import IconButton from '@/components/molecules/IconButton';

const PROGRESS = 80;

function Todo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="mb-7 flex flex-col gap-2 border-b-2 border-strokeMain pb-7">
        <h1 className="text-center text-3xl font-bold text-title">
          개발 도움을 위한 개발자 페이지
        </h1>
      </div>
      <div className="mb-7 flex flex-col gap-2">
        <p className="text-left font-bold text-subText">진행도 {PROGRESS}%</p>
        <div className="min-h-3 w-full bg-cardBg">
          <div
            className={`h-3 bg-gradient-to-r from-blue-500 to-[#405599]`}
            style={{ width: `${PROGRESS}%` }}
          />
        </div>
      </div>
      <p className="text-2xl font-bold text-title">투두 리스트</p>
      <div className="mb-5 flex gap-8">
        <div className="mt-3 flex w-80 flex-col gap-2 border border-strokeMain p-4">
          <h2 className="mb-3 text-3xl font-bold text-title">UX 개선</h2>
          <TodoLine title="ESC 입력 시 모달 닫기" isDone={true} />
          <TodoLine title="애니메이션 추가" isDone={false} />
          <TodoLine title="임시 색상 커스텀 컬러로 변경" isDone={true} />
          <TodoLine title="반응형 레이아웃 조정" isDone={false} />
        </div>
        <div className="mt-3 flex w-80 flex-col gap-2 border border-strokeMain p-4">
          <h2 className="mb-3 text-3xl font-bold text-title">에러처리</h2>
          <TodoLine title="게시글 데이터 예외처리" isDone={false} />
          <TodoLine title="에러 페이지" isDone={false} />
        </div>
        <div className="mt-3 flex w-80 flex-col gap-2 border border-strokeMain p-4">
          <h2 className="mb-3 text-3xl font-bold text-title">리팩토링</h2>
          <TodoLine title="디바운스 스로틀링" isDone={true} />
          <TodoLine title="컴포넌트 기능 분리" isDone={false} />
          <TodoLine title="기능 최적화" isDone={false} />
        </div>
      </div>

      <div className="flex justify-between">
        <p className="text-2xl font-bold text-title">과거 투두 리스트</p>
        <IconButton
          icon={isOpen ? <LuChevronUp /> : <LuChevronDown />}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen && <PastTodo />}
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

const PastTodo = () => {
  return (
    <div className="flex gap-8">
      <div className="mt-3 flex w-80 flex-col gap-2 border border-strokeMain p-4">
        <h2 className="mb-3 text-3xl font-bold text-title">메인</h2>
        <TodoLine title="사이드바" isDone={true} />
        <TodoLine title="다크모드" isDone={true} />
        <TodoLine title="프로필 카드" isDone={true} />
        <TodoLine title="헤더 상단 고정 및 오버스크롤 방지" isDone={true} />
        <TodoLine title="레이아웃 조정(컨텐츠 박스 사이즈)" isDone={true} />
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
        <TodoLine title="포스트 컴포넌트화" isDone={true} />
        <TodoLine title="footer로 라우팅" isDone={true} />
        <TodoLine title="마크다운 스타일 적용" isDone={true} />
        <TodoLine title="플로팅 위젯" isDone={true} />
        <TodoLine title="클립보드 복사" isDone={true} />
      </div>
    </div>
  );
};

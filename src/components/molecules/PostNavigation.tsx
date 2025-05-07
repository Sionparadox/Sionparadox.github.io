import { Link } from 'react-router-dom';
import { Icon } from '../atoms/Icon';
import { LuArrowLeft, LuArrowRight } from 'react-icons/lu';
import { TSimplifyPost } from '@/types/post';

type TPostNavigation = {
  simplePost: TSimplifyPost | null;
  align?: 'left' | 'right';
};

const PostNavigation = ({ simplePost, align = 'left' }: TPostNavigation) => {
  const isPrev = align === 'left';
  const icon = isPrev ? <LuArrowLeft /> : <LuArrowRight />;
  const label = isPrev ? '이전 게시글' : '다음 게시글';
  const emptyText = isPrev ? '이전 글이 없습니다' : '다음 글이 없습니다';

  const disabled = !simplePost;

  const content = (
    <div
      className={`flex w-full items-center gap-3 rounded bg-subBg px-3 py-1 text-subText ${isPrev ? 'text-left' : 'flex-row-reverse text-right'} ${
        disabled
          ? 'pointer-events-none cursor-not-allowed select-none'
          : 'cursor-pointer transition'
      } `}
    >
      <Icon size="lg">{icon}</Icon>
      <div className="flex flex-1 flex-col">
        <p className="text-xs text-greyText">{label}</p>
        <p className="truncate">{simplePost?.title || emptyText}</p>
      </div>
    </div>
  );

  return disabled ? (
    <div className="flex-1" aria-disabled="true">
      {content}
    </div>
  ) : (
    <Link to={`/posts/${simplePost.slug}`} className="flex-1" aria-label={label}>
      {content}
    </Link>
  );
};

export default PostNavigation;

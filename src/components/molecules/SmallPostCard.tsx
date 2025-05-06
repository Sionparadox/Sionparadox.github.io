import { Link } from 'react-router-dom';
import DateLabel from '../atoms/DateLabel';
import ChipList from './ChipList';
import { TPost } from '@/types/post';

const SmallPostCard = ({ slug, title, description, tags, date }: Omit<TPost, 'content'>) => {
  return (
    <div className="m-4 rounded-lg border border-strokeMain p-4 transition-shadow hover:shadow-md">
      <Link to={`/posts/${slug}`}>
        <div className="flex w-[480px] flex-col gap-3 p-1">
          <p className="truncate text-xl font-bold text-title">{title}</p>
          <p className="line-clamp-3 min-h-[60px] text-sm text-subText">{description}</p>
          <div className="flex items-center justify-between">
            <ChipList chips={tags} />
            <DateLabel date={date} style="dot" withIcon />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SmallPostCard;

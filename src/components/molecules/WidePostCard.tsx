import { TPost } from '@/types/post';
import { Link } from 'react-router-dom';
import ChipList from './ChipList';
import DateLabel from '../atoms/DateLabel';

const WidePostCard = ({ slug, title, description, tags, date }: Omit<TPost, 'content'>) => {
  return (
    <div className="w-full rounded-lg border border-strokeMain p-5 transition-shadow hover:shadow-md">
      <Link to={`/posts/${slug}`}>
        <div className="flex flex-col gap-2">
          <p className="truncate text-xl font-bold text-title">{title}</p>
          <DateLabel date={date} style="dot" withIcon />
          <p className="line-clamp-2 min-h-[40px] text-sm text-subText">{description}</p>
          <ChipList chips={tags} />
        </div>
      </Link>
    </div>
  );
};

export default WidePostCard;

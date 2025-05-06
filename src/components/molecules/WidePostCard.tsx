import { TPost } from '@/types/post';
import { Link } from 'react-router-dom';
import ChipList from './ChipList';
import DateLabel from '../atoms/DateLabel';

const WidePostCard = ({ slug, title, description, tags, date }: Omit<TPost, 'content'>) => {
  return <div className="border-strokeMain border rounded-lg p-5 hover:shadow-md transition-shadow w-full">
    <Link to={`/posts/${slug}`}>
      <div className="flex flex-col gap-2">
        <p className="text-xl font-bold text-title truncate">{title}</p>
        <DateLabel date={date} style="dot" withIcon />
        <p className="text-sm text-subText line-clamp-2 min-h-[40px]">{description}</p>
        <ChipList chips={tags} />
      </div>
    </Link>
  </div>;
};

export default WidePostCard;

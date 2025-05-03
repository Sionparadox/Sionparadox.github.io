import { Link } from 'react-router-dom';
import DateLabel from '../atoms/DateLabel';
import ChipList from './ChipList';

interface SmallPostCardProps {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
}

const SmallPostCard = ({ slug, title, description, tags, date }: SmallPostCardProps) => {
  return <div className="m-4 border-strokeMain border rounded-lg p-4 hover:shadow-md transition-shadow">
    <Link to={`/posts/${slug}`}>
      <div className="flex flex-col gap-3 w-[480px] p-1">
        <p className="text-xl font-bold text-title truncate">{title}</p>
        <p className="text-sm text-subText line-clamp-3 min-h-[60px]">{description}</p>
        <div className="flex justify-between items-center">
          <ChipList chips={tags} />
          <DateLabel date={date} style="dot" withIcon />
        </div>
      </div>
    </Link>
  </div>;
};

export default SmallPostCard;
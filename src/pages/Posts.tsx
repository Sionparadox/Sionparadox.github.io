import CategoryPost from '@/components/organisms/CategoryPost';
import { PostCategory } from '@/types/post';
import { useParams } from 'react-router-dom';

const Posts = () => {
  const { category } = useParams() as { category: PostCategory };
  return (
    <div>
      <h2 className="mb-7 border-b-2 border-strokeMain pb-7 text-3xl font-black text-title">
        {category}
      </h2>
      <CategoryPost category={category} />
    </div>
  );
};

export default Posts;

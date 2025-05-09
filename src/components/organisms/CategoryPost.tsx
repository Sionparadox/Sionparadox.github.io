import { useEffect, useState } from 'react';
import { TPost, PostCategory } from '@/types/post';
import { getPostsByCategory } from '@/utils/posts';
import WidePostCard from '../molecules/WidePostCard';
import NoContentIcon from '../atoms/NoContentIcon';

interface CategoryPostProps {
  category: PostCategory;
}

export const CategoryPost = ({ category }: CategoryPostProps) => {
  const [posts, setPosts] = useState<TPost[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const categoryPosts = await getPostsByCategory(category);
      setPosts(categoryPosts);
    };
    loadPosts();
  }, [category]);

  if (posts.length === 0) {
    return (
      <div className="flex items-center justify-center pt-20">
        <NoContentIcon />
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-3">
      {posts.map((post) => (
        <WidePostCard key={post.slug} {...post} />
      ))}
    </div>
  );
};

export default CategoryPost;

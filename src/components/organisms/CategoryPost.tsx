import { useEffect, useState } from 'react';
import { TPost, PostCategory } from '@/types/post';
import { getPostsByCategory } from '@/utils/posts';
import WidePostCard from '../molecules/WidePostCard';

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

  return (
    <div className="flex flex-col gap-3">
      {posts.map((post) => (
        <WidePostCard key={post.slug} {...post} />
      ))}
    </div>
  );
};

export default CategoryPost;

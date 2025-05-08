import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAdjacentPosts } from '@/utils/posts';
import { TSimplifyPost } from '@/types/post';
import PostNavigation from '../molecules/PostNavigation';

const PostFooter = () => {
  const { category, slug } = useParams();
  const [adjacentPosts, setAdjacentPosts] = useState<{
    prev: TSimplifyPost | null;
    next: TSimplifyPost | null;
  }>({ prev: null, next: null });

  useEffect(() => {
    const loadAdjacentPosts = async () => {
      if (category && slug) {
        const fullSlug = `${category}/${slug}`;
        const adjacent = await getAdjacentPosts(fullSlug);
        setAdjacentPosts(adjacent);
      }
    };
    loadAdjacentPosts();
  }, [category, slug]);

  return (
    <footer className="mt-10 flex w-full justify-between border-t border-strokeMain pt-5">
      <PostNavigation simplePost={adjacentPosts.prev} align="left" />
      <div className="w-1/5"></div>
      <PostNavigation simplePost={adjacentPosts.next} align="right" />
    </footer>
  );
};

export default PostFooter;

import { useEffect, useState } from 'react';
import { TPost } from '@/types/post';
import { getAllPosts } from '@/utils/posts';
import SmallPostCard from '../molecules/SmallPostCard';


export const RecentPost = () => {
    const [posts, setPosts] = useState<TPost[]>([]);

    useEffect(() => {
        const loadPosts = async () => {
            const allPosts = await getAllPosts();
            setPosts(allPosts.slice(0, 6));
        };
        loadPosts();
    }, []);

  return (
    <div className="grid grid-cols-2 gap-3">
      {posts.map((post) => (
        <SmallPostCard key={post.slug} {...post} />
      ))}
    </div>
  );
};

export default RecentPost;

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TPost } from '@/types/post';
import { getPostBySlug } from '@/utils/posts';
import ChipList from '@/components/molecules/ChipList';
import DateLabel from '@/components/atoms/DateLabel';

const Post = () => {
  const { category, slug } = useParams();
  const [post, setPost] = useState<TPost | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      if (category && slug) {
        const fullSlug = `${category}/${slug}`;
        const postData = await getPostBySlug(fullSlug);
        setPost(postData);
      }
    };
    loadPost();
  }, [category, slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const Content = post.content;

  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      <h1 className="text-4xl font-black text-title mb-4">{post.title}</h1>
      <div className="flex items-center gap-4 mb-8">
        <DateLabel date={post.date} style="dot" withIcon />
        <ChipList chips={post.tags} />
      </div>
      <div className="mt-8">
        <Content />
      </div>
    </article>
  );
};

export default Post;

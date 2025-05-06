import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TPost } from '@/types/post';
import { getPostBySlug } from '@/utils/posts';
import ChipList from '@/components/molecules/ChipList';
import DateLabel from '@/components/atoms/DateLabel';
import '@/styles/prose.css';

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
    <article className="prose-custom">
      <h1 className="mb-4 text-4xl font-black text-title">{post.title}</h1>
      <div className="mb-8 flex items-center gap-4">
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

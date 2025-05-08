import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TPost } from '@/types/post';
import { getPostBySlug } from '@/utils/posts';
import ChipList from '@/components/molecules/ChipList';
import DateLabel from '@/components/atoms/DateLabel';
import '@/styles/prose.css';
import FloatingWidget from '@/components/organisms/FloatingWiget';
import PostFooter from '@/components/organisms/PostFooter';
import { components } from '@/components/mdx/MDXComponents';

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
    <article>
      <div className="flex flex-col gap-5 border-b border-strokeMain px-3 py-3">
        <h1 className="text-center text-4xl font-black text-title">{post.title}</h1>
        <p className="min-h-[60px] text-subText">{post.description}</p>
        <div className="flex items-center justify-between">
          <ChipList chips={post.tags} />
          <DateLabel date={post.date} style="dot" withIcon />
        </div>
      </div>
      <div className="flex">
        <div className="mt-8 basis-3/4 p-1">
          <div className="mdx-content">
            <Content components={components} />
          </div>
        </div>
        <div className="basis-1/4 pt-10">
          <FloatingWidget />
        </div>
      </div>
      <PostFooter />
    </article>
  );
};

export default Post;

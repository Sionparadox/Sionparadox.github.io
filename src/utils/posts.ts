import { Post } from '@/types/post';

interface MDXModule {
  metadata: {
    title: string;
    date: string;
    tags: string[];
    description: string;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: any;
}

const POSTS = import.meta.glob<MDXModule>('/posts/*.mdx', { eager: true });

export async function getAllPosts(): Promise<Post[]> {
  const allPosts: Post[] = [];

  for (const path in POSTS) {
    const { metadata, default: content } = POSTS[path];
    const slug = path.replace('/posts/', '').replace('.mdx', '');

    allPosts.push({
      slug,
      title: metadata.title,
      date: metadata.date,
      tags: metadata.tags || [],
      description: metadata.description,
      content: content,
    });
  }

  return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug) || null;
}

export async function getPostsByTag(tag: string): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.tags.includes(tag));
} 
import { TPost, PostCategory } from '@/types/post';
import React from 'react';
import { MDXProvidedComponents } from '@/components/mdx/MDXComponents';
interface MDXModule {
  metadata: {
    title: string;
    date: string;
    tags: string[];
    description: string;
  };
  default: React.ComponentType<{ components?: MDXProvidedComponents }>;
}

const POSTS = import.meta.glob<MDXModule>('/posts/**/*.mdx', { eager: true });

export async function getAllPosts(): Promise<TPost[]> {
  const allPosts: TPost[] = [];

  for (const path in POSTS) {
    const { metadata, default: content } = POSTS[path];
    const slug = path.replace('/posts/', '').replace('.mdx', '');
    const category = path.split('/')[2] as PostCategory;

    allPosts.push({
      slug,
      title: metadata.title,
      date: metadata.date,
      tags: metadata.tags || [],
      description: metadata.description,
      content,
      category,
    });
  }

  return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<TPost | null> {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug) || null;
}

export async function getPostsByTag(tag: string): Promise<TPost[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.tags.includes(tag));
}

export async function getPostsByCategory(category: PostCategory): Promise<TPost[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.category === category);
}

export const getAdjacentPosts = async (currentSlug: string) => {
  const posts = await getAllPosts();
  const currentIndex = posts.findIndex((post) => post.slug === currentSlug);

  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  const prev = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const next = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return {
    prev: prev ? { title: prev.title, slug: prev.slug } : null,
    next: next ? { title: next.title, slug: next.slug } : null,
  };
};

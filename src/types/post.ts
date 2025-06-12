import { ComponentType } from 'react';
import { MDXProvidedComponents } from '@/components/mdx/MDXComponents';
export type PostCategory = 'Algorithm' | 'Computerscience' | 'Frontend' | 'test';

export type TPost = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
  content: ComponentType<{ components?: MDXProvidedComponents }>;
  category: PostCategory;
};

export type TSimplifyPost = {
  slug: string;
  title: string;
};

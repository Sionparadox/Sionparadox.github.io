export type PostCategory = 'Algorithm' | 'Computerscience' | 'Frontend';

export interface Post {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
  content: string;
  category: PostCategory;
} 
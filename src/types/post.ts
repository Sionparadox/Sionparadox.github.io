export type PostCategory = 'Algorithm' | 'Computerscience' | 'Frontend';

export interface TPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
  content: string;
  category: PostCategory;
} 
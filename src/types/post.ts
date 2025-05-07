export type PostCategory = 'Algorithm' | 'Computerscience' | 'Frontend';

export type TPost = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
  content: string;
  category: PostCategory;
};

export type TSimplifyPost = {
  slug: string;
  title: string;
};

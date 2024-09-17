export interface Category {
  id: string;
  date?: string;
  mainImage?: string;
  parent?: string;
  title?: string;
}

export interface Post {
  category: string;
  date: string;
  id: string;
  mainImage: string;
  path: string;
  title: string;
}

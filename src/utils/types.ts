export type Tech = 'dart' | 'flutter' | 'go' | 'react' | 'rust' | 'svelte' | 'typescript';

export type Category = {
  id: string;
  date?: string;
  icon?: string;
  mainImage?: string;
  parent?: string;
  description?: string;
  techs?: Tech[];
  translation: [{
    language: string;
    title: string;
    description?: string;
  }];
};

export type Post = {
  category: string;
  date: string;
  id: string;
  mainImage: string;
  score?: number;
  read_in?: string;
  seen_in?: string;
  translation: [{
    language: string;
    path: string;
    title: string;
  }];
};

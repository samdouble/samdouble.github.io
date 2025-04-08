export type Tech = 'dart' | 'flutter' | 'go' | 'react' | 'rust' | 'svelte' | 'typescript';

export interface Category {
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
}

export interface Post {
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
}

export type Tech =
  | 'anthropic'
  | 'claude'
  | 'csharp'
  | 'dart'
  | 'digitalocean-functions'
  | 'dotnet'
  | 'flutter'
  | 'github-actions'
  | 'github-pages'
  | 'go'
  | 'jest'
  | 'linear'
  | 'markdown'
  | 'mongodb'
  | 'npm'
  | 'playwright'
  | 'puppeteer'
  | 'python'
  | 'react'
  | 'rust'
  | 'snowflake'
  | 'svelte'
  | 'typescript'
  | string;

export type Category = {
  id: string;
  date?: string;
  icon?: string;
  isHidden?: boolean;
  pageTemplate?: string;
  mainImage?: string;
  parent?: string;
  description?: string;
  techs?: Tech[];
  translation: {
    language: string;
    title: string;
    description?: string;
  }[];
};

export type Post = {
  category: string;
  date: string;
  id: string;
  mainImage: string;
  score?: number;
  read_in?: string;
  seen_in?: string;
  hideFromMainFeed?: boolean;
  translation: [{
    language: string;
    path: string;
    title: string;
  }];
};

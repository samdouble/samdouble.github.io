#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import process from 'process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR = path.join(__dirname, '..', 'src');
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const ASSETS_DIR = path.join(PUBLIC_DIR, 'assets');

function findContentFiles(dir) {
  const files = fs.readdirSync(dir);
  return files
    .filter(file => file.endsWith('.json') && file.startsWith('content'))
    .map(file => path.join(dir, file));
}

function mergeContentFiles(files) {
  const merged = { categories: [], posts: [] };

  for (const file of files) {
    const content = JSON.parse(fs.readFileSync(file, 'utf8'));
    if (content.categories) {
      merged.categories.push(...content.categories);
    }
    if (content.posts) {
      merged.posts.push(...content.posts);
    }
  }

  return merged;
}

function extractPaths(obj, paths = { images: [], markdownFiles: [] }) {
  if (!obj || typeof obj !== 'object') return paths;

  if (Array.isArray(obj)) {
    for (const item of obj) {
      extractPaths(item, paths);
    }
  } else {
    for (const [key, value] of Object.entries(obj)) {
      if (key === 'mainImage' && typeof value === 'string') {
        paths.images.push(value);
      } else if (typeof value === 'string' && value.endsWith('.md')) {
        paths.markdownFiles.push(value);
      } else if (typeof value === 'object') {
        extractPaths(value, paths);
      }
    }
  }

  return paths;
}

function validatePath(filePath) {
  let fullPath;

  if (filePath.startsWith('/assets/')) {
    fullPath = path.join(PUBLIC_DIR, filePath);
  } else if (filePath.startsWith('/')) {
    fullPath = path.join(PUBLIC_DIR, filePath);
  } else {
    fullPath = path.join(ASSETS_DIR, filePath);
  }

  return {
    path: filePath,
    fullPath,
    exists: fs.existsSync(fullPath),
  };
}

function main() {
  const contentFiles = findContentFiles(CONTENT_DIR);

  if (contentFiles.length === 0) {
    console.error('No content*.json files found in src/');
    process.exit(1);
  }

  console.log(`Found ${contentFiles.length} content file(s):`);
  contentFiles.forEach(f => console.log(`  - ${path.basename(f)}`));

  const merged = mergeContentFiles(contentFiles);
  console.log(`\nMerged ${merged.categories.length} categories, ${merged.posts.length} posts`);

  const paths = extractPaths(merged);
  const uniqueImages = [...new Set(paths.images)];
  const uniqueMarkdown = [...new Set(paths.markdownFiles)];

  console.log(`\nFound ${uniqueImages.length} unique image references (${paths.images.length} total)`);
  console.log(`Found ${uniqueMarkdown.length} unique markdown file references (${paths.markdownFiles.length} total)`);

  const errors = [];

  console.log('\nValidating images...');
  for (const imagePath of uniqueImages) {
    const result = validatePath(imagePath);
    if (!result.exists) {
      errors.push({ type: 'image', path: imagePath, fullPath: result.fullPath });
    }
  }

  console.log('Validating markdown files...');
  for (const mdPath of uniqueMarkdown) {
    const result = validatePath(mdPath);
    if (!result.exists) {
      errors.push({ type: 'markdown', path: mdPath, fullPath: result.fullPath });
    }
  }

  if (errors.length > 0) {
    console.error(`\n❌ Found ${errors.length} missing file(s):\n`);
    for (const error of errors) {
      console.error(`  [${error.type}] ${error.path}`);
      console.error(`    Expected at: ${error.fullPath}`);
    }
    process.exit(1);
  }

  console.log('\n✅ All paths are valid');
  process.exit(0);
}

main();

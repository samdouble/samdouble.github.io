#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import process from 'process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, '..');

const CONTENT_DIR = process.env.CONTENT_DIR || path.join(ROOT_DIR, 'src');
const PUBLIC_DIR = process.env.PUBLIC_DIR || path.join(ROOT_DIR, 'public');
const ASSETS_DIR = process.env.ASSETS_DIR || path.join(PUBLIC_DIR, 'assets');

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

function extractPaths(obj, paths = { images: [], markdownFiles: [] }, skipHidden = true) {
  if (!obj || typeof obj !== 'object') {
    return paths;
  }

  if (Array.isArray(obj)) {
    for (const item of obj) {
      extractPaths(item, paths, skipHidden);
    }
  } else {
    if (skipHidden && obj.isHidden === true) {
      return paths;
    }

    for (const [key, value] of Object.entries(obj)) {
      if (key === 'mainImage' && typeof value === 'string') {
        paths.images.push(value);
      } else if (typeof value === 'string' && value.endsWith('.md')) {
        paths.markdownFiles.push(value);
      } else if (typeof value === 'object') {
        extractPaths(value, paths, skipHidden);
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

function findMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findMarkdownFiles(filePath, fileList);
    } else if (file.endsWith('.md')) {
      fileList.push(filePath);
    }
  }

  return fileList;
}

function normalizeToRelativePath(mdPath) {
  if (mdPath.startsWith('/assets/')) {
    return mdPath.slice(8);
  } else if (mdPath.startsWith('/')) {
    return mdPath.slice(1);
  }
  return mdPath;
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

  console.log('Checking for orphaned markdown files...');
  const allMarkdownOnDisk = findMarkdownFiles(ASSETS_DIR);
  const allPaths = extractPaths(merged, { images: [], markdownFiles: [] }, false);
  const allMarkdownPaths = [...new Set(allPaths.markdownFiles)];
  const normalizedJsonPaths = new Set(allMarkdownPaths.map(normalizeToRelativePath));

  const IGNORED_DIRS = ['drafts'];
  const orphanedFiles = [];
  for (const filePath of allMarkdownOnDisk) {
    const relativePath = path.relative(ASSETS_DIR, filePath);
    const isIgnored = IGNORED_DIRS.some(dir => relativePath.startsWith(dir + path.sep) || relativePath.startsWith(dir + '/'));
    if (!isIgnored && !normalizedJsonPaths.has(relativePath)) {
      orphanedFiles.push(relativePath);
    }
  }

  let hasErrors = false;

  if (errors.length > 0) {
    console.error(`\n❌ Found ${errors.length} missing file(s):\n`);
    for (const error of errors) {
      console.error(`  [${error.type}] ${error.path}`);
      console.error(`    Expected at: ${error.fullPath}`);
    }
    hasErrors = true;
  }

  if (orphanedFiles.length > 0) {
    console.error(`\n❌ Found ${orphanedFiles.length} orphaned markdown file(s) not referenced in JSON:\n`);
    for (const file of orphanedFiles) {
      console.error(`  ${file}`);
    }
    hasErrors = true;
  }

  if (hasErrors) {
    process.exit(1);
  }

  console.log('\n✅ All paths are valid');
  process.exit(0);
}

main();

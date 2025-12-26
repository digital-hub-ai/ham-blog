import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface Post {
  title: string;
  date: string;
  slug: string;
  author?: {
    name: string;
    picture: string;
    bio?: string;
  };
  content: string;
  excerpt: string;
  coverImage?: string;
  ogImage?: {
    url: string;
  };
  category?: string;
  readingTime?: number;
  [key: string]: any;
}

export function getAllPosts(fields: string[] = [], directory = '') {
  const postsDirectoryPath = directory ? path.join(process.cwd(), directory) : postsDirectory;
  
  try {
    const fileNames = fs.readdirSync(postsDirectoryPath);
    const allPostsData = fileNames
      .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx?$/, '');
        return getPostBySlug(slug, fields, directory);
      });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }
}

export function getPostBySlug(slug: string, fields: string[] = [], directory = ''): Post {
  const postsDirectoryPath = directory ? path.join(process.cwd(), directory) : postsDirectory;
  
  try {
    const fullPath = path.join(postsDirectoryPath, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const excerpt = data.excerpt || content.substring(0, 200) + '...';
    const readingTime = Math.ceil(content.split(/\s+/).length / 200); // 200 words per minute

    const items: any = {};

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
      if (field === 'slug') {
        items[field] = slug;
      }
      if (field === 'content') {
        items[field] = content;
      }
      if (field === 'excerpt') {
        items[field] = excerpt;
      }
      if (field === 'readingTime') {
        items[field] = readingTime;
      }
      if (data[field] !== undefined) {
        items[field] = data[field];
      }
    });

    return items as Post;
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return {
      title: 'Post not found',
      date: new Date().toISOString(),
      slug: slug,
      content: 'The requested post could not be found.',
      excerpt: 'The requested post could not be found.'
    };
  }
}

export function getPostsByCategory(category: string, fields: string[] = []) {
  const allPosts = getAllPosts([...fields, 'category']);
  return allPosts.filter((post) => 
    post.category?.toLowerCase() === category.toLowerCase()
  );
}

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

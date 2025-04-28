import matter from 'gray-matter';
import { marked } from 'marked';

export interface PostMetadata {
  title: string;
  date: string;
  category: string;
  image: string;
  tags: string[];
  slug: string;
  excerpt: string;
}

export interface Post extends PostMetadata {
  content: string;
  html: string;
}

// Function to get all posts
export async function getAllPosts(): Promise<Post[]> {
  const posts = import.meta.glob('../posts/*.md', { eager: true, as: 'raw' });
  
  return Object.entries(posts).map(([path, content]) => {
    const slug = path.split('/').pop()?.replace('.md', '') || '';
    const { data, content: markdownContent } = matter(content as string);
    
    return {
      ...data,
      slug,
      content: markdownContent,
      html: marked(markdownContent)
    } as Post;
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Function to get a single post by slug
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await getAllPosts();
  return posts.find(post => post.slug === slug) || null;
}

// Function to get related posts
export async function getRelatedPosts(currentPost: Post, limit: number = 3): Promise<Post[]> {
  const allPosts = await getAllPosts();
  
  return allPosts
    .filter(post => 
      post.slug !== currentPost.slug && 
      post.tags.some(tag => currentPost.tags.includes(tag))
    )
    .slice(0, limit);
} 
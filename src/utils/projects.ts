import matter from 'gray-matter';
import { marked } from 'marked';

export interface ProjectMetadata {
  title: string;
  date: string;
  category: string;
  image: string;
  tags: string[];
  slug: string;
  excerpt: string;
  github?: string;
  demo?: string;
}

export class Project implements ProjectMetadata {
  title: string;
  date: string;
  category: string;
  image: string;
  tags: string[];
  slug: string;
  excerpt: string;
  content: string;
  html: string;
  github?: string;
  demo?: string;

  constructor(metadata: ProjectMetadata, content: string) {
    this.title = metadata.title;
    this.date = metadata.date;
    this.category = metadata.category;
    this.image = metadata.image;
    this.tags = metadata.tags;
    this.slug = metadata.slug;
    this.excerpt = metadata.excerpt;
    this.github = metadata.github;
    this.demo = metadata.demo;
    this.content = content;
    this.html = marked(content);
  }

  static fromMarkdown(path: string, content: string): Project {
    const slug = path.split('/').pop()?.replace('.md', '') || '';
    const { data, content: markdownContent } = matter(content);
    
    return new Project({
      ...data,
      slug
    } as ProjectMetadata, markdownContent);
  }
}

export class ProjectManager {
  private static instance: ProjectManager;
  private projects: Project[] = [];

  private constructor() {}

  static getInstance(): ProjectManager {
    if (!ProjectManager.instance) {
      ProjectManager.instance = new ProjectManager();
    }
    return ProjectManager.instance;
  }

  async loadProjects(): Promise<void> {
    const projectFiles = import.meta.glob('../projects/*.md', { eager: true, as: 'raw' });
    
    this.projects = Object.entries(projectFiles).map(([path, content]) => 
      Project.fromMarkdown(path, content as string)
    ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  async getAllProjects(): Promise<Project[]> {
    if (this.projects.length === 0) {
      await this.loadProjects();
    }
    return this.projects;
  }

  async getProjectBySlug(slug: string): Promise<Project | null> {
    if (this.projects.length === 0) {
      await this.loadProjects();
    }
    return this.projects.find(project => project.slug === slug) || null;
  }

  async getRelatedProjects(currentProject: Project, limit: number = 3): Promise<Project[]> {
    if (this.projects.length === 0) {
      await this.loadProjects();
    }
    
    return this.projects
      .filter(project => 
        project.slug !== currentProject.slug && 
        project.tags.some(tag => currentProject.tags.includes(tag))
      )
      .slice(0, limit);
  }
} 
export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  description: string[];
  techTags: string[];
  status: 'In Development' | 'Prototype / Hackathon Concept' | 'Exploratory & Practice';
  features?: string[];
  demoUrl?: string;
  githubUrl?: string;
  isFeatured?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface AchievementItem {
  title: string;
  organization: string;
  description: string;
  iconName: 'hackathon' | 'shield' | 'terminal';
}

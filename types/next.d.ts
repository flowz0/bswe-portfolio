export interface ButtonProps {
  children: React.ReactNode;
  href: string;
}

export interface ExperienceCardProps {
  dateRange: string;
  title: string;
  company: string;
  summary: string;
  link?: string;
  tags: string[];
}
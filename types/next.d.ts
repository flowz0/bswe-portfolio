import { StaticImageData } from "next/image";

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

export interface ProjectCardProps {
  title: string;
  summary: string;
  img?: StaticImageData | string;
  link?: string;
  tags?: string[];
}
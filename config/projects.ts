import { StaticImageData } from "next/image";

export interface Project {
  id: number;
  date: string;
  title: string;
  tech: string[];
  link: string;
  linkLabel: string;
  desc: string;
  image: StaticImageData | string;
}

export const projects: Project[] = [
  {
    id: 0,
    date: "2024-09-27",
    title: "Full Stack Web Application",
    tech: ["Next.js", "Express", "Node.js", "MongoDB"],
    link: "https://netflows.xyz",
    linkLabel: "netflows.xyz",
    desc: "A full stack web application that allows users to monitor and analyze network traffic in real-time.",
    image: "/images/projects/netflows.png",
  },
  {
    id: 1,
    date: "2025-08-15",
    title: "Interactive Dashboard",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://dashboard.netflows.xyz",
    linkLabel: "dashboard.netflows.xyz",
    desc: "An interactive admin dashboard for monitoring user data and analytics.",
    image: "/images/projects/dashboard.png",
  },
  {
    id: 2,
    date: "2025-06-15",
    title: "HVAC Business Landing Page",
    tech: ["Next.js", "SEO", "SendGrid"],
    link: "https://ductdaddy.com",
    linkLabel: "ductdaddy.com",
    desc: "A responsive landing page that increased client conversions through optimized SEO and UX.",
    image: "/images/projects/hvac.png",
  },
]
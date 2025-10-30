export interface Experience {
  id: number;
  date: string;
  title: string;
  tech: string[];
  link: string;
  company: string;
  summary: string;
}

export const experiences: Experience[] = [
  {
    id: 0,
    date: "Mar 2024 - Sep 2024",
    title: "Front End Software Engineer",
    company: "Bay Valley Tech • Internship",
    summary: "Enhanced the accessibility and performance of a social media platform by developing responsive front-end features including dynamic navigation, theme toggling, and live search using React and TypeScript. Improved user experience and reduced render latency by 30% through optimized state management and dynamic routing across feeds, profiles, and posts. Collaborated in an Agile team environment through daily stand-ups, sprint planning, and code reviews to ensure maintainable, high-quality deliverables aligned with project milestones.",
    link: "https://github.com/FrancescaImmediato/dev-duckies-sm-proj-front",
    tech: ["JavaScript", "React", "React Router", "Bulma CSS", "Axios"],
  },
  {
    id: 1,
    date: "Nov 2024 - Jul 2025",
    title: "Full Stack Software Engineer",
    company: "Duct Daddy • Contract",
    summary: "Delivered a full-stack content management platform for Duct Daddy using Next.js, TypeScript, Express, and MongoDB, empowering non-technical staff to manage SEO-optimized content independently. Increased organic traffic by 40% and eliminated publishing delays by implementing a secure, modular CMS that streamlined internal workflows. Automated deployment processes with Heroku and Vercel CI/CD pipelines, achieving 99.9% uptime and significantly accelerating feature release cycles.",
    link: "https://www.netflows.xyz/",
    tech: ["Next.js", "TypeScript", "Express", "Node.js", "MongoDB", "Tailwind CSS", "Vercel", "Heroku"],
  },
  {
    id: 2,
    date: "May 2025 - PRESENT",
    title: "Full Stack Software Engineer",
    company: "Netflows • Freelance",
    summary: "Reduced annual software expenses by $500 per client and improved client retention by developing a custom CRM solution with Next.js, TypeScript, Node.js, and MongoDB that automated workflows, invoicing, and lead tracking. Designed a centralized dashboard with modular components to enhance maintainability and usability. This solution delivered measurable cost savings, streamlined operations, and increased agency ROI.",
    link: "https://www.netflows.xyz/",
    tech: ["TypeScript", "Next.js", "Tailwind CSS", "Express", "Node.js", "MongoDB", "Brevo Email API", "Vercel"],
  },
]
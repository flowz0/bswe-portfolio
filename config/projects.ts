import { StaticImageData } from "next/image";
import DuctDaddyImg from "@/public/assets/duct-daddy-platform.jpg";
import ChatyAppImg from "@/public/assets/chat-app.png";

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
    date: "2025-08-3",
    title: "Duct Daddy Marketing Website & CMS",
    tech: ["Next.js", "Express", "Node.js", "MongoDB", "Tailwind CSS"],
    link: "https://ductdaddykc.com",
    linkLabel: "ductdaddykc.com",
    desc: "Increased organic traffic by 40% and eliminated publishing delays by architecting a full-stack SEO-driven content management system using Next.js, TypeScript, Express, and MongoDB. Enabled non-technical staff to manage content independently through a modular admin interface, while automated CI/CD pipelines with Heroku and Vercel achieved 99.9% uptime and faster feature rollouts. This project improved operational efficiency, reduced developer dependency, and enhanced long-term scalability.",
    image: DuctDaddyImg,
  },
  {
    id: 1,
    date: "2025-04-13",
    title: "Chaty - Real-time Chat Application",
    tech: ["Express", "Node.js", "MongoDB", "React", "Socket.IO"],
    link: "https://github.com/flowz0/chat-app",
    linkLabel: "github.com/flowz0/chat-app",
    desc: "Delivered low-latency private messaging by building a real-time chat platform with Socket.IO, Node.js, and MongoDB, achieving seamless communication across users. Secured user sessions using JWT authentication, bcrypt encryption, and cookie-based sessions, while optimizing database structures to handle concurrent connections and preserve data integrity. This improved performance, reliability, and scalability for real-time collaboration systems.",
    image: ChatyAppImg,
  },
]
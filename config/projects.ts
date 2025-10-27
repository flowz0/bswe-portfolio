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
    date: "2024-09-27",
    title: "Duct Daddy - Custom Marketing Website & CMS",
    tech: ["Next.js", "Express", "Node.js", "MongoDB", "Tailwind CSS"],
    link: "https://ductdaddykc.com",
    linkLabel: "ductdaddykc.com",
    desc: "I built a fully custom marketing website for Duct Daddy Duct Cleaning featuring over 15 optimized pages designed for performance, accessibility, and SEO. The site includes an integrated booking system connected with Housecall Pro to streamline service scheduling and automate client interactions. Additionally, I developed a custom full-stack blog CMS directly integrated into the main website, complete with a secure admin dashboard for content management, enabling the business to easily publish SEO-focused articles and drive organic traffic.",
    image: DuctDaddyImg,
  },
  {
    id: 1,
    date: "2025-08-15",
    title: "Chaty - Real-time Chat Application",
    tech: ["Express", "Node.js", "MongoDB", "React", "Socket.IO"],
    link: "https://github.com/flowz0/chat-app",
    linkLabel: "github.com/flowz0/chat-app",
    desc: "Developed a real-time chat application enabling instant private messaging with Socket.IO, achieving low latency and smooth responsiveness across sessions. The project featured JWT authentication, bcryptjs encryption, and cookie-based sessions to ensure secure account creation and persistent logins. Designed a scalable back-end architecture using Node.js and MongoDB capable of handling multiple concurrent connections while maintaining reliable message delivery and data integrity.",
    image: ChatyAppImg,
  },
]
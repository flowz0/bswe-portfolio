import { StaticImageData } from "next/image";
import LeadGenImg from "@/public/assets/lead-gen-tool.png";
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
    date: "2025-04-13",
    title: "Real-time Chat Application",
    tech: ["Express", "Node.js", "MongoDB", "React", "Socket.IO"],
    link: "https://github.com/flowz0/chat-app",
    linkLabel: "github.com/flowz0/chat-app",
    desc: "Delivered low-latency private messaging by building a real-time chat platform with Socket.IO, Node.js, and MongoDB, achieving seamless communication across users. Secured user sessions using JWT authentication, bcrypt encryption, and cookie-based sessions, while optimizing database structures to handle concurrent connections and preserve data integrity. This improved performance, reliability, and scalability for real-time collaboration systems.",
    image: ChatyAppImg,
  },
  {
    id: 1,
    date: "2025-08-9",
    title: "Lead Generation Tool",
    tech: ["Express", "Node.js", "Google Maps API", "Next.js", "TypeScript", "Tailwind CSS", "Axios"],
    link: "https://github.com/flowz0/lead-gen",
    linkLabel: "github.com/flowz0/lead-gen",
    desc: "Developed a full-stack lead generation platform integrating the Google Maps API to automate business discovery and identify qualified leads with active websites. Designed a responsive interface using Next.js, Context API, and Hooks for real-time filtering and updates, improving lead efficiency by 70%. Connected the frontend to a Node.js and Express backend for optimized data validation and retrieval, reducing query latency by 45% and delivering a faster, more responsive user experience.",
    image: LeadGenImg,
  },
]
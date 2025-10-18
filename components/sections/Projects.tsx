import Link from "next/link";
import ProjectCard from "../ui/ProjectCard";
import { FaArrowRight } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="mt-32 lg:scroll-mt-24">
      <h2 className="text-h3 font-bold text-neutral-100 lg:hidden">
        Projects
      </h2>
      <div className="mt-4 flex flex-col gap-y-8 lg:mt-0">
        <ProjectCard
          title="Real-Time Chat Application"
          summary="Developed a real-time chat application enabling instant private messaging with Socket.IO, achieving low latency and smooth responsiveness across sessions. The project featured JWT authentication, bcryptjs encryption, and cookie-based sessions to ensure secure account creation and persistent logins. Designed a scalable back-end architecture using Node.js and MongoDB capable of handling multiple concurrent connections while maintaining reliable message delivery and data integrity."
          link="/"
          tags={["Express", "Node.js", "Socket.IO", "MongoDB", "JWT", "bcryptjs"]}
        />
        <ProjectCard
          title="Real-Time Chat Application"
          summary="Developed a real-time chat application enabling instant private messaging with Socket.IO, achieving low latency and smooth responsiveness across sessions. The project featured JWT authentication, bcryptjs encryption, and cookie-based sessions to ensure secure account creation and persistent logins. Designed a scalable back-end architecture using Node.js and MongoDB capable of handling multiple concurrent connections while maintaining reliable message delivery and data integrity."
          link="/"
          tags={["Express", "Node.js", "Socket.IO", "MongoDB", "JWT", "bcryptjs"]}
        />
      </div>
      <Link href="/projects" className="flex items-center gap-x-2 w-fit mt-8 transition-colors duration-300 ease-in-out hover:text-primary">
        View All Projects
        <div>
          <FaArrowRight className="size-6 -rotate-45" />
        </div>
      </Link>
    </section>
  );
}
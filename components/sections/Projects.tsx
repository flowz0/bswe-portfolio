import Link from "next/link";
import ProjectCard from "../ui/ProjectCard";
import { FaArrowRight } from "react-icons/fa";
import { projects } from "@/config/projects";

export default function Projects() {
  const sortedProjects = [...projects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section id="projects" className="mt-24 lg:mt-32 lg:scroll-mt-24">
      <h2 className="text-h3 font-bold text-neutral-100 lg:hidden">
        Projects
      </h2>
      <div className="mt-4 flex flex-col gap-y-8 lg:mt-0">
        {sortedProjects.slice(0, 2).map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            summary={project.desc}
            img={project.image}
            link={project.link}
            tags={project.tech}
          />
        ))}
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
import { projects } from "@/config/projects";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Tag from "./Tag";

export default function Table() {
  const sortedProjects = [...projects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="table w-full border-separate border-spacing-y-4">
      <div className="table-header-group bg-neutral-900">
        <div className="table-row">
          <div className="table-cell text-neutral-400 text-p text-left py-2 px-4 rounded-l-lg">Year</div>
          <div className="table-cell text-neutral-400 text-p text-left py-2 px-4 rounded-r-lg sm:rounded-r-none">Project</div>
          <div className="text-left text-neutral-400 text-p py-2 px-4 hidden md:table-cell">Built with</div>
          <div className="text-left text-neutral-400 text-p py-2 px-4 hidden sm:table-cell sm:rounded-r-lg">Link</div>
        </div>
      </div>
      <div className="table-row-group">
        {sortedProjects.map((project) => (
          <div className="table-row" key={project.id}>
            <div className="table-cell text-neutral-300 text-p align-top py-2 px-4">
              {new Date(project.date).getFullYear()}
            </div>
            <div className="table-cell text-neutral-300 font-bold align-top py-2 px-4">
              <p className="hidden text-p sm:inline-block">
                {project.title}
              </p>
              <Link href={project.link} target="_blank" className="text-neutral-300 text-p flex gap-x-2 w-fit transition-colors duration-300 ease-in-out hover:text-primary sm:hidden">
                {project.title}
                <div>
                  <FaArrowRight className="size-4 -rotate-45" />
                </div>
              </Link>
            </div>
            <div className="hidden md:table-cell py-2 px-4 align-top">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <Tag key={index}>{tech}</Tag>
                ))}
              </div>
            </div>
            <div className="hidden sm:table-cell py-2 px-4">
              <Link href={project.link} target="_blank" className="text-neutral-400 text-p flex gap-x-2 w-fit transition-colors duration-300 ease-in-out hover:text-primary">
                {project.linkLabel}
                <div>
                  <FaArrowRight className="size-4 -rotate-45" />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

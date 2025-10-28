"use client";

import Link from "next/link";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { useActiveSection } from "@/hooks/useActiveSection";

export default function Sidebar() {
  const sectionIds = ["about", "experience", "projects"];
  const activeSection = useActiveSection(sectionIds);

  const links = [
    { id: "about", label: "ABOUT" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "projects", label: "PROJECTS" },
  ];

  return (
    <aside
      role="navigation"
      aria-label="Sidebar Navigation"
      className="lg:top-24 lg:self-start lg:h-[calc(100vh-6rem)] flex flex-col justify-between sticky pb-24"
    >
      <div>
        <h1 className="text-h2 font-bold text-neutral-100 lg:text-h1">
          Billy Flowers
        </h1>
        <h2 className="text-p font-bold text-neutral-300 mt-2">
          Full Stack Software Engineer
        </h2>
        <p className="text-p text-neutral-300 mt-4">
          I build accessible, high-performance, and scalable digital experiences for the web.
        </p>

        {/* Navigation */}
        <nav className="hidden mt-16 lg:flex flex-col gap-y-4">
          {links.map(({ id, label }) => {
            const isActive = activeSection === id;

            return (
              <Link
                key={id}
                href={`/#${id}`}
                className={`grid items-center gap-x-4 group w-fit transition-all duration-300 ease-in-out 
                  grid-cols-[40px_1fr] hover:grid-cols-[80px_1fr]
                  ${isActive ? "grid-cols-[80px_1fr]" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                <div
                  className={`h-[2px] transition-colors ${
                    isActive
                      ? "bg-neutral-300"
                      : "bg-neutral-500 group-hover:bg-neutral-300"
                  }`}
                />
                <p
                  className={`text-p font-bold transition-colors ${
                    isActive
                      ? "text-neutral-300"
                      : "text-neutral-500 group-hover:text-neutral-300"
                  }`}
                >
                  {label}
                </p>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Social Links */}
      <div className="flex gap-x-4 mt-8 lg:mt-0">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/billyflowers/"
          className="text-neutral-500 transition-colors duration-300 ease-in-out hover:text-neutral-300"
        >
          <FaLinkedin className="size-10 " />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/flowz0"
          className="text-neutral-500 transition-colors duration-300 ease-in-out hover:text-neutral-300"
        >
          <FaGithubSquare className="size-10" />
        </Link>
      </div>
    </aside>
  );
}
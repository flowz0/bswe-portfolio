import Link from "next/link";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside role="navigation" className="lg:top-24 lg:self-start lg:h-[calc(100vh-6rem)] flex flex-col justify-between sticky pb-24">
      <div>
        <h1 className="text-h2 font-bold text-neutral-100 lg:text-h1">
          Billy Flowers
        </h1>
        <h2 className="text-p font-bold text-neutral-300 mt-2">Full Stack Engineer</h2>
        <p className="text-p text-neutral-300 mt-4">
          I create accessible, performant, and scalable digital solutions for the web.
        </p>

        {/* nav links */}
        <nav className="hidden mt-16 lg:flex flex-col gap-y-4">
          <Link href="/#about" className="grid items-center gap-x-4 grid-cols-[40px_1fr] group w-fit transition-all duration-300 ease-in-out hover:grid-cols-[80px_1fr]">
            <div className="h-[2px] bg-neutral-500 group-hover:bg-neutral-300" />
            <p className="text-p font-bold text-neutral-500 group-hover:text-neutral-300">ABOUT</p>
          </Link>
          <Link href="/#experience" className="grid items-center gap-x-4 grid-cols-[40px_1fr] group w-fit transition-all duration-300 ease-in-out hover:grid-cols-[80px_1fr]">
            <div className="h-[2px] bg-neutral-500 group-hover:bg-neutral-300" />
            <p className="text-p font-bold text-neutral-500 group-hover:text-neutral-300">EXPERIENCE</p>
          </Link>
          <Link href="/#projects" className="grid items-center gap-x-4 grid-cols-[40px_1fr] group w-fit transition-all duration-300 ease-in-out hover:grid-cols-[80px_1fr]">
            <div className="h-[2px] bg-neutral-500 group-hover:bg-neutral-300" />
            <p className="text-p font-bold text-neutral-500 group-hover:text-neutral-300">PROJECTS</p>
          </Link>
        </nav>
      </div>

      {/* socials */}
      <div className="flex gap-x-4 mt-8 lg:mt-0">
        <Link target="_blank" href="https://www.linkedin.com/in/billyflowers/">
          <FaLinkedin className="size-8 text-neutral-500 hover:text-neutral-300" />
        </Link>
        <Link target="_blank" href="https://github.com/flowz0">
          <FaGithubSquare className="size-8 text-neutral-500 hover:text-neutral-300" />
        </Link>
      </div>
    </aside>
  );
}
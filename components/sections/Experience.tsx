import Link from "next/link";
import ExperienceCard from "../ui/ExperienceCard";
import { FaArrowRight } from "react-icons/fa";
import { experiences } from "@/config/experiences";

export default function Experience() {
  return (
    <section id="experience" className="mt-24 lg:mt-32 lg:scroll-mt-24">
      <h2 className="text-h3 font-bold text-neutral-100 lg:hidden">Experience</h2>
      <div className="flex flex-col gap-y-8 mt-4 lg:mt-0">
        {[...experiences].reverse().map((experience) => (
          <ExperienceCard
            key={experience.id}
            dateRange={experience.date}
            title={experience.title}
            company={experience.company}
            summary={experience.summary}
            link={experience.link}
            tags={experience.tech}
          />
        ))}
      </div>
      <Link
        href="/resume/Billy_Flowers_Software_Engineer_Resume.pdf"
        className="flex items-center gap-x-2 w-fit transition-colors duration-300 ease-in-out mt-8 hover:text-primary"
        passHref
        target="_blank"
      >
        View Full Resume
        <div>
          <FaArrowRight className="size-6 -rotate-45" />
        </div>
      </Link>
    </section>
  );
}
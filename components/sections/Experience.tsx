import Link from "next/link";
import ExperienceCard from "../ui/ExperienceCard";
import { FaArrowRight } from "react-icons/fa";

export default function Experience() {
  return (
    <section id="experience" className="mt-24 lg:mt-32 lg:scroll-mt-24">
      <h2 className="text-h3 font-bold text-neutral-100 lg:hidden">Experience</h2>
      <div className="flex flex-col gap-y-8 mt-4 lg:mt-0">
        <ExperienceCard
          dateRange="2025 - PRESENT"
          title="Full Stack Software Engineer"
          company="Netflows"
          summary="Reduced annual software expenses by $500 per client and improved client retention by developing a custom CRM solution with Next.js, TypeScript, Node.js, and MongoDB that automated workflows, invoicing, and lead tracking. Designed a centralized dashboard with modular components to enhance maintainability and usability. This solution delivered measurable cost savings, streamlined operations, and increased agency ROI."
          link="https://www.netflows.xyz/"
          tags={["TypeScript", "Next.js", "Tailwind CSS", "SendGrid Email API", "Vercel"]}
        />
        <ExperienceCard
          dateRange="2023 - 2024"
          title="Front End Software Engineer Intern"
          company="Bay Valley Tech"
          summary="Enhanced the accessibility and performance of a social media platform by developing responsive front-end features including dynamic navigation, theme toggling, and live search using React and TypeScript. Improved user experience and reduced render latency by 30% through optimized state management and dynamic routing across feeds, profiles, and posts. Collaborated in an Agile team environment through daily stand-ups, sprint planning, and code reviews to ensure maintainable, high-quality deliverables aligned with project milestones."
          link="https://github.com/FrancescaImmediato/dev-duckies-sm-proj-front"
          tags={["JavaScript", "React", "React Router", "Bulma CSS", "Axios"]}
        />
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
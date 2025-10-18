import Link from "next/link";
import ExperienceCard from "../ui/ExperienceCard";
import { FaArrowRight } from "react-icons/fa";

export default function Experience() {
  return (
    <section id="experience" className="mt-32 lg:scroll-mt-24">
      <h2 className="text-h3 font-bold text-neutral-100 lg:hidden">Experience</h2>
      <div className="flex flex-col gap-y-8 mt-4 lg:mt-0">
        <ExperienceCard
          dateRange="2025 - PRESENT"
          title="Full Stack Software Engineer"
          company="Netflows"
          summary="Built and deployed a high-performance agency website using Next.js, TypeScript, and Tailwind CSS, achieving a 98 Web Core Vitals score through advanced optimization and best practices. I developed a custom multi-step booking form with real-time validation and accessible UX, boosting completion rates by 35%, and integrated SendGrid Email API with serverless automation to cut manual lead handling by 60% while managing deployment and analytics through Vercel and GA4."
          tags={["TypeScript", "Next.js", "Tailwind CSS", "SendGrid Email API", "Vercel"]}
        />
        <ExperienceCard
          dateRange="2023 - 2025"
          title="Front End Software Engineer Intern"
          company="Bay Valley Tech"
          summary="Contributed to the development of a full-stack social media platform, implementing core features such as a responsive navbar, dark/light mode toggle, and live user search using React and React Router. I optimized navigation with dynamic routing for user profiles, settings, and feed pages, improving usability and UI consistency. Working in an Agile Scrum environment, I collaborated with front-end and back-end teams through daily standups, code reviews, and sprint planning to deliver features on time and maintain a high-quality user experience."
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
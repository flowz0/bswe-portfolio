import Link from "next/link"
import { FaArrowRight } from "react-icons/fa";
import Tag from "./Tag";
import { ExperienceCardProps } from "@/types/next";

export default function ExperienceCard({
  dateRange,
  title,
  company,
  summary,
  link,
  tags
}: ExperienceCardProps) {
  return (
    <div className="lg:grid lg:grid-cols-[160px_1fr]">
      <div>
        <p className="text-p font-bold text-neutral-500">{dateRange}</p>
      </div>
      <div>
        <Link href={link || "/"} className="flex items-center gap-x-2 group">
          <h3 className="text-p font-bold text-neutral-300">
            {title} • {company}
          </h3>
          <FaArrowRight className="size-6 -rotate-45 transition-all duration-300 ease-in-out group-hover:rotate-0" />
        </Link>
        <p className="text-p text-neutral-300 mt-2">
          {summary}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}
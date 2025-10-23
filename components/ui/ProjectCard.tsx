// import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaImage } from "react-icons/fa";
import Tag from "./Tag";
import { ProjectCardProps } from "@/types/next";
import Image from "next/image";

export default function ProjectCard({
  title,
  summary,
  link,
  img,
  tags
}: ProjectCardProps) {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-[160px_1fr] lg:gap-x-5">
      {img ? (
        <div>

          <Image
            src={img}
            alt={`${title} project image`}
            className="object-cover order-2 mt-4 lg:mt-0 lg:order-1 w-full sm:w-64 lg:w-full h-48 lg:h-28 rounded-lg"
            quality={100}
            priority
            draggable={false}
          />
        </div>
      ) : (
        <div className="order-2 mt-4 lg:mt-0 lg:order-1 w-full sm:w-64 lg:w-full h-48 lg:h-28 flex items-center justify-center rounded-lg bg-neutral-800">
          <FaImage className="size-6 text-neutral-700" />
        </div>
      )
      }
      <div className="order-1">
        <Link href={link || "/"} className="flex items-center gap-x-2 group w-fit">
          <h3 className="text-p font-bold text-neutral-100 transition-colors duration-300 ease-in-out group-hover:text-primary">
            {title}
          </h3>
          <div>
            <FaArrowRight className="size-6 -rotate-45 transition-colors duration-300 ease-in-out group-hover:text-primary" />
          </div>
        </Link>
        <p className="text-p text-neutral-300 mt-2">
          {summary}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags?.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </div>
      </div>
    </div >
  );
}
import { ArrowLinkProps } from "@/types/next";
import Link from "next/link";

export default function ArrowLink({children, href}: ArrowLinkProps) {
  return (
    <div>
      <Link
        href={href}
        className=""
      >
        {children}
      </Link>
    </div>
  );
}
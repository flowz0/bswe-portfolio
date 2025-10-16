import { ButtonProps } from "@/types/next";
import Link from "next/link";

export default function Button({
  children,
  href
}: ButtonProps) {
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
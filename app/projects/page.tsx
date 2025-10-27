import Table from "@/components/ui/Table";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function page() {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-12">
      <header>
        <Link
          href="/"
          className="flex items-center gap-x-2 w-fit font-bold text-primary text-p transition-colors duration-300 ease-in-out hover:text-primary/80"
        >
          <div>
            <FaArrowLeft className="size-4" />
          </div>
          Go Back
        </Link>
        <h1 className="text-h2 font-bold mt-2 sm:text-h1">
          All Projects
        </h1>
      </header>
      <main className="mt-6">
        <Table />
      </main>
    </div>
  )
}

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function Page() {
  return (
    <main className="max-w-7xl mx-auto px-6 mt-12">
      <header>
        <Link
          href="/"
          className="flex items-center gap-x-2 w-fit font-bold text-neutral-300 transition-colors duration-300 ease-in-out hover:text-primary"
        >
          <FaArrowLeft className="size-4" />
          Go Back
        </Link>
        <h1 className="text-h1 font-bold mt-2">
          All Projects
        </h1>
      </header>
      <div className="mt-8">
        <div className="table w-full">
          <div className="table-header-group">
            <div className="table-row">
              <div className="table-cell text-left font-normal pb-2 w-16 text-neutral-300">Year</div>
              <div className="table-cell text-left font-normal pb-2 w-64 text-neutral-300">Project</div>
              <div className="text-left font-normal pb-2 w-96 text-neutral-300 hidden lg:table-cell">Built with</div>
              <div className="text-left font-normal pb-2 w-48 text-neutral-300 hidden md:table-cell">Link</div>
            </div>
          </div>
          <div className="table-row-group">
            <div className="table-row">
              <div className="table-cell font-normal text-neutral-300">2025</div>
              <div className="table-cell font-bold text-neutral-100">Duct Daddy - Custom Marketing Website & CMS</div>
              <div className="hidden lg:table-cell">
                <div className="flex flex-wrap gap-2">
                  <div className="bg-neutral-700 text-neutral-300 text-p font-normal w-fit py-1 px-3 rounded-full">
                    Express
                  </div>
                  <div className="bg-neutral-700 text-neutral-300 text-p font-normal w-fit py-1 px-3 rounded-full">
                    Node.js
                  </div>
                  <div className="bg-neutral-700 text-neutral-300 text-p font-normal w-fit py-1 px-3 rounded-full">
                    MongoDB
                  </div>
                  <div className="bg-neutral-700 text-neutral-300 text-p font-normal w-fit py-1 px-3 rounded-full">
                    Next.js
                  </div>
                  <div className="bg-neutral-700 text-neutral-300 text-p font-normal w-fit py-1 px-3 rounded-full">
                    Tailwind CSS
                  </div>
                  <div className="bg-neutral-700 text-neutral-300 text-p font-normal w-fit py-1 px-3 rounded-full">
                    Framer Motion
                  </div>
                </div>
              </div>
              <div className="hidden md:table-cell">
                <Link
                  href="https://www.ductdaddykc.com"
                  target="_blank"
                  className="flex items-center gap-x-2 text-neutral-500 transition-colors duration-300 ease-in-out hover:text-primary"
                >
                  www.ductdaddykc.com
                  <FaArrowRight className="size-4 -rotate-45" />
                </Link>
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell font-normal text-neutral-300">2025</div>
              <div className="table-cell font-bold text-neutral-100">Real-Time Chat Application</div>
              <div className="hidden lg:table-cell lg:pt-4">
                <div className="flex flex-wrap gap-2">
                  <div className="bg-neutral-700 text-neutral-300 text-p font-normal w-fit py-1 px-3 rounded-full">
                    JavaScript
                  </div>
                  <div className="bg-neutral-700 text-neutral-300 text-p font-normal w-fit py-1 px-3 rounded-full">
                    Express
                  </div>
                  <div className="bg-neutral-700 text-neutral-300 text-p font-normal w-fit py-1 px-3 rounded-full">
                    Node.js
                  </div>
                  <div className="bg-neutral-700 text-neutral-300 text-p font-normal w-fit py-1 px-3 rounded-full">
                    Socket.io
                  </div>
                  <div className="bg-neutral-700 text-neutral-300 text-p font-normal w-fit py-1 px-3 rounded-full">
                    MongoDB
                  </div>
                  <div className="bg-neutral-700 text-neutral-300 text-p font-normal w-fit py-1 px-3 rounded-full">
                    JWT
                  </div>
                  <div className="bg-neutral-700 text-neutral-300 text-p font-normal w-fit py-1 px-3 rounded-full">
                    bcryptjs
                  </div>
                </div>
              </div>
              <div className="hidden md:table-cell">
                <Link
                  href="https://github.com/flowz0/chat-app"
                  target="_blank"
                  className="flex items-center gap-x-2 text-neutral-500 transition-colors duration-300 ease-in-out hover:text-primary"
                >
                  github.com/flowz0/chat-app
                  <FaArrowRight className="size-4 -rotate-45" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
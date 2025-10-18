import About from "@/components/sections/About";
import Sidebar from "@/components/layout/Sidebar";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-16 lg:pt-24 lg:grid lg:grid-cols-[400px_1fr]">
      <Sidebar />
      <div className="lg:pl-32">
        <About />
        <Experience />
        <Projects />
      </div>
    </main>
  );
}

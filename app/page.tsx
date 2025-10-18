import About from "@/components/sections/About";
import Sidebar from "@/components/layout/Sidebar";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-16 lg:pt-0 lg:grid lg:grid-cols-[400px_1fr]">
      <Sidebar />
      <div className="lg:pl-32 lg:py-24">
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}

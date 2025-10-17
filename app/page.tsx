import About from "@/components/sections/About";
import Sidebar from "@/components/sections/Sidebar";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto min-h-screen px-6 pt-16 lg:pt-24 lg:grid lg:grid-cols-[400px_1fr]">
      <Sidebar />
      <div className="lg:pl-48">
        <About />
      </div>
    </main>
  );
}

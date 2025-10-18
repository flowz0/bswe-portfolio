import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-32 pb-16 lg:pb-0">
      <div>
        <p className="text-p text-neutral-300 max-w-md">
          Designed in <Link href="https://www.figma.com/" target="_blank" className="text-neutral-100 font-bold transition-colors duration-300 ease-in-out hover:text-primary">Figma</Link> and developed in <Link href="https://code.visualstudio.com/" target="_blank" className="text-neutral-100 font-bold transition-colors duration-300 ease-in-out hover:text-primary">Visual Studio Code</Link>. Built with <Link href="https://nextjs.org/" target="_blank" className="text-neutral-100 font-bold transition-colors duration-300 ease-in-out hover:text-primary">Next.js</Link> and <Link href="https://tailwindcss.com/" target="_blank" className="text-neutral-100 font-bold transition-colors duration-300 ease-in-out hover:text-primary">Tailwind CSS</Link>, deployed with <Link href="https://vercel.com/home" target="_blank" className="text-neutral-100 font-bold transition-colors duration-300 ease-in-out hover:text-primary">Vercel</Link>.
        </p>
      </div>
    </footer>
  );
}
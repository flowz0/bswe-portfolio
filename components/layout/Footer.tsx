import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-32">
      <div>
        <p className="text-p text-neutral-300 max-w-md">
          Designed in <Link href="https://www.figma.com/" className="text-neutral-100 font-bold">Figma</Link> and developed in <Link href="https://code.visualstudio.com/"  className="text-neutral-100 font-bold">Visual Studio Code</Link>. Built with <Link href="https://nextjs.org/"  className="text-neutral-100 font-bold">Next.js</Link> and <Link href="https://tailwindcss.com/"  className="text-neutral-100 font-bold">Tailwind CSS</Link>, deployed with <Link href="https://vercel.com/"  className="text-neutral-100 font-bold">Vercel</Link>.
        </p>
      </div>
    </footer>
  );
}
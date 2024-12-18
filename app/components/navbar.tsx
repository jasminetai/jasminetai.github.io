import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 z-10">
      <ul className="w-full flex justify-between bg-gradient-to-br from-zinc-700/50 via-neutral-500/50 to-zinc-700/50 backdrop-blur-sm">
        
        <Link className="font-bold" href="#">
          <li className="hover:bg-neutral-400/25 hover:cursor-pointer px-4 py-2 transition-colors">
            Jasmine Tai
          </li>
        </Link>
        
        <Link className="ml-auto" href="#about">
          <li className="hidden hover:bg-neutral-400/25 hover:cursor-pointer px-4 py-2 transition-colors sm:block">
            about
          </li>
        </Link>

        <Link href="#experience">
          <li className="hidden hover:bg-neutral-400/25 hover:cursor-pointer px-4 py-2 transition-colors sm:block">
            experience
          </li>
        </Link>

        <Link href="#contact">
          <li className="hidden hover:bg-neutral-400/25 hover:cursor-pointer px-4 py-2 transition-colors sm:block">
            contact
          </li>
        </Link>

      </ul>
    </nav>
  );
}
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 z-10">
      <ul className="w-full flex justify-between bg-gradient-to-br from-zinc-700/50 via-neutral-500/50 to-zinc-700/50 backdrop-blur-sm">
        <li className="hover:bg-neutral-400/25 hover:cursor-pointer px-4 py-2 transition-colors">
          <Link className="font-bold" href="#">Jasmine Tai</Link>
        </li>
        <li className="hidden hover:bg-neutral-400/25 hover:cursor-pointer px-4 py-2 transition-colors ml-auto sm:block">
          <Link href="#about">about</Link>
        </li>
        <li className="hidden hover:bg-neutral-400/25 hover:cursor-pointer px-4 py-2 transition-colors sm:block">
          <Link href="#experience">experience</Link>
        </li>
        <li className="hidden hover:bg-neutral-400/25 hover:cursor-pointer px-4 py-2 transition-colors sm:block">
          <Link href="#contact">contact</Link>
        </li>
      </ul>
    </nav>
  );
}
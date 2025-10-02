import Link from "next/link";
import { ArrowRight } from "./icons";

export function Header() {
  return (
    <header className="fixed top-0 z-10 flex w-full items-center justify-center bg-transparent">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-bold">
          Jules
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link href="/#about">About</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <Link
          href="/contact"
          className="flex items-center gap-1 rounded-full bg-blue-500 px-4 py-2 text-sm text-white"
        >
          <span>Contact me</span>
          <ArrowRight />
        </Link>
      </div>
    </header>
  );
}
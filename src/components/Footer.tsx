import Link from "next/link";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./icons";

export function Footer() {
  return (
    <footer className="w-full bg-gray-900/50 p-6 text-center text-sm text-gray-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <p>&copy; {new Date().getFullYear()} Jules. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
}
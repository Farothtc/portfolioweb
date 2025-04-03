"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Nav() {
  const path = usePathname();
  return (
    <>
      <div className="container sm:mx-auto">
        <div className="navbar bg-transparent flex justify-between items-center">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
              />
            </svg>
          </Link>

          {path === "/about" && (
            <div className="flex sm:gap-5">
              <Link href="/projects">
                <button className="btn btn-ghost text-xs sm:text-sm">
                  Projects
                </button>
              </Link>
              <Link href="/certificates">
                <button className="btn btn-ghost text-xs sm:text-sm">
                  Certificates
                </button>
              </Link>
              <Link href="/contact">
                <button className="btn btn-ghost text-xs sm:text-sm">
                  Contact
                </button>
              </Link>
            </div>
          )}

          {path === "/projects" && (
            <div className="flex gap-5">
              {/* <Link href="/about">
                <button className="btn btn-ghost text-xs sm:text-sm">
                  About Me
                </button>
              </Link> */}
              <Link href="/certificates">
                <button className="btn btn-ghost text-xs sm:text-sm">
                  Certificates
                </button>
              </Link>
              <Link href="/contact">
                <button className="btn btn-ghost text-xs sm:text-sm">
                  Contact
                </button>
              </Link>
            </div>
          )}
          {path === "/certificates" && (
            <div className="flex gap-5">
              {/* <Link href="/about">
                <button className="btn btn-ghost text-xs sm:text-sm">
                  About Me
                </button>
              </Link> */}
              <Link href="/projects">
                <button className="btn btn-ghost text-xs sm:text-sm">
                  Projects
                </button>
              </Link>
              <Link href="/contact">
                <button className="btn btn-ghost text-xs sm:text-sm">
                  Contact
                </button>
              </Link>
            </div>
          )}
          {path === "/contact" && (
            <div className="flex gap-5">
              {/* <Link href="/about">
                <button className="btn btn-ghost text-xs sm:text-sm">
                  About Me
                </button>
              </Link> */}
              <Link href="/projects">
                <button className="btn btn-ghost text-xs sm:text-sm">
                  Projects
                </button>
              </Link>
              <Link href="/certificates">
                <button className="btn btn-ghost text-xs sm:text-sm">
                  Certificates
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

"use client";
import { useEffect } from "react";
import Particles from "./components/Particles";
import Link from "next/link";
import anime from "animejs";

export default function Home() {
  useEffect(() => {
    anime({
      targets: ".mustafa",
      opacity: [0, 1],
      translateY: [20, 0],
      easing: "easeOutQuad",
      duration: 750,
      complete: () => {
        anime({
          targets: ".title",
          opacity: [0, 1],
          translateY: [20, 0],
          easing: "easeOutQuad",
          duration: 750,
          complete: () => {
            anime({
              targets: [".aboutMe", ".projectsMe", ".certiMe", ".contactMe"],
              opacity: [0, 1],
              translateY: [20, 0],
              easing: "easeOutQuad",
              duration: 750,
              delay: anime.stagger(400),
            });
          },
        });
      },
    });
  }, []);
  return (
    <>
      <div>
        <Particles
          className="absolute w-screen h-screen inset-0"
          quantity={100}
        />
      </div>
      <div className="relative h-screen">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  p-4 rounded-lg shadow-md flex flex-col justify-center items-center gap-5 w-auto md:flex-col">
          <h1 className="text-2xl sm:text-4xl mustafa">
            Hello, I&apos;m <strong>Mustafa</strong>.
          </h1>
          <h2 className="text-lg sm:text-4xl whitespace-nowrap title">
            I&apos;m a Jr. Front-End Web Developer.
          </h2>
          <div className="flex flex-col pt-3 gap-3 sm:flex-row">
            {/* <Link href="/about">
              <button className="btn btn-circle btn-outline btn-sm sm:btn-lg w-40 aboutMe">
                About Me
              </button>
            </Link> */}
            <Link href="/projects">
              <button className="btn btn-circle btn-outline btn-sm sm:btn-lg w-40 projectsMe">
                Projects
              </button>
            </Link>
            <Link href="/certificates">
              <button className="btn btn-circle btn-outline btn-sm sm:btn-lg w-40 certiMe">
                Certificates
              </button>
            </Link>
            <Link href="/contact">
              <button className="btn btn-circle btn-outline btn-sm sm:btn-lg w-40 contactMe">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

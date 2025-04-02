"use client";
import { useEffect } from "react";
import anime from "animejs";
import Nav from "../components/Nav";
import projectData from "../lib/projectData";
import ProjectSections from "../components/ProjectSections";
export default function Projects() {
  const style = {
    backgroundImage: "linear-gradient(to right, #171719, #111112)",
  };
  useEffect(() => {
    anime({
      targets: ".projects",
      opacity: [0, 1],
      translateY: [20, 0],
      easing: "easeOutQuad",
      duration: 750,
      complete: () => {
        anime({
          targets: ".titleProjects",
          opacity: [0, 1],
          translateY: [20, 0],
          easing: "easeOutQuad",
          duration: 750,
          complete: () => {
            anime({
              targets: ".gridProjects",
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
    <div className="min-h-screen" style={style}>
      <Nav />
      <div className="px-6 pt-20 mx-auto space-y-4 max-w-7xl lg:px-8 md:pt-24 lg:pt-20">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl projects">
          Projects
        </h1>
        <p className="titleProjects">Nearly all from my personal projects</p>
        <div className="divider py-6"></div>
        <div className="grid grid-cols-2 grid-rows-3 gap-5 pb-5 gridProjects">
          {projectData.map((project) => (
            <ProjectSections key={project.id} e={project} />
          ))}
          {/* <div className="col-span-1 row-span-1">
            <div className="card bg-transparent w-full h-full border border-gray-500 shadow-md">
              <div className="card-body flex justify-between items-start">
                <h2 className="card-title absolute left-6 top-4 text-sm font-medium">
                  Jan - Apr 2025
                </h2>
                <h2 className="card-title pt-5 text-4xl">mvkirimi.com</h2>
                <p className="text-lg pt-3">
                  A dynamic and fully responsive <strong>SPA</strong> that aims
                  to act as a personal portfolio site. Built with{" "}
                  <strong>Next.js</strong>, <strong>TypeScript</strong>,{" "}
                  <strong>daisyUI</strong>, <strong>Tailwind CSS</strong> and{" "}
                  <strong>anime.js</strong>. Deployed with{" "}
                  <strong>Vercel</strong> for better performance.
                </p>
                <div className="card-actions justify-end">
                  <Link href="https://mvkirimi.com" target="_blank">
                    <button className="btn btn-ghost">
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
                          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 row-span-1">
            <div className="card bg-transparent w-full h-full border border-gray-500 shadow-md">
              <div className="card-body flex justify-between items-start">
                <h2 className="card-title absolute left-6 top-4 text-sm font-medium">
                  Nov - Dec 2024
                </h2>
                <h2 className="card-title pt-5 text-4xl">minedify.com</h2>
                <p className="text-lg pt-3">
                  A dynamic <strong>SPA</strong> on mineable cryptocurrencies
                  that is fully responsive including <strong>Next.js</strong>,
                  <strong>JavaScript</strong>, <strong>daisyUI</strong>,
                  <strong>Tailwind CSS</strong>, <strong>anime.js</strong>.
                  Deployed with <strong>Vercel</strong> for better optimization
                  and performance.
                </p>
                <div className="card-actions flex justify-end">
                  <Link href="https://minedify.com" target="_blank">
                    <button className="btn btn-ghost">
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
                          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

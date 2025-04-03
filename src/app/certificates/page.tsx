"use client";
import { useEffect } from "react";
import anime from "animejs";
import Nav from "../components/Nav";
import Link from "next/link";
export default function Certificates() {
  const style = {
    backgroundImage: "linear-gradient(to right, #171719, #111112)",
  };
  useEffect(() => {
    anime({
      targets: ".certificatesTitle",
      opacity: [0, 1],
      translateY: [-20, 0],
      easing: "linear",
      duration: 750,
      complete: () => {
        anime({
          targets: ".certificatesGrid",
          opacity: [0, 1],
          translateY: [-20, 0],
          easing: "linear",
          duration: 1000,
        });
      },
    });
  }, []);
  return (
    <>
      <div style={style} className="min-h-screen">
        <Nav />
        <div className="px-6 pt-20 mx-auto space-y-4 max-w-7xl lg:px-8 md:pt-24 lg:pt-20">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl certificatesTitle">
            Certificates
          </h1>
          <div className="divider py-6"></div>
          <div className="grid grid-cols-1 grid-rows-1 gap-5 md:grid-cols-2 certificatesGrid">
            <div className="col-span-1 row-span-1">
              <div className="card bg-transparent w-full h-full border border-gray-500 shadow-md">
                <figure>
                  <img src="/harvard-intro.PNG" alt="Certificate" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-base sm:text-lg md:text-xl">
                    CS50x: CS50's Introduction to Computer Science
                  </h2>
                  <div className="card-actions justify-start pt-3">
                    <Link
                      href="https://courses.edx.org/certificates/72f06bcf27c346d6ab189fb38fc8534d"
                      target="_blank"
                    >
                      <button className="btn btn-ghost btn-outline">
                        Certificate Link
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 row-span-1">
              <div className="card bg-transparent w-full h-full border border-gray-500 shadow-md">
                <figure>
                  <img src="/harvard-understand.PNG" alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-base sm:text-lg md:text-xl">
                    CS50's Understanding Technology
                  </h2>
                  <div className="card-actions justify-start pt-3">
                    <Link
                      href="https://courses.edx.org/certificates/23df484ccffc46628fe2840297b7c90c"
                      target="_blank"
                    >
                      <button className="btn btn-ghost btn-outline">
                        Certificate Link
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

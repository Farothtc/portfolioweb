import Particles from "./components/Particles";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <Particles
          className="absolute w-screen h-screen inset-0"
          quantity={100}
        />
      </div>
      <div className="relative h-screen">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  p-4 rounded-lg shadow-md flex flex-col justify-center items-center gap-5">
          <h1 className="text-4xl">
            Hello, I'm <strong>Mustafa</strong>.
          </h1>
          <h2 className="text-4xl">I'm a Jr. Front-End Web Developer.</h2>
          <div className="flex flex-row pt-3 gap-3">
            <Link href="/about">
              <button className="btn btn-circle btn-outline btn-lg w-40">
                About Me
              </button>
            </Link>
            <button className="btn btn-circle btn-outline btn-lg w-40">
              Projects
            </button>
            <button className="btn btn-circle btn-outline btn-lg w-40">
              Certificates
            </button>
            <button className="btn btn-circle btn-outline btn-lg w-40">
              Contact
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

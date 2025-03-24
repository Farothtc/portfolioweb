import Particles from "../components/Particles";

export default function About() {
  return (
    <>
      <div>
        <Particles
          className="absolute w-screen h-screen inset-0"
          quantity={100}
        />
      </div>
      <h1>Hello I am about</h1>
    </>
  );
}

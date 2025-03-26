import Particles from "../components/Particles";
import Nav from "../components/Nav";

export default function About() {
  const style = {
    backgroundImage: "linear-gradient(to right, #171719, #111112)",
  };
  return (
    <div className="h-screen" style={style}>
      <Nav />
      <div>
        {/* <Particles
          className="absolute w-screen h-screen inset-0"
          quantity={100}
        /> */}
      </div>
      <h1>Hello I am about</h1>
    </div>
  );
}

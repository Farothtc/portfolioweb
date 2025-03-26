import Nav from "../components/Nav";
export default function Projects() {
  const style = {
    backgroundImage: "linear-gradient(to right, #171719, #111112)",
  };
  return (
    <div className="h-screen" style={style}>
      <Nav />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          Projects
        </h1>
      </div>
    </div>
  );
}

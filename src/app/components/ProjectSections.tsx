import Link from "next/link";
export default function ProjectSections({
  e,
}: {
  e: {
    date: string;
    id: number;
    name: string;
    description: string;
    link: string;
  };
}) {
  return (
    <>
      <div className="col-span-1 row-span-1 project-section">
        <div className="card bg-transparent w-full h-full border border-gray-500 shadow-md">
          <div className="card-body flex justify-between items-start">
            <h2 className="card-title absolute left-6 top-4 text-sm font-medium">
              {e.date}
            </h2>
            <h2 className="card-title pt-5 text-2xl md:text-4xl">{e.name}</h2>
            <p className="text-base md:text-lg pt-3">{e.description}</p>
            <div className="card-actions justify-end">
              <Link href={e.link} target="_blank">
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
    </>
  );
}

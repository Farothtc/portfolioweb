type ProjectData = {
  id: number;
  name: string;
  description: string;
  date: string;
  link: string;
};
const projectData: ProjectData[] = [
  {
    id: 1,
    name: "mvkirimi.com",
    description:
      "A dynamic and fully responsive SPA that aims to act as a personal portfolio site. Built with Next.js, TypeScript, daisyUI, Tailwind CSS and anime.js. Deployed with Vercel for better performance.",
    date: "Jan - Apr 2025",
    link: "https://mvkirimi.com",
  },
  {
    id: 2,
    name: "minedify.com",
    description:
      " A dynamic SPA on mineable cryptocurrencies that is fully responsive including Next.js, JavaScript, daisyUI, Tailwind CSS, anime.js. Deployed with Vercel for better optimization and performance.",
    date: "Nov - Dec 2024",
    link: "https://minedify.com",
  },
  {
    id: 3,
    name: "Pokedex",
    description:
      "A react site built for pokemon information. Whole site is built with React.ts, React Router and Bootstrap. API calls made with Axios. As module bundler Vite is preferred. VCS was Git. Deployed with Vercel.",
    date: "Oct - Nov 2024",
    link: "https://pokedex-eta-murex.vercel.app",
  },
  {
    id: 4,
    name: "ToDo-Next",
    description:
      "A Next.js project built for task tracking. Whole site is built with Next.js, JavaScript, anime.js, daisyUI and Tailwind CSS. VCS was Git. Deployed with Vercel.",
    date: "Nov 2024",
    link: "https://todo-next-two-beta.vercel.app",
  },
  {
    id: 5,
    name: "piriltivan.com",
    description:
      "Static site built for information and customer trust. Built by React.js and Bootstrap. As module bundler Vite is preferred. VCS was Git.",
    date: "Jul - Sep 2024",
    link: "https://piriltivan.com",
  },
];

export default projectData;

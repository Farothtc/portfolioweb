type ProjectData = {
  id: number;
  name: string;
  description: string;
  date: string;
  link: string;
};

const projectData: ProjectData[] = [
  {
    id: 9,
    name: "IP Tracker",
    description:
      "Resolved a SPA that is dynamic and fully responsive that aims to track IPs from an IP address or from a domain. Built with Next.js, TypeScript, daisyUI, Tailwind CSS, React Leaflet, Axios. Deployed with Vercel for higher performance.",
    date: "Jun 2025",
    link: "https://ip-tracker-seven-mu.vercel.app",
  },
  {
    id: 8,
    name: "Shortly",
    description:
      "Launched a fully responsive, dynamic SPA that aims to make URLs shorter. Built with Next.js, TypeScript, daisyUI, Tailwind CSS, Next.js API Routes, Axios. Deployed with Vercel for better performance.",
    date: "May - Jun 2025",
    link: "https://url-shortening-peach.vercel.app",
  },
  {
    id: 0,
    name: "Conference Ticket Generator",
    description:
      "Created fully responsive and a dynamic SPA that aims to reflect a Conference Ticket Generator. Built with Next.js, TypeScript, daisyUI, Tailwind CSS. Deployed with Vercel for better performance.",
    date: "May - Jun 2025",
    link: "https://conference-ticket-gen-brown.vercel.app",
  },
  {
    id: 1,
    name: "Browser Extension Manager",
    description:
      "Programmed carefully a dynamic and fully responsive SPA that aims to reflect a Browser Extension Manager. Built with Next.js, TypeScript, daisyUI, Tailwind CSS. Deployed with Vercel for better performance.",
    date: "Apr - May 2025",
    link: "https://browser-extension-manager-five.vercel.app",
  },
  {
    id: 2,
    name: "Interactive Card",
    description:
      "Constructed a dynamic and fully responsive SPA that aims to reflect a payment page FrontEnd. Built with Next.js, TypeScript, shadcn, Tailwind CSS. Deployed with Vercel for better performance.",
    date: "Apr - May 2025",
    link: "https://interactive-card-five.vercel.app",
  },
  {
    id: 3,
    name: "mvkirimi.com",
    description:
      "A dynamic and fully responsive SPA that aims to act as a personal portfolio site. Built with Next.js, TypeScript, daisyUI, Tailwind CSS, anime.js and Framer Motion. Deployed with Vercel for better performance.",
    date: "Jan - Apr 2025",
    link: "https://mvkirimi.com",
  },
  {
    id: 4,
    name: "minedify.com",
    description:
      " A dynamic SPA on mineable cryptocurrencies that is fully responsive including Next.js, JavaScript, daisyUI, Tailwind CSS, anime.js. Deployed with Vercel for better optimization and performance.",
    date: "Nov - Dec 2024",
    link: "https://minedify.com",
  },
  {
    id: 5,
    name: "Pokedex",
    description:
      "A react site built for pokemon information. Whole site is built with React.ts, React Router and Bootstrap. API calls made with Axios. As module bundler Vite is preferred. VCS was Git. Deployed with Vercel.",
    date: "Oct - Nov 2024",
    link: "https://pokedex-eta-murex.vercel.app",
  },
  {
    id: 6,
    name: "ToDo-Next",
    description:
      "A Next.js project built for task tracking. Whole site is built with Next.js, JavaScript, anime.js, daisyUI and Tailwind CSS. VCS was Git. Deployed with Vercel.",
    date: "Nov 2024",
    link: "https://todo-next-two-beta.vercel.app",
  },
  {
    id: 7,
    name: "piriltivan.com",
    description:
      "Static site built for information and customer trust. Built by React.js and Bootstrap. As module bundler Vite is preferred. VCS was Git.",
    date: "Jul - Sep 2024",
    link: "https://piriltivan.com",
  },
];

// const projectData: ProjectData[] = rawProjects.map((project, idx) => ({
//   ...project,
//   id: idx + 1,
// }));

export default projectData;

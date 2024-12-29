import { ExternalLink, Github, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered E-Commerce",
      description:
        "Next.js 14 ve AI destekli modern e-ticaret platformu. Kişiselleştirilmiş ürün önerileri ve akıllı arama özellikleri.",
      image: "/grid.svg",
      tags: ["Next.js 14", "OpenAI", "Prisma", "TailwindCSS"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Real-Time Task Manager",
      description:
        "Socket.io ve tRPC kullanılarak geliştirilmiş gerçek zamanlı task yönetim uygulaması.",
      image: "/grid.svg",
      tags: ["React", "tRPC", "Socket.io", "TypeScript"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "AI Blog Platform",
      description:
        "AI destekli içerik önerileri ve SEO optimizasyonu yapan modern blog platformu.",
      image: "/grid.svg",
      tags: ["Astro", "LangChain", "Vercel AI", "MDX"],
      demoUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
            Projeler
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Son Çalışmalarım
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Modern teknolojiler kullanarak geliştirdiğim yapay zeka destekli
            projelerden bazıları
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={index}
              className="relative isolate flex flex-col justify-between overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 transition-colors duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />

              <div className="flex flex-wrap gap-2 absolute top-4 left-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-600/10 text-indigo-400 ring-1 ring-inset ring-indigo-400/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <h3 className="mr-8 text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <div className="flex gap-x-2.5">
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-x-1 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href={project.demoUrl}
                    className="flex items-center gap-x-1 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                {project.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 dark:bg-indigo-500 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 dark:hover:bg-indigo-400 transition-colors duration-300"
          >
            <Eye className="h-4 w-4" />
            Tüm Projeleri Gör
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

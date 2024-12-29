import React from "react";
import { Code2, Database, Blocks } from "lucide-react";

// Skills bileşenimiz
export default function Skills() {
  const skills = [
    {
      category: "Frontend Development",
      icon: <Code2 className="h-6 w-6" />,
      description: "Modern ve responsive kullanıcı arayüzleri geliştirme",
      items: [
        { name: "React & Next.js 14", level: 95 },
        { name: "TypeScript 5", level: 90 },
        { name: "Astro & Svelte", level: 85 },
        { name: "TailwindCSS & Shadcn", level: 95 },
      ],
    },
    {
      category: "Backend Development",
      icon: <Database className="h-6 w-6" />,
      description: "Güvenli ve ölçeklenebilir API'ler ve veritabanı yönetimi",
      items: [
        { name: "Node.js & Bun", level: 90 },
        { name: "tRPC & GraphQL", level: 85 },
        { name: "PostgreSQL & Prisma", level: 90 },
        { name: "Drizzle ORM", level: 85 },
      ],
    },
    {
      category: "DevOps & AI Tools",
      icon: <Blocks className="h-6 w-6" />,
      description: "Modern deployment ve AI entegrasyonları",
      items: [
        { name: "Docker & K8s", level: 85 },
        { name: "OpenAI & LangChain", level: 80 },
        { name: "CI/CD & GitHub Actions", level: 90 },
        { name: "Vercel & AWS", level: 85 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-24 overflow-hidden" 
      // Yukarıdaki sınıflar: 
      // relative => arka plan katmanını konumlandırmak için
      // py-24 => dikey boşluk
      // overflow-hidden => degrade/grid taşması vs. 
    >
      {/* --- Arka plan katmanı (degrade + grid) --- */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient katman (açık ve koyu mod uyumlu) */}
        <div className="absolute inset-0 bg-gradient-to-br 
                        from-indigo-50 via-white to-indigo-50
                        dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950" 
        />
        {/* Radial degrade */}
        <div className="absolute inset-0 
                        bg-[radial-gradient(circle_500px_at_50%_200px,rgba(79,70,229,0.1),transparent)] 
                        dark:bg-[radial-gradient(circle_500px_at_50%_200px,rgba(79,70,229,0.05),transparent)]" 
        />
        {/* Grid görseli */}
        <div className="absolute w-full h-full 
                        bg-[url('/grid.svg')] 
                        dark:opacity-20 opacity-10" 
        />
      </div>

      {/* --- İçerik kaplaması --- */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Başlık bölümü */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
            Yetenekler
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Teknoloji Yığınım
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            2025'in modern web teknolojileri ve AI araçları konusunda
            kapsamlı deneyime sahibim. Sürekli öğrenme ve gelişme odaklı
            çalışıyorum.
          </p>
        </div>

        {/* Kartlar */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 
                        lg:max-w-none lg:grid-cols-3"
        >
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="flex flex-col 
                         bg-white/80 dark:bg-gray-800/90 
                         backdrop-blur-sm
                         rounded-2xl p-8 shadow-lg ring-1 ring-gray-200 dark:ring-gray-700"
            >
              {/* Kart başlık */}
              <dt className="flex items-center gap-x-3 text-lg font-semibold 
                             text-gray-900 dark:text-white"
              >
                {/* Kategori simgesi */}
                <div className="flex h-10 w-10 items-center justify-center rounded-lg 
                                bg-indigo-600 dark:bg-indigo-500"
                >
                  {React.cloneElement(skillGroup.icon, {
                    className: "h-6 w-6 text-white",
                  })}
                </div>
                {skillGroup.category}
              </dt>

              {/* Kart açıklama ve skill listesi */}
              <dd className="mt-4 flex flex-auto flex-col text-base">
                <p className="flex-auto text-gray-600 dark:text-gray-400">
                  {skillGroup.description}
                </p>

                {/* Progres çubukları */}
                <div className="mt-6 space-y-6">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium 
                                         text-gray-700 dark:text-gray-300"
                        >
                          {skill.name}
                        </span>
                        <span className="text-sm font-medium 
                                         text-gray-600 dark:text-gray-400"
                        >
                          {skill.level}%
                        </span>
                      </div>

                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-indigo-600 dark:bg-indigo-500 
                                     h-2 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

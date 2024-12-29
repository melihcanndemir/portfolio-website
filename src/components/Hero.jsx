import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

const AnimatedHero = () => {
  // Fade in variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  // Stats counter animation
  const countStats = (element, target, duration) => {
    let current = 0;
    const increment = target / (duration * 60); // 60fps
    const counter = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = Math.round(target);
        clearInterval(counter);
      } else {
        element.textContent = Math.round(current);
      }
    }, 1000 / 60);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const stats = document.querySelectorAll(".stat-number");
          stats.forEach((stat) => {
            countStats(stat, parseInt(stat.getAttribute("data-target")), 2);
          });
          observer.disconnect();
        }
      });
    });

    const statsSection = document.querySelector(".stats-section");
    if (statsSection) observer.observe(statsSection);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(to right, rgba(79, 70, 229, 0.2) 0%, transparent 100%)",
            "linear-gradient(to right, rgba(79, 70, 229, 0.4) 0%, transparent 100%)",
            "linear-gradient(to right, rgba(79, 70, 229, 0.2) 0%, transparent 100%)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      </motion.div>

      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-24 pb-16 lg:pt-32">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              variants={itemVariants}
              className="mb-8 inline-flex items-center rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-400 ring-1 ring-inset ring-indigo-500/20"
            >
              Yapay Zeka destekli full-stack geliştirici
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-bold tracking-tight text-white text-5xl lg:text-7xl"
            >
              AI
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {" "}
                Engineer
              </motion.span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg leading-8 text-gray-300"
            >
              Next.js 14, AI araçları ve modern cloud teknolojileri kullanarak
              yenilikçi web uygulamaları geliştiriyorum. 5+ yıllık deneyimim ile
              yapay zeka destekli çözümler sunuyorum.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                İletişime Geç
                <ArrowRight className="h-4 w-4" />
              </motion.a>

              <motion.div className="flex gap-6" variants={itemVariants}>
                {/* Social links with hover animations */}
                {[
                  { href: "https://github.com", icon: "github" },
                  { href: "https://linkedin.com", icon: "linkedin" },
                  { href: "mailto:contact@example.com", icon: "mail" },
                ].map((social) => (
                  <motion.a
                    key={social.icon}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon === "mail" ? (
                      <Mail className="h-6 w-6" />
                    ) : (
                      <svg
                        className="h-6 w-6 fill-current"
                        role="img"
                        viewBox="0 0 24 24"
                      >
                        {social.icon === "github" ? (
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        ) : (
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        )}
                      </svg>
                    )}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-gray-800 pt-8 stats-section">
              {[
                { label: "Yıl Deneyim", value: 5 },
                { label: "AI Projesi", value: 25 },
                { label: "Mutlu Müşteri", value: 20 },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <dt className="text-sm font-medium text-gray-400">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-4xl font-bold tracking-tight text-white">
                    <span className="stat-number" data-target={stat.value}>
                      0
                    </span>
                    {stat.label === "Yıl Deneyim" ? "+" : "+"}
                  </dd>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedHero;

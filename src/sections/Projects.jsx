import { motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";
import { FaGithub, FaGitlab } from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal";

const codeIcons = {
  Github: FaGithub,
  Gitlab: FaGitlab,
};

export default function Projects({ projects }) {
  if (!projects?.length) return null;

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-12" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const isLarge = i < 2;
            const CodeIcon = codeIcons[project.codeOn] || HiExternalLink;

            return (
              <ScrollReveal
                key={project.title}
                delay={0.08 * i}
                className={isLarge ? "md:col-span-1" : ""}
              >
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="card-surface overflow-hidden h-full group"
                >
                  <div
                    className={`${
                      isLarge ? "h-64" : "h-48"
                    } bg-gradient-to-br from-primary/20 via-secondary/10 to-accent-pink/20 flex items-center justify-center relative overflow-hidden`}
                  >
                    {project.image ? (
                      <img 
                        src={`${import.meta.env.BASE_URL}${project.image}`}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <span className="text-4xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors">
                        {project.title
                          .split(" ")
                          .map((w) => w[0])
                          .join("")}
                      </span>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-dark-card to-transparent opacity-0 group-hover:opacity-30 transition-opacity" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.toolsTech?.split(",").map((tech) => (
                        <span
                          key={tech.trim()}
                          className="px-2 py-0.5 text-xs rounded-md bg-primary/10 text-primary font-medium"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-light transition-colors"
                      >
                        <CodeIcon className="w-4 h-4" />
                        View on {project.codeOn || "Code"}
                        <HiExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

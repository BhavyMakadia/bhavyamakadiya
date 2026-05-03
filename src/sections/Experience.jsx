import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "../components/ScrollReveal";

function formatDate(dateStr) {
  if (!dateStr || dateStr === "Present") return "Present";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export default function Experience({ experience }) {
  if (!experience?.length) return null;

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="experience" className="py-24 bg-slate-50/50 dark:bg-dark-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-12" />
        </ScrollReveal>

        <div ref={ref} className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-white/10 md:-translate-x-px" />
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent-pink md:-translate-x-px"
          />

          <div className="space-y-12">
            {experience.map((exp, i) => {
              const isLeft = i % 2 === 0;

              return (
                <ScrollReveal
                  key={`${exp.name}-${exp.position}`}
                  delay={0.1 * i}
                  direction={isLeft ? "left" : "right"}
                >
                  <div
                    className={`relative flex flex-col md:flex-row ${
                      isLeft ? "" : "md:flex-row-reverse"
                    } gap-8 pl-12 md:pl-0`}
                  >
                    <div className="absolute left-2.5 md:left-1/2 top-2 w-3 h-3 rounded-full bg-primary border-2 border-white dark:border-dark md:-translate-x-1.5 z-10" />

                    <div
                      className={`md:w-1/2 ${
                        isLeft ? "md:pr-12 md:text-right" : "md:pl-12"
                      }`}
                    >
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="card-surface p-6"
                      >
                        <div className="flex flex-col gap-1 mb-3">
                          <a
                            href={exp.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-semibold hover:text-primary transition-colors"
                          >
                            {exp.name}
                          </a>
                          <span className="text-primary font-medium">
                            {exp.position}
                          </span>
                          <span className="text-sm font-mono text-slate-500 dark:text-slate-400">
                            {formatDate(exp.startDate)} —{" "}
                            {formatDate(exp.endDate)}
                          </span>
                        </div>

                        <ul
                          className={`space-y-2 ${
                            isLeft ? "md:text-left" : ""
                          }`}
                        >
                          {exp.highlights?.map((h, hi) => (
                            <li
                              key={hi}
                              className="text-sm text-slate-600 dark:text-slate-400 flex gap-2"
                            >
                              <span className="text-primary mt-1 shrink-0">
                                &bull;
                              </span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>

                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

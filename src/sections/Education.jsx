import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiAcademicCap, HiChevronDown } from "react-icons/hi";
import ScrollReveal from "../components/ScrollReveal";

function EducationCard({ edu, delay }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <ScrollReveal delay={delay}>
      <motion.div
        whileHover={{ y: -4 }}
        className="card-surface p-6 md:p-8"
      >
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-primary/10 shrink-0">
            <HiAcademicCap className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <a
                href={edu.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold hover:text-primary transition-colors"
              >
                {edu.school}
              </a>
              <span className="text-sm font-mono text-primary">{edu.year}</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              {edu.degree}
            </p>

            {edu.relevantCourses && (
              <>
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="flex items-center gap-1 mt-4 text-sm text-primary hover:text-primary-light transition-colors"
                >
                  Relevant Courses
                  <motion.span
                    animate={{ rotate: expanded ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiChevronDown className="w-4 h-4" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {expanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-wrap gap-2 mt-3">
                        {edu.relevantCourses.split(",").map((course) => (
                          <span
                            key={course.trim()}
                            className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                          >
                            {course.trim()}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

export default function Education({ education }) {
  if (!education?.length) return null;

  return (
    <section id="education" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-12" />
        </ScrollReveal>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <EducationCard key={edu.school} edu={edu} delay={0.1 * i} />
          ))}
        </div>
      </div>
    </section>
  );
}

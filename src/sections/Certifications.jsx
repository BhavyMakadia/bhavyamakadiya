import { motion } from "framer-motion";
import { HiExternalLink, HiBadgeCheck } from "react-icons/hi";
import ScrollReveal from "../components/ScrollReveal";

export default function Certifications({ certifications }) {
  if (!certifications?.length) return null;

  const grouped = certifications.reduce((acc, cert) => {
    const year = cert.year || "Other";
    if (!acc[year]) acc[year] = [];
    acc[year].push(cert);
    return acc;
  }, {});

  const sortedYears = Object.keys(grouped).sort((a, b) => b - a);

  return (
    <section id="certifications" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-12" />
        </ScrollReveal>

        {sortedYears.map((year) => (
          <div key={year} className="mb-10">
            <ScrollReveal>
              <h3 className="text-lg font-mono text-primary mb-4">{year}</h3>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {grouped[year].map((cert, i) => {
                const isFeatured =
                  cert.courseTitle?.includes("Solutions Architect") ||
                  cert.courseTitle?.includes("Associate");

                return (
                  <ScrollReveal key={cert.courseTitle} delay={0.05 * i}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className={`card-surface p-5 h-full ${
                        isFeatured
                          ? "ring-1 ring-primary/30 shadow-lg shadow-primary/5"
                          : ""
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <HiBadgeCheck
                          className={`w-5 h-5 shrink-0 mt-0.5 ${
                            isFeatured ? "text-primary" : "text-slate-400"
                          }`}
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm leading-snug mb-1">
                            {cert.courseTitle}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                            {cert.organization}
                          </p>
                          <div className="flex gap-3">
                            {cert.certificateLink && (
                              <a
                                href={cert.certificateLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary-light transition-colors"
                              >
                                Certificate
                                <HiExternalLink className="w-3 h-3" />
                              </a>
                            )}
                            {cert.courseLink && (
                              <a
                                href={cert.courseLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-primary transition-colors"
                              >
                                Course
                                <HiExternalLink className="w-3 h-3" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

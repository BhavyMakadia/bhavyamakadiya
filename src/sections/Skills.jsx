import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

function Marquee({ items }) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden mb-16 -mx-6">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-4 px-5 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary shrink-0"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills({ skills }) {
  if (!skills?.length) return null;

  const allLabels = skills.flatMap((cat) => cat.items.map((i) => i.label));

  return (
    <section id="skills" className="py-24 bg-slate-50/50 dark:bg-dark-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-12" />
        </ScrollReveal>

        <Marquee items={allLabels} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, ci) => (
            <ScrollReveal key={category.category} delay={0.05 * ci}>
              <div className="card-surface p-6">
                <h3 className="text-sm font-mono text-primary mb-4 uppercase tracking-wider">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, ii) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.02 * ii, duration: 0.3 }}
                    >
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-3 py-1.5 text-sm rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/10 dark:hover:text-primary transition-all duration-200 hover:-translate-y-0.5"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <span className="inline-block px-3 py-1.5 text-sm rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300">
                          {item.label}
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

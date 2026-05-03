import ScrollReveal from "../components/ScrollReveal";
import { motion } from "framer-motion";
import { HiBriefcase, HiGlobe, HiShieldCheck } from "react-icons/hi";

const facts = [
  { icon: HiBriefcase, label: "1 Years", sub: "Experience" },
  //{ icon: HiGlobe, label: "100+", sub: "Countries Impacted" },
  //{ icon: HiShieldCheck, label: "AWS", sub: "Certified" },
];

export default function About({ about }) {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-12" />
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3 space-y-5">
            <ScrollReveal delay={0.1}>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {about?.bio}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {about?.summary}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {about?.education_summary}
              </p>
            </ScrollReveal>
            {about?.extracurriculars && (
              <ScrollReveal delay={0.4}>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {about.extracurriculars}
                </p>
              </ScrollReveal>
            )}
          </div>

          <div className="md:col-span-2 flex justify-center">
            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary via-secondary to-accent-pink p-1">
                  <div className="w-full h-full rounded-full bg-slate-100 dark:bg-dark-card overflow-hidden">
                    <img 
                      src="/me.png" 
                      alt={about?.name || "Profile"} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent-pink/20 blur-2xl -z-10" />
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-16">
          {facts.map((f, i) => (
            <ScrollReveal key={f.label} delay={0.1 * i}>
              <motion.div
                whileHover={{ y: -4 }}
                className="card-surface p-6 text-center"
              >
                <f.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-2xl font-bold">{f.label}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {f.sub}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

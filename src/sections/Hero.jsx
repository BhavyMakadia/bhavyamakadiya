import { motion } from "framer-motion";
import {
  FaGithub,
  FaGitlab,
  FaLinkedin,
  FaTwitter,
  FaDev,
} from "react-icons/fa";
import { HiMail, HiArrowDown } from "react-icons/hi";
import TypeWriter from "../components/TypeWriter";

const iconMap = {
  Github: FaGithub,
  Gitlab: FaGitlab,
  LinkedIn: FaLinkedin,
  Twitter: FaTwitter,
  "Dev.to": FaDev,
  Email: HiMail,
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero({ about, contact }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent-pink/10 dark:from-primary/5 dark:via-secondary/3 dark:to-accent-pink/5" />

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5 dark:bg-primary/10"
            style={{
              width: 100 + i * 80,
              height: 100 + i * 80,
              left: `${15 + i * 15}%`,
              top: `${10 + i * 12}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <motion.p
          variants={fadeUp}
          className="text-sm md:text-base font-mono text-primary mb-4"
        >
         
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-4"
        >
          {about?.name || "Developer"}
        </motion.h1>

        <motion.div
          variants={fadeUp}
          className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 h-10"
        >
          <TypeWriter
            words={[
              "Software Developer",
              "Full Stack Engineer"
            ]}
          />
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-8 text-base md:text-lg"
        >
          I build scalable systems that live on the internet.
        </motion.p>

        <motion.div variants={fadeUp} className="flex gap-4 justify-center mb-10">
          <a
            href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-primary/30 text-primary rounded-xl font-medium hover:bg-primary/5 transition-all duration-300 hover:-translate-y-0.5"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="flex gap-5 justify-center"
        >
          {contact?.map((c) => {
            const Icon = iconMap[c.label];
            return Icon ? (
              <a
                key={c.label}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                aria-label={c.label}
              >
                <Icon className="w-6 h-6" />
              </a>
            ) : null;
          })}
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <HiArrowDown className="w-6 h-6 text-slate-400" />
      </motion.div>
    </section>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaGitlab,
  FaLinkedin,
  FaTwitter,
  FaDev,
} from "react-icons/fa";
import { HiMail, HiPaperAirplane } from "react-icons/hi";
import ScrollReveal from "../components/ScrollReveal";

const iconMap = {
  Github: FaGithub,
  Gitlab: FaGitlab,
  LinkedIn: FaLinkedin,
  Twitter: FaTwitter,
  "Dev.to": FaDev,
  Email: HiMail,
};

export default function Contact({ contact }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const emailEntry = contact?.find(
    (c) => c.label === "Email" || c.link?.startsWith("mailto:")
  );
  const emailAddress = emailEntry?.link?.replace("mailto:", "") || "";

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-slate-50/50 dark:bg-dark-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-12" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal delay={0.1}>
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Let&apos;s connect
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                I&apos;m always open to new opportunities, collaborations, and
                interesting conversations. Feel free to reach out!
              </p>

              <div className="space-y-4">
                {contact?.map((c) => {
                  const Icon = iconMap[c.label];
                  if (!Icon) return null;
                  return (
                    <a
                      key={c.label}
                      href={c.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-primary/5 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium group-hover:text-primary transition-colors">
                        {c.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="card-surface p-6 md:p-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/25 transition-shadow"
                >
                  Send Message
                  <HiPaperAirplane className="w-4 h-4 rotate-90" />
                </motion.button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

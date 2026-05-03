import { FaGithub, FaGitlab, FaLinkedin, FaTwitter, FaDev } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const iconMap = {
  Github: FaGithub,
  Gitlab: FaGitlab,
  LinkedIn: FaLinkedin,
  Twitter: FaTwitter,
  "Dev.to": FaDev,
  Email: HiMail,
};

export default function Footer({ name, contact }) {
  return (
    <footer className="border-t border-slate-200 dark:border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Designed & Built by{" "}
          <span className="gradient-text font-semibold">{name}</span> &copy;{" "}
          {new Date().getFullYear()}
        </p>
        <div className="flex gap-4">
          {contact?.map((c) => {
            const Icon = iconMap[c.label];
            return Icon ? (
              <a
                key={c.label}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
                aria-label={c.label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ) : null;
          })}
        </div>
      </div>
    </footer>
  );
}

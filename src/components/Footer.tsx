import { motion } from 'framer-motion';
import { Github, Youtube, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/putizahra/puti-coding2.git', label: 'GitHub' },
    { icon: Youtube, href: 'https://www.youtube.com/', label: 'YouTube' },
  ];

  return (
    <footer className="relative py-8 bg-white dark:bg-[#050816] border-t border-sky-100/40 dark:border-sky-500/10 overflow-hidden">

      {/* 🔵 SOFT GLOW (TIDAK MELAYANG, CUMA BACKGROUND HALUS) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[400px] h-[400px] bg-sky-300/10 blur-[120px] top-[-120px] left-[-120px]" />
        <div className="absolute w-[450px] h-[450px] bg-blue-400/10 blur-[140px] bottom-[-150px] right-[-150px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4">

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-sky-600 dark:text-sky-300 text-sm"
          >
            <span>© {currentYear} Made with</span>
            <Heart className="h-4 w-4 text-sky-400 fill-sky-400" />
            <span>by Puti 💙</span>
          </motion.div>

          {/* SOCIAL ICONS */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                className="
                  p-2 rounded-lg
                  bg-sky-50/60 dark:bg-white/5
                  border border-sky-100 dark:border-sky-500/10
                  text-sky-500 dark:text-sky-300
                  transition
                  hover:bg-sky-100/60 dark:hover:bg-white/10
                  hover:text-sky-600
                "
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>

        </div>

      </div>
    </footer>
  );
}
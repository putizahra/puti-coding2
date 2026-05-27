import { motion } from 'framer-motion';

const subjects = {
  science: [
    { name: 'Matematika 📊', level: 95 },
    { name: 'Fisika ⚡', level: 88 },
    { name: 'Kimia 🧪', level: 85 },
    { name: 'Biologi 🌿', level: 90 },
    { name: 'Informatika 💻', level: 96 },
  ],
  social: [
    { name: 'PPKN 🏛️', level: 92 },
    { name: 'Sejarah 📜', level: 87 },
    { name: 'Geografi 🌍', level: 84 },
    { name: 'Sosiologi 👥', level: 86 },
    { name: 'Ekonomi 💰', level: 80 },
  ],
  language: [
    { name: 'Bahasa Indonesia ✍️', level: 94 },
    { name: 'Bahasa Inggris 🇬🇧', level: 89 },
    { name: 'Arab 📖', level: 78 },
    { name: 'Sastra 📚', level: 82 },
    { name: 'Public Speaking 🎤', level: 85 },
  ],
};

function SubjectBar({
  name,
  level,
  delay,
}: {
  name: string;
  level: number;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="space-y-1"
    >
      {/* LABEL */}
      <div className="flex justify-between items-center">
        <span className="text-sky-700 dark:text-sky-200 font-medium">
          {name}
        </span>
        <span className="text-xs text-sky-500 dark:text-sky-300">
          {level}% ☁️
        </span>
      </div>

      {/* BAR */}
      <div className="h-2 bg-sky-100 dark:bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2 }}
          className="h-full rounded-full bg-gradient-to-r from-sky-400 to-sky-600"
        />
      </div>
    </motion.div>
  );
}

export default function SubjectsSection() {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white dark:from-slate-950 dark:to-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-sky-500 text-sm">☁️ Favorite</p>
          <h2 className="text-3xl md:text-4xl font-bold text-sky-700 dark:text-sky-200">
            Subjects 📚✨
          </h2>
          <div className="w-20 h-1 bg-sky-400 mx-auto rounded-full mt-3" />
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* SAINS */}
          <div className="p-5 rounded-2xl bg-white/60 dark:bg-slate-800/40 backdrop-blur border border-sky-100 dark:border-sky-700 shadow-sm">
            <h3 className="text-sky-700 dark:text-sky-200 font-bold mb-4">
              🧠 Sains & Teknologi
            </h3>
            <div className="space-y-3">
              {subjects.science.map((s, i) => (
                <SubjectBar key={s.name} {...s} delay={i * 0.1} />
              ))}
            </div>
          </div>

          {/* SOSIAL */}
          <div className="p-5 rounded-2xl bg-white/60 dark:bg-slate-800/40 backdrop-blur border border-sky-100 dark:border-sky-700 shadow-sm">
            <h3 className="text-sky-700 dark:text-sky-200 font-bold mb-4">
              🌍 Ilmu Sosial
            </h3>
            <div className="space-y-3">
              {subjects.social.map((s, i) => (
                <SubjectBar key={s.name} {...s} delay={i * 0.1} />
              ))}
            </div>
          </div>

          {/* BAHASA */}
          <div className="p-5 rounded-2xl bg-white/60 dark:bg-slate-800/40 backdrop-blur border border-sky-100 dark:border-sky-700 shadow-sm">
            <h3 className="text-sky-700 dark:text-sky-200 font-bold mb-4">
              💬 Bahasa & Komunikasi
            </h3>
            <div className="space-y-3">
              {subjects.language.map((s, i) => (
                <SubjectBar key={s.name} {...s} delay={i * 0.1} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
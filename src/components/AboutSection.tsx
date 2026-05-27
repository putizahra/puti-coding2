import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Sparkles, MapPin, Heart, BookOpen, Star, Smile, Compass } from 'lucide-react';

export default function AboutSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const bio = [
    {
      icon: Sparkles,
      title: 'Perkenalan ✨🌟',
      content:
        'Haii 👋 aku Puti Ferydha Zahra, pelajar MAN 1 Banda Aceh 📚. Aku pengen jadi programmer 💻 yang bisa bikin web bermanfaat 🤍.',
    },
    {
      icon: MapPin,
      title: 'Kelahiran & Impian 🌍🏡',
      content:
        'Aku lahir di Banda Aceh 📍 pada 20 Februari 2010 🎂. Cita-citaku jadi polwan 👮‍♀️ yang membanggakan orang tua 💙.',
    },
    {
      icon: Heart,
      title: 'Hobi 💙✨',
      content:
        'Aku suka masak 🍳 dan lari 🏃‍♀️. Itu bikin aku lebih semangat ⚡ dan tenang 🌤️.',
    },
  ];

  // 🔥 STATS DIUBAH JADI BIOGRAFI
  const stats = [
    {
      icon: BookOpen,
      title: 'Cerita Hidupku 📖',
      desc: 'Perjalanan kecil dari aku yang masih belajar sampai sekarang ✨',
    },
    {
      icon: Star,
      title: 'Mimpi & Tujuan 🌟',
      desc: 'Aku ingin jadi polwan & programmer yang bermanfaat 💙',
    },
    {
      icon: Smile,
      title: 'Kepribadian 😊',
      desc: 'Sederhana, suka belajar hal baru, dan mudah semangat ⚡',
    },
    {
      icon: Compass,
      title: 'Arah Hidup 🚀',
      desc: 'Sedang membangun masa depan sedikit demi sedikit 🌤️',
    },
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white dark:from-slate-950 dark:to-slate-900"
    >
      <div className="max-w-5xl mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-sky-500 dark:text-sky-300 text-sm">
            ☁️ About Me 🌊
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-sky-700 dark:text-sky-200">
            Know Me Better 💭
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6 items-start">

          {/* FOTO */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative group">

              <div className="absolute inset-0 bg-sky-300/30 blur-2xl rounded-2xl scale-105 dark:bg-sky-500/20" />

              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-sky-200 dark:border-sky-700 shadow-xl">

                <img
                  src="/fotoputi2.jpg"
                  alt="profile"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </motion.div>

          {/* ACCORDION + STATS */}
          <div className="space-y-3">

            {bio.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-sky-200 dark:border-sky-700 bg-white/70 dark:bg-slate-800/50 backdrop-blur shadow-sm"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="w-full flex items-center gap-3 p-4 text-left hover:bg-sky-100/40 dark:hover:bg-slate-700/40 transition"
                  >
                    <item.icon className="text-sky-500 dark:text-sky-300 w-5 h-5" />
                    <span className="font-semibold text-sky-700 dark:text-sky-200">
                      {item.title}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-4 overflow-hidden"
                      >
                        <p className="pb-3 text-sky-600 dark:text-sky-300 text-sm leading-relaxed">
                          {item.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {/* 4 BIOGRAPHY STATS */}
            <div className="grid grid-cols-2 gap-3 pt-3">

              {stats.map((s, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-white/60 dark:bg-slate-800/60 border border-sky-200 dark:border-sky-700 shadow-sm backdrop-blur hover:scale-[1.03] transition"
                >
                  <s.icon className="text-sky-500 dark:text-sky-300 w-5 h-5 mb-1" />
                  <p className="font-semibold text-sky-700 dark:text-sky-200 text-sm">
                    {s.title}
                  </p>
                  <p className="text-xs text-sky-500 dark:text-sky-300 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
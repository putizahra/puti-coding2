import { motion } from 'framer-motion';
import { ArrowDown, Github, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

export default function HeroSection() {

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const fade = (d = 0) => ({
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: d, ease: 'easeOut' },
  });

  const socials = [
    {
      icon: Github,
      href: 'https://github.com/putizahra/puti-coding2.git',
      label: 'GitHub'
    },
    {
      icon: Youtube,
      href: 'https://www.youtube.com/',
      label: 'YouTube'
    }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen bg-white dark:bg-black overflow-hidden"
    >

      {/* SKY BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[650px] h-[650px] bg-sky-400/25 blur-[140px] top-[-150px] left-[-150px]" />
        <div className="absolute w-[550px] h-[550px] bg-sky-300/20 blur-[140px] bottom-[-160px] right-[-160px]" />
        <div className="absolute w-[450px] h-[450px] bg-sky-500/15 blur-[120px] top-[55%] left-[60%] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute inset-0 bg-white/60 dark:bg-black/40" />
      </div>

      <ThreeScene />

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

            {/* IMAGE */}
            <motion.div {...fade(0)} className="md:col-span-5 flex justify-center md:justify-end">
              <img
                src="/fotoputi1.jpg"
                alt="profile"
                className="
                  w-[240px] md:w-[300px]
                  h-[360px] md:h-[460px]
                  object-cover object-top
                  rounded-[28px]
                  border border-sky-200 dark:border-sky-500/30
                  shadow-2xl
                "
              />
            </motion.div>

            {/* TEXT */}
            <div className="md:col-span-7 text-center md:text-left">

              <motion.div {...fade(0.2)}>

                <div className="inline-flex items-center mb-4 px-5 py-2 rounded-full border border-sky-200 dark:border-sky-500/30 bg-white/60 dark:bg-black/40 backdrop-blur-md">
                  <span className="text-sm text-sky-500 dark:text-sky-300">
                    ✦ ruang kecil di internet 🌊
                  </span>
                </div>

                <p className="text-sky-400 dark:text-sky-300 text-xs tracking-[0.3em] mb-3 uppercase">
                  profil ✨
                </p>

                <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white leading-tight">
                  Hai 👋, aku{' '}
                  <span className="text-sky-400">
                    Puti
                  </span>{' '}
                  💙
                </h1>

                <p className="mt-3 text-sky-600/80 dark:text-sky-200/80 text-base md:text-lg max-w-md leading-relaxed">
                  pelajar 📚 yang lagi belajar web development 💻  
                  suka bikin ide kecil jadi sesuatu yang hidup 🌱✨
                </p>

              </motion.div>

              {/* STORY */}
              <div className="mt-6 space-y-3 max-w-xl">

                <motion.p {...fade(0.3)} className="text-sky-600/80 dark:text-sky-200">
                  🌊 mulai dari nol, masih banyak yang belum ngerti
                </motion.p>

                <motion.p {...fade(0.4)} className="text-sky-600/80 dark:text-sky-200">
                  🧠 error itu bagian dari proses belajar
                </motion.p>

                <motion.p {...fade(0.5)} className="text-sky-600/80 dark:text-sky-200">
                  🚀 pelan tapi pasti tetap jalan
                </motion.p>

              </div>

              {/* BUTTONS */}
              <motion.div {...fade(0.55)} className="mt-7 flex gap-4 flex-wrap">

                <Button
                  className="rounded-full px-7 py-5 bg-sky-400 hover:bg-sky-500 text-white text-base"
                  onClick={() => scrollTo('projects')}
                >
                  lihat karya 🚀
                </Button>

                <Button
                  variant="outline"
                  className="
                    rounded-full px-7 py-5
                    border-sky-300 text-sky-500
                    dark:border-sky-500 dark:text-sky-300
                    text-base
                  "
                  onClick={() => scrollTo('contact')}
                >
                  ngobrol 💬
                </Button>

              </motion.div>

              {/* SOCIAL (FIXED) */}
              <motion.div {...fade(0.6)} className="mt-6 flex gap-4">

                {socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-sky-200 dark:border-sky-500/30 hover:scale-110 hover:shadow-[0_0_15px_rgba(56,189,248,0.35)] transition"
                  >
                    <social.icon className="w-5 h-5 text-sky-500 dark:text-sky-300" />
                  </a>
                ))}

              </motion.div>

            </div>
          </div>
        </div>
      </div>

      {/* scroll */}
      <motion.button
        onClick={() => scrollTo('about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 p-3 rounded-full bg-white dark:bg-black border border-sky-200 dark:border-sky-500/30"
      >
        <ArrowDown className="w-5 h-5 text-sky-500 dark:text-sky-300" />
      </motion.button>

    </section>
  );
}
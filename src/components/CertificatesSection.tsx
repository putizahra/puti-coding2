import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certificates = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2024',
    credentialId: 'AWS-SAA-123456',
    image: '🏆',
    color: 'from-sky-400 via-blue-500 to-cyan-400',
  },
  {
    title: 'Google Cloud Developer',
    issuer: 'Google Cloud',
    date: '2023',
    credentialId: 'GCP-PCD-789012',
    image: '☁️',
    color: 'from-cyan-400 via-sky-500 to-blue-500',
  },
  {
    title: 'Meta Front-End Developer',
    issuer: 'Meta (Coursera)',
    date: '2023',
    credentialId: 'META-FE-345678',
    image: '⚛️',
    color: 'from-blue-400 via-sky-500 to-indigo-400',
  },
  {
    title: 'MongoDB Developer',
    issuer: 'MongoDB University',
    date: '2023',
    credentialId: 'MDB-DEV-901234',
    image: '🍃',
    color: 'from-emerald-400 via-cyan-400 to-sky-500',
  },
  {
    title: 'Kubernetes Admin',
    issuer: 'CNCF',
    date: '2022',
    credentialId: 'CKA-567890',
    image: '⚙️',
    color: 'from-sky-500 via-blue-600 to-indigo-500',
  },
  {
    title: 'Scrum Master',
    issuer: 'Scrum.org',
    date: '2022',
    credentialId: 'PSM-I-234567',
    image: '📋',
    color: 'from-cyan-500 via-sky-400 to-blue-400',
  },
];

export default function CertificatesSection() {
  return (
    <section
      id="certificates"
      className="py-20 md:py-32 bg-gradient-to-b from-sky-50 to-white dark:from-slate-950 dark:to-slate-900"
    >
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sky-400 font-medium mb-2 block drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]">
            ✨ My Achievements
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-sky-500 drop-shadow-[0_0_12px_rgba(56,189,248,0.6)]">
            Sertifikat & Lisensi 🏅
          </h2>

          <div className="w-24 h-1 mx-auto rounded-full bg-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.6)] mt-3" />
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 25, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group"
            >

              <div className="
                h-full p-6 rounded-2xl
                bg-white/70 dark:bg-white/5
                backdrop-blur-xl
                border border-sky-100 dark:border-sky-900
                shadow-md
                hover:shadow-[0_0_25px_rgba(56,189,248,0.25)]
                hover:-translate-y-2 transition
              ">

                {/* GLOW ICON */}
                <div className={`w-16 h-16 rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${cert.color} shadow-[0_0_20px_rgba(56,189,248,0.35)]`}>
                  <span className="text-3xl">{cert.image}</span>
                </div>

                {/* TITLE */}
                <div className="flex items-start gap-2">
                  <Award className="h-5 w-5 text-sky-400 drop-shadow" />
                  <h3 className="font-bold text-lg text-sky-500 group-hover:text-sky-300 transition">
                    {cert.title}
                  </h3>
                </div>

                {/* ISSUER */}
                <p className="text-sm text-sky-300 mt-2">
                  {cert.issuer}
                </p>

                {/* DATE */}
                <div className="flex items-center gap-2 text-sm text-sky-400 mt-2">
                  <Calendar className="h-4 w-4" />
                  <span>{cert.date}</span>
                </div>

                {/* ID */}
                <p className="text-xs text-sky-200/70 font-mono mt-2">
                  ID: {cert.credentialId}
                </p>

                {/* BUTTON */}
                <Button
                  variant="outline"
                  size="sm"
                  className="
                    mt-4 rounded-full
                    border-sky-400 text-sky-400
                    hover:bg-sky-400 hover:text-black
                    shadow-[0_0_10px_rgba(56,189,248,0.3)]
                  "
                  asChild
                >
                  <a href="#">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Verify
                  </a>
                </Button>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
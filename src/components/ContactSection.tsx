import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  subject: z.string().trim().min(1).max(200),
  message: z.string().trim().min(1).max(2000),
});

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'putizahra.20.02@gmail.com',
    href: 'mailto:putizahra.20.02@gmail.com',
  },
  {
    icon: Phone,
    label: 'Telepon',
    value: '+62 852-2616-1034',
    href: 'tel:+6285226161034',
  },
  {
    icon: MapPin,
    label: 'Lokasi',
    value: 'Banda Aceh, Indonesia',
    href: 'https://maps.app.goo.gl/Bermd6YPJuTS729r5',
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      toast({
        title: '✨ Pesan Terkirim',
        description: 'Aku bakal balas secepatnya ya 💙',
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      toast({
        title: 'Gagal Kirim',
        description: 'Coba lagi nanti ya 💭',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden bg-white dark:bg-[#050816]"
    >
      {/* 🌈 NEON LAYER BACKGROUND (INI YANG DIPERBAIKI) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-sky-400/30 blur-[160px] top-[-150px] left-[-150px]" />
        <div className="absolute w-[700px] h-[700px] bg-blue-500/20 blur-[200px] bottom-[-200px] right-[-200px]" />
        <div className="absolute w-[500px] h-[500px] bg-cyan-300/20 blur-[180px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <p className="text-sky-400">💌 kontak aku</p>
          <h2 className="text-4xl md:text-5xl font-bold text-sky-500">
            Hubungi Aku
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* INFO */}
          <div className="space-y-6">
            {contactInfo.map((info, i) => (
              <motion.a
                key={i}
                href={info.href}
                target="_blank"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="
                  flex items-center gap-4 p-4 rounded-xl
                  bg-white/40 dark:bg-white/5
                  backdrop-blur-xl
                  border border-sky-200/40 dark:border-sky-500/20
                  hover:scale-[1.02] transition
                  shadow-[0_0_25px_rgba(56,189,248,0.08)]
                "
              >
                <div className="p-3 rounded-lg bg-sky-400/10">
                  <info.icon className="text-sky-400" />
                </div>
                <div>
                  <p className="text-sm text-sky-400">{info.label}</p>
                  <p className="font-medium text-sky-700 dark:text-sky-200">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="
              p-6 rounded-2xl
              bg-white/40 dark:bg-white/5
              backdrop-blur-xl
              border border-sky-200/40 dark:border-sky-500/20
              shadow-[0_0_40px_rgba(56,189,248,0.08)]
              space-y-4
            "
          >
            <Input
              name="name"
              placeholder="Nama kamu"
              value={formData.name}
              onChange={handleChange}
            />

            <Input
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />

            <Input
              name="subject"
              placeholder="Subjek"
              value={formData.subject}
              onChange={handleChange}
            />

            <Textarea
              name="message"
              placeholder="Tulis pesan..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
            />

            <Button className="w-full rounded-full bg-sky-500 hover:bg-sky-600">
              {isSubmitting ? (
                <Loader2 className="animate-spin" />
              ) : (
                <>
                  <Send className="mr-2" />
                  Kirim
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
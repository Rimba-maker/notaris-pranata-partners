import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { QuotesIcon } from '@phosphor-icons/react';

const testimonials = [
  {
    quote:
      'Proses AJB rumah pertama saya lancar di Pranata & Partners. Notaris sabar menjelaskan setiap pasal, tidak buru-buru minta tanda tangan.',
    name: 'Pak Hendra & Ibu Rinda',
    role: 'Property buyer',
  },
  {
    quote:
      'Pendirian PT saya selesai 14 hari, dari konsultasi sampai SK Menkumham. Harga transparan, ada rincian PNBP dan jasa.',
    name: 'Andini',
    role: 'Founder Startup',
  },
  {
    quote:
      'Sebagai pasangan yang menikah beda agama, kami butuh perjanjian pranikah yang spesifik. Pak Pranata bantu drafting dengan detail.',
    name: 'Lisa & Daniel',
    role: 'Klien perjanjian pranikah',
  },
  {
    quote:
      'Akta waris keluarga besar dengan 8 ahli waris, tim notaris memfasilitasi dengan profesional. Tidak ada konflik.',
    name: 'Keluarga Hartono',
    role: 'Klien akta waris',
  },
];

export default function Testimonial() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduce || paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(id);
  }, [reduce, paused]);

  const current = testimonials[index];

  return (
    <section className="bg-canvas py-section">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="section-heading text-center">
          Apa Kata Klien Kami
        </h2>

        <div
          className="relative mt-12 min-h-[220px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={reduce ? false : { opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-center"
            >
              <QuotesIcon
                size={28}
                weight="fill"
                className="mx-auto text-accent-gold-soft"
                aria-hidden="true"
              />
              <blockquote className="mx-auto mt-4 max-w-[52ch] text-lg leading-relaxed text-ink">
                {current.quote}
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-display text-base text-ink">{current.name}</p>
                <p className="text-sm text-body">{current.role}</p>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setIndex(i)}
              aria-label={`Testimoni ${i + 1} dari ${testimonials.length}`}
              aria-current={i === index}
              className="p-2.5"
            >
              <span
                className={`block h-1.5 w-6 rounded-full transition-colors ${
                  i === index ? 'bg-accent-gold' : 'bg-hairline'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

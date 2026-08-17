import { motion, useReducedMotion } from 'motion/react';
import { formalReveal, fadeUp } from '../../lib/motion';

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center overflow-hidden bg-canvas-dark pt-24 pb-16"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <motion.div
          initial={reduce ? false : 'hidden'}
          animate="visible"
          variants={formalReveal}
        >
          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl leading-tight text-on-dark md:text-5xl lg:text-6xl"
          >
            Setiap Tanda Tangan, Setiap Akta. Kami Pastikan Sah Secara Hukum.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-[42ch] text-lg leading-relaxed text-on-dark/80"
          >
            Kantor notaris yang melayani perorangan, keluarga, dan badan usaha
            di Jakarta sejak 2012. Pembuatan akta otentik dengan ketelitian
            profesional.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <a
              href="#kontak"
              className="rounded-sm bg-primary px-6 py-3 mono-caps-button text-on-primary transition-transform active:scale-[0.98]"
            >
              Konsultasi Gratis
            </a>
            <a
              href="#layanan"
              className="rounded-sm border border-on-dark/20 px-6 py-3 mono-caps-button text-on-dark transition-colors hover:bg-on-dark/10 active:scale-[0.98]"
            >
              Lihat Layanan
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="relative aspect-[4/3] overflow-hidden rounded-sm"
        >
          <img
            src="https://images.unsplash.com/photo-1664463760781-f159dfe3af30?w=1200&h=900&fit=crop&crop=entropy&q=80&auto=format"
            alt="Penandatanganan akta legal di Kantor Notaris Pranata & Partners"
            className="h-full w-full object-cover"
            width={1200}
            height={900}
            fetchPriority="high"
          />
          <div className="pointer-events-none absolute inset-0 rounded-sm ring-1 ring-inset ring-on-dark/10" />
        </motion.div>
      </div>
    </section>
  );
}

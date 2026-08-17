import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { PhoneIcon, ClipboardTextIcon, PenNibIcon, PackageIcon } from '@phosphor-icons/react';

const steps = [
  {
    icon: PhoneIcon,
    title: 'Konsultasi Awal',
    body: 'Booking janji temu, diskusi kebutuhan (gratis 30 menit).',
  },
  {
    icon: ClipboardTextIcon,
    title: 'Persiapan Dokumen',
    body: 'Kami berikan checklist dokumen yang dibutuhkan.',
  },
  {
    icon: PenNibIcon,
    title: 'Tanda Tangan Akta',
    body: 'Hadir di kantor untuk pembacaan dan penandatanganan akta.',
  },
  {
    icon: PackageIcon,
    title: 'Penyerahan & Pendaftaran',
    body: 'Salinan akta diberikan, kami urus pendaftaran jika diperlukan.',
  },
];

export default function Process() {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.7', 'end 0.4'],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="tata-cara" className="bg-canvas py-section">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="section-heading">
          Tata Cara Pembuatan Akta
        </h2>

        <div ref={containerRef} className="relative mt-14">
          <div className="absolute top-0 bottom-0 left-6 w-px bg-hairline" aria-hidden="true">
            <motion.div
              className="w-full origin-top bg-accent-gold"
              style={{ scaleY: reduce ? 1 : lineScale, height: '100%' }}
            />
          </div>

          <ol className="space-y-14">
            {steps.map(({ icon: Icon, title, body }, i) => (
              <motion.li
                key={title}
                initial={reduce ? false : { opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
                className="relative flex gap-6 pl-0"
              >
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary font-display text-lg text-on-primary">
                  {i + 1}
                </span>
                <div className="pt-1">
                  <div className="flex items-center gap-2">
                    <Icon size={18} weight="light" className="text-accent-gold" aria-hidden="true" />
                    <h3 className="font-display text-lg text-ink">{title}</h3>
                  </div>
                  <p className="mt-1 max-w-[50ch] text-sm leading-relaxed text-body">
                    {body}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

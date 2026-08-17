import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { CaretDownIcon } from '@phosphor-icons/react';

const faqs = [
  {
    q: 'Apa beda notaris dan PPAT?',
    a: 'Notaris berwenang umum (akta otentik), PPAT khusus pertanahan. Banyak notaris merangkap PPAT (dual role).',
  },
  {
    q: 'Berapa lama proses pembuatan AJB?',
    a: 'Umumnya 7-14 hari kerja setelah dokumen lengkap.',
  },
  {
    q: 'Apakah bisa tanda tangan akta lewat video call?',
    a: 'Untuk akta tertentu dapat dilakukan secara elektronik sesuai UU No. 11/2008, tetapi mayoritas akta tetap memerlukan kehadiran fisik.',
  },
  {
    q: 'Jika salah satu pihak di luar negeri?',
    a: 'Bisa menggunakan kuasa notariil yang dilegalisir oleh KBRI setempat.',
  },
  {
    q: 'Apakah notaris bisa ke rumah / kantor klien?',
    a: 'Bisa, untuk kasus tertentu (klien sakit, jumlah pihak banyak). Ada tambahan biaya kunjungan.',
  },
  {
    q: 'Bagaimana memastikan notaris terdaftar resmi?',
    a: 'Cek di website resmi INI (notaris.or.id) atau AHU Online. Notaris resmi memiliki SK dari Menkumham.',
  },
];

export default function FAQ() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-canvas py-section">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display text-3xl text-ink md:text-4xl">FAQ</h2>

        <div className="mt-10 divide-y divide-hairline border-t border-b border-hairline">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className={`flex w-full items-center justify-between gap-4 py-5 text-left transition-colors ${
                    isOpen ? 'border-l-2 border-accent-gold pl-4' : 'pl-0'
                  }`}
                >
                  <span className="font-display text-base text-ink md:text-lg">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: reduce ? 0 : 0.3, ease: 'easeOut' }}
                    className="shrink-0 text-body"
                  >
                    <CaretDownIcon size={18} weight="light" aria-hidden="true" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: reduce ? 0 : 0.3, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-[65ch] pb-5 text-sm leading-relaxed text-body">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

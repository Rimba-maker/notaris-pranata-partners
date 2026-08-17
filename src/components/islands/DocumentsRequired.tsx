import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { CheckCircleIcon } from '@phosphor-icons/react';
import { staggerContainer, fadeUp } from '../../lib/motion';

const tabs = [
  {
    label: 'AJB Properti',
    docs: [
      'KTP penjual & pembeli (suami/istri jika menikah)',
      'KK & buku nikah penjual & pembeli',
      'Sertifikat asli (SHM / HGB / HGU)',
      'PBB terakhir (lunas)',
      'Bukti pembayaran (kuitansi / transfer)',
      'IMB (jika ada bangunan)',
      'Akta nikah penjual (jika menikah)',
      'NPWP penjual & pembeli',
    ],
  },
  {
    label: 'Pendirian PT',
    docs: [
      'KTP seluruh pendiri & pengurus (Direktur, Komisaris)',
      'NPWP seluruh pendiri & pengurus',
      'KK penanggung jawab',
      'Draft nama PT (minimal 3 opsi)',
      'Susunan modal & saham para pendiri',
      'Bukti alamat domisili perusahaan',
      'Susunan pengurus (Direktur & Komisaris)',
    ],
  },
  {
    label: 'Perjanjian Pranikah',
    docs: [
      'KTP calon suami & istri',
      'KK masing-masing pihak',
      'Akta kelahiran masing-masing pihak',
      'Daftar harta bawaan masing-masing pihak',
      'NPWP masing-masing pihak (jika ada)',
      'Rencana tanggal pernikahan',
    ],
  },
  {
    label: 'Akta Waris',
    docs: [
      'KTP seluruh ahli waris',
      'KK pewaris & ahli waris',
      'Akta kematian pewaris',
      'Surat nikah pewaris (jika ada)',
      'Akta kelahiran seluruh ahli waris',
      'Sertifikat / bukti kepemilikan harta warisan',
      'Surat keterangan waris (jika sudah ada)',
    ],
  },
];

export default function DocumentsRequired() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  return (
    <section className="bg-canvas py-section">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="section-heading">
          Dokumen Yang Perlu Disiapkan
        </h2>
        <p className="mt-4 max-w-[60ch] text-base text-body">
          Pilih layanan untuk lihat checklist dokumen yang spesifik.
        </p>

        <div className="mt-8 flex flex-wrap gap-2 rounded-sm bg-hairline p-1" role="tablist">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className="relative rounded-xs px-4 py-2 font-sans text-sm font-medium text-ink"
            >
              {active === i && (
                <motion.span
                  layoutId="doc-tab-indicator"
                  className="absolute inset-0 rounded-xs bg-canvas"
                  transition={{ duration: reduce ? 0 : 0.3, ease: 'easeOut' }}
                />
              )}
              <span className="relative">{tab.label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.ul
            key={active}
            initial={reduce ? false : 'hidden'}
            animate="visible"
            exit={{ opacity: 0 }}
            variants={staggerContainer(0.05)}
            className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2"
          >
            {tabs[active].docs.map((doc) => (
              <motion.li key={doc} variants={fadeUp} className="flex items-start gap-2">
                <CheckCircleIcon
                  size={18}
                  weight="light"
                  className="mt-0.5 shrink-0 text-accent-gold"
                  aria-hidden="true"
                />
                <span className="text-sm text-ink">{doc}</span>
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </section>
  );
}

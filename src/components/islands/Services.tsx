import { motion, useReducedMotion } from 'motion/react';
import {
  House,
  Heart,
  Buildings,
  Handshake,
  Coins,
  Stamp,
  Globe,
  Scroll,
} from '@phosphor-icons/react';
import { staggerContainer, fadeUp } from '../../lib/motion';

const services = [
  {
    icon: House,
    title: 'Akta Tanah & Properti',
    items: [
      'AJB (Akta Jual Beli)',
      'Akta Hibah',
      'Akta Tukar Menukar',
      'APHB (Akta Pembagian Hak Bersama)',
      'Pengikatan Jual Beli (PJB)',
      'PPAT services',
    ],
  },
  {
    icon: Heart,
    title: 'Akta Keluarga',
    items: [
      'Perjanjian Pranikah',
      'Perjanjian Pisah Harta',
      'Akta Waris',
      'Akta Pengakuan Anak',
      'Akta Adopsi',
    ],
  },
  {
    icon: Buildings,
    title: 'Akta Perusahaan & Bisnis',
    items: [
      'Pendirian PT / CV',
      'Perubahan Anggaran Dasar',
      'Akta RUPS',
      'Akta Penggabungan / Akuisisi',
      'Pembubaran PT/CV',
    ],
  },
  {
    icon: Handshake,
    title: 'Akta Perjanjian Bisnis',
    items: [
      'Perjanjian Kerja Sama',
      'Perjanjian Franchise / Waralaba',
      'Perjanjian Distributor / Agen',
      'MOU (Memorandum of Understanding)',
      'Perjanjian Sewa (jangka panjang)',
    ],
  },
  {
    icon: Coins,
    title: 'Akta Keuangan & Hutang',
    items: [
      'Akta Pengakuan Hutang',
      'Akta Kuasa',
      'Akta Pemberian Jaminan',
      'Akta Hipotek',
    ],
  },
  {
    icon: Stamp,
    title: 'Legalisasi & Waarmerking',
    items: [
      'Legalisasi tanda tangan',
      'Waarmerking dokumen',
      'Pencocokan fotocopy dengan asli',
    ],
  },
  {
    icon: Globe,
    title: 'Pengurusan & Pendaftaran',
    items: [
      'Pendaftaran AHU (Online)',
      'Pengurusan SK Menkumham',
      'Pendaftaran HGB & SHM ke BPN',
      'Roya & Balik Nama',
    ],
  },
  {
    icon: Scroll,
    title: 'Akta Wasiat & Hibah',
    items: [
      'Akta Wasiat',
      'Akta Hibah (semasa hidup)',
      'Pencabutan Wasiat',
      'Pembukaan Wasiat',
    ],
  },
];

export default function Services() {
  const reduce = useReducedMotion();

  return (
    <section id="layanan" className="bg-canvas py-section">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-display text-3xl text-ink md:text-4xl">
          Layanan Kami
        </h2>
        <p className="mt-4 max-w-[60ch] text-base text-body">
          Pembuatan akta otentik dan layanan kenotariatan lengkap.
        </p>

        <motion.div
          initial={reduce ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer(0.06)}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map(({ icon: Icon, title, items }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={reduce ? undefined : { y: -4 }}
              className="rounded-sm border border-hairline p-6 transition-colors hover:border-accent-gold"
            >
              <Icon size={28} weight="light" className="text-accent-gold" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg text-ink">{title}</h3>
              <ul className="mt-3 space-y-1.5">
                {items.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-body">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

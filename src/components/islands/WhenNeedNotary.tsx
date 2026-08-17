import { motion, useReducedMotion } from 'motion/react';
import { HouseIcon, HeartIcon, BuildingsIcon, GiftIcon, HandshakeIcon, ScrollIcon } from '@phosphor-icons/react';
import { staggerContainer, fadeUp } from '../../lib/motion';

const cases = [
  {
    icon: HouseIcon,
    title: 'Membeli / Menjual Properti',
    body: 'AJB harus dibuat di hadapan PPAT (notaris merangkap PPAT). Tanpa AJB, transfer hak milik tidak sah secara hukum.',
  },
  {
    icon: HeartIcon,
    title: 'Sebelum / Sesudah Pernikahan',
    body: 'Perjanjian pranikah atau pascanikah melindungi harta masing-masing pihak, dibuat di hadapan notaris sebelum pencatatan nikah.',
  },
  {
    icon: BuildingsIcon,
    title: 'Mendirikan PT / CV',
    body: 'Akta pendirian harus dibuat di hadapan notaris untuk mendapatkan pengesahan dari Menkumham (PT) atau pengadilan (CV lama).',
  },
  {
    icon: GiftIcon,
    title: 'Hibah ke Keluarga',
    body: 'Hibah tanah, properti, atau saham di atas nilai tertentu wajib dengan akta notaris untuk validitas pajak.',
  },
  {
    icon: HandshakeIcon,
    title: 'Kerja Sama Bisnis',
    body: 'Perjanjian dengan nilai signifikan (di atas Rp 1 miliar) sebaiknya akta notaris, memberikan kepastian hukum dan alat bukti otentik.',
  },
  {
    icon: ScrollIcon,
    title: 'Wasiat / Pembagian Waris',
    body: 'Wasiat lebih aman dibuat dalam akta notaris. Pembagian waris berdasarkan akta meminimalisir konflik keluarga.',
  },
];

export default function WhenNeedNotary() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-canvas py-section">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-display text-3xl text-ink md:text-4xl">
          Kapan Anda Butuh Notaris?
        </h2>
        <p className="mt-4 max-w-[60ch] text-base text-body">
          Tidak semua urusan butuh notaris. Tapi untuk hal-hal berikut, akta
          notaris memberi kekuatan hukum yang berbeda.
        </p>

        <motion.div
          initial={reduce ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer(0.08)}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cases.map(({ icon: Icon, title, body }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="rounded-sm bg-accent-gold-soft/40 p-6 transition-colors hover:bg-accent-gold-soft"
            >
              <Icon size={28} weight="light" className="text-primary" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

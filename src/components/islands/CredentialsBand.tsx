import { motion, useReducedMotion } from 'motion/react';
import { SealCheck, Buildings, Clock, Files } from '@phosphor-icons/react';
import { staggerContainer, fadeUp } from '../../lib/motion';

const badges = [
  { icon: SealCheck, label: 'Diangkat Menkumham RI' },
  { icon: Buildings, label: 'Anggota INI (Ikatan Notaris Indonesia)' },
  { icon: Clock, label: '12+ Tahun Pengalaman' },
  { icon: Files, label: '5.000+ Akta Terbit' },
];

export default function CredentialsBand() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-canvas-dark py-16">
      <motion.div
        initial={reduce ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={staggerContainer(0.08)}
        className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 md:grid-cols-4"
      >
        {badges.map(({ icon: Icon, label }) => (
          <motion.div
            key={label}
            variants={fadeUp}
            className="flex flex-col items-center gap-3 rounded-sm border border-surface-dark-soft px-4 py-6 text-center"
          >
            <Icon size={28} weight="light" color="#B08D3E" aria-hidden="true" />
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-on-dark">
              {label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

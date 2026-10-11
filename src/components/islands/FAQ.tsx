import { useState } from 'react';
import { PlusIcon, MinusIcon } from '@phosphor-icons/react';

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
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-space bg-canvas" aria-labelledby="faq-heading">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div>
          <h2 id="faq-heading" className="section-heading max-w-[14ch]">Pertanyaan yang sering diajukan.</h2>
          <p className="section-lead mt-6 max-w-[42ch]">
            Memahami kewenangan, waktu, dan kehadiran para pihak sebelum mengurus akta.
            Temukan jawaban awal di sini, lalu diskusikan kebutuhan spesifik Anda saat konsultasi.
          </p>
          <a href="#kontak" className="text-link mt-8 inline-flex min-h-12 items-center text-sm font-medium text-primary">
            Sampaikan pertanyaan Anda
          </a>
        </div>

        <div className="divide-y divide-hairline border-y border-hairline">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            const Icon = isOpen ? MinusIcon : PlusIcon;
            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    id={`faq-question-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    className="flex min-h-16 w-full items-center justify-between gap-6 py-6 text-left text-primary hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  >
                    <span className="text-base font-medium leading-7 md:text-lg">{item.q}</span>
                    <Icon size={20} weight="light" className="shrink-0 text-accent-gold" aria-hidden="true" />
                  </button>
                </h3>
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  hidden={!isOpen}
                >
                  <p className="max-w-[65ch] pb-7 pr-8 text-base leading-8 text-body">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

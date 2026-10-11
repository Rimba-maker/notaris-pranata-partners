import { useRef, useState, type KeyboardEvent } from 'react';
import { CheckIcon, ArrowRightIcon } from '@phosphor-icons/react';

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
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  function handleTabKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        next = (index + 1) % tabs.length;
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        next = (index - 1 + tabs.length) % tabs.length;
        break;
      case 'Home':
        next = 0;
        break;
      case 'End':
        next = tabs.length - 1;
        break;
      default:
        return;
    }
    event.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <section id="dokumen" className="section-space bg-canvas" aria-labelledby="documents-heading">
      <div className="section-shell">
        <div className="section-intro">
          <h2 id="documents-heading" className="section-heading max-w-[15ch]">
            Sebelum Anda membuat janji.
          </h2>
          <p className="section-lead max-w-[52ch]">
            Mulai dari <a className="text-link" href="#layanan">layanan yang Anda perlukan</a>,
            pelajari <a className="text-link" href="#biaya">referensi biaya indikatif</a>,
            lalu siapkan dokumen sesuai checklist berikut agar konsultasi lebih terarah.
          </p>
        </div>

        <div className="mt-12 grid gap-8 border-t border-hairline pt-8 lg:grid-cols-[280px_1fr] lg:gap-16">
          <div
            role="tablist"
            aria-label="Checklist dokumen menurut layanan"
            className="flex flex-wrap content-start gap-2 lg:flex-col lg:gap-0"
          >
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                type="button"
                id={`documents-tab-${i}`}
                role="tab"
                aria-selected={active === i}
                aria-controls={`documents-panel-${i}`}
                tabIndex={active === i ? 0 : -1}
                ref={(element) => { tabRefs.current[i] = element; }}
                onKeyDown={(event) => handleTabKey(event, i)}
                onClick={() => setActive(i)}
                className={`flex min-h-12 items-center justify-between gap-4 border-b px-3 py-4 text-left text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary lg:px-0 lg:text-base ${
                  active === i
                    ? 'border-accent-gold text-primary'
                    : 'border-hairline text-body hover:text-primary'
                }`}
              >
                {tab.label}
                <ArrowRightIcon size={18} weight="light" aria-hidden="true" className={active === i ? 'text-accent-gold' : 'invisible'} />
              </button>
            ))}
          </div>

          <div>
            {tabs.map((tab, i) => (
              <div
                key={tab.label}
                id={`documents-panel-${i}`}
                role="tabpanel"
                aria-labelledby={`documents-tab-${i}`}
                hidden={active !== i}
                tabIndex={0}
                className="focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-primary"
              >
                <h3 className="font-display text-3xl text-primary">{tab.label}</h3>
                <ul className="mt-6 grid gap-x-10 gap-y-5 sm:grid-cols-2">
                  {tab.docs.map((doc) => (
                    <li key={doc} className="flex items-start gap-3 text-sm leading-7 text-ink">
                      <CheckIcon size={18} weight="light" className="mt-1 shrink-0 text-accent-gold" aria-hidden="true" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <p className="mt-8 border-t border-hairline pt-5 text-sm leading-7 text-body">
              Checklist ini merupakan panduan persiapan. Kebutuhan dokumen dapat disesuaikan dengan kondisi para pihak saat konsultasi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

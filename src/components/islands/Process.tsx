import { photos } from '../../lib/photos';

const steps = [
  {
    title: 'Konsultasi Awal',
    body: 'Booking janji temu, diskusi kebutuhan (gratis 30 menit).',
  },
  {
    title: 'Persiapan Dokumen',
    body: 'Kami berikan checklist dokumen yang dibutuhkan.',
  },
  {
    title: 'Tanda Tangan Akta',
    body: 'Hadir di kantor untuk pembacaan dan penandatanganan akta.',
  },
  {
    title: 'Penyerahan & Pendaftaran',
    body: 'Salinan akta diberikan, kami urus pendaftaran jika diperlukan.',
  },
];

export default function Process() {
  return (
    <section id="tata-cara" className="section-space bg-canvas" aria-labelledby="process-heading">
      <div className="section-shell">
        <div className="section-intro">
          <h2 id="process-heading" className="section-heading max-w-[14ch]">Tata Cara Pembuatan Akta</h2>
          <p className="section-lead max-w-[46ch]">
            Dari percakapan pertama hingga penyerahan salinan akta,
            kenali setiap tahap dan persiapkan dokumen Anda sebelum datang.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <figure>
            <img
              src={photos.consultation}
              srcSet={`${photos.consultation.replace('.webp', '-small.webp')} 640w, ${photos.consultation} 1400w`}
              sizes="(max-width: 1024px) calc(100vw - 40px), 46vw"
              alt="Ilustrasi stok konsultasi profesional dan pembahasan dokumen; bukan foto konsultasi di kantor ini."
              width={1400}
              height={934}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
            />
            <figcaption className="mt-4 text-xs leading-relaxed text-body">
              Percakapan dan persiapan mendahului penandatanganan. Foto ilustrasi stok.
            </figcaption>
          </figure>

          <div>
            <ol className="divide-y divide-hairline border-y border-hairline">
              {steps.map(({ title, body }, index) => (
                <li key={title} className="grid grid-cols-[44px_minmax(0,1fr)] gap-5 py-7 sm:grid-cols-[60px_minmax(0,1fr)] sm:gap-6">
                  <span aria-hidden="true" className="font-display text-[38px] leading-none text-accent-gold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-[27px] leading-tight text-primary">{title}</h3>
                    <p className="mt-3 text-sm leading-[1.85] text-body">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
              <a href="#kontak" className="btn btn-primary">Buat janji konsultasi</a>
              <a href="#dokumen" className="text-link inline-flex min-h-11 items-center text-sm font-medium text-primary">
                Lihat checklist dokumen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { photos } from '../../lib/photos';

const services = [
  {
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
    title: 'Akta Keuangan & Hutang',
    items: [
      'Akta Pengakuan Hutang',
      'Akta Kuasa',
      'Akta Pemberian Jaminan',
      'Akta Hipotek',
    ],
  },
  {
    title: 'Legalisasi & Waarmerking',
    items: [
      'Legalisasi tanda tangan',
      'Waarmerking dokumen',
      'Pencocokan fotocopy dengan asli',
    ],
  },
  {
    title: 'Pengurusan & Pendaftaran',
    items: [
      'Pendaftaran AHU (Online)',
      'Pengurusan SK Menkumham',
      'Pendaftaran HGB & SHM ke BPN',
      'Roya & Balik Nama',
    ],
  },
  {
    title: 'Akta Wasiat & Hibah',
    items: [
      'Akta Wasiat',
      'Akta Hibah (semasa hidup)',
      'Pencabutan Wasiat',
      'Pembukaan Wasiat',
    ],
  },
];

const servicePhotos = [
  { src: photos.property, height: 2101, alt: 'Ilustrasi stok bangunan hunian untuk kebutuhan akta properti.' },
  { src: photos.rings, height: 931, alt: 'Ilustrasi stok cincin pernikahan untuk perencanaan hukum keluarga.' },
  { src: photos.business, height: 943, alt: 'Ilustrasi stok kegiatan bisnis untuk kebutuhan akta perusahaan.' },
  { src: photos.consultation, height: 934, alt: 'Ilustrasi stok diskusi profesional untuk perjanjian kerja sama.' },
  { src: photos.review, height: 935, alt: 'Ilustrasi stok peninjauan dokumen untuk perjanjian keuangan.' },
  { src: photos.signing, height: 934, alt: 'Ilustrasi stok penandatanganan dokumen, bukan proses legalisasi di kantor ini.' },
  { src: photos.papers, height: 935, alt: 'Ilustrasi stok berkas untuk kebutuhan pengurusan dan pendaftaran.' },
  { src: photos.detail, height: 934, alt: 'Ilustrasi stok detail dokumen untuk perencanaan wasiat dan hibah.' },
];

export default function Services() {
  return (
    <section id="layanan" className="section-space bg-canvas" aria-labelledby="services-heading">
      <div className="section-shell">
        <div className="section-intro">
          <h2 id="services-heading" className="section-heading">Layanan Kami</h2>
          <p className="section-lead max-w-[48ch]">
            Pembuatan akta otentik dan layanan kenotariatan lengkap.
            Temukan layanan yang sesuai dengan kebutuhan pribadi, keluarga, maupun bisnis Anda.
          </p>
        </div>

        <div className="mt-12 grid gap-x-12 gap-y-14 md:grid-cols-2">
          {services.slice(0, 2).map(({ title, items }, index) => (
            <article key={title}>
              <div className="overflow-hidden">
                <img
                  src={servicePhotos[index].src}
                  srcSet={`${servicePhotos[index].src.replace('.webp', '-small.webp')} 640w, ${servicePhotos[index].src} 1400w`}
                  sizes="(max-width: 768px) calc(100vw - 40px), 46vw"
                  alt={servicePhotos[index].alt}
                  width={1400}
                  height={servicePhotos[index].height}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
              <h3 className="mt-7 font-display text-[30px] leading-tight text-primary md:text-[36px]">
                {title}
              </h3>
              <ul className="mt-5 grid gap-x-6 gap-y-2 text-sm leading-relaxed text-body sm:grid-cols-2">
                {items.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <a href="#kontak" data-service={title} className="text-link mt-6 inline-flex min-h-11 items-center text-sm font-medium text-primary">
                Konsultasikan {title.toLowerCase()}
              </a>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-x-12 md:grid-cols-2">
          {services.slice(2).map(({ title, items }, index) => (
            <article key={title} className="grid grid-cols-[80px_minmax(0,1fr)] gap-5 border-t border-hairline py-8 sm:grid-cols-[112px_minmax(0,1fr)] sm:gap-6">
              <img
                src={servicePhotos[index + 2].src}
                srcSet={`${servicePhotos[index + 2].src.replace('.webp', '-small.webp')} 640w, ${servicePhotos[index + 2].src} 1400w`}
                sizes="112px"
                alt={servicePhotos[index + 2].alt}
                width={1400}
                height={servicePhotos[index + 2].height}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
              <div>
                <h3 className="font-display text-[25px] leading-tight text-primary">{title}</h3>
                <ul className="mt-4 space-y-1.5 text-sm leading-relaxed text-body">
                  {items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <a href="#kontak" data-service={title} className="text-link mt-4 inline-flex min-h-11 items-center text-sm font-medium text-primary" aria-label={`Konsultasikan ${title}`}>
                  Konsultasikan layanan
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs leading-relaxed text-body">Fotografi merupakan ilustrasi stok, bukan dokumentasi layanan atau klien kantor.</p>
      </div>
    </section>
  );
}

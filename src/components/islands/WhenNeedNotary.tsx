import { photos } from '../../lib/photos';

const cases = [
  {
    title: 'Membeli / Menjual Properti',
    body: 'AJB harus dibuat di hadapan PPAT (notaris merangkap PPAT). Tanpa AJB, transfer hak milik tidak sah secara hukum.',
  },
  {
    title: 'Sebelum / Sesudah Pernikahan',
    body: 'Perjanjian pranikah atau pascanikah melindungi harta masing-masing pihak, dibuat di hadapan notaris sebelum pencatatan nikah.',
  },
  {
    title: 'Mendirikan PT / CV',
    body: 'Akta pendirian harus dibuat di hadapan notaris untuk mendapatkan pengesahan dari Menkumham (PT) atau pengadilan (CV lama).',
  },
  {
    title: 'Hibah ke Keluarga',
    body: 'Hibah tanah, properti, atau saham di atas nilai tertentu wajib dengan akta notaris untuk validitas pajak.',
  },
  {
    title: 'Kerja Sama Bisnis',
    body: 'Perjanjian dengan nilai signifikan (di atas Rp 1 miliar) sebaiknya akta notaris, memberikan kepastian hukum dan alat bukti otentik.',
  },
  {
    title: 'Wasiat / Pembagian Waris',
    body: 'Wasiat lebih aman dibuat dalam akta notaris. Pembagian waris berdasarkan akta meminimalisir konflik keluarga.',
  },
];

const moments = [
  {
    photo: photos.property,
    height: 2101,
    alt: 'Ilustrasi stok hunian untuk jual beli properti dan hibah keluarga.',
    cases: [cases[0], cases[3]],
  },
  {
    photo: photos.rings,
    height: 931,
    alt: 'Ilustrasi stok cincin pernikahan untuk perencanaan hukum keluarga.',
    cases: [cases[1], cases[5]],
  },
  {
    photo: photos.business,
    height: 943,
    alt: 'Ilustrasi stok kegiatan profesional untuk pendirian perusahaan dan kerja sama bisnis.',
    cases: [cases[2], cases[4]],
  },
];

export default function WhenNeedNotary() {
  return (
    <section id="kebutuhan" className="section-space bg-primary text-white" aria-labelledby="needs-heading">
      <div className="section-shell">
        <div className="section-intro">
          <h2 id="needs-heading" className="section-heading !text-white">Kapan Anda Butuh Notaris?</h2>
          <p className="section-lead max-w-[48ch] !text-white/75">
            Tidak semua urusan butuh notaris. Tapi untuk hal-hal berikut, akta
            notaris memberi kekuatan hukum yang berbeda.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-3 lg:gap-9">
          {moments.map((moment) => (
            <div key={moment.photo}>
              <img
                src={moment.photo}
                srcSet={`${moment.photo.replace('.webp', '-small.webp')} 640w, ${moment.photo} 1400w`}
                sizes="(max-width: 1024px) calc(100vw - 40px), 30vw"
                alt={moment.alt}
                width={1400}
                height={moment.height}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="mt-8 space-y-7">
                {moment.cases.map(({ title, body }) => (
                  <article key={title} className="border-t border-white/20 pt-6">
                    <h3 className="font-display text-[27px] leading-tight text-white">{title}</h3>
                    <p className="mt-3 text-sm leading-[1.85] text-white/75">{body}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-white/20 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[58ch] text-sm leading-relaxed text-white/75">
            Belum yakin layanan mana yang diperlukan? Sampaikan situasi Anda saat konsultasi awal.
          </p>
          <a href="#kontak" className="text-link inline-flex min-h-11 shrink-0 items-center text-sm font-medium text-white">
            Diskusikan kebutuhan Anda
          </a>
        </div>
        <p className="mt-6 text-xs leading-relaxed text-white/65">Foto merupakan ilustrasi stok; informasi ini bersifat umum, bukan pendapat hukum untuk kasus tertentu.</p>
      </div>
    </section>
  );
}

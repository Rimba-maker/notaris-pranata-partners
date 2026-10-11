const badges = [
  'Diangkat Menkumham RI',
  'Anggota INI (Ikatan Notaris Indonesia)',
  '12+ Tahun Pengalaman',
  '5.000+ Akta Terbit',
];

export default function CredentialsBand() {
  return (
    <section className="border-y border-hairline bg-canvas py-8" aria-label="Contoh kredensial kantor untuk demonstrasi">
      <div className="section-shell">
        <ul className="grid grid-cols-1 divide-y divide-hairline sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
          {badges.map((label, i) => (
            <li
              key={label}
              className={`flex min-h-20 items-center py-5 text-sm font-medium leading-6 text-primary sm:px-6 lg:py-2 ${
                i > 0 ? 'lg:border-l lg:border-hairline' : 'sm:pl-0'
              } ${i % 2 === 1 ? 'sm:border-l sm:border-hairline' : ''}`}
            >
              {label}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs leading-6 text-body">
          Kredensial ilustratif untuk situs demo; pengangkatan, keanggotaan, pengalaman, dan jumlah akta tidak terverifikasi.
        </p>
      </div>
    </section>
  );
}

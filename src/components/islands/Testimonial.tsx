import { useEffect, useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, PauseIcon, PlayIcon } from '@phosphor-icons/react';
import { photos } from '../../lib/photos';

const testimonials = [
  {
    quote:
      'Proses AJB rumah pertama saya lancar di Pranata & Partners. Notaris sabar menjelaskan setiap pasal, tidak buru-buru minta tanda tangan.',
    name: 'Pak Hendra & Ibu Rinda',
    role: 'Property buyer',
  },
  {
    quote:
      'Pendirian PT saya selesai 14 hari, dari konsultasi sampai SK Menkumham. Harga transparan, ada rincian PNBP dan jasa.',
    name: 'Andini',
    role: 'Founder Startup',
  },
  {
    quote:
      'Sebagai pasangan yang menikah beda agama, kami butuh perjanjian pranikah yang spesifik. Pak Pranata bantu drafting dengan detail.',
    name: 'Lisa & Daniel',
    role: 'Klien perjanjian pranikah',
  },
  {
    quote:
      'Akta waris keluarga besar dengan 8 ahli waris, tim notaris memfasilitasi dengan profesional. Tidak ada konflik.',
    name: 'Keluarga Hartono',
    role: 'Klien akta waris',
  },
];

export default function Testimonial() {
  const [reduce, setReduce] = useState<boolean | null>(null);
  const [index, setIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focusWithin, setFocusWithin] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncPreference = () => setReduce(preference.matches);
    syncPreference();
    preference.addEventListener('change', syncPreference);
    return () => preference.removeEventListener('change', syncPreference);
  }, []);

  const autoplay = reduce === false && !userPaused && !hovered && !focusWithin;

  useEffect(() => {
    if (!autoplay) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 8000);
    return () => window.clearInterval(timer);
  }, [autoplay]);

  function step(direction: number) {
    setIndex((current) => (current + direction + testimonials.length) % testimonials.length);
  }

  return (
    <section id="testimoni" className="section-space bg-canvas" aria-labelledby="testimonials-heading">
      <div className="section-shell">
        <div className="section-intro">
          <h2 id="testimonials-heading" className="section-heading max-w-[17ch]">Gambaran pengalaman pendampingan.</h2>
          <p className="section-lead max-w-[48ch]">
            Empat contoh testimoni untuk demonstrasi situs. Nama, pengalaman, dan kutipan berikut
            bersifat ilustratif, bukan ulasan dari klien terverifikasi.
          </p>
        </div>

        <div
          role="region"
          aria-roledescription="karusel"
          aria-label="Contoh testimoni ilustratif"
          className="mt-12 border-t border-hairline pt-10"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocusCapture={() => setFocusWithin(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setFocusWithin(false);
          }}
        >
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_250px] lg:gap-20">
            <div aria-live={autoplay ? 'off' : 'polite'} aria-atomic="true">
              {testimonials.map((testimonial, i) => (
                <figure
                  key={testimonial.name}
                  id={`testimonial-slide-${i}`}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} dari ${testimonials.length}`}
                  hidden={index !== i}
                  className="m-0"
                >
                  <blockquote className="min-h-[250px] max-w-[38ch] font-display text-[clamp(1.75rem,3vw,2.6rem)] leading-[1.4] text-primary md:min-h-[230px]">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="mt-8">
                    <p className="text-base font-medium text-primary">{testimonial.name}</p>
                    <p className="mt-1 text-sm leading-6 text-body">{testimonial.role} · Contoh ilustratif</p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <figure className="m-0 max-w-[250px]">
              <img
                src={photos.consultation.replace('.webp', '-small.webp')}
                width={640}
                height={427}
                loading="lazy"
                decoding="async"
                alt="Ilustrasi suasana diskusi dan pendampingan dokumen, bukan klien kantor."
                className="aspect-[5/4] w-full object-cover lg:aspect-[4/5]"
              />
              <figcaption className="mt-3 text-xs leading-5 text-body">
                Foto ilustrasi, bukan dokumentasi klien.
              </figcaption>
            </figure>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-hairline pt-6">
            <div className="flex flex-wrap items-center gap-2">
              <button type="button" onClick={() => step(-1)} aria-label="Contoh testimoni sebelumnya" className="flex size-12 items-center justify-center border border-hairline text-primary hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                <ArrowLeftIcon size={20} weight="light" aria-hidden="true" />
              </button>
              {testimonials.map((testimonial, i) => (
                <button
                  key={testimonial.name}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Tampilkan contoh testimoni ${i + 1}: ${testimonial.name}`}
                  aria-controls={`testimonial-slide-${i}`}
                  aria-current={i === index ? 'true' : undefined}
                  className={`flex size-12 items-center justify-center border text-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${
                    i === index ? 'border-primary bg-primary text-white' : 'border-transparent text-body hover:border-hairline hover:text-primary'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button type="button" onClick={() => step(1)} aria-label="Contoh testimoni berikutnya" className="flex size-12 items-center justify-center border border-hairline text-primary hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                <ArrowRightIcon size={20} weight="light" aria-hidden="true" />
              </button>
            </div>
            <button
              type="button"
              onClick={() => setUserPaused((paused) => !paused)}
              disabled={reduce === true}
              aria-pressed={userPaused || reduce === true}
              className="inline-flex min-h-12 items-center gap-3 text-sm text-primary disabled:cursor-default disabled:text-body focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              {userPaused || reduce ? <PlayIcon size={18} weight="light" aria-hidden="true" /> : <PauseIcon size={18} weight="light" aria-hidden="true" />}
              {reduce ? 'Otomatis nonaktif: preferensi gerak' : userPaused ? 'Lanjutkan pergantian otomatis' : 'Jeda pergantian otomatis'}
            </button>
          </div>
          <p className="mt-4 text-xs leading-6 text-body">
            {reduce ? 'Gunakan kontrol untuk membaca setiap contoh.' : 'Berganti setiap 8 detik; berhenti sementara saat kursor atau fokus berada di area ini.'}
          </p>
        </div>
      </div>
    </section>
  );
}

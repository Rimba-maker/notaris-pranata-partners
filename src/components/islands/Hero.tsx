import { ArrowRightIcon } from '@phosphor-icons/react';
import { photos } from '../../lib/photos';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="section-shell hero-grid">
        <div className="hero-copy hero-entrance">
          <h1>Aman secara hukum.<span>Tenang secara pikiran.</span></h1>
          <p>
            Setiap tanda tangan, setiap akta — kami pastikan sah secara hukum.
            Pendampingan kenotariatan untuk pribadi, keluarga, dan badan usaha
            di Jakarta sejak 2012.
          </p>
          <div className="hero-actions">
            <a href="#kontak" className="btn btn-primary">
              Konsultasi Gratis <ArrowRightIcon size={18} weight="light" aria-hidden="true" />
            </a>
            <a href="#layanan" className="text-link">Jelajahi layanan <ArrowRightIcon size={16} weight="light" aria-hidden="true" /></a>
          </div>
          <div className="hero-details">
            <p><strong>Notaris &amp; PPAT</strong>Jakarta Selatan &amp; sekitarnya</p>
            <p><strong>Konsultasi awal 30 menit</strong>Dengan janji temu sebelumnya</p>
          </div>
        </div>
        <figure className="hero-photo hero-entrance">
          <img
            src={photos.signing}
            srcSet={`${photos.signing.replace('.webp', '-small.webp')} 640w, ${photos.signing} 1400w`}
            sizes="(max-width: 640px) calc(100vw - 64px), (max-width: 900px) 45vw, 600px"
            alt="Ilustrasi dua pihak menandatangani perjanjian di meja kayu"
            className="hero-photo-main" width={1400} height={934} fetchPriority="high"
          />
          <img src={photos.detail.replace('.webp', '-small.webp')} alt="Ilustrasi detail pena dan dokumen perjanjian" className="hero-photo-detail" width={640} height={427} />
          <figcaption className="photo-caption">Ketelitian dalam setiap tanda tangan. Foto ilustrasi · Pexels.</figcaption>
        </figure>
      </div>
    </section>
  );
}

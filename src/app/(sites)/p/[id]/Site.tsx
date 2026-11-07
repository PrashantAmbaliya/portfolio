import type { SiteSpec } from '@/lib/sites';
import { Phone, MapPin, Clock, Star, ArrowRight, Navigation, CheckCircle2, Quote } from 'lucide-react';

function Stars({ n }: { n: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${n} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} size={14} className={i <= Math.round(n) ? 'fill-current' : 'opacity-25'} />
      ))}
    </span>
  );
}

export default function Site({ s }: { s: SiteSpec }) {
  const t = s.theme;
  const style = {
    '--c-primary': t.primary,
    '--c-accent': t.accent,
    '--c-bg': t.bg,
    '--c-ink': t.ink,
    '--c-soft': t.soft,
    '--c-on': t.onPrimary,
  } as React.CSSProperties;
  const hero = s.photos[0];
  const gallery = s.photos.slice(1, 7);
  const mapSrc = s.lat != null ? `https://www.google.com/maps?q=${s.lat},${s.lng}&z=15&output=embed` : null;

  return (
    <div style={style} className="min-h-screen bg-[var(--c-bg)] text-[var(--c-ink)]">
      {/* preview ribbon */}
      <div className="bg-[var(--c-ink)] text-white/90 text-xs sm:text-sm px-4 py-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center">
        <span>Website preview prepared for <b>{s.name}</b> by {s.builder.name}.</span>
        <a href={s.builder.url} className="underline underline-offset-2 opacity-80 hover:opacity-100">Want it live? Let&apos;s talk</a>
      </div>

      {/* nav */}
      <header className="sticky top-0 z-30 backdrop-blur bg-[var(--c-bg)]/85 border-b border-black/5">
        <div className="mx-auto max-w-6xl px-5 h-16 flex items-center gap-6">
          <a href="#top" className="font-display text-xl font-semibold tracking-tight truncate">{s.name}</a>
          <nav className="ml-auto hidden md:flex items-center gap-6 text-sm font-medium opacity-80">
            <a href="#services" className="hover:opacity-100">Services</a>
            <a href="#about" className="hover:opacity-100">About</a>
            {s.reviews.length > 0 && <a href="#reviews" className="hover:opacity-100">Reviews</a>}
            <a href="#visit" className="hover:opacity-100">Visit</a>
          </nav>
          {s.phoneHref && (
            <a href={s.phoneHref} className="ml-auto md:ml-0 inline-flex items-center gap-2 rounded-full bg-[var(--c-primary)] text-[var(--c-on)] px-4 py-2 text-sm font-semibold shadow-sm hover:brightness-110">
              <Phone size={15} /> <span className="hidden sm:inline">{s.phone}</span><span className="sm:hidden">Call</span>
            </a>
          )}
        </div>
      </header>

      {/* hero */}
      <section id="top" className="relative overflow-hidden">
        {hero && (
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={hero} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />
          </div>
        )}
        <div className={`relative mx-auto max-w-6xl px-5 ${hero ? 'py-28 sm:py-40 text-white' : 'py-24 sm:py-32'}`}>
          <div className="max-w-2xl">
            {s.rating != null && (
              <div className="fade-up inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-sm ring-1 ring-white/30">
                <Stars n={s.rating} /> <span className="font-semibold">{s.rating.toFixed(1)}</span>
                <span className="opacity-80">· {s.reviewCount} Google reviews</span>
              </div>
            )}
            <h1 className="fade-up-2 mt-5 text-4xl sm:text-6xl font-semibold leading-[1.05]">{s.headline}</h1>
            <p className="fade-up-3 mt-5 text-lg sm:text-xl opacity-90 leading-relaxed">{s.intro}</p>
            <div className="fade-up-3 mt-8 flex flex-wrap gap-3">
              {s.phoneHref && (
                <a href={s.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-[var(--c-accent)] text-white px-6 py-3 font-semibold shadow-lg hover:brightness-110">
                  <Phone size={16} /> Call {s.phone}
                </a>
              )}
              {s.mapsUrl && (
                <a href={s.mapsUrl} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold ring-1 ${hero ? 'ring-white/50 text-white hover:bg-white/10' : 'ring-black/15 hover:bg-black/5'}`}>
                  <Navigation size={16} /> Get directions
                </a>
              )}
            </div>
            <div className="fade-up-3 mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm opacity-85">
              <span className="inline-flex items-center gap-1.5"><MapPin size={14} />{s.address}</span>
              {s.openNow != null && (
                <span className="inline-flex items-center gap-1.5"><Clock size={14} />{s.openNow ? 'Open now' : 'Closed now'}</span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* services */}
      <section id="services" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <div className="max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-wider text-[var(--c-accent)]">What we do</div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold">{s.tagline}</h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {s.services.map((sv, i) => (
            <div key={i} className="group rounded-2xl bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,.04),0_8px_24px_-12px_rgba(0,0,0,.18)] ring-1 ring-black/5 transition hover:-translate-y-0.5">
              <div className="h-10 w-10 rounded-xl bg-[var(--c-soft)] text-[var(--c-primary)] grid place-items-center font-display text-lg font-semibold">{i + 1}</div>
              <h3 className="mt-4 text-lg font-semibold">{sv.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed opacity-75">{sv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* about + why us */}
      <section id="about" className="bg-[var(--c-soft)]/60">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="text-sm font-semibold uppercase tracking-wider text-[var(--c-accent)]">About {s.name}</div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold">{s.type} in {s.town}, trusted by the neighborhood</h2>
            {s.about.map((p, i) => (
              <p key={i} className="mt-5 text-base sm:text-lg leading-relaxed opacity-80">{p}</p>
            ))}
          </div>
          <div className="lg:col-span-2 space-y-4">
            {s.whyUs.map((w, i) => (
              <div key={i} className="flex gap-3 rounded-2xl bg-white/80 p-5 ring-1 ring-black/5">
                <CheckCircle2 className="shrink-0 text-[var(--c-primary)]" size={22} />
                <div>
                  <div className="font-semibold">{w.title}</div>
                  <div className="text-sm opacity-75 mt-0.5">{w.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* gallery */}
      {gallery.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <div className="text-sm font-semibold uppercase tracking-wider text-[var(--c-accent)]">Gallery</div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold">A look inside</h2>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3">
            {gallery.map((p, i) => (
              <div key={i} className={`overflow-hidden rounded-2xl ${i === 0 ? 'col-span-2 row-span-2' : ''}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p} alt="" className="h-full w-full object-cover aspect-[4/3] transition duration-500 hover:scale-105" loading="lazy" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* reviews */}
      {s.reviews.length > 0 && (
        <section id="reviews" className="bg-[var(--c-ink)] text-white">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <div className="text-sm font-semibold uppercase tracking-wider text-[var(--c-accent)]">Reviews</div>
                <h2 className="mt-2 text-3xl sm:text-4xl font-semibold">What customers say</h2>
              </div>
              {s.rating != null && (
                <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-5 py-3">
                  <div className="font-display text-4xl font-semibold">{s.rating.toFixed(1)}</div>
                  <div className="text-sm"><Stars n={s.rating} /><div className="opacity-70">{s.reviewCount} reviews on Google</div></div>
                </div>
              )}
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {s.reviews.map((r, i) => (
                <figure key={i} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                  <Quote size={20} className="text-[var(--c-accent)]" />
                  <blockquote className="mt-3 text-sm leading-relaxed opacity-90">{r.text}</blockquote>
                  <figcaption className="mt-4 flex items-center justify-between text-xs opacity-70">
                    <span className="font-semibold">{r.author}</span>
                    <span className="inline-flex items-center gap-2"><Stars n={r.rating} />{r.when}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* visit */}
      <section id="visit" className="mx-auto max-w-6xl px-5 py-20 sm:py-24 grid gap-10 lg:grid-cols-2 items-start">
        <div>
          <div className="text-sm font-semibold uppercase tracking-wider text-[var(--c-accent)]">Visit us</div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold">Come see us in {s.town}</h2>
          <div className="mt-8 space-y-5">
            <div className="flex gap-4">
              <div className="h-11 w-11 shrink-0 rounded-xl bg-[var(--c-soft)] text-[var(--c-primary)] grid place-items-center"><MapPin size={20} /></div>
              <div><div className="font-semibold">Address</div><div className="opacity-75">{s.address}</div>
                {s.mapsUrl && <a href={s.mapsUrl} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-[var(--c-primary)]">Open in Google Maps <ArrowRight size={14} /></a>}
              </div>
            </div>
            {s.phone && (
              <div className="flex gap-4">
                <div className="h-11 w-11 shrink-0 rounded-xl bg-[var(--c-soft)] text-[var(--c-primary)] grid place-items-center"><Phone size={20} /></div>
                <div><div className="font-semibold">Phone</div><a href={s.phoneHref ?? '#'} className="opacity-75 hover:opacity-100">{s.phone}</a></div>
              </div>
            )}
            {s.hours && s.hours.length > 0 && (
              <div className="flex gap-4">
                <div className="h-11 w-11 shrink-0 rounded-xl bg-[var(--c-soft)] text-[var(--c-primary)] grid place-items-center"><Clock size={20} /></div>
                <div className="flex-1">
                  <div className="font-semibold">Hours</div>
                  <dl className="mt-1 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 text-sm opacity-80">
                    {s.hours.map((h, i) => {
                      const [d, ...rest] = h.split(': ');
                      return <div key={i} className="contents"><dt className="font-medium">{d}</dt><dd>{rest.join(': ')}</dd></div>;
                    })}
                  </dl>
                </div>
              </div>
            )}
          </div>
        </div>
        {mapSrc && (
          <div className="overflow-hidden rounded-3xl ring-1 ring-black/10 shadow-xl aspect-[4/3] lg:aspect-auto lg:h-full min-h-[320px]">
            <iframe src={mapSrc} className="h-full w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Map" />
          </div>
        )}
      </section>

      {/* cta */}
      <section className="bg-[var(--c-primary)] text-[var(--c-on)]">
        <div className="mx-auto max-w-6xl px-5 py-16 flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold">Ready when you are.</h2>
            <p className="mt-1 opacity-85">Call {s.name} today{s.phone ? ` at ${s.phone}` : ''}.</p>
          </div>
          {s.phoneHref && (
            <a href={s.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-white text-[var(--c-primary)] px-7 py-3.5 font-semibold shadow-lg hover:brightness-95">
              <Phone size={16} /> Call now
            </a>
          )}
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-5 py-10 text-sm opacity-70 flex flex-wrap justify-between gap-4">
        <div>© {new Date().getFullYear()} {s.name} · {s.address}</div>
        <div>Website preview by <a href={s.builder.url} className="underline underline-offset-2">{s.builder.name}</a></div>
      </footer>
    </div>
  );
}

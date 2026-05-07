import { Link } from "@tanstack/react-router";

interface Props {
  number: string;
  title: string;
  subtitle?: string;
  description: string[];
  images: { src: string; caption: string; full?: boolean; wide?: boolean }[];
  prev?: { to: string; label: string };
  next?: { to: string; label: string };
}

export function ProjectPage({ number, title, subtitle, description, images, prev, next }: Props) {
  return (
    <main className="mx-auto max-w-[1400px] px-6 py-16">
      <div className="grid gap-10 border-b border-foreground pb-10 md:grid-cols-[120px_1fr]">
        <div className="text-[11px] uppercase tracking-[0.25em] text-accent-blue">Project {number}</div>
        <div>
          <h1 className="text-3xl leading-tight md:text-5xl">{title}</h1>
          {subtitle && <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-foreground/60">{subtitle}</p>}
        </div>
      </div>

      {images[0] && (
        <figure className="mt-12">
          <div className="overflow-hidden bg-white flex justify-center">
            <img src={images[0].src} alt={images[0].caption} className="block max-h-[80vh] w-auto max-w-full object-contain" loading="lazy" />
          </div>
        </figure>
      )}

      <section className="mx-auto mt-12 max-w-3xl space-y-5 text-[13px] leading-7 text-foreground/85">
        {description.map((p, i) => <p key={i} className="indent-8">{p}</p>)}
      </section>

      <section className="mt-16 space-y-16">
        {images.slice(1).map((img, i) => (
          <figure key={i} className={img.full ? "" : "mx-auto max-w-5xl"}>
            <div className="overflow-hidden bg-white flex justify-center">
              <img src={img.src} alt={img.caption} className={img.wide ? "block w-full h-auto object-contain" : "block max-h-[80vh] w-auto max-w-full object-contain"} loading="lazy" />
            </div>
          </figure>
        ))}
      </section>

      <nav className="mt-24 flex items-center justify-between border-t border-foreground/80 pt-6 text-[11px] uppercase tracking-[0.25em]">
        {prev ? (
          <Link to={prev.to} className="hover:text-accent-blue">← {prev.label}</Link>
        ) : <span />}
        {next ? (
          <Link to={next.to} className="hover:text-accent-blue">{next.label} →</Link>
        ) : <span />}
      </nav>
    </main>
  );
}

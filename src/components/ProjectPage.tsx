import { Link } from "@tanstack/react-router";

interface Props {
  number: string;
  title: string;
  subtitle?: string;
  description: string[];
  images: { src: string; caption: string; full?: boolean }[];
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

      <section className="mx-auto mt-12 max-w-3xl space-y-5 text-[13px] leading-7 text-foreground/85">
        {description.map((p, i) => <p key={i}>{p}</p>)}
      </section>

      <section className="mt-16 space-y-16">
        {images.map((img, i) => (
          <figure key={i} className={img.full ? "" : "mx-auto max-w-5xl"}>
            <div className="overflow-hidden border border-foreground/10 bg-white">
              <img src={img.src} alt={img.caption} className="block w-full" loading="lazy" />
            </div>
            <figcaption className="mt-3 text-[10px] uppercase tracking-[0.25em] text-foreground/60">
              Fig. {String(i + 1).padStart(2, "0")} — {img.caption}
            </figcaption>
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

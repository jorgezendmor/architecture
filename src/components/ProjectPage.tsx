import { Link } from "@tanstack/react-router";

type ImageItem =
  | { src: string; caption: string; full?: boolean; wide?: boolean; mobileScroll?: boolean }
  | { src: string; leftSrc: string; rightSrc: string; caption: string; full?: boolean };

interface Props {
  number: string;
  title: string;
  subtitle?: string;
  description: string[];
  images: ImageItem[];
  prev?: { to: string; label: string };
  next?: { to: string; label: string };
}

function ImageBlock({ img, isHero }: { img: ImageItem; isHero?: boolean }) {
  if ("leftSrc" in img) {
    return (
      <>
        <div className="md:hidden flex flex-col gap-6">
          <img src={img.leftSrc} alt={img.caption} className="block w-full h-auto object-contain bg-white" loading="lazy" />
          <img src={img.rightSrc} alt={img.caption} className="block w-full h-auto object-contain bg-white" loading="lazy" />
        </div>
        <div className="hidden md:flex overflow-hidden bg-white justify-center">
          <img src={img.src} alt={img.caption} className="block max-h-[80vh] w-auto max-w-full object-contain" loading="lazy" />
        </div>
      </>
    );
  }
  if (isHero) {
    return (
      <>
        <div className="md:hidden overflow-hidden bg-white flex justify-center">
          <img src={img.src} alt={img.caption} className={img.wide ? "block w-full h-auto object-contain" : "block max-h-[80vh] w-auto max-w-full object-contain"} loading="lazy" />
        </div>
        <div className="hidden md:flex overflow-hidden bg-white justify-center">
          <img src={img.src} alt={img.caption} className="block max-h-[calc(100vh-260px)] w-auto max-w-full object-contain mx-auto" loading="lazy" />
        </div>
      </>
    );
  }
  if (img.mobileScroll) {
    return (
      <>
        <div className="md:hidden">
          <div className="overflow-x-auto bg-white -mx-6">
            <img src={img.src} alt={img.caption} className="block h-[70vh] w-auto max-w-none" loading="lazy" />
          </div>
          <p className="mt-2 px-1 text-[9px] uppercase tracking-[0.2em] text-foreground/50">Swipe →</p>
        </div>
        <div className="hidden md:flex overflow-hidden bg-white justify-center">
          <img src={img.src} alt={img.caption} className={img.wide ? "block w-full h-auto object-contain" : "block max-h-[80vh] w-auto max-w-full object-contain"} loading="lazy" />
        </div>
      </>
    );
  }
  return (
    <div className="overflow-hidden bg-white flex justify-center">
      <img src={img.src} alt={img.caption} className={img.wide ? "block w-full h-auto object-contain" : "block max-h-[80vh] w-auto max-w-full object-contain"} loading="lazy" />
    </div>
  );
}

export function ProjectPage({ number, title, subtitle, description, images, prev, next }: Props) {
  return (
    <main className="mx-auto max-w-[1400px] px-6 py-16">
      <div className="grid gap-10 border-b border-foreground pb-10 md:grid-cols-[120px_1fr]">
        <div />
        <div>
          <h1 className="whitespace-pre-wrap text-3xl leading-tight md:text-5xl">{title}</h1>
          {subtitle && <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-foreground/60">{subtitle}</p>}
        </div>
      </div>

      {images[0] && (
        <figure className="mt-12">
          <ImageBlock img={images[0]} isHero />
        </figure>
      )}

      <section className="mx-auto mt-12 max-w-3xl space-y-4 text-[9px] leading-[1.45] md:text-[13px] md:leading-7 text-foreground/85">
        {description.map((p, i) => <p key={i} className="indent-8">{p}</p>)}
      </section>

      <section className="mt-16 space-y-16">
        {images.slice(1).map((img, i) => (
          <figure key={i} className={img.full ? "" : "mx-auto max-w-5xl"}>
            <ImageBlock img={img} />
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

import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import toc1 from "@/assets/portfolio/toc-01-new.svg";
import toc2 from "@/assets/portfolio/toc-02-new.svg";
import toc3 from "@/assets/portfolio/toc-03.svg";
import toc4 from "@/assets/portfolio/toc-04.svg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jorge Zendejas Moran — Portfolio" },
      { name: "description", content: "Architecture portfolio. Selected works 2024–2025." },
    ],
  }),
  component: Index,
});

const projects = [
  { n: "01", title: "Chichu Art Museum", to: "/chichu", img: toc1 },
  { n: "02", title: "Lubbock's Academy of Visual Arts", to: "/lava", img: toc2 },
  { n: "03", title: "Travelers Retreat", to: "/retreat", img: toc3 },
  { n: "04", title: "Lubbock's Watershed Analysis", to: "/drainage", img: toc4 },
];

function Index() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <main>
      {/* COVER */}
      <section className="relative">
        <div className="mx-auto flex min-h-screen max-w-[1400px] flex-col justify-center px-10 py-24">
          <h1 className="pl-[12%] text-base tracking-[0.3em] md:text-lg">PORTFOLIO</h1>
          <div className="mt-4 border-t border-foreground" />
          <p className="mt-6 pr-[4%] text-right text-base tracking-[0.3em] md:text-lg">
            JORGE ZENDEJAS MORAN
          </p>
        </div>
        <a
          href="#contents"
          aria-label="Scroll to table of contents"
          className={`absolute bottom-28 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-foreground/60 transition-opacity duration-[2000ms] hover:text-accent-blue ${scrolled ? "pointer-events-none opacity-0" : "opacity-100"}`}
        >
          <span>Scroll</span>
          <span className="h-8 w-px animate-pulse bg-foreground/60" />
        </a>
      </section>

      {/* PROJECTS INDEX */}
      <section id="contents" className="mx-auto max-w-[1500px] scroll-mt-20 px-6 py-16">
        <div className="mb-16 flex items-end justify-between">
          <span className="text-[11px] uppercase tracking-[0.3em] text-foreground/60">Table of Contents</span>
          <span className="text-[11px] uppercase tracking-[0.3em] text-foreground/60">​</span>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-16 md:grid-cols-4">
          {projects.map((p) => (
            <Link
              key={p.n}
              to={p.to}
              className="group flex flex-col items-center text-center"
            >
              <div className="flex h-[220px] w-full items-end justify-center md:h-[280px]">
                <img
                  src={p.img}
                  alt={p.title}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:-translate-y-1"
                  loading="lazy"
                />
              </div>
              <div className="mt-6 w-full border-t border-foreground" />
              <p className="mt-8 text-3xl tracking-[0.15em] transition-colors group-hover:text-accent-blue md:text-4xl">
                {p.n}
              </p>
              <h3 className="mt-6 text-[11px] uppercase tracking-[0.25em] text-foreground/80 transition-colors group-hover:text-accent-blue">
                {p.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";

import toc1 from "@/assets/portfolio/toc-01-new.png";
import toc2 from "@/assets/portfolio/toc-02.jpg";
import toc3 from "@/assets/portfolio/toc-03.jpg";
import toc4 from "@/assets/portfolio/toc-04.jpg";

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
  { n: "04", title: "Lubbock's Drainage System Analysis", to: "/drainage", img: toc4 },
];

function Index() {
  return (
    <main>
      {/* COVER */}
      <section>
        <div className="mx-auto flex min-h-screen max-w-[1400px] flex-col justify-center px-10 py-24">
          <h1 className="pl-[12%] text-base tracking-[0.3em] md:text-lg">PORTFOLIO</h1>
          <div className="mt-4 border-t border-foreground" />
          <p className="mt-6 pr-[4%] text-right text-base tracking-[0.3em] md:text-lg">
            JORGE ZENDEJAS MORAN
          </p>
        </div>
      </section>

      {/* PROJECTS INDEX */}
      <section className="mx-auto max-w-[1500px] px-6 py-24">
        <div className="mb-16 flex items-end justify-between">
          <span className="text-[11px] uppercase tracking-[0.3em] text-foreground/60">Table of Contents</span>
          <span className="text-[11px] uppercase tracking-[0.3em] text-foreground/60">Spread 03</span>
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

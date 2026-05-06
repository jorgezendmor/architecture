import { createFileRoute, Link } from "@tanstack/react-router";

import toc1 from "@/assets/portfolio/toc-01.jpg";
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

      {/* ABOUT */}
      <section id="about" className="bg-sky">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-20 md:grid-cols-3">
          <div>
            <h2 className="text-accent-blue text-sm">Jorge</h2>
            <h2 className="mt-8 text-accent-blue text-sm">About Me</h2>
            <p className="mt-4 text-[13px] leading-7">
              Motivated designer who approaches architecture as both a technical
              discipline and a cultural practice that shapes how people experience space.
            </p>

            <h2 className="mt-10 text-accent-blue text-sm">Contacts</h2>
            <p className="mt-4 text-[13px] leading-7">
              jorgezendmor@gmail.com<br />(915)-270-7582
            </p>

            <h2 className="mt-10 text-accent-blue text-sm">Skills</h2>
            <ul className="mt-4 space-y-2 text-[13px]">
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>Rhinoceros</li>
            </ul>
          </div>

          <div className="md:col-span-2 bg-ink p-8 md:p-12">
            <h2 className="text-accent-blue text-sm">Zendejas Moran</h2>
            <h2 className="mt-8 text-accent-blue text-sm">Experience</h2>
            <p className="mt-4 text-[13px] leading-7">
              Bloom Homes · Architecture Intern<br />
              El Paso, Texas<br />
              May 2025 — August 2025
            </p>

            <h2 className="mt-10 text-accent-blue text-sm">Education</h2>
            <p className="mt-4 text-[13px] leading-7">
              Second year student at the Huckabee College of Architecture,
              Texas Tech University.
            </p>

            <div className="mt-12 grid grid-cols-10 gap-2">
              {Array.from({ length: 30 }).map((_, i) => (
                <span
                  key={i}
                  className="aspect-square rounded-sm"
                  style={{
                    background: i < 18 ? "oklch(0.62 0.21 250)" : "transparent",
                    border: "1px solid oklch(0.62 0.21 250)",
                  }}
                />
              ))}
            </div>
          </div>
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

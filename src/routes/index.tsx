import { createFileRoute, Link } from "@tanstack/react-router";

import p01 from "@/assets/portfolio/page-01.jpg";
import p03 from "@/assets/portfolio/page-03.jpg";
import p06 from "@/assets/portfolio/page-06.jpg";
import p10 from "@/assets/portfolio/page-10.jpg";
import p13 from "@/assets/portfolio/page-13.jpg";

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
  { n: "01", title: "Chichu Art Museum", sub: "Precedent · Tadao Ando", to: "/chichu", img: p03 },
  { n: "02", title: "L.A.V.A", sub: "Lubbock's Academy of Visual Arts", to: "/lava", img: p06 },
  { n: "03", title: "Travelers Retreat", sub: "Palo Duro Canyon", to: "/retreat", img: p10 },
  { n: "04", title: "Drainage System Analysis", sub: "Lubbock, Texas", to: "/drainage", img: p13 },
];

function Index() {
  return (
    <main>
      {/* COVER */}
      <section className="border-b border-foreground">
        <div className="mx-auto grid min-h-[80vh] max-w-[1400px] grid-rows-[1fr_auto_1fr] px-6 py-16">
          <div />
          <div className="border-y border-foreground py-10">
            <div className="flex items-baseline justify-between">
              <h1 className="text-2xl tracking-[0.4em] md:text-4xl">PORTFOLIO</h1>
              <span className="text-[11px] uppercase tracking-[0.3em] text-foreground/60">2024 — 2025</span>
            </div>
          </div>
          <div className="flex items-end justify-end">
            <p className="text-right text-base tracking-[0.3em] md:text-2xl">JORGE ZENDEJAS MORAN</p>
          </div>
        </div>
        <div className="overflow-hidden">
          <img src={p01} alt="Portfolio cover" className="block w-full" />
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
      <section className="mx-auto max-w-[1400px] px-6 py-24">
        <div className="flex items-end justify-between border-b border-foreground pb-4">
          <h2 className="text-2xl tracking-[0.3em]">Selected Works</h2>
          <span className="text-[11px] uppercase tracking-[0.25em] text-foreground/60">04 Projects</span>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-16 md:grid-cols-2">
          {projects.map((p) => (
            <Link key={p.n} to={p.to} className="group block">
              <div className="overflow-hidden border border-foreground/10 bg-white">
                <img
                  src={p.img}
                  alt={p.title}
                  className="block aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <div>
                  <p className="text-accent-blue text-[11px] uppercase tracking-[0.3em]">{p.n}</p>
                  <h3 className="mt-1 text-base md:text-lg">{p.title}</h3>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-foreground/60">{p.sub}</p>
                </div>
                <span className="text-[11px] uppercase tracking-[0.25em] group-hover:text-accent-blue">View →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

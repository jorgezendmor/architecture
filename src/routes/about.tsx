import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "More About Me — Jorge Zendejas Moran" },
      { name: "description", content: "About Jorge Zendejas Moran — architecture student at Texas Tech University." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="mx-auto max-w-[1400px] px-6 py-16">
      <div className="grid gap-10 border-b border-foreground pb-10 md:grid-cols-[160px_1fr]">
        <div className="text-[11px] uppercase tracking-[0.25em] text-accent-blue">About</div>
        <h1 className="text-3xl leading-tight md:text-5xl">More About Me</h1>
      </div>

      <section className="bg-sky mt-12">
        <div className="grid gap-10 p-8 md:grid-cols-3 md:p-12">
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
    </main>
  );
}

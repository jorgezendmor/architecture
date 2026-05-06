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

function Row({ children }: { children: React.ReactNode }) {
  return <div className="min-h-[180px]">{children}</div>;
}

function AboutPage() {
  return (
    <main>
      <div className="grid md:grid-cols-2">
        {/* LEFT — sky */}
        <section className="bg-sky px-10 py-16 md:px-20 md:py-24">
          <Row>
            <h2 className="text-accent-blue text-sm">Jorge</h2>
          </Row>

          <Row>
            <h2 className="text-accent-blue text-sm">About Me</h2>
            <p className="mt-4 max-w-md text-[13px] leading-7">
              Motivated designer who approaches architecture as both a technical
              discipline and a cultural practice that shapes how people experience space.
            </p>
          </Row>

          <Row>
            <h2 className="text-accent-blue text-sm">Contacts</h2>
            <p className="mt-4 text-[13px] leading-7">
              jorgezendmor@gmail.com
              <br />
              (915)-270-7582
            </p>
          </Row>

          <div>
            <h2 className="text-accent-blue text-sm">Skills</h2>
            <ul className="mt-4 space-y-3 text-[13px]">
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>Rhinoceros</li>
            </ul>
          </div>
        </section>

        {/* RIGHT — ink */}
        <section className="bg-ink px-10 py-16 md:px-20 md:py-24">
          <Row>
            <h2 className="text-accent-blue text-sm">Zendejas Moran</h2>
          </Row>

          <Row>
            <h2 className="text-accent-blue text-sm">Experience</h2>
            <p className="mt-4 text-[13px] leading-7">
              Bloom Homes · Architecture Intern
              <br />
              El Paso, Texas
              <br />
              May 2025 — August 2025
            </p>
          </Row>

          <Row>
            <h2 className="text-accent-blue text-sm">Education</h2>
            <p className="mt-4 max-w-sm text-[13px] leading-7">
              Second year student at the Huckabee College of Architecture at
              Texas Tech University.
            </p>
          </Row>

          <div>
            <div className="grid grid-cols-10 gap-2">
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
        </section>
      </div>
    </main>
  );
}

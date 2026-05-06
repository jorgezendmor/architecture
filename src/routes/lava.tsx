import { createFileRoute } from "@tanstack/react-router";
import { ProjectPage } from "@/components/ProjectPage";
import p06 from "@/assets/portfolio/page-06-new.jpg";
import p08 from "@/assets/portfolio/page-08.jpg";
import p09 from "@/assets/portfolio/page-09.jpg";

export const Route = createFileRoute("/lava")({
  head: () => ({
    meta: [
      { title: "02 · L.A.V.A — Jorge Zendejas Moran" },
      { name: "description", content: "Lubbock's Academy of Visual Arts — an art school for architectural watercoloring." },
    ],
  }),
  component: () => (
    <ProjectPage
      number="02"
      title="L.A.V.A"
      subtitle="Lubbock's Academy of Visual Arts"
      description={[
        "L.A.V.A is an art school located in the First Friday Art Trail in the intersection of Ave. J and Mac Davis Ln. This art school was programmed to teach architecture students how to use watercoloring for architectural representation. Architects used to have such a unique artistic way of representing buildings, and nowadays we've unfortunately pulled away from that. L.A.V.A's purpose is to bring back watercoloring to help architecture students improve their portfolios.",
        "L.A.V.A is divided into two different sectors. The first floor is the public sector for the First Friday Art Trail event, while the second floor is a private sector where students can work. The first floor includes a reception desk, a public library, a café, an art gallery, a storage room with a loading dock, and a massive three-story-high outdoor room. The second floor has three studios, three professors' rooms, a director's room, a flex roof deck, and a connection to the second story of the outdoor room.",
      ]}
      images={[
        { src: p06, caption: "Section Perspective — South", full: true },
        { src: p08, caption: "Exploded Axonometric", full: true },
        { src: p09, caption: "North & West Elevations", full: true },
      ]}
      prev={{ to: "/chichu", label: "01 · Chichu" }}
      next={{ to: "/retreat", label: "03 · Retreat" }}
    />
  ),
});

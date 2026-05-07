import { createFileRoute } from "@tanstack/react-router";
import { ProjectPage } from "@/components/ProjectPage";
import p10 from "@/assets/portfolio/page-10.svg";
import p11 from "@/assets/portfolio/page-11.jpg";
import p11L from "@/assets/portfolio/page-11-left.jpg";
import p11R from "@/assets/portfolio/page-11-right.jpg";
import p12 from "@/assets/portfolio/page-12.jpg";

export const Route = createFileRoute("/retreat")({
  head: () => ({
    meta: [
      { title: "03 · Travelers Retreat — Jorge Zendejas Moran" },
      { name: "description", content: "A retreat at the edge of Palo Duro Canyon." },
    ],
  }),
  component: () => (
    <ProjectPage
      number="03"
      title="Travelers Retreat"
      subtitle="Palo Duro Canyon, Texas"
      description={[
        "The Travelers Retreat is perched right at the edge of Palo Duro Canyon. It's located 45 minutes away from Rick Husband Amarillo International Airport. This proximity allows for people from all around the world to come and be able to experience the beauties of this canyon.",
        "The concept behind the design was driven by a conceptual contrast between the interior and exterior — inspired by The Broad Museum and the Terra Cotta Workshop. The organized exterior of this building defines the space, while the interior is less defined with its curved and organic layout. The project prioritizes the landscape by using a material palette of rammed earth exterior walls, a corten steel roof, and a concrete interior. This allows the building to blend into the environment. This tectonic approach ensures that the visitor's focus remains on the canyon rather than the structure itself.",
        "The program accommodates a range of guests, offering shared hostels, private two-bedroom suites, and a free public campground. This building also contains a restaurant that's not only for residents but for local people from nearby cities that stop by to eat after hiking.",
      ]}
      images={[
        { src: p10, caption: "Staggered Section Perspective B", full: true, wide: true },
        { src: p11, leftSrc: p11L, rightSrc: p11R, caption: "Arch Perspective", full: true },
        { src: p12, caption: "Tunnel Perspective & Site Section", full: true, wide: true, mobileScroll: true },
      ]}
      prev={{ to: "/lava", label: "02" }}
      next={{ to: "/drainage", label: "04" }}
    />
  ),
});

import { createFileRoute } from "@tanstack/react-router";
import { ProjectPage } from "@/components/ProjectPage";
import p04 from "@/assets/portfolio/page-04-new.svg";
import p05 from "@/assets/portfolio/page-05.jpg";
import p06 from "@/assets/portfolio/page-06.jpg";

export const Route = createFileRoute("/chichu")({
  head: () => ({
    meta: [
      { title: "01 · Chichu Art Museum — Jorge Zendejas Moran" },
      { name: "description", content: "Precedent study of the Chichu Art Museum by Tadao Ando." },
    ],
  }),
  component: () => (
    <ProjectPage
      number="01"
      title="Chichu Art Museum"
      subtitle="By Tadao Ando · Precedent Study"
      description={[
        "This precedent was remodeled and studied for the L.A.V.A project. The Chichu Art Museum is built underground, containing a total of three basement levels. It has punctures that let sunlight in all the way down to the third basement. This was the main idea that was gained from the Chichu Art Museum and implemented into L.A.V.A.",
      ]}
      images={[
        { src: p04, caption: "​", full: true },
        { src: p05, caption: "First & Second Basement Plans", full: true },
        { src: p06, caption: "​", full: true },
      ]}
      next={{ to: "/lava", label: "02 · L.A.V.A" }}
    />
  ),
});

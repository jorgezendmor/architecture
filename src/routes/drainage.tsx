import { createFileRoute } from "@tanstack/react-router";
import { ProjectPage } from "@/components/ProjectPage";
import p13 from "@/assets/portfolio/page-13.svg";
import p13L from "@/assets/portfolio/page-13-left.svg";
import p13R from "@/assets/portfolio/page-13-right.svg";

export const Route = createFileRoute("/drainage")({
  head: () => ({
    meta: [
      { title: "04 · Lubbock Drainage Analysis — Jorge Zendejas Moran" },
      { name: "description", content: "Analysis of Lubbock's hybrid stormwater drainage system and playa lakes." },
    ],
  }),
  component: () => (
    <ProjectPage
      number="04"
      title={"LUBBOCK'S WATERSHED\nANALYSIS"}
      subtitle="Research · Lubbock, Texas"
      description={[
        "Lubbock, Texas, located on the Llano Estacado, is a flat, semi-arid city where water management is shaped by limited rainfall and sudden storm events. Instead of relying only on underground pipes, the city uses a hybrid drainage system that combines streets, storm drains, landscaped medians, and natural depressions known as playa lakes.",
        "These playas function as large retention basins that collect stormwater runoff from the surrounding street grid and urban infrastructure. Water moves across the city through curbs, gutters, and surface drainage before settling into these basins, where it slowly infiltrates the soil or evaporates in the dry climate. When water levels exceed capacity, overflow systems direct runoff toward regional drainage channels such as Yellow House Draw, which ultimately connects to the Brazos River watershed.",
        "This system is significant to the topic of drainage and water reuse because the playas function as a form of landscape-based infrastructure, managing stormwater while contributing to groundwater recharge and ecological habitats. In an area where water resources are limited, these natural basins highlight opportunities for integrating stormwater into the landscape.",
      ]}
      images={[
        { src: p13, caption: "Three Main Collection Lakes — Mackenzie Park, Clapp Park, Dunbar", full: true, wide: true },
      ]}
      prev={{ to: "/retreat", label: "03" }}
    />
  ),
});

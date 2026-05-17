import { FeatureGrid } from "@/components/marketing/feature-grid";
import { Hero } from "@/components/marketing/hero";
import { RoadmapPreview } from "@/components/learn/roadmap-preview";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeatureGrid />
      <RoadmapPreview />
    </main>
  );
}

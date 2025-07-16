
import InteractiveMap from "@/components/InteractiveMap";
import { StorySection } from "@/components/StorySection";

const MapPage = () => (
  <main className="pt-24 pb-10 bg-gradient-to-b from-orange-50 to-sky-50 min-h-screen">
    <div className="max-w-6xl mx-auto text-center">
      <h1 className="text-4xl font-extrabold text-orange-900 mb-4">Mapping Ramayana Trail</h1>
      <p className="text-orange-800 max-w-2xl mx-auto mb-8">
        Explore the path of Rama, Sita, and Lakshmana across India. Click pins for historic insight and references.
      </p>
      <InteractiveMap />
    </div>
    <StorySection />
  </main>
);

export default MapPage;

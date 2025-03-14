import HeroSection from "./components/HeroSection";
import Details from "./components/Details";
import Galerie from "./components/Galerie";
import MergedComponent from "./components/MergedComponent";

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden">
      {/* Render popup immediately */}

      <div className="bg-[#cbdad4]">
        <div>
          <HeroSection />
          <Details />
          <MergedComponent />

          <Galerie />
        </div>
      </div>
    </main>
  );
}

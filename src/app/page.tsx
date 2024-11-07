import dynamic from "next/dynamic";
import HeroSection from "./components/HeroSection";
import Details from "./components/Details";
import Galerie from "./components/Galerie";
import MergedComponent from "./components/MergedComponent";

// Load BlackFridayPopup with priority but without blocking other components
const BlackFridayPopup = dynamic(() => import("./components/BlackF"), {
  ssr: false,
  loading: () => null,
});

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden">
      {/* Render popup immediately */}
      <BlackFridayPopup />
      <div className="bg-[#cbdad4]">
        <div>
          <HeroSection />
          <MergedComponent />
          <Details />
          <Galerie />
        </div>
      </div>
    </main>
  );
}

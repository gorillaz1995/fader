import HeroSection from "./components/HeroSection";
import AnimatedText from "./components/AnimatedText";
import Details from "./components/Details";
import Tryout from "./components/Tryout";
import Mapc from "./Mapc";
import Galerie from "./components/Galerie";
import MergedComponent from "./components/MergedComponent";

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden">
      <div className="bg-[#ededed]">
        <div>
          <HeroSection />
          <Details />
          <AnimatedText />
          <Tryout />
          <MergedComponent />
          <Galerie />
          <Mapc />
        </div>
      </div>
    </main>
  );
}

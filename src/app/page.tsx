import HeroSection from "./components/HeroSection";
import AnimatedText from "./components/AnimatedText";
import Details from "./components/Details";
import Tryout from "./components/Tryout";
import Mapc from "./Mapc";
import Galerie from "./components/Galerie";
import MergedComponent from "./components/MergedComponent";
import Banner1 from "./components/Banner1";
import Banner2 from "./components/Banner2";
export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden">
      <div className="bg-pattern">
        <div>
          <HeroSection />
          <Banner2 />
          <Tryout />
          <MergedComponent />
          <Details />
          <AnimatedText />
          <Banner1 />
          <Galerie />
          <Mapc />
        </div>
      </div>
    </main>
  );
}

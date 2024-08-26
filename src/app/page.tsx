import HeroSection from "./components/HeroSection";
import AnimatedText from "./components/AnimatedText";
import Details from "./components/Details";
import Tryout from "./components/Tryout";
import Mapc from "./Mapc";
import Actenec from "./components/Actenec";
import Flex from "./components/Flex";
import Galerie from "./components/Galerie";

export default function Home() {
  return (
    <>
      <main className="flex flex-col overflow-hidden bg-[#becccc]">
        <HeroSection />
        <Details />
        <AnimatedText />
        <Tryout />
        <Flex />
        <Actenec />
        <Galerie />
        <Mapc />
      </main>
    </>
  );
}

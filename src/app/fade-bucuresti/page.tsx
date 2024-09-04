import Banner1 from "../components/Banner1";
import AnimatedText from "../components/AnimatedText";
import Tryout from "../components/Tryout";
import Banner2 from "../components/Banner2";
import Mapc from "../Mapc";

export default function MioveniPage() {
  return (
    <div className="bg-[#cbdad4]">
      <Banner1
        imageSrc="/images/F.webp"
        altText="Ciprian Ungureanu - Master barber - Curs frizerie Incepatori"
      />
      <AnimatedText />
      <Banner2 />
      <Tryout />
      <Mapc />
    </div>
  );
}

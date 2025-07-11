import Banner1 from "../components/Banner1";
import AnimatedText from "../components/AnimatedText";
import Tryout from "../components/Tryout";
import Banner2 from "../components/Banner2";
import Mapc from "../Mapc";
import RevBu from "../components/RevBu";
import Link from "next/link";

export default function BucurestiPage() {
  return (
    <div className="bg-[#cbdad4] overflow-hidden">
      <Banner1
        imageSrc="/images/F.webp"
        altText="Ciprian Ungureanu - Master barber - Curs frizerie Incepatori"
      />
      <AnimatedText />
      <Banner2 />
      <Tryout />

      {/* Profesorii Academiei Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Curs Secundar Frizerie
        </h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Descoperiți echipa noastră de profesioniști dedicați care vă vor ghida
          în călătoria dvs. spre excelență în arta frizeriei. Cu ani de
          experiență și pasiune pentru predare, profesorii noștri sunt pregătiți
          să vă împărtășească toate secretele meseriei.
        </p>
        <Link
          href="/curs-secundar-frizerie"
          className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300"
        >
          Afla mai multe despre cursul secundar
        </Link>
      </section>

      <Mapc />
      <RevBu />
    </div>
  );
}

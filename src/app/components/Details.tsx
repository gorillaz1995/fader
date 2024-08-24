import React from "react";
import Image from "next/image";
import { Heading, Highlight } from "@chakra-ui/react";
import faderImage from "@/images/hero/fader.webp";

const Details: React.FC = () => {
  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-2 h-[60vh] gap-6">
      {/* Image Section */}
      <div className="relative flex items-center justify-center pb-2 lg:pb-0">
        <div className="absolute top-1/2 transform -translate-y-[35%] mx-auto w-[560px] h-[560px] md:w-[900px] md:h-[900px] rounded-2xl overflow-hidden z-10">
          <Image
            src={faderImage}
            alt="Ciprian Ungureanu - Master barber"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            quality={100}
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center items-center lg:items-start z-20">
        <h1 className="text-2xl font-semibold text-[#023d82] mb-4 text-center lg:text-left font-stint-ultra-expanded pt-32">
          Debutul ideal in cariera de frizer
        </h1>

        <Heading
          as="h2"
          className="text-xl font-pontano-sans font-semibold text-center lg:text-left"
          lineHeight="tall"
        >
          <Highlight
            query="PROGRAM CURSURI FRIZERIE INCEPATORI"
            styles={{
              color: "#F9FBFB",
              px: "2",
              py: "1",
              bg: "linear-gradient(to right, #023d82, #0461ab)",
              rounded: "full",
            }}
          >
            PROGRAM CURSURI FRIZERIE INCEPATORI
          </Highlight>
        </Heading>

        <p className="text-base text-[#070F18] text-center lg:text-left leading-relaxed font-pontano-sans py-2">
          <span className="border-b-4 border-[#BC9E9E] inline-block">
            Locurile se ocupa foarte repede, asa ca grabeste-te!
          </span>
          <br />
          CURS 10 <span className="font-extrabold">SEPTEMBRIE</span> - 19{" "}
          <span className="font-extrabold">NOIEMBRIE</span> 2024
          <br />
          <span className="font-extrabold">Ultima zi</span> de inscrieri: 01
          Septembrie
          <br />
          Durata totala - 2 luni jumate /
          <span className="font-extrabold"> 10 saptamani</span>
        </p>
      </div>
    </div>
  );
};

export default Details;

import Banner1 from "../components/Banner1";
import AnimatedText from "../components/AnimatedText";
import FadeAcademySection from "../components/AcademiPresentation";
import PriceContact from "../components/PriceContact";

export default function BotosaniPage() {
  return (
    <div className="bg-[#cbdad4]">
      <Banner1
        imageSrc="/images/botosani_bg.webp"
        altText="Botosani Background"
      />
      <AnimatedText />
      <FadeAcademySection
        imageSrc="/images/botosani_foto.webp"
        formatorName="TUCALIUC ANDI BENAMIN"
        locationName="Botosani"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <PriceContact
        price="3500 RON"
        phoneNumber="+(40) 753 757 164"
        location="T.A.G95Barber, Aleea Mihail Kogalniceanu 32, Botoșani 710182"
        facebookLink="https://www.facebook.com/T.A.G95Barber?mibextid=LQQJ4d&rdid=36dsP8i5fxWEg0Eu&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FU7JBGZdHMwSxHMmc%2F%3Fmibextid%3DLQQJ4d"
      />
    </div>
  );
}

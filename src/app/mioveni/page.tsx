import Banner1 from "../components/Banner1";
import AnimatedText from "../components/AnimatedText";
import FadeAcademySection from "../components/AcademiPresentation";
import PriceContact from "../components/PriceContact";

export default function MioveniPage() {
  return (
    <div className="bg-[#cbdad4]">
      <Banner1
        imageSrc="/images/mioveni_bg.webp"
        altText="Mioveni Background"
      />
      <AnimatedText />
      <FadeAcademySection
        imageSrc="/images/mioveni_foto.webp"
        formatorName="Flori Petran"
        locationName="Mioveni"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <PriceContact
        price="2000 RON"
        phoneNumber="+(40) 744 828 788"
        location="Salon FLORY, Aleea Căminului 2, Mioveni 115400"
        facebookLink="https://www.facebook.com/salonflori"
      />
    </div>
  );
}

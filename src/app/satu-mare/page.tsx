import Banner1 from "../components/Banner1";
import AnimatedText from "../components/AnimatedText";
import FadeAcademySection from "../components/AcademiPresentation";
import PriceContact from "../components/PriceContact";

export default function SMPage() {
  return (
    <div className="bg-[#cbdad4]">
      <Banner1 imageSrc="/images/sm_bg.webp" altText="SM Background" />
      <AnimatedText />
      <FadeAcademySection
        imageSrc="/images/sm_foto.webp"
        formatorName="Bajus Francisc"
        locationName="Satu Mare"
        description="[Description for Satu Mare Fade Academy]"
      />
      <PriceContact
        price="3000 RON"
        phoneNumber="+(40) 745 307 856"
        location="Gentleman's Barber Shop, Strada Prahova 10, Satu Mare 440115"
        facebookLink="https://www.facebook.com/gentlemansbarbershopsatumare"
      />
    </div>
  );
}

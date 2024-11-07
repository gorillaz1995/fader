import Banner1 from "../components/Banner1";
import AnimatedText from "../components/AnimatedText";
import FadeAcademySection from "../components/AcademiPresentation";
import PriceContact from "../components/PriceContact";
import RevM from "../components/RevM";

export default function MioveniPage() {
  return (
    <div className="bg-[#cbdad4] overflow-hidden">
      <Banner1
        imageSrc="/images/mioveni_bg.webp"
        altText="Mioveni Background"
      />
      <AnimatedText />
      <FadeAcademySection
        imageSrc="/images/mioveni_foto.webp"
        formatorName="Flori Petran"
        locationName="Mioveni"
        description="Formatoare la Fade Academy Mioveni, este recunoscuta pentru abilitatea sa de a inspira si de a ghida viitorii frizeri catre succes. Cu o experienta vasta in domeniu si o atentie deosebita la tendintele actuale, ea transforma fiecare cursant intr-un profesionist sigur pe sine, capabil sa abordeze orice provocare in hairstyling. Prin cursurile sale bine structurate, Flori isi propune sa ofere fiecarui participant un parcurs clar si complet in frizerie, pregatindu-i atat pentru munca intr-un salon, cat si pentru a-si deschide propria afacere."
      />
      <PriceContact
        price="2000 RON"
        phoneNumber="+(40) 744 828 788"
        location="Salon FLORY, Aleea Căminului 2, Mioveni 115400"
        facebookLink="https://www.facebook.com/salonflori"
      />
      <RevM />
    </div>
  );
}

import { HomeHero } from "@/components/sections/home/HomeHero";
import { HeroReel } from "@/components/sections/home/HeroReel";
import { CoursePicker } from "@/components/sections/home/CoursePicker";
import { DemoSection } from "@/components/sections/home/DemoSection";
import { EnrollmentInfo } from "@/components/sections/EnrollmentInfo";
import { Gallery } from "@/components/sections/Gallery";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HeroReel />
      <CoursePicker />
      <DemoSection />
      <EnrollmentInfo />
      <Gallery />
    </>
  );
}

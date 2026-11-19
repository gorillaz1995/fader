import type { Metadata } from "next";
import { CITY_ACADEMIES } from "@/data/content";
import { CityAcademyPage } from "@/components/sections/city/CityAcademyPage";

export const metadata: Metadata = {
  title: "Curs frizerie Botoșani",
  description: "Fade Academy Botoșani — curs de frizerie cu formatorul Tucaliuc Andi Benamin. Preț, contact și locație.",
};

export default function BotosaniPage() {
  return <CityAcademyPage academy={CITY_ACADEMIES.botosani} />;
}

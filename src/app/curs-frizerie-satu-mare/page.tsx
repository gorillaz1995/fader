import type { Metadata } from "next";
import { CITY_ACADEMIES } from "@/data/content";
import { CityAcademyPage } from "@/components/sections/city/CityAcademyPage";

export const metadata: Metadata = {
  title: "Curs frizerie Satu Mare",
  description: "Fade Academy Satu Mare — curs de frizerie cu formatorul Bajus Francisc. Preț, contact și locație.",
};

export default function SatuMarePage() {
  return <CityAcademyPage academy={CITY_ACADEMIES.satuMare} />;
}

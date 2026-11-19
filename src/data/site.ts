/**
 * Central site config. Edit dates, prices and contacts here — every page reads from this file.
 */

export const CHAMPION_YEARS = [2020, 2021, 2022, 2023, 2024, 2025, 2026] as const;
export const CHAMPION_STREAK_LABEL = `${CHAMPION_YEARS.length} ani consecutivi`;

export const CONTACT = {
  phones: [
    { label: "(+40) 723 403 403", tel: "+40723403403" },
    { label: "(+40) 723 705 702", tel: "+40723705702" },
    { label: "(+40) 771 418 581", tel: "+40771418581" },
  ],
  email: "contact@fadeacademy.ro",
  whatsapp: "40723403403",
  address: "Șoseaua Pantelimon 16, București",
  addressLong: "București, Sector 2, Șos. Pantelimon nr. 16",
  social: {
    facebook: { handle: "byCiprianUngureanu", url: "https://www.facebook.com/byCiprianUngureanu" },
    instagram: {
      handle: "ciprian_ungureanu_fadeacademy",
      url: "https://www.instagram.com/ciprian_ungureanu_fadeacademy",
    },
    tiktok: { handle: "@byciprianungureanu", url: "https://www.tiktok.com/@byciprianungureanu" },
  },
};

export const BANK = {
  iban: "RO53BTRLRONCRT0P67302901",
  holder: "Anto Perfect Style SRL",
};

/** Next intake. The 2027 placeholder dates are used everywhere until confirmed. */
export const INTAKE = {
  year: 2027,
  startISO: "2027-01-12T10:00:00+02:00",
  periodLabel: "12 IANUARIE 2027 – 8 APRILIE 2027",
  periodShort: "Ianuarie – Aprilie 2027",
  durationLabel: "2 luni jumate / 12 săptămâni",
  startLabel: "12 Ianuarie 2027",
};

export const COURSES = {
  grandmaster: {
    price: 6000,
    discountedPrice: 5400,
    installments: [
      { label: "Rezervare loc", amount: 2000 },
      { label: "Începutul cursului", amount: 2000 },
      { label: "Jumătatea cursului", amount: 2000 },
    ],
  },
  fadeMasters: {
    price: 3500,
    discountedPrice: 3150,
    duration: "10 săpt.",
    installments: [
      { label: "Rezervarea locului", amount: 1000 },
      { label: "La începutul cursului", amount: 1500 },
      { label: "La jumătatea cursului", amount: 1000 },
    ],
  },
};

export const whatsappLink = (message?: string, phone: string = CONTACT.whatsapp) =>
  `https://wa.me/${phone}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const formatRon = (value: number) => `${value.toLocaleString("ro-RO")} RON`;

export type NavItem = { label: string; href: string; group?: string };

export const NAV: NavItem[] = [
  { label: "Acasă", href: "/" },
  { label: "Curs Ciprian Ungureanu", href: "/curs-frizerie-bucuresti", group: "Fade Academy / București" },
  { label: "Curs Fade Masters", href: "/curs-secundar-frizerie", group: "Fade Academy / București" },
  { label: "Curs 1 la 1", href: "/curs-1-1", group: "Fade Academy / București" },
  { label: "Satu Mare", href: "/curs-frizerie-satu-mare", group: "Fade Academy" },
  { label: "Botoșani", href: "/curs-frizerie-botosani", group: "Fade Academy" },
  { label: "Evenimente & Sesiuni", href: "/evenimente" },
  { label: "Testimoniale", href: "/testimoniale" },
];

/** Label shown on the page-transition curtain while navigating to a route. */
export const ROUTE_LABELS: Record<string, string> = {
  "/": "Fade Academy",
  "/curs-frizerie-bucuresti": "GrandMaster",
  "/curs-secundar-frizerie": "Fade Masters",
  "/curs-1-1": "1 la 1",
  "/curs-frizerie-satu-mare": "Satu Mare",
  "/curs-frizerie-botosani": "Botoșani",
  "/evenimente": "Country Tours",
  "/testimoniale": "Testimoniale",
  "/alin-ciucas": "Alin Ciucas",
  "/morar-adrian": "Ady Ramses",
  "/banu-andrei": "Andrei Banu",
  "/politica-cookie-uri": "Cookie-uri",
};

export const ROTATING_LINES = ["#1 Curs frizerie", "Lider în industrie", "Rezultate reale", "Succes garantat"];

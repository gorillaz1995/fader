export type Story = {
  slug: string;
  name: string;
  heading: string;
  cover: string;
  portrait: string;
  paragraphs: string[];
  achievements?: string[];
};

export const STORIES: Story[] = [
  {
    slug: "alin-ciucas",
    name: "Alin Ciucas",
    heading: "Alin Ciucas",
    cover: "/images/testimoniale/ciucas.webp",
    portrait: "/images/testimoniale/ciucas2.webp",
    paragraphs: [
      "DE FOAME. Da, ați citit bine: FOAMEA este cea care mi-a descoperit PASIUNEA pentru tuns.",
      "La vârsta de 35 de ani, după 17 ani dedicați domeniului vânzărilor, am rămas fără job. Eram ASM la o firmă mare și vizibilă pe piață. Salariu mare… și, dintr-odată, a doua zi: ZERO.",
      "Un magazin chinezesc în centru, două mașini de tuns, un set de piepteni, o pelerină, un scaun cu sondă din Leroy Merlin… și m-am apucat de treabă.",
      "Toți ne naștem cu un talent ascuns, dar de multe ori greutățile, nevoile sau dorința părinților noștri de a ne face \"astronauți\" ne împiedică să ne descoperim adevărata chemare.",
      "Când am realizat că tunsul este drumul meu, am făcut tot ce era necesar să evoluez. Am plecat de acasă, lăsând familia, nevoile financiare și prietenii pe plan secund pentru a participa la fiecare seminar, curs sau workshop care mă propulsa înainte.",
      "Azi culeg ROADELE. Dacă există o persoană căreia trebuie să îi mulțumesc toată viața, acela este Ciprian Ungureanu, omul care a văzut în mine ceea ce eu nu vedeam!",
      "Nevoia de supraviețuire mi-a descoperit pasiunea pentru TUNS, pe care am transformat-o în carieră cu 90% muncă și 10% talent.",
      "Acum, la 43 de ani, iubesc această meserie. Ea îmi oferă stabilitate materială și spirituală, iar prin ea sunt înconjurat de oameni frumoși. Poate mulți dintre voi vă veți regăsi în această poveste, iar pentru cei care nu au rămas corijenți la viață, mă bucur din suflet pentru voi.",
      "Luv ya ♥️💈",
    ],
    achievements: [
      "Din 2016, nu cred că am ratat mai mult de 10 concursuri organizate fizic sau online.",
      "În noiembrie 2018, am fost nominalizat BEST BARBER pe cel mai mare grup de frizerie din România și am câștigat unul dintre cele mai râvnite trofee ale vremii!",
      "Am investit în imaginea mea și am participat la peste 20 de concursuri, reușind să urc pe podium.",
      "În perioada pandemiei, am ținut unită comunitatea frizerilor printr-un proiect unic: BARBER LA MICROFON. Împreună cu Ciprian Ungureanu, am adus în prim-plan cei mai buni frizeri din România prin live-uri.",
      "În 2023, am creat propriul eveniment/concurs, THEBARBERPOST ROMANIA, împreună cu Ciprian Ungureanu. Concursul a adunat 60 de participanți și a oferit unele dintre cele mai mari premii din România!",
      "Astăzi fac parte cu onoare din Fade Academy, unde sunt asistent-educator și ajut la formarea noii generații.",
    ],
  },
  {
    slug: "morar-adrian",
    name: "Morar Adrian",
    heading: "Ady Ramses",
    cover: "/images/testimoniale/morar.webp",
    portrait: "/images/testimoniale/morar2.webp",
    paragraphs: [
      "Eu sunt Ady Ramses, am 20 de ani și practic această meserie de 4 ani și jumătate. În tot acest timp, am devenit un artist barber. Până acum un an, lucram într-un salon unde câștigam bani, însă nu eram mulțumit. Simțeam că pot face mai mult decât să fiu doar un frizer la scaun. Așa că am luat decizia de a participa la primul meu seminar organizat de Ciprian. De atunci, am simțit nevoia să petrec mai mult timp alături de el, așa că m-am angajat la salonul lui pentru a-l putea studia în detaliu și a învăța cât mai multe.",
      "De un an de zile, îl însoțesc la toate seminariile pe care le organizează în toată țara, iar această experiență m-a ajutat enorm. Mi-am dezvoltat viziunea despre frizerie, am învățat tehnici corecte de tuns, finisaje și multe altele.",
    ],
  },
  {
    slug: "banu-andrei",
    name: "Banu Andrei",
    heading: "Andrei Banu",
    cover: "/images/testimoniale/banu.webp",
    portrait: "/images/testimoniale/banu2.webp",
    paragraphs: [
      "Numele meu este Andrei Banu și am 25 de ani. Sunt o persoana sociabilă, ador perfecțiunea și tind sa fiu cea mai bună varianta a mea, pe zi ce trece. Îmi doresc sa mă perfecționez, prin învățarea de tehnici noi, în pas cu moda, pentru a deveni unul dintre cei mai buni frizeri. Dl. Ciprian Ungureanu este cel mai important om din drumul meu, acesta m-a învățat intr-un timp foarte scurt, câteva tehnici pentru a învață rapid dar și corect frizeria! Datorită dânsului am prins încredere în mine, am reușit înțeleg multe nelămuriri și cu siguranță voi ajunge unde mi-am propus, avandu-l pe dânsul ca mentor!",
    ],
  },
];

export const TOURS = [
  {
    city: "Timișoara",
    region: "Vest",
    dateISO: "2026-11-15",
    dateLabel: "15 Noiembrie 2026",
    month: "Noiembrie",
    days: 1,
    title: "Barber Master Tour – Timișoara",
    text: "Sesiune intensivă dedicată frizerilor care vor fade-uri curate, control și structură profesională.",
    price: 850,
    image: "/images/galerie/galerie1.webp",
  },
  {
    city: "Cluj-Napoca",
    region: "Nord-Vest",
    dateISO: "2026-11-22",
    dateLabel: "22 Noiembrie 2026",
    month: "Noiembrie",
    days: 2,
    title: "Barber Master Tour – Cluj",
    text: "Tehnici moderne de tuns, corectarea greșelilor și eficientizarea timpului de lucru.",
    price: 900,
    image: "/images/galerie/galerie2.webp",
  },
  {
    city: "București",
    region: "Sud",
    dateISO: "2026-10-10",
    dateLabel: "10 Octombrie 2026",
    month: "Octombrie",
    days: 2,
    title: "Barber Master Tour – București",
    text: "Program complet de formare practică și teorie aplicată pentru frizeri activi.",
    price: 1000,
    image: "/images/galerie/galerie3.webp",
  },
  {
    city: "Iași",
    region: "Nord-Est",
    dateISO: "2026-11-28",
    dateLabel: "28 Noiembrie 2026",
    month: "Noiembrie",
    days: 1,
    title: "Barber Master Tour – Iași",
    text: "Focus pe fade, blend, simetrie și disciplină de lucru în salon.",
    price: 800,
    image: "/images/galerie/galerie5.webp",
  },
];

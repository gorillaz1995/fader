export type MentorOption = {
  code: string;
  label: string;
  title: string;
  image: string;
  intro: string;
  blocks: { title: string; items: string[] }[];
  quote?: string;
  closing?: string;
  cta: { label: string; message: string };
  secondaryCta?: { label: string; message: string };
  note?: string;
  theme: "forest" | "bone" | "lime" | "ink";
};

export const WHY_ONE_TO_ONE = [
  {
    title: "Atenție 100% dedicată",
    text: "Tot focusul este pe nivelul, stilul și obiectivele tale. Fără timp împărțit între cursanți.",
  },
  {
    title: "Feedback personalizat",
    text: "Identificăm exact ce trebuie ajustat și optimizăm fiecare detaliu: unghiuri, secțiuni, tranziții.",
  },
  {
    title: "Direcție strategică",
    text: "Primești claritate despre ce să aprofundezi și ce să eviți. Îți construim următorul pas logic.",
  },
];

export const SEMINAR_DAY = [
  { time: "12:00", text: "Demonstrație detaliată (pas cu pas)" },
  { time: "14:30", text: "Tu tunzi sub supraveghere (intervenție max. 30%, doar finisaje)" },
  { time: "17:00", text: "Tu tunzi 100% independent, fără ajutor" },
];

export const MENTOR_OPTIONS: MentorOption[] = [
  {
    code: "01",
    label: "Option 01 • Premium • Ciprian Ungureanu",
    title: "Seminar 1-1 – Perfecționare în Tunsori",
    image: "/images/ung123.jpeg",
    intro:
      "Acest seminar este destinat celor care vor să-și îmbunătățească tehnica și să atingă un nivel avansat. Pentru a participa, este necesară o evaluare prealabilă dacă nu ai urmat cursul nostru de specializare.",
    blocks: [
      {
        title: "Ședința de evaluare (obligatorie în anumite cazuri)",
        items: ["Tunsoare completă fără asistență", "1 oră", "Recomandare număr ședințe", "300 lei"],
      },
      {
        title: "Structura zilei (3 modele)",
        items: ["12:00 demonstrație", "14:30 supraveghere max. 30%", "17:00 independent"],
      },
      {
        title: "Preț seminar 1 zi: 2500 lei",
        items: [
          "Avans: 1000 lei • min. 2 săptămâni înainte",
          "Modelele sunt responsabilitatea ta. Dacă nu găsești, putem asigura contra cost: 100 lei/model.",
          "Masa ta este asigurată.",
        ],
      },
    ],
    cta: { label: "Rezervă Seminar Premium", message: "Bună! Vreau să rezerv Seminarul Premium 1-1 cu Ciprian Ungureanu." },
    secondaryCta: { label: "Întreabă detalii", message: "Bună! Aș vrea detalii despre Seminarul Premium 1-1." },
    note: "Anulare: dacă renunți cu mai puțin de 7 zile înainte, avansul nu se returnează.",
    theme: "lime",
  },
  {
    code: "02",
    label: "Option 02 • Advanced Fade • Robert Micu",
    title: "1 la 1 – Fade, Control și Viteză Curată",
    image: "/images/robert121.jpeg",
    intro:
      "Robert lucrează pe disciplină și consistență: aceleași secțiuni, aceleași unghiuri, aceeași logică — până când execuția ta devine repetabilă. Pentru cei care vor să treacă de „îmi iese uneori” la „îmi iese mereu”.",
    blocks: [
      { title: "Ce obții", items: ["Corecție unghiuri + secționare", "Tranziții fade (zero – 0.5 – 1)", "Timp de execuție optimizat"] },
      { title: "Pentru cine e", items: ["Intermediar → Avansat", "Ideal după evaluare / după cursuri de bază"] },
    ],
    quote:
      "„Tehnica e ca sala: repetarea corectă îți dă rezultat. Noi eliminăm erorile mici care îți strică fade-ul și îți arătăm cum să controlezi tranziția chiar și pe capete dificile.”",
    cta: { label: "Rezervă 1 la 1 cu Robert", message: "Bună! Vreau să rezerv un 1 la 1 cu Robert Micu." },
    theme: "forest",
  },
  {
    code: "03",
    label: "Option 03 • High-End Finish • Alberto Sârbu",
    title: "1 la 1 – Finishing, Detaliu și Proporții",
    image: "/images/alb222.jpeg",
    intro:
      "Pentru frizerii care vor acel „wow” din oglindă. Alberto lucrează pe detalii: contururi curate, texturi, blending fin și o estetică premium. Te învață cum să vezi greșelile mici înainte să le vadă clientul — și cum să le corectezi fără să strici forma.",
    blocks: [
      { title: "Ce „ridică” nivelul", items: ["Finishing & simetrie — detalii care separă mediocrul de premium"] },
      { title: "Focus sesiuni", items: ["Contururi + simetrie", "Texturare & volum", "Finishing foto-ready"] },
    ],
    quote: "„Când finishing-ul e corect, tunsoarea pare mai scumpă. Iar asta îți schimbă brandul: clienții simt imediat diferența.”",
    cta: { label: "Rezervă 1 la 1 cu Alberto", message: "Bună! Vreau să rezerv un 1 la 1 cu Alberto Sârbu." },
    theme: "bone",
  },
  {
    code: "04",
    label: "Option 04 • Clasa de Tehnică • Florin Harsan",
    title: "Clasa de Tehnică – Înțelege tunsorile, nu doar să le execuți",
    image: "/images/flor123.jpeg",
    intro:
      "Program de specializare creat pentru frizerii și hair-styliștii care vor să treacă la următorul nivel și să dobândească control real asupra tunsorilor. Aici nu înveți doar să reproduci forme, ci să înțelegi logica din spatele fiecărei construcții.",
    blocks: [
      {
        title: "Cele 3 concepte fundamentale",
        items: [
          "Linie – controlul formei și al greutății",
          "Graduare – construcția volumului și a structurii",
          "Treaptă – dinamica și mișcarea părului",
        ],
      },
      { title: "Pentru cine este", items: ["Frizeri & hair-styliști", "Pentru cei care vor control tehnic real"] },
      {
        title: "Ce urmărește",
        items: ["Mai mult control asupra formelor", "Precizie și viteză mai bună în salon", "Gândire tehnică în tunsori"],
      },
      {
        title: "Ce vei învăța",
        items: [
          "Cum se construiește corect o tunsoare",
          "Cum să controlezi forma și greutatea părului",
          "Cum să adaptezi tehnica la orice client",
          "Cum să lucrezi mai rapid și mai precis în salon",
          "Cum să gândești tunsorile, nu doar să le execuți",
        ],
      },
    ],
    quote:
      "După peste 30 de ani de experiență în salon și în educație, Harsan Florin a construit un sistem de predare simplu, logic și aplicabil în orice salon. Scopul este clar: să transforme tunsoarea dintr-o execuție mecanică într-un proces logic și controlat.",
    closing: "Această specializare nu este doar un curs. Este o schimbare de perspectivă asupra tunsorilor.",
    cta: { label: "Rezervă cu Florin Harsan", message: "Bună! Vreau să rezerv Clasa de Tehnică cu Florin Harsan." },
    secondaryCta: { label: "Cere detalii", message: "Bună! Aș vrea detalii despre Clasa de Tehnică cu Florin Harsan." },
    theme: "ink",
  },
];

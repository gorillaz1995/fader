export type QA = { q: string; a: string };

export type Teacher = {
  name: string;
  role: string;
  image: string;
  chips?: string[];
  qa: QA[];
  motto: string;
};

export const TEACHERS: Teacher[] = [
  {
    name: "Teodora",
    role: "Profesor • tehnici moderne + fundamente solide",
    image: "/images/aia121.jpeg",
    motto: "Clar. Practic. Autentic.",
    qa: [
      {
        q: "Tehnica mea preferată",
        a: "Fade-ul și conectările dintre laterale și partea de top a părului. Îmi place precizia din această zonă, pentru că o conectare bine realizată face diferența într-o tunsoare cu adevărat profesionistă.",
      },
      {
        q: "Tunsoarea care mă reprezintă",
        a: "Tunsorile elegante. Îmi place ca fiecare rezultat să fie curat, echilibrat și rafinat, astfel încât clientul să plece cu un look îngrijit și stilat.",
      },
      {
        q: "Punctul meu forte la catedră",
        a: "Explic tehnicile clar și pas cu pas, astfel încât cursanții să înțeleagă logica din spatele fiecărei mișcări și să capete încredere în propriul lor stil de lucru.",
      },
      {
        q: "Greșeala pe care o văd cel mai des la cursanți",
        a: "Graba. În frizerie, răbdarea și atenția la detalii sunt esențiale pentru un rezultat de calitate.",
      },
      {
        q: "Ce mă diferențiază ca trainer",
        a: "Pun accent pe practică reală și pe construirea încrederii cursanților. Îmi place să creez un mediu relaxat în care fiecare poate învăța și evolua în ritmul său.",
      },
    ],
  },
  {
    name: "Robert Micu",
    role: "Profesor • structură, disciplină, performanță",
    image: "/images/robert121.jpeg",
    chips: ["Special clipper control", "Mindset repetă → reușește"],
    motto: "Structurat. Tehnic. Clar. Practic. Orientat spre rezultate.",
    qa: [
      {
        q: "Tehnica mea de tuns",
        a: "Se bazează pe analiză corectă, secționare precisă și control al ghidajelor. Construiesc forma progresiv, folosind linii de bază clare și tranziții graduale pentru un fade curat și echilibrat. Conexiunea dintre laterale și partea superioară este realizată prin blending controlat, pentru o integrare naturală a volumului. Fiecare tunsoare este finalizată prin verificare și detaliere, pentru un rezultat precis și ușor de întreținut.",
      },
      {
        q: "Stilul care mă reprezintă",
        a: "Skin Fade / Mid Fade cu top structurat, construit pe precizie și control. Pun accent pe tranziții progresive, curate, fără linii dure, realizate prin pași tehnici bine calculați. Conectez lateralele cu partea superioară prin blending atent, pentru o integrare naturală a volumului. Fiecare tunsoare începe cu analiza formei capului și a direcției de creștere, apoi construiesc forma progresiv, cu ghidaje clare și structură bine definită. Finalul este întotdeauna verificat și detaliat pentru echilibru și durabilitate. Rezultatul: o tunsoare modernă, tehnică și ușor de întreținut.",
      },
      {
        q: "Punctul meu forte la catedră",
        a: "Capacitatea de a explica tehnica simplu, clar și logic, astfel încât cursanții să înțeleagă nu doar „cum”, ci mai ales „de ce”. Descompun fiecare tunsoare în pași practici, ușor de aplicat, cu accent pe structură, ghidaje și control. Corectez atent, ofer feedback constructiv și urmăresc progresul fiecărui cursant. Creez un mediu disciplinat, dar motivant, în care tehnica și încrederea cresc împreună.",
      },
      {
        q: "Greșeala pe care o văd cel mai des",
        a: "Lipsa controlului asupra ghidajului. Se grăbesc să urce cu mașina sau să „șteargă” linii fără să construiască baza corectă. O altă problemă comună este presiunea inegală și mișcarea necontrolată a mâinii, ceea ce duce la tranziții neuniforme. De multe ori nu respectă pașii logici ai fade-ului și sar etape, crezând că vor corecta ulterior. Nu în ultimul rând: RĂBDAREA. În esență, greșeala nu este lipsa talentului, ci lipsa structurii și a răbdării în execuție.",
      },
      {
        q: "Ce mă diferențiază",
        a: "Nu predau doar o tunsoare, ci un sistem de lucru clar și aplicabil. Pun accent pe structură, logică și înțelegerea procesului, nu pe copierea mecanică a unor mișcări. Explic fiecare pas cu motivul din spate, astfel încât cursanții să poată reproduce rezultatul constant, nu doar ocazional. Corectez tehnic, nu superficial, și urmăresc progresul real al fiecărui cursant. În plus, îmbin disciplina cu motivația, formând frizeri care gândesc tehnic, nu doar execută.",
      },
    ],
  },
  {
    name: "Alberto Sârbu",
    role: "Profesor • finețe, simț estetic, finisaj premium",
    image: "/images/alberto121.jpeg",
    chips: ["Focus finishing", "Stil clean & sharp"],
    motto: "Clar. Exigent. Real.",
    qa: [
      {
        q: "Care este tehnica ta preferată și de ce?",
        a: "Tehnica mea preferată este fade-ul lucrat cu foarfeca (scissor over comb) și controlul zonelor. Îmi permite să construiesc forma, nu doar să „șterg linii”. Îmi place să înțeleg capul, direcția părului și umbrele, nu să mă bazez doar pe mașină.",
      },
      {
        q: "Ce tip de tunsoare te reprezintă cel mai bine?",
        a: "Fade natural, curat, fără linii, cu tranziții fluide și top lucrat inteligent. Tunsoarea trebuie să arate bine și peste 2 săptămâni, nu doar în poză imediat după.",
      },
      {
        q: "Care este punctul tău forte la catedră?",
        a: "Claritatea și disciplina. Explic simplu lucruri complexe, corectez la milimetru și nu las cursanții să se mintă singuri. Îi învăț să vadă greșeala, nu doar să o repare.",
      },
      {
        q: "Ce greșeală vezi cel mai des la cursanți?",
        a: "Se grăbesc. Vor rezultate rapide fără să înțeleagă structura. Nu citesc capul, nu respectă zonele și apasă prea mult pe mașină în loc să gândească.",
      },
      {
        q: "Ce te diferențiază real față de alți traineri?",
        a: "Nu predau „rețete”. Predau logică, control și responsabilitate. Sunt activ în salon, în competiții și în educație. Tot ce predau folosesc zilnic, nu din povești sau clipuri de pe net.",
      },
    ],
  },
];

export const ASSISTANTS = [
  {
    name: "Andrei",
    role: "Asistent tehnic • tehnici moderne",
    image: "/images/andrei14.jpeg",
    text: "Te ajută să-ți stabilizezi mâna și să „simți” tranziția: clipper control, pieptăn, verificări rapide și micro-corecții care fac diferența.",
    tags: ["control", "ghidaj unghiuri", "practică"],
  },
  {
    name: "Antonio",
    role: "Asistent tehnic • fundamente clasice",
    image: "/images/antonio121.jpeg",
    text: "Te ține pe traseu: pași corecți, curățenie pe contur, ritm de lucru și disciplină în execuție. Ideal când vrei să fixezi baza.",
    tags: ["contur", "bază solidă", "finishing"],
  },
];

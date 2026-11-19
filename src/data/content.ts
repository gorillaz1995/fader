export type Review = { name: string; text: string };

export const DOCUMENTS = [
  { title: "Copie certificat naștere" },
  { title: "Copie carte identitate" },
  { title: "Copie certificat căsătorie", note: "Doar în cazul schimbării numelui" },
  {
    title: "Copie după ultimul act de studii",
    note: "Minim 16 ani împliniți pentru a urma cursul. Minim diplomă 8 clase. Dacă ai studiat în afara țării, diploma trebuie echivalată și apostilată (Haga).",
  },
  { title: "Adeverință medicală", note: "Cu mențiunea: Apt pentru curs" },
];

export const COURSE_DETAILS = {
  learn: [
    "Tunsori personalizate adaptate fizionomiei feței și formei capului",
    "Tehnici de tuns clasice cu foarfeca și pieptănul",
    "Tunsori realizate cu mașina de tuns",
    "Clipper over comb",
    "Skin fade și geometria necesară pentru realizarea acestuia",
    "Rasul bărbii cu briciul",
    "Spălarea părului și îngrijirea scalpului",
    "Styling și tehnici profesionale de uscare",
    "Masaj facial și capilar",
    "Noțiuni de geometrie aplicată în tunsori",
  ],
  brand: [
    "Dezvoltarea prezenței în mediul online",
    "Identificarea valorilor cheie pentru brand-ul tău",
    "Tehnologii folosite în industrie",
  ],
  skills: [
    "Lucrează cu substanțe chimice respectând normele de siguranță.",
    "Programarea clienților și organizarea programărilor (agenda/booking).",
    "Întreținerea echipamentelor și pregătirea postului de lucru.",
    "Menținerea documentației administrative.",
    "Menținerea relațiilor cu furnizorii.",
    "Păstrarea curățeniei în spațiul de lucru.",
    "Recomandarea produselor cosmetice potrivite clienților.",
    "Vânzarea produselor pentru îngrijirea părului și a scalpului.",
    "Întocmirea comenzilor de aprovizionare.",
    "Ținerea evidenței stocurilor și actualizarea acestora.",
    "A fi la curent cu tendințele de tuns și styling.",
    "Lucrează ținând cont de principii economice (consum, timp, costuri).",
    "Gestionarea programului de lucru (intervale, flux clienți).",
    "Asigurarea serviciilor pentru clienți (standard, consistență).",
    "Demonstrarea competențelor sociale (comunicare, atitudine).",
    "Oferirea de consultanță pentru alegerea tunsorii potrivite.",
    "Administrarea programărilor și a priorităților în salon.",
    "Aplicarea tratamentelor pentru îngrijirea părului.",
    "Utilizarea corectă a echipamentelor pentru îngrijirea părului.",
    "Ajutor oferit clienților cu probleme ale părului/scalpului.",
    "Efectuarea masajelor (capilar/facial) unde este cazul.",
    "Stăpânirea tehnicilor de tuns și realizarea frizurilor (styling/coafare).",
  ],
  schedule: [
    { label: "Teorie", value: "marți, miercuri și joi 10:00–15:30" },
    { label: "Practică", value: "marți, miercuri, joi 16:00–18:00" },
    { label: "Notă", value: "Programul poate depăși numărul de ore pentru practică" },
    { label: "Ustensile", value: "Ustensile personale (reduceri parteneri)" },
  ],
  recognition:
    "Curs autorizat de Ministerul Muncii și Ministerul Educației. La final primești certificat de absolvire (frizerie începători).",
};

export const GALLERY = [
  "/images/ungureanu2026-2.jpg",
  "/images/ungureanu2026-1.jpg",
  "/images/ungureanu2026-3.jpg",
  "/images/galerie/galerie4.webp",
  "/images/ungureanu2026-5.jpg",
  "/images/ungureanu2026-4.jpg",
  "/images/galerie/galerie8.webp",
  "/images/galerie/galerie9.webp",
  "/images/galerie/galerie10.webp",
  "/images/galerie/galerie11.webp",
  "/images/galerie/galerie12.webp",
];

export const REVIEWS_BUCURESTI: Review[] = [
  {
    name: "Andreea Elena",
    text: "Este o Academie de Frizerie in adevaratul sens al cuvântului. Servicii de foarte buna calitate, pesonal amabil, igiena impecabila, doar produse de calitate si nu mai vorbesc de cursurile de frizerie acreditate internațional. Mult succes, băieți!",
  },
  { name: "Florin Rosca", text: "Cel mai bun profesor..! Va recomand Ciprian Ungureanu ..!" },
  { name: "Irimia Roxana", text: "Profesionalism...Artă....Dedicare" },
  {
    name: "Maria Antohi",
    text: "Un trainer de top the best un om foarte calm care nu numai ca iti pune bazele unei meserii atat de frumoase, insa te ajuta sa te dezvolti atat profesional cat si personal .. ordine și disciplina Recomand tuturor cu mare drag! Multumesc din suflet pentu tot și cu siguranța voi mai reveni !",
  },
  { name: "Gabriela Gafencu", text: "Clar, tehnic și precis! Multumesc" },
  {
    name: "Mîrzac Nadejda",
    text: "Recomand celor care pun accent pe professionalism organizare punctualitate .. Îi multumesc cu recunostinta dm Ciprian Ungureanu la seminariile la care am participat am învatat foarte multe .",
  },
  {
    name: "Ionut Ionut",
    text: "recomand Ciprian Ungureanu Salon & Academy, profesionist, mentor, pedagog, cel mai tare profesor! nota 10+ Va multumesc inca o data maestre pt tot, toata stima si respectul meu!",
  },
  { name: "Alex Vancea", text: "modul plăcut prin care explică cursanților și calitatea lucrării" },
  { name: "Tudorache Alexandru", text: "Profesionalism, acuratețe incomensurabila, locația ideala" },
  { name: "Apostol Aurel-ionut", text: "Recomand Ciprian Ungureanu........ The Best!" },
  { name: "Tzake Claudiu", text: "Un adevarat maestru ! 5 stele" },
  {
    name: "Georgiana Sabin Lazar",
    text: "Cel mai bun profesor ieri am fost la Seminar la dansul sunt foarte mulțumită de ce am învățat recomand CIPRIAN UNGUREANU !",
  },
  {
    name: "Maria Petco",
    text: "Sunteți o echipa de excepție! Făcând curent practica in salonul By Ciprian Ungureanu pot sa recomand cu cea mai mare încredere acest salon tuturor! Va iubesc",
  },
];

export const REVIEWS_BOTOSANI: Review[] = [
  {
    name: "Silviu Cristescu",
    text: "Scriu aceasta recenzie ca proaspat absolvent al cursulu Fade Academy, profesor Andi Tucaliuc. Iti sunt extrem de recunascator pentru tot ce mai invatat, pentru sfaturi si pentru rabdare. Am avut noroc sa fac parte dintr-o grupa de oameni faini, ambitiosi si care m-au ajutat sa progresez. Recomand cu incredere cursul de incepatori cat si salonul in sine. O echipa de baieti tineri, cu multe seminare la activ si care au facut din frizer o arta. Lucrarile lor vorbesc de la sine!",
  },
  { name: "Dany Danyela", text: "Recomand cei mai de treaba si foarte mult calm" },
  { name: "Enache Vlad-Cosmin", text: "Recomand cu toata increderea!" },
];

export const REVIEWS_SATU_MARE: Review[] = [
  { name: "Zsolt Nagy", text: "Fery ,un om deosebit si un profesionist dedicat maxim!Echipa este de nota 10!" },
  {
    name: "Frizeria Petrea Style",
    text: "Cei mai buni din oraș … profesioniști in adevăratul sens al cuvântului… recomand cu sinceritate",
  },
  {
    name: "Bogdan Cernat",
    text: "O experienta de neuitat. Baietii sunt niste profesionisti dedicati , atenti la toate detaliile. Salonul te intampina cu atmosfera pozitiva. Recomand cu toata increderea!",
  },
];

export type CityAcademy = {
  slug: string;
  city: string;
  trainer: { name: string; role: string; image: string; bio: string };
  price: number;
  phone: { label: string; tel: string };
  location: { name: string; address: string; mapQuery: string };
  facebook?: string;
  reviews: Review[];
};

export const CITY_ACADEMIES: Record<"botosani" | "satuMare", CityAcademy> = {
  botosani: {
    slug: "curs-frizerie-botosani",
    city: "Botoșani",
    trainer: {
      name: "Tucaliuc Andi Benamin",
      role: "Formator Fade Academy Botoșani",
      image: "/images/botosani-prime.png",
      bio: "La Fade Academy Botosani, Andi este liderul care a format peste 25 de frizeri activi, dintre care multi si-au deschis propriile saloane. Cursurile de frizerie Botosani sunt recunoscute pentru atentia la detalii si pentru pregatirea completa pe care o ofera, sub indrumarea unui profesionist dedicat. Cu o experienta bogata si o pasiune pentru educatie, Andi asigura ca fiecare cursant invata tehnicile necesare pentru a deveni un frizer de succes si, mai mult decat atat, isi dezvolta increderea pentru a-si lansa propria afacere in acest domeniu dinamic.",
    },
    price: 3500,
    phone: { label: "+(40) 753 757 164", tel: "+40753757164" },
    location: {
      name: "T.A.G95Barber",
      address: "Aleea Mihail Kogalniceanu 32, Botoșani 710182",
      mapQuery: "T.A.G95Barber, Aleea Mihail Kogalniceanu 32, Botoșani 710182",
    },
    facebook: "https://www.facebook.com/byCiprianUngureanu",
    reviews: REVIEWS_BOTOSANI,
  },
  satuMare: {
    slug: "curs-frizerie-satu-mare",
    city: "Satu Mare",
    trainer: {
      name: "Bajus Francisc",
      role: "Formator Fade Academy Satu Mare",
      image: "/images/sm-foto.png",
      bio: "Un formator de top al Fade Academy din Satu-Mare, cu o experienta vasta in arta frizeriei. Cu o pasiune autentica pentru acest domeniu, el se dedica instruirii viitoarelor generatii de frizeri, punand accent pe tehnici moderne si tendinte actuale in hairstyling. Cursurile sale sunt structurate astfel incat fiecare participant sa obtina abilitati practice solide si cunostinte esentiale pentru a-si construi o cariera de succes in frizerie. Datorita experientei sale si a metodei de predare interactive, formatorul din Satu-Mare inspira incredere si profesionalism.",
    },
    price: 3000,
    phone: { label: "+(40) 745 307 856", tel: "+40745307856" },
    location: {
      name: "Gentleman's Barber Shop",
      address: "Strada Prahova 10, Satu Mare 440115",
      mapQuery: "Gentleman's Barber Shop, Strada Prahova 10, Satu Mare 440115",
    },
    reviews: REVIEWS_SATU_MARE,
  },
};

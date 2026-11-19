import type { Metadata } from "next";
import { Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Politica Cookie-uri",
  description: "Politica de cookie-uri a site-ului Fade Academy Education.",
};

const SECTIONS: { title: string; body?: string; sub?: { title: string; body: string }[] }[] = [
  {
    title: "Ce sunt cookie-urile?",
    body: "Cookie-urile sunt fișiere text mici care sunt plasate pe dispozitivul dvs. (computer, tabletă sau telefon mobil) atunci când vizitați un site web. Acestea sunt utilizate pe scară largă pentru a face site-urile web să funcționeze sau să funcționeze mai eficient, precum și pentru a furniza informații proprietarilor site-ului.",
  },
  {
    title: "Cum utilizăm cookie-urile pe site-ul Fade Academy Education?",
    body: "Site-ul nostru utilizează cookie-uri în mod limitat pentru a-ți îmbunătăți experiența de navigare. În prezent, nu colectăm date personale pentru publicitate sau pentru alte scopuri comerciale. Utilizăm doar cookie-urile esențiale necesare pentru funcționarea corectă a site-ului.",
  },
  {
    title: "Tipuri de cookie-uri utilizate",
    sub: [
      {
        title: "Cookie-uri esențiale (Vercel)",
        body: "Site-ul nostru este găzduit pe platforma Vercel, care poate utiliza cookie-uri tehnice pentru a asigura funcționarea corectă a site-ului, pentru gestionarea sesiunilor și pentru optimizarea performanței. Aceste cookie-uri sunt necesare pentru funcționarea site-ului și nu pot fi dezactivate.",
      },
      {
        title: "Cookie-uri Google",
        body: "Utilizăm servicii Google (cum ar fi Google Fonts) care pot seta cookie-uri pentru a îmbunătăți experiența utilizatorului. Aceste cookie-uri sunt utilizate în mod limitat și nu colectăm date pentru publicitate sau profilare.",
      },
    ],
  },
  {
    title: "Ce date colectăm?",
    body: "În prezent, nu colectăm date personale pentru publicitate sau pentru alte scopuri comerciale. Singurele date colectate sunt cele necesare pentru funcționarea tehnică a site-ului prin intermediul platformei Vercel, care poate include informații tehnice standard precum adresa IP, tipul de browser și sistemul de operare, dar acestea sunt utilizate doar pentru scopuri tehnice și de securitate.",
  },
  {
    title: "Aplicații terțe",
    body: "În prezent, site-ul nostru nu utilizează aplicații terțe pentru colectarea de date sau publicitate. Singurele servicii externe utilizate sunt Vercel (pentru găzduire) și Google (pentru fonturi), care sunt necesare pentru funcționarea corectă a site-ului.",
  },
  {
    title: "Gestionarea cookie-urilor",
    body: "Puteți gestiona sau șterge cookie-urile în orice moment prin setările browserului dvs. Vă rugăm să rețineți că dezactivarea cookie-urilor poate afecta funcționalitatea site-ului nostru și poate împiedica accesul la anumite funcții.",
  },
  {
    title: "Modificări ale acestei politici",
    body: "Ne rezervăm dreptul de a actualiza această politică de cookie-uri în orice moment. Vă recomandăm să verificați periodic această pagină pentru a fi la curent cu orice modificări. Data ultimei actualizări este indicată la sfârșitul acestui document.",
  },
  {
    title: "Contact",
    body: "Dacă aveți întrebări despre utilizarea cookie-urilor pe site-ul nostru, vă rugăm să ne contactați la contact@fadeacademy.ro.",
  },
];

export default function CookiePolicyPage() {
  const updated = new Date().toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" });
  return (
    <section className="grain bg-forest-950 pb-24 pt-36 text-bone md:pb-32">
      <div className="container-x max-w-4xl">
        <p className="eyebrow text-lime">Legal</p>
        <h1 className="display mt-6 text-[clamp(3rem,8vw,6.5rem)]">Politica Cookie-uri</h1>
        <p className="accent mt-2 text-3xl text-lime">Fade Academy Education</p>
        <div className="mt-14 space-y-12">
          {SECTIONS.map((section, index) => (
            <article key={section.title} className="grid gap-4 border-t border-bone/10 pt-8 md:grid-cols-[80px_1fr]">
              <span className="display text-3xl text-lime">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2 className="text-2xl font-semibold">{section.title}</h2>
                {section.body && <p className="mt-3 leading-relaxed text-bone/75">{section.body}</p>}
                {section.sub?.map((sub) => (
                  <div key={sub.title} className="mt-5 rounded-2xl border border-bone/10 bg-forest p-5">
                    <h3 className="font-semibold">{sub.title}</h3>
                    <p className="mt-2 leading-relaxed text-bone/75">{sub.body}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
        <p className="mt-14 text-sm text-bone/60">Ultima actualizare: {updated}</p>
        <div className="mt-8">
          <Button href="/">
            Înapoi la pagina principală
          </Button>
        </div>
      </div>
    </section>
  );
}

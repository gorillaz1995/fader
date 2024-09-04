import type { Metadata } from "next";
import {
  Stint_Ultra_Expanded,
  Pontano_Sans,
  Luxurious_Script,
  Familjen_Grotesk,
} from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Menux from "./components/Menux";
import Footer from "./components/Footer";

const stintUltraExpanded = Stint_Ultra_Expanded({
  subsets: ["latin"],
  weight: "400",
});
const pontanoSans = Pontano_Sans({ subsets: ["latin"], weight: "400" });
const luxuriousScript = Luxurious_Script({ subsets: ["latin"], weight: "400" });
const familjenGrotesk = Familjen_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Ciprian Ungureanu - Fade Academy | Curs Frizerie Incepatori",
  description:
    "Descopera cursurile de frizerie pentru incepatori oferite de Ciprian Ungureanu, un expert recunoscut international. Inscrie-te acum la Fade Academy pentru a invata tehnicile esentiale ale frizeriei și pentru a-ți începe cariera de succes.",
  keywords: [
    "curs frizerie incepatori",
    "frizerie Ciprian Ungureanu",
    "Fade Academy",
    "tehnici frizerie",
    "cariera frizerie",
    "cursuri frizerie",
    "formare frizeri",
  ],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Stint+Ultra+Expanded&family=Pontano+Sans&family=Luxurious+Script&family=Familjen+Grotesk:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${stintUltraExpanded.className} ${pontanoSans.className} ${luxuriousScript.className} ${familjenGrotesk.className} flex flex-col min-h-screen`}
      >
        <Menux />
        <Providers>
          <main className="flex-grow">{children}</main>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}

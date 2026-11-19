import type { Metadata, Viewport } from "next";
import { Anton, Instrument_Serif, Inter_Tight } from "next/font/google";
import { Providers } from "@/components/chrome/Providers";
import "./globals.css";

const anton = Anton({ subsets: ["latin", "latin-ext"], weight: "400", variable: "--font-anton", display: "swap" });
const instrument = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});
const inter = Inter_Tight({ subsets: ["latin", "latin-ext"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fadeacademy.ro"),
  title: {
    default: "Fade Academy — Cea mai bună școală de frizerie din România",
    template: "%s · Fade Academy",
  },
  description:
    "Fade Academy by Ciprian Ungureanu — #1 Barber Education în România, 7 ani consecutivi. Cursuri de frizerie pentru începători, mentorat 1 la 1 și sesiuni în toată țara.",
  icons: { icon: "/images/logo.png" },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    siteName: "Fade Academy",
    images: ["/images/ungureanu2026-5.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#132a13",
};

// Runs before paint so returning visitors (same session) never see the intro flash.
const INTRO_SCRIPT = `try{if(sessionStorage.getItem('fa_intro')==='1'||matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('intro-seen')}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${anton.variable} ${instrument.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: INTRO_SCRIPT }} />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

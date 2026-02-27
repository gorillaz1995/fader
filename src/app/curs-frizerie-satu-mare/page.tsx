import Banner1 from "../components/Banner1";
import AnimatedText from "../components/AnimatedText";
import FadeAcademySection from "../components/AcademiPresentation";
import PriceContact from "../components/PriceContact";
import RevSm from "../components/RevSm";
import MergedComponents from "../components/MergedComponent";

export default function SMPage() {
  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Background visuals */}
      <div className="pointer-events-none absolute inset-0">
        {/* neon glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-[#79FD15]/20 blur-[90px]" />
        <div className="absolute top-[35%] -left-24 h-[420px] w-[420px] rounded-full bg-[#79FD15]/12 blur-[110px]" />
        <div className="absolute bottom-[-160px] right-[-120px] h-[520px] w-[520px] rounded-full bg-[#79FD15]/14 blur-[120px]" />

        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />

        {/* vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      {/* Top accent bar */}
      <div className="relative z-10">
        <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#79FD15] to-transparent" />
      </div>

      {/* Header / Hero wrapper for mobile */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-8 sm:pt-10">
        <div className="flex flex-col gap-5 sm:gap-6">
          {/* Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#79FD15]/25 bg-white/5 px-4 py-2 backdrop-blur-md">
              <span className="text-xs sm:text-sm font-pontano-sans text-white/85 tracking-wide">
                Fade Academy • Satu Mare
              </span>
              <span className="h-2 w-2 rounded-full bg-[#79FD15] shadow-[0_0_18px_#79FD15]" />
            </div>
          </div>

          {/* Title */}
          <div className="text-center">
            <h1 className="font-stint-ultra-expanded text-3xl sm:text-4xl md:text-6xl text-white drop-shadow-[0_0_25px_rgba(0,0,0,0.7)]">
              Fade Academy
              <span className="text-[#79FD15]">.</span>
            </h1>
            <p className="mt-3 text-sm sm:text-base md:text-lg font-pontano-sans text-white/80 max-w-3xl mx-auto">
              O experiență premium de învățare — focus pe practică, disciplină
              și rezultate rapide. Același standard, aceeași metodă, aceeași
              cultură de performanță.
            </p>
          </div>

          {/* Mobile CTAs (optional, safe even if not used elsewhere) */}
          <div className="mx-auto w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href="#pret-contact-sm"
              className="rounded-2xl px-5 py-3 text-center font-pontano-sans font-semibold border border-[#79FD15]/25 bg-white/5 hover:bg-white/10 transition"
            >
              Vezi preț & contact
            </a>
            <a
              href="#recenzii-sm"
              className="rounded-2xl px-5 py-3 text-center font-pontano-sans font-bold bg-[#79FD15] text-black hover:brightness-95 transition shadow-[0_18px_60px_rgba(0,0,0,0.6)]"
            >
              Vezi recenzii
            </a>
          </div>
        </div>
      </div>

      {/* Content sections */}
      <div className="relative z-10">
        {/* Animated text stays (your component) */}
        <div className="mt-8 sm:mt-10">
          <AnimatedText />
        </div>

        {/* Main content container with “high-end” cards */}
        <div className="mx-auto max-w-6xl px-4 pb-14 sm:pb-20">
          {/* Featured card wrapper (for the academy presentation block) */}
          <div className="mt-10 sm:mt-12 rounded-3xl border border-[#79FD15]/18 bg-white/5 backdrop-blur-md shadow-[0_18px_70px_rgba(0,0,0,0.75)] overflow-hidden">
            <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#79FD15] to-transparent" />
            <div className="p-4 sm:p-6 md:p-8">
              <FadeAcademySection
                imageSrc="/images/sm-foto.png"
                formatorName="Bajus Francisc"
                locationName="Satu Mare"
                description="Un formator de top al Fade Academy din Satu-Mare, cu o experienta vasta in arta frizeriei. Cu o pasiune autentica pentru acest domeniu, el se dedica instruirii viitoarelor generatii de frizeri, punand accent pe tehnici moderne si tendinte actuale in hairstyling. Cursurile sale sunt structurate astfel incat fiecare participant sa obtina abilitati practice solide si cunostinte esentiale pentru a-si construi o cariera de succes in frizerie. Datorita experientei sale si a metodei de predare interactive, formatorul din Satu-Mare inspira incredere si profesionalism."
              />
            </div>
          </div>

          {/* Price/Contact in an accent frame */}
          <div
            id="pret-contact-sm"
            className="mt-8 sm:mt-10 rounded-3xl border border-[#79FD15]/18 bg-white/5 backdrop-blur-md shadow-[0_18px_70px_rgba(0,0,0,0.75)] overflow-hidden"
          >
            <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#79FD15] text-black">
                  💰
                </span>
                <div>
                  <p className="font-stint-ultra-expanded text-lg sm:text-xl">
                    Preț & Contact
                    <span className="text-[#79FD15]">.</span>
                  </p>
                  <p className="text-xs sm:text-sm font-pontano-sans text-white/70">
                    Totul clar, rapid, fără fricțiune
                  </p>
                </div>
              </div>

              {/* accent chip */}
              <div className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[#79FD15]/25 bg-[#79FD15]/10 px-3 py-1">
                <span className="text-xs font-pontano-sans text-white/80">
                  Standard Fade Academy
                </span>
                <span className="h-2 w-2 rounded-full bg-[#79FD15] shadow-[0_0_18px_#79FD15]" />
              </div>
            </div>

            <div className="p-4 sm:p-6 md:p-8">
              <PriceContact
                price="3000 RON"
                phoneNumber="+(40) 745 307 856"
                location="Gentleman's Barber Shop, Strada Prahova 10, Satu Mare 440115"
                facebookLink="https://www.facebook.com/gentlemansbarbershopsatumare"
              />
            </div>
          </div>

          {/* Merged components block */}
          <div className="mt-8 sm:mt-10 rounded-3xl border border-[#79FD15]/18 bg-white/5 backdrop-blur-md shadow-[0_18px_70px_rgba(0,0,0,0.75)] overflow-hidden">
            <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#79FD15] to-transparent" />
            <div className="p-4 sm:p-6 md:p-8">
              <MergedComponents />
            </div>
          </div>

          {/* Reviews */}
          <div
            id="recenzii-sm"
            className="mt-8 sm:mt-10 rounded-3xl border border-[#79FD15]/18 bg-white/5 backdrop-blur-md shadow-[0_18px_70px_rgba(0,0,0,0.75)] overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 sm:px-6 py-4 border-b border-white/10">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#79FD15] text-black">
                ★
              </span>
              <div>
                <p className="font-stint-ultra-expanded text-lg sm:text-xl">
                  Recenzii
                  <span className="text-[#79FD15]">.</span>
                </p>
                <p className="text-xs sm:text-sm font-pontano-sans text-white/70">
                  Feedback real de la cursanți
                </p>
              </div>
            </div>
            <div className="p-4 sm:p-6 md:p-8">
              <RevSm />
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 sm:mt-12 rounded-3xl bg-[#79FD15] text-black p-6 sm:p-8 shadow-[0_18px_70px_rgba(0,0,0,0.75)]">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="text-center sm:text-left">
                <p className="font-stint-ultra-expanded text-2xl sm:text-3xl leading-tight">
                  Vrei să începi?
                </p>
                <p className="mt-2 font-pontano-sans text-sm sm:text-base text-black/80 max-w-xl">
                  Trimite-ne un mesaj și îți spunem rapid ce variantă de curs ți
                  se potrivește în Satu Mare.
                </p>
              </div>

              <a
                href="https://wa.me/40745307856"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto rounded-2xl bg-black text-white px-6 py-3 text-center font-pontano-sans font-bold hover:bg-black/85 transition"
              >
                Scrie pe WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className="relative z-10">
        <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#79FD15] to-transparent" />
      </div>
    </div>
  );
}

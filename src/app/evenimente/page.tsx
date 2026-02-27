"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type EventDuration = "1 zi" | "2 zile";

type EventItem = {
  id: number;
  city: string;
  zone: string;
  month: string;
  date: string;
  price: number;
  title: string;
  description: string;
  image: string;
  duration: EventDuration;
};

const ACCENT = "#79FD15";
const WHATSAPP_BASE = "https://wa.me/40723403403";

/**
 * NOTE:
 * - Filter "Oraș" includes ALL Romanian county capitals + Bucharest.
 * - Events list remains your curated EVENTS; cities without events will simply show 0 results (that’s normal).
 * - Added "Durată" filter: 1 zi / 2 zile.
 */

const ROMANIA_CITIES_ALL: string[] = [
  "Toate",
  "Alba Iulia",
  "Alexandria",
  "Arad",
  "Bacău",
  "Baia Mare",
  "Bistrița",
  "Botoșani",
  "Brașov",
  "Brăila",
  "București",
  "Buzău",
  "Călărași",
  "Cluj-Napoca",
  "Constanța",
  "Craiova",
  "Deva",
  "Drobeta-Turnu Severin",
  "Focșani",
  "Galați",
  "Giurgiu",
  "Iași",
  "Miercurea Ciuc",
  "Oradea",
  "Piatra Neamț",
  "Pitești",
  "Ploiești",
  "Râmnicu Vâlcea",
  "Reșița",
  "Satu Mare",
  "Sibiu",
  "Slatina",
  "Slobozia",
  "Suceava",
  "Târgu Jiu",
  "Târgu Mureș",
  "Târgoviște",
  "Timișoara",
  "Tulcea",
  "Vaslui",
  "Zalău",
];

const EVENTS: EventItem[] = [
  {
    id: 1,
    city: "Timișoara",
    zone: "Vest",
    month: "Noiembrie",
    date: "15 Noiembrie 2026",
    price: 850,
    duration: "1 zi",
    title: "Barber Master Tour – Timișoara",
    description:
      "Sesiune intensivă dedicată frizerilor care vor fade-uri curate, control și structură profesională.",
    image: "/images/tour-timisoara.jpg",
  },
  {
    id: 2,
    city: "Cluj-Napoca",
    zone: "Nord-Vest",
    month: "Noiembrie",
    date: "22 Noiembrie 2026",
    price: 900,
    duration: "2 zile",
    title: "Barber Master Tour – Cluj",
    description:
      "Tehnici moderne de tuns, corectarea greșelilor și eficientizarea timpului de lucru.",
    image: "/images/tour-cluj.jpg",
  },
  {
    id: 3,
    city: "București",
    zone: "Sud",
    month: "Octombrie",
    date: "10 Octombrie 2026",
    price: 1000,
    duration: "2 zile",
    title: "Barber Master Tour – București",
    description:
      "Program complet de formare practică și teorie aplicată pentru frizeri activi.",
    image: "/images/tour-bucuresti.jpg",
  },
  {
    id: 4,
    city: "Iași",
    zone: "Nord-Est",
    month: "Noiembrie",
    date: "28 Noiembrie 2026",
    price: 800,
    duration: "1 zi",
    title: "Barber Master Tour – Iași",
    description:
      "Focus pe fade, blend, simetrie și disciplină de lucru în salon.",
    image: "/images/tour-iasi.jpg",
  },
];

export default function CountryToursPage() {
  const [selectedCity, setSelectedCity] = useState("Toate");
  const [selectedMonth, setSelectedMonth] = useState("Toate");
  const [selectedDuration, setSelectedDuration] = useState<
    "Toate" | EventDuration
  >("Toate");

  const months = useMemo(() => {
    const uniq = Array.from(new Set(EVENTS.map((e) => e.month)));
    return ["Toate", ...uniq];
  }, []);

  const durations: Array<"Toate" | EventDuration> = ["Toate", "1 zi", "2 zile"];

  const filteredEvents = useMemo(() => {
    return EVENTS.filter((event) => {
      const cityMatch = selectedCity === "Toate" || event.city === selectedCity;
      const monthMatch =
        selectedMonth === "Toate" || event.month === selectedMonth;
      const durationMatch =
        selectedDuration === "Toate" || event.duration === selectedDuration;
      return cityMatch && monthMatch && durationMatch;
    });
  }, [selectedCity, selectedMonth, selectedDuration]);

  const openWhatsApp = (event: EventItem) => {
    const msg = encodeURIComponent(
      `Salut! Sunt interesat de evenimentul ${event.title} din ${event.city} - ${event.date} (${event.duration}).`,
    );
    window.open(`${WHATSAPP_BASE}?text=${msg}`, "_blank");
  };

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background visuals */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-[#79FD15]/20 blur-[95px]" />
        <div className="absolute top-[30%] -left-24 h-[440px] w-[440px] rounded-full bg-[#79FD15]/12 blur-[110px]" />
        <div className="absolute bottom-[-160px] right-[-120px] h-[560px] w-[560px] rounded-full bg-[#79FD15]/14 blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      {/* HERO */}
      <section className="relative z-10 px-4 pt-14 pb-10 sm:pt-16 sm:pb-12">
        <div className="mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#79FD15]/25 bg-white/5 px-4 py-2 backdrop-blur-md">
            <span className="text-xs sm:text-sm font-pontano-sans text-white/85 tracking-wide">
              Barber Master Tour • România
            </span>
            <span className="h-2 w-2 rounded-full bg-[#79FD15] shadow-[0_0_18px_#79FD15]" />
          </div>

          <h1 className="mt-5 text-4xl sm:text-5xl md:text-7xl font-stint-ultra-expanded drop-shadow-[0_0_25px_rgba(0,0,0,0.7)]">
            COUNTRY TOURS<span className="text-[#79FD15]">.</span>
          </h1>

          <p className="mt-4 max-w-3xl mx-auto font-pontano-sans text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
            Sesiuni educaționale în mai multe orașe din România. Filtrează rapid
            după oraș, lună și durată — și rezervă direct prin WhatsApp.
          </p>

          {/* Quick stats */}
          <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {[
              { k: "Format", v: "Hands-on" },
              { k: "Focus", v: "fade • control • finishing" },
              { k: "Nivel", v: "Intermediar → Avansat" },
            ].map((x) => (
              <div
                key={x.k}
                className="rounded-2xl border border-[#79FD15]/18 bg-white/5 backdrop-blur-md px-5 py-4 text-left shadow-[0_18px_60px_rgba(0,0,0,0.6)]"
              >
                <div className="text-xs text-white/65 font-pontano-sans">
                  {x.k}
                </div>
                <div className="mt-1 text-base sm:text-lg font-pontano-sans font-semibold">
                  <span className="text-[#79FD15]">{x.v}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="relative z-10 px-4 pb-8">
        <div className="mx-auto max-w-6xl rounded-3xl border border-[#79FD15]/18 bg-white/5 backdrop-blur-md shadow-[0_18px_70px_rgba(0,0,0,0.75)] overflow-hidden">
          <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#79FD15] to-transparent" />
          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* City */}
              <div className="flex flex-col">
                <label className="text-xs font-pontano-sans text-white/70 mb-2">
                  Oraș
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="h-12 rounded-2xl bg-black/50 border border-[#79FD15]/25 px-4 text-white font-pontano-sans focus:outline-none focus:ring-2 focus:ring-[#79FD15]/40"
                >
                  {ROMANIA_CITIES_ALL.map((city) => (
                    <option
                      key={city}
                      value={city}
                      className="bg-black text-white"
                    >
                      {city}
                    </option>
                  ))}
                </select>
                <p className="mt-2 text-[11px] text-white/55 font-pontano-sans">
                  Vei vedea rezultate doar pentru orașele cu evenimente
                  publicate.
                </p>
              </div>

              {/* Month */}
              <div className="flex flex-col">
                <label className="text-xs font-pontano-sans text-white/70 mb-2">
                  Lună
                </label>
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="h-12 rounded-2xl bg-black/50 border border-[#79FD15]/25 px-4 text-white font-pontano-sans focus:outline-none focus:ring-2 focus:ring-[#79FD15]/40"
                >
                  {months.map((month) => (
                    <option
                      key={month}
                      value={month}
                      className="bg-black text-white"
                    >
                      {month}
                    </option>
                  ))}
                </select>
              </div>

              {/* Duration */}
              <div className="flex flex-col">
                <label className="text-xs font-pontano-sans text-white/70 mb-2">
                  Durată
                </label>
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value as any)}
                  className="h-12 rounded-2xl bg-black/50 border border-[#79FD15]/25 px-4 text-white font-pontano-sans focus:outline-none focus:ring-2 focus:ring-[#79FD15]/40"
                >
                  {durations.map((d) => (
                    <option key={d} value={d} className="bg-black text-white">
                      {d}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* tiny helper row */}
            <div className="mt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="text-sm font-pontano-sans text-white/70">
                Rezultate:{" "}
                <span className="text-[#79FD15] font-semibold">
                  {filteredEvents.length}
                </span>
              </div>

              <button
                onClick={() => {
                  setSelectedCity("Toate");
                  setSelectedMonth("Toate");
                  setSelectedDuration("Toate");
                }}
                className="rounded-2xl border border-[#79FD15]/25 bg-white/5 px-4 py-2 text-sm font-pontano-sans text-white hover:bg-white/10 transition"
              >
                Resetează filtrele
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="relative z-10 px-4 pb-16">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.99 }}
              className="group rounded-3xl border border-[#79FD15]/18 bg-white/5 backdrop-blur-md shadow-[0_18px_70px_rgba(0,0,0,0.75)] overflow-hidden flex flex-col"
            >
              <div className="relative h-56">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                {/* overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/80" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="rounded-full bg-black/70 border border-[#79FD15]/25 px-3 py-1 text-xs font-pontano-sans text-white/90 backdrop-blur-md">
                    {event.date}
                  </span>
                  <span className="rounded-full bg-[#79FD15] px-3 py-1 text-xs font-pontano-sans font-bold text-black">
                    {event.duration}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 rounded-full bg-black/70 border border-white/10 px-3 py-1 text-xs font-pontano-sans text-white/85 backdrop-blur-md">
                  📍 {event.city} • {event.zone}
                </div>

                {/* top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#79FD15] to-transparent opacity-80" />
              </div>

              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl font-stint-ultra-expanded text-white leading-tight">
                  {event.title}
                  <span className="text-[#79FD15]">.</span>
                </h3>

                <p className="mt-3 text-sm font-pontano-sans text-white/75 leading-relaxed">
                  {event.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <div className="text-xs font-pontano-sans text-white/60">
                    Investiție
                  </div>
                  <div className="text-2xl font-stint-ultra-expanded text-[#79FD15]">
                    {event.price}{" "}
                    <span className="text-white/75 text-base">RON</span>
                  </div>
                </div>

                <button
                  onClick={() => openWhatsApp(event)}
                  className="mt-5 w-full rounded-2xl bg-[#79FD15] text-black py-3 font-pontano-sans font-bold shadow-[0_18px_60px_rgba(0,0,0,0.6)] hover:brightness-95 transition"
                >
                  Rezervă prin WhatsApp
                </button>

                <p className="mt-3 text-[11px] font-pontano-sans text-white/55 text-center">
                  Vei primi confirmare + detalii de locație și program.
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <p className="text-center mt-10 text-white/70 font-pontano-sans">
            Nu există evenimente pentru criteriile selectate.
          </p>
        )}
      </section>

      {/* Bottom accent */}
      <div className="relative z-10 h-[3px] w-full bg-gradient-to-r from-transparent via-[#79FD15] to-transparent" />
    </main>
  );
}

"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";
import { TOURS } from "@/data/stories";
import { formatRon, whatsappLink } from "@/data/site";
import { Button, WhatsAppIcon } from "@/components/ui";

type Filters = { city: string; month: string; days: string };
const EMPTY: Filters = { city: "", month: "", days: "" };

const unique = (values: string[]) => [...new Set(values)];

const FilterGroup = ({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}) => (
  <div>
    <p className="eyebrow mb-3 text-bone/50">{label}</p>
    <div className="flex flex-wrap gap-2">
      {[{ value: "", label: "Toate" }, ...options].map((option) => {
        const active = value === option.value;
        return (
          <button
            key={option.value || "all"}
            type="button"
            onClick={() => onChange(option.value)}
            className={clsx(
              "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
              active ? "text-ink" : "text-bone/70 hover:text-bone",
            )}
          >
            {active && (
              <motion.span layoutId={`pill-${label}`} className="absolute inset-0 rounded-full bg-lime" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
            )}
            <span className="relative">{option.label}</span>
          </button>
        );
      })}
    </div>
  </div>
);

export const Tours = () => {
  const [filters, setFilters] = useState<Filters>(EMPTY);
  const today = new Date().toISOString().slice(0, 10);

  const tours = useMemo(
    () =>
      [...TOURS]
        .map((tour) => ({ ...tour, past: tour.dateISO < today }))
        .sort((a, b) => Number(a.past) - Number(b.past) || a.dateISO.localeCompare(b.dateISO))
        .filter(
          (tour) =>
            (!filters.city || tour.city === filters.city) &&
            (!filters.month || tour.month === filters.month) &&
            (!filters.days || String(tour.days) === filters.days),
        ),
    [filters, today],
  );

  const set = (key: keyof Filters) => (value: string) => setFilters((current) => ({ ...current, [key]: value }));
  const hasFilters = Object.values(filters).some(Boolean);

  return (
    <section className="bg-ink pb-24 text-bone md:pb-36">
      <div className="container-x">
        <div className="grid gap-8 rounded-[2rem] border border-bone/10 bg-forest-950 p-6 md:grid-cols-3 md:p-8">
          <FilterGroup label="Oraș" value={filters.city} onChange={set("city")} options={unique(TOURS.map((tour) => tour.city)).map((city) => ({ value: city, label: city }))} />
          <FilterGroup label="Lună" value={filters.month} onChange={set("month")} options={unique(TOURS.map((tour) => tour.month)).map((month) => ({ value: month, label: month }))} />
          <FilterGroup
            label="Durată"
            value={filters.days}
            onChange={set("days")}
            options={unique(TOURS.map((tour) => String(tour.days))).map((days) => ({ value: days, label: days === "1" ? "1 zi" : `${days} zile` }))}
          />
          <div className="flex flex-col justify-between gap-3 border-t border-bone/10 pt-5 text-sm text-bone/50 md:col-span-3 md:flex-row md:items-center">
            <p>Vei vedea rezultate doar pentru orașele cu evenimente publicate.</p>
            <button
              type="button"
              disabled={!hasFilters}
              onClick={() => setFilters(EMPTY)}
              className="w-fit rounded-full border border-bone/20 px-4 py-2 text-bone transition enabled:hover:bg-lime enabled:hover:text-ink disabled:opacity-30"
            >
              Resetează filtrele
            </button>
          </div>
        </div>

        <motion.div layout className="mt-8 grid gap-4 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {tours.map((tour) => (
              <motion.article
                layout
                key={tour.city}
                initial={{ opacity: 0, scale: 0.94, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={clsx("group overflow-hidden rounded-[2rem] bg-forest-900", tour.past && "opacity-60")}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={tour.image} alt={tour.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover grayscale transition duration-1000 group-hover:scale-105 group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/20 to-transparent" />
                  <p className="display absolute bottom-3 left-6 text-[clamp(3rem,7vw,5.5rem)] leading-none text-lime">{tour.city}</p>
                  <span className="absolute right-5 top-5 rounded-full bg-ink/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur">
                    {tour.past ? "Încheiat" : tour.region}
                  </span>
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-sm text-bone/60">
                    {tour.dateLabel} • {tour.days === 1 ? "1 zi" : `${tour.days} zile`} • {tour.city} • {tour.region}
                  </p>
                  <h3 className="display mt-2 text-3xl">{tour.title}</h3>
                  <p className="mt-3 text-bone/70">{tour.text}</p>
                  <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-bone/50">Investiție</p>
                      <p className="display text-4xl">{formatRon(tour.price)}</p>
                    </div>
                    {!tour.past && (
                      <Button href={whatsappLink(`Bună! Vreau să rezerv un loc la ${tour.title} (${tour.dateLabel}).`)} external arrow={false}>
                        <WhatsAppIcon /> Rezervă prin WhatsApp
                      </Button>
                    )}
                  </div>
                  {!tour.past && <p className="mt-4 text-xs text-bone/45">Vei primi confirmare + detalii de locație și program.</p>}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {tours.length === 0 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="display mt-8 rounded-[2rem] border border-dashed border-bone/20 p-12 text-center text-3xl text-bone/50">
            Nu există evenimente pentru criteriile selectate.
          </motion.p>
        )}
      </div>
    </section>
  );
};

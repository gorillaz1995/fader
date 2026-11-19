import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="grain flex min-h-[100svh] flex-col items-start justify-center bg-lime text-ink">
      <div className="container-x">
        <p className="eyebrow">Eroare 404</p>
        <h1 className="display mt-4 text-[clamp(6rem,24vw,22rem)] leading-[0.8]">404</h1>
        <p className="accent mt-4 text-4xl text-forest">Tunsoarea asta nu există.</p>
        <div className="mt-10">
          <Button href="/" variant="ink">
            Înapoi acasă
          </Button>
        </div>
      </div>
    </section>
  );
}

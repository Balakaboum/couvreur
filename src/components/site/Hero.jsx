
import { ArrowRight, Check, Phone, ShieldCheck } from "lucide-react";
import { Image } from "@/components/ui/image";

const hero = `${import.meta.env.BASE_URL}couverture.jpg`;

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative isolate overflow-hidden bg-[#0A2540] pt-20 text-white sm:pt-24"
    >
      <div className="absolute inset-0 -z-10 lg:inset-y-0 lg:left-[44%] lg:right-0">
        <Image
          src={hero}
          alt="Chantier de couverture réalisé par SCHMIT Bengy Couverture"
          className="h-full w-full object-cover object-[68%_center] sm:object-cover lg:object-center"
        />
        <div className="absolute inset-0 bg-[#0A2540]/75 sm:bg-[#0A2540]/65 lg:bg-gradient-to-r lg:from-[#0A2540] lg:via-[#0A2540]/50 lg:to-transparent" />
      </div>

      <div className="site-wrap relative grid items-center py-10 sm:min-h-[720px] sm:py-24 lg:grid-cols-2">
        <div className="max-w-2xl">
          <p className="eyebrow text-blue-300">
            Couverture • Étanchéité • Zinguerie
          </p>

          <h1 className="mt-4 text-[2.25rem] font-black leading-[1.06] tracking-[-.04em] sm:mt-4 sm:text-6xl lg:text-7xl">
            Votre toiture,
            <br />
            <span className="text-[#66A0FF]">notre savoir-faire.</span>
          </h1>

          <p className="mt-4 max-w-xl text-base leading-7 text-blue-100 sm:mt-5 sm:text-lg sm:leading-8">
            SCHMIT Bengy Couverture vous accompagne pour vos travaux de
            couverture, d’étanchéité et de rénovation de toiture.
          </p>

          <div className="mt-5 inline-flex max-w-full items-center gap-3 rounded-full bg-white px-4 py-3 text-sm font-bold leading-5 text-[#0A2540] shadow-lg sm:mt-6 sm:px-5 sm:text-base">
            <ShieldCheck size={22} className="shrink-0 text-[#0055FF]" />
            <span>Entreprise assurée — Garantie décennale</span>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-9 sm:flex">
            <a
              href="#devis"
              className="btn-primary justify-center px-3 text-center text-sm sm:px-6 sm:text-base"
            >
              <span className="sm:hidden">Devis gratuit</span>
              <span className="hidden sm:inline">
                Demander un devis gratuit
              </span>
              <ArrowRight size={18} className="hidden sm:inline" />
            </a>

            <a
              href="tel:+33658919511"
              aria-label="Appeler SCHMIT Bengy Couverture"
              className="btn-light justify-center px-3 text-center text-sm sm:px-6 sm:text-base"
            >
              <Phone size={18} />
              <span className="sm:hidden">Appeler</span>
              <span className="hidden sm:inline">Appeler maintenant</span>
            </a>
          </div>

          <a
            href="tel:+33658919511"
            className="mt-6 hidden font-bold text-blue-200 sm:inline-block"
          >
            06 58 91 95 11
          </a>

          <div className="mt-10 hidden grid-cols-2 gap-4 text-sm sm:grid sm:grid-cols-4">
            {[
              "Devis gratuit",
              "Travail soigné",
              "Intervention rapide",
              "Pros qualifiés",
            ].map((x) => (
              <span key={x} className="flex items-center gap-2">
                <Check size={16} className="text-[#66A0FF]" />
                {x}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

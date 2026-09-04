import { useState } from "react";
import { X, ZoomIn, ImagePlus } from "lucide-react";
import { Image } from "@/components/ui/image";

const photos = [
  `${import.meta.env.BASE_URL}chantier-1.jpg`,
  `${import.meta.env.BASE_URL}chantier-2.jpg`,
  `${import.meta.env.BASE_URL}chantier-3.jpg`,
  `${import.meta.env.BASE_URL}chantier-4.jpg`,
  `${import.meta.env.BASE_URL}chantier-5.jpg`,
];

function EmptyTile({ big }) {
  return (
    <div className={`relative h-72 overflow-hidden bg-[#0A2540] ${big ? "md:col-span-2" : ""}`}>
      <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#66A0FF]/40 blur-3xl" />
      <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#0055FF]/30 blur-3xl" />
      <div className="absolute inset-0 flex items-center justify-center">
        <ImagePlus size={26} className="text-white/40" />
      </div>
    </div>
  );
}

function GalleryTile({ src, big, onOpen }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <EmptyTile big={big} />;
  return (
    <button
      onClick={() => onOpen(src)}
      className={`group relative overflow-hidden text-left ${big ? "md:col-span-2" : ""}`}
    >
      <Image
        src={src}
        alt="Chantier réalisé par SCHMIT Couverture"
        className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
        onError={() => setFailed(true)}
      />
      <span className="absolute inset-0 flex items-center justify-center bg-[#0A2540]/0 text-white opacity-0 transition group-hover:bg-[#0A2540]/30 group-hover:opacity-100">
        <ZoomIn size={28} />
      </span>
    </button>
  );
}

export default function Gallery() {
  const [active, setActive] = useState(null);
  return (
    <section id="realisations" className="section bg-[#F4F7FA]">
      <div className="site-wrap">
        <p className="eyebrow">Nos réalisations</p>
        <div className="section-head"><h2>La preuve par le travail.</h2></div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {photos.map((src, i) => (
            <GalleryTile key={src} src={src} big={i === 0} onOpen={setActive} />
          ))}
        </div>
      </div>
      {active && (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-[#06182A]/95 p-4" role="dialog" aria-modal="true">
          <button
            onClick={() => setActive(null)}
            className="fixed right-4 top-4 z-[80] grid h-11 w-11 place-items-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black/80"
            aria-label="Fermer"
          >
            <X size={22} />
          </button>
          <Image
            src={active}
            alt="Chantier réalisé par SCHMIT Couverture"
            loading="eager"
            className="max-h-[85vh] w-auto max-w-[92vw] object-contain"
          />
        </div>
      )}
    </section>
  );
}

import { useEffect, useState } from "react";
import { FileText, Phone } from "lucide-react";

export default function MobileDock() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-3 bottom-3 z-50 grid grid-cols-2 overflow-hidden rounded-2xl border border-white/20 bg-[#0A2540] p-1 shadow-2xl transition-all duration-300 md:hidden ${
        visible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0 pointer-events-none"
      }`}
    >
      <a
        href="tel:+33658919511"
        aria-label="Appeler SCHMIT Couverture au téléphone"
        className="flex items-center justify-center gap-2 py-3 font-bold text-white"
      >
        <Phone size={18} /> Appeler
      </a>
      <a
        href="#devis"
        className="flex items-center justify-center gap-2 rounded-xl bg-[#0055FF] py-3 font-bold text-white"
      >
        <FileText size={18} /> Devis
      </a>
    </div>
  );
}

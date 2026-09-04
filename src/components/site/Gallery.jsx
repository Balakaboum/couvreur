import { useState } from "react"; import { X, ZoomIn } from "lucide-react"; import { Image } from "@/components/ui/image";
const works=[
 `${import.meta.env.BASE_URL}chantier-1.jpg`,
 `${import.meta.env.BASE_URL}chantier-2.jpg`,
 `${import.meta.env.BASE_URL}chantier-3.jpg`
];
export default function Gallery(){
  const [active,setActive]=useState(null);
  return <section id="realisations" className="section bg-[#F4F7FA]">
    <div className="site-wrap">
      <p className="eyebrow">Nos réalisations</p>
      <div className="section-head"><h2>La preuve par le travail.</h2></div>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {works.map((src,i)=>
          <button key={src} onClick={()=>setActive(src)} className={`group relative overflow-hidden text-left ${i===0?"lg:col-span-2":""}`}>
            <Image src={src} alt="Chantier réalisé par SCHMIT Couverture" className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"/>
            <span className="absolute inset-0 flex items-center justify-center bg-[#0A2540]/0 text-white opacity-0 transition group-hover:bg-[#0A2540]/30 group-hover:opacity-100"><ZoomIn size={28}/></span>
          </button>
        )}
      </div>
    </div>
    {active&&<div className="fixed inset-0 z-[70] grid place-items-center bg-[#06182A]/95 p-4" role="dialog" aria-modal="true">
      <button onClick={()=>setActive(null)} className="fixed right-4 top-4 z-[80] grid h-11 w-11 place-items-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black/80" aria-label="Fermer"><X size={22}/></button>
      <Image src={active} alt="Chantier réalisé par SCHMIT Couverture" loading="eager" className="max-h-[85vh] w-auto max-w-[92vw] object-contain"/>
    </div>}
  </section>
}

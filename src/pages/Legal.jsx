import { Link } from "react-router-dom";
import Brand from "@/components/site/Brand";

export default function Legal() {
  return (
    <main className="min-h-screen bg-[#F4F7FA] py-10">
      <article className="mx-auto max-w-3xl bg-white p-8 shadow-sm md:p-14">
        <Brand />

        <h1 className="mt-12 text-4xl font-black text-[#0A2540]">Mentions légales</h1>

        <h2 className="mt-10 text-xl font-bold text-[#0A2540]">Éditeur du site</h2>
        <p className="mt-4 leading-7 text-slate-600">
          SCHMIT Couverture — Bengy Schmit, entrepreneur individuel (micro-entreprise)<br />
          Siège : 51 Chemin des Roures, 34400 Lunel<br />
          SIRET : 494 193 188 00047<br />
          Code APE : 4391B — Travaux de couverture par éléments<br />
          Téléphone : 06 58 91 95 11<br />
          Email : schmitbengy@gmail.com
        </p>

        <h2 className="mt-8 text-xl font-bold text-[#0A2540]">Directeur de la publication</h2>
        <p className="mt-4 leading-7 text-slate-600">Bengy Schmit</p>

        <h2 className="mt-8 text-xl font-bold text-[#0A2540]">Hébergement du site</h2>
        <p className="mt-4 leading-7 text-slate-600">
          GitHub, Inc. — 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis
        </p>

        <h2 className="mt-8 text-xl font-bold text-[#0A2540]">Assurance professionnelle</h2>
        <p className="mt-4 leading-7 text-slate-600">
          SCHMIT Couverture est couvert par une assurance Responsabilité Civile Professionnelle
          et une Garantie Décennale souscrites auprès de DIN-FLOD IARD (immatriculation ORIAS
          n°25006323), contrat n°DF20264235GW.
        </p>

        <h2 className="mt-8 text-xl font-bold text-[#0A2540]">Propriété intellectuelle</h2>
        <p className="mt-4 leading-7 text-slate-600">
          L'ensemble des contenus présents sur ce site (textes, images, logo) est la propriété de
          SCHMIT Couverture, sauf mention contraire. Toute reproduction sans autorisation est
          interdite.
        </p>

        <h2 className="mt-8 text-xl font-bold text-[#0A2540]">Contact</h2>
        <p className="mt-4 leading-7 text-slate-600">
          Pour toute question relative au site, contactez-nous à schmitbengy@gmail.com ou au
          06 58 91 95 11.
        </p>

        <Link to="/" className="btn-primary mt-10">Retour au site</Link>
      </article>
    </main>
  );
}

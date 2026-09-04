import { Link } from "react-router-dom";
import Brand from "@/components/site/Brand";

export default function Privacy() {
  return (
    <main className="min-h-screen bg-[#F4F7FA] py-10">
      <article className="mx-auto max-w-3xl bg-white p-8 shadow-sm md:p-14">
        <Brand />

        <h1 className="mt-12 text-4xl font-black text-[#0A2540]">Politique de confidentialité</h1>

        <p className="mt-6 leading-7 text-slate-600">
          Les informations transmises via le formulaire de devis sont utilisées uniquement pour
          répondre à votre demande et assurer le suivi de votre projet. Elles ne sont pas vendues
          ni utilisées à des fins étrangères à votre prise de contact.
        </p>

        <h2 className="mt-8 text-xl font-bold text-[#0A2540]">Vos droits</h2>
        <p className="mt-4 leading-7 text-slate-600">
          Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez
          d'un droit d'accès, de rectification et de suppression des données vous concernant.
          Pour exercer ce droit, contactez-nous à schmitbengy@gmail.com.
        </p>

        <h2 className="mt-8 text-xl font-bold text-[#0A2540]">Conservation des données</h2>
        <p className="mt-4 leading-7 text-slate-600">
          Les données transmises via le formulaire de devis sont conservées le temps nécessaire au
          traitement de votre demande et à la relation commerciale qui pourrait en découler.
        </p>

        <Link to="/" className="btn-primary mt-10">Retour au site</Link>
      </article>
    </main>
  );
}

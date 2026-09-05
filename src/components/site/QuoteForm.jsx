import { useState } from "react";
import { Loader2 } from "lucide-react";

const initial = { full_name: "", phone: "", email: "", city: "", work_type: "", message: "" };
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjyvoqbq";

export default function QuoteForm() {
  const [form, setForm] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [hp, setHp] = useState("");

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (hp) {
      // champ piège rempli par un bot : on affiche le succès sans rien envoyer
      setSent(true);
      setForm(initial);
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });
      if (res.ok) {
        setSent(true);
        setForm(initial);
      } else {
        setError("Une erreur est survenue. Vous pouvez nous appeler directement.");
      }
    } catch {
      setError("Une erreur est survenue. Vous pouvez nous appeler directement.");
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="rounded-2xl bg-blue-50 p-8 text-center">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#0055FF] text-2xl text-white">✓</div>
        <h3 className="mt-4 text-xl font-bold text-[#0A2540]">Votre demande a bien été envoyée.</h3>
        <p className="mt-2 text-slate-600">Merci. Notre équipe reviendra vers vous dans les meilleurs délais.</p>
        <button onClick={() => setSent(false)} className="mt-5 text-sm font-bold text-[#0055FF]">
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
      <input type="hidden" name="_subject" value="Nouvelle demande de devis — SCHMIT Couverture" />
      <input
        type="text"
        name="_gotcha"
        value={hp}
        onChange={(e) => setHp(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />
      {[
        ["full_name", "Nom / prénom", "text"],
        ["phone", "Téléphone", "tel"],
        ["email", "Email", "email"],
        ["city", "Ville", "text"],
      ].map(([n, p, t]) => (
        <input key={n} name={n} type={t} value={form[n]} onChange={change} placeholder={p} required className="field" />
      ))}
      <select name="work_type" value={form.work_type} onChange={change} required className="field sm:col-span-2">
        <option value="">Type de travaux</option>
        {["Rénovation", "Réparation / fuite", "Couverture", "Étanchéité", "Zinguerie", "Nettoyage / entretien", "Gouttières", "Autre"].map((x) => (
          <option key={x}>{x}</option>
        ))}
      </select>
      <textarea
        name="message"
        value={form.message}
        onChange={change}
        placeholder="Décrivez brièvement votre projet"
        required
        rows="4"
        className="field sm:col-span-2"
      />
      {error && <p className="text-sm text-red-600 sm:col-span-2">{error}</p>}
      <button disabled={loading} className="btn-primary justify-center sm:col-span-2">
        {loading ? (
          <>
            <Loader2 className="animate-spin" /> Envoi en cours...
          </>
        ) : (
          "Obtenir mon devis"
        )}
      </button>
    </form>
  );
}

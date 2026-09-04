import { Link } from "react-router-dom";
export default function Footer(){
  return (
    <footer className="bg-[#06182A] pb-24 pt-16 text-blue-100 md:pb-10">
      <div className="site-wrap grid gap-10 divide-y divide-white/10 text-center md:grid-cols-2 md:divide-y-0 md:text-left lg:grid-cols-4">
        <div>
          <p className="text-sm leading-6 text-blue-200">Couverture, étanchéité, zinguerie et rénovation de toiture.</p>
        </div>
        <div className="pt-10 md:pt-0">
          <h3 className="font-bold text-white">Navigation</h3>
          <div className="mt-4 grid gap-3 text-sm">
            <a href="/#services">Services</a>
            <a href="/#realisations">Réalisations</a>
            <a href="/#a-propos">À propos</a>
            <a href="/#devis">Devis gratuit</a>
          </div>
        </div>
        <div className="pt-10 md:pt-0">
          <h3 className="font-bold text-white">Contact</h3>
          <div className="mt-4 grid gap-3 text-sm">
            <a href="tel:+330658919511">06 58 91 95 11</a>
            <a href="mailto:schmitbengy@gmail.com">schmitbengy@gmail.com</a>
            <span>Hérault, Gard</span>
          </div>
        </div>
        <div className="pt-10 md:pt-0">
          <h3 className="font-bold text-white">Informations</h3>
          <div className="mt-4 grid gap-3 text-sm">
            <Link to="/mentions-legales">Mentions légales</Link>
            <Link to="/confidentialite">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
      <div className="site-wrap mt-12 border-t border-white/10 pt-6 text-center text-xs text-blue-300 md:text-left">
        © {new Date().getFullYear()} SCHMIT Couverture. Tous droits réservés.
      </div>
    </footer>
  );
}

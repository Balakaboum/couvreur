export default function Brand({ light = false }) {
  const logoSrc = `${import.meta.env.BASE_URL}logo_schmit.png`;
  const homeHref = `${import.meta.env.BASE_URL}#accueil`;

  return (
    <a href={homeHref} className="inline-flex items-center" aria-label="SCHMIT Couverture — Retour à l'accueil">
      {light ? (
        <span className="inline-flex items-center rounded-xl bg-white px-3 py-2 shadow-sm">
          <img
            src={logoSrc}
            alt="SCHMIT Couverture — Couvreur, étanchéité, 34 Hérault"
            className="h-11 w-auto object-contain"
          />
        </span>
      ) : (
        <img
          src={logoSrc}
          alt="SCHMIT Couverture — Couvreur, étanchéité, 34 Hérault"
          className="h-14 w-auto object-contain"
        />
      )}
      <span className="sr-only">SCHMIT Couverture — Couvreur à Lunel, Hérault et Gard</span>
    </a>
  );
}

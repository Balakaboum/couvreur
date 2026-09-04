export default function Brand({ light = false }) {
  return (
    <a href="/#accueil" className="inline-flex items-center" aria-label="SCHMIT Couverture — Accueil">
      {light ? (
        <span className="inline-flex items-center rounded-xl bg-white px-3 py-2 shadow-sm">
          <img
            src="/logo_schmit.png"
            alt="SCHMIT Couverture — Couvreur, étanchéité, 34 Hérault"
            className="h-11 w-auto object-contain"
          />
        </span>
      ) : (
        <img
          src="/logo_schmit.png"
          alt="SCHMIT Couverture — Couvreur, étanchéité, 34 Hérault"
          className="h-14 w-auto object-contain"
        />
      )}
    </a>
  );
}

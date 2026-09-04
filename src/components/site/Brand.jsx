export default function Brand({ light = false }) {
  const logoSrc = `${import.meta.env.BASE_URL}logo_schmit.png`;

  return (
    <div className="inline-flex items-center">
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
    </div>
  );
}

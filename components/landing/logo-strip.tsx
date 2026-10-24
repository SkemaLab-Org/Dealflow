const funds = ["Meridian Ventures", "Copperline", "Atlas & Pine", "Northstar Capital", "Field Partners", "Sable VC"];

export function LogoStrip() {
  return (
    <section aria-label="Trusted by" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-center font-mono text-xs uppercase tracking-widest text-muted">
          Trusted by 400+ investment teams
        </p>
        <ul className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 text-center sm:grid-cols-3 lg:grid-cols-6">
          {funds.map((fund) => (
            <li key={fund} className="text-base font-semibold tracking-tight text-foreground/50">
              {fund}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

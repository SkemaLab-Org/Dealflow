const steps = [
  {
    step: "01",
    title: "Capture",
    body: "Forward a deck or connect your inbox. Dealflow creates the company, enriches it, and logs who brought it in.",
  },
  {
    step: "02",
    title: "Evaluate",
    body: "Score against your thesis, assign an owner, and collaborate on notes and diligence tasks in one place.",
  },
  {
    step: "03",
    title: "Decide",
    body: "Bring a complete IC packet to the partner meeting and record the decision with full context preserved.",
  },
];

const stats = [
  { value: "3.2x", label: "more deals reviewed per partner" },
  { value: "41%", label: "faster from first meeting to term sheet" },
  { value: "9 hrs", label: "saved per investor, every week" },
];

export function Workflow() {
  return (
    <section id="workflow" className="scroll-mt-16 border-b border-border/60">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 lg:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-accent">Workflow</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            From first email to final decision.
          </h2>
          <ol className="mt-12 flex flex-col gap-10">
            {steps.map((s) => (
              <li key={s.step} className="flex gap-6">
                <span className="font-mono text-sm text-accent">{s.step}</span>
                <div>
                  <h3 className="text-lg font-medium">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="flex flex-col justify-center">
          <dl className="flex flex-col divide-y divide-border rounded-2xl border border-border bg-surface">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-baseline justify-between gap-6 p-8">
                <dt className="max-w-[14rem] text-sm text-muted">{stat.label}</dt>
                <dd className="font-mono text-4xl font-medium tracking-tight md:text-5xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 font-mono text-xs text-muted">Median results across customers after 90 days.</p>
        </div>
      </div>
    </section>
  );
}

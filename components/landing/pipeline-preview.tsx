type Deal = {
  name: string;
  sector: string;
  round: string;
  amount: string;
  score: number;
  owner: string;
};

const columns: { title: string; count: number; deals: Deal[] }[] = [
  {
    title: "Sourced",
    count: 142,
    deals: [
      { name: "Northwind Labs", sector: "Dev tools", round: "Seed", amount: "$3M", score: 72, owner: "AK" },
      { name: "Halcyon Bio", sector: "Biotech", round: "Pre-seed", amount: "$1.5M", score: 64, owner: "JL" },
    ],
  },
  {
    title: "First meeting",
    count: 38,
    deals: [
      { name: "Ferrous", sector: "Climate", round: "Series A", amount: "$12M", score: 86, owner: "MR" },
      { name: "Ledgerline", sector: "Fintech", round: "Seed", amount: "$4M", score: 79, owner: "AK" },
    ],
  },
  {
    title: "Diligence",
    count: 9,
    deals: [{ name: "Orbital Freight", sector: "Logistics", round: "Series A", amount: "$18M", score: 91, owner: "SP" }],
  },
  {
    title: "IC review",
    count: 3,
    deals: [{ name: "Quill Health", sector: "Healthcare", round: "Series B", amount: "$30M", score: 88, owner: "JL" }],
  },
];

function DealCard({ deal, highlighted }: { deal: Deal; highlighted?: boolean }) {
  return (
    <div
      className={`rounded-lg border bg-background p-3 ${highlighted ? "border-accent/60" : "border-border"}`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="truncate text-sm font-medium">{deal.name}</p>
          <p className="text-xs text-muted">{deal.sector}</p>
        </div>
        <span
          aria-label={`Fit score ${deal.score}`}
          className={`rounded px-1.5 py-0.5 font-mono text-[11px] ${
            deal.score >= 85 ? "bg-accent text-accent-foreground" : "bg-surface text-muted"
          }`}
        >
          {deal.score}
        </span>
      </div>
      <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-muted">
        <span>
          {deal.round} &middot; {deal.amount}
        </span>
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-surface text-[9px] text-foreground">
          {deal.owner}
        </span>
      </div>
    </div>
  );
}

export function PipelinePreview() {
  return (
    <figure
      aria-label="Preview of the Dealflow pipeline board"
      className="overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/50"
    >
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
        </div>
        <p className="font-mono text-xs text-muted">Fund III &middot; Active pipeline</p>
        <p className="hidden font-mono text-xs text-muted sm:block">192 companies</p>
      </div>
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4">
        {columns.map((column, i) => (
          <div key={column.title} className={i > 1 ? "hidden sm:block" : undefined}>
            <div className="mb-3 flex items-center justify-between px-1">
              <p className="text-xs font-medium uppercase tracking-wider text-muted">{column.title}</p>
              <p className="font-mono text-xs text-muted">{column.count}</p>
            </div>
            <div className="flex flex-col gap-2">
              {column.deals.map((deal) => (
                <DealCard key={deal.name} deal={deal} highlighted={deal.name === "Orbital Freight"} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <figcaption className="sr-only">
        A kanban board showing deals moving from sourced to IC review, each with a fit score.
      </figcaption>
    </figure>
  );
}

import { Radar, KanbanSquare, FileSearch, LineChart, Users, Plug } from "lucide-react";

const features = [
  {
    icon: Radar,
    title: "Automated sourcing",
    body: "Pull inbound decks, warm intros, and scout referrals into one queue. Every company is enriched with funding history, team, and traction data.",
  },
  {
    icon: KanbanSquare,
    title: "Shared pipeline",
    body: "A board your whole partnership actually uses. Custom stages, owners, and next steps keep momentum visible across the fund.",
  },
  {
    icon: FileSearch,
    title: "Diligence workspaces",
    body: "Checklists, data rooms, and reference notes live alongside the deal. Draft IC memos from your notes in a click.",
  },
  {
    icon: LineChart,
    title: "Fit scoring",
    body: "Score every opportunity against your thesis so the best deals rise to the top before a competitor gets the meeting.",
  },
  {
    icon: Users,
    title: "Relationship intelligence",
    body: "See who on your team knows a founder, how warm the connection is, and the fastest path to an introduction.",
  },
  {
    icon: Plug,
    title: "Fits your stack",
    body: "Syncs with Gmail, Outlook, Slack, and your calendar. Export anywhere via API when you need to.",
  },
];

export function Features() {
  return (
    <section id="product" className="scroll-mt-16 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">Product</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Built for how investors actually work.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted">
            Replace the spreadsheet, the CRM nobody updates, and the endless email threads with a single source of truth.
          </p>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, body }) => (
            <article key={title} className="flex flex-col gap-4 bg-background p-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface">
                <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="text-sm leading-relaxed text-muted">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Check } from "lucide-react";

const plans = [
  {
    name: "Angel",
    price: "$0",
    cadence: "forever",
    description: "For solo investors and scouts getting organized.",
    features: ["Up to 100 companies", "Personal pipeline", "Email forwarding", "Basic enrichment"],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Fund",
    price: "$89",
    cadence: "per seat / month",
    description: "For investment teams running a shared process.",
    features: [
      "Unlimited companies",
      "Shared pipelines & stages",
      "Fit scoring & AI memo drafts",
      "Inbox, calendar & Slack sync",
      "Relationship intelligence",
    ],
    cta: "Request access",
    featured: true,
  },
  {
    name: "Platform",
    price: "Custom",
    cadence: "annual",
    description: "For multi-fund firms with advanced security needs.",
    features: ["Everything in Fund", "SSO & audit logs", "Custom data warehouse sync", "Dedicated onboarding"],
    cta: "Talk to sales",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-16 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">Pricing</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Simple pricing that scales with your fund.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`flex flex-col rounded-2xl border p-8 ${
                plan.featured ? "border-accent/60 bg-surface" : "border-border bg-background"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">{plan.name}</h3>
                {plan.featured && (
                  <span className="rounded-full bg-accent px-2.5 py-0.5 font-mono text-[11px] text-accent-foreground">
                    Most popular
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-muted">{plan.description}</p>
              <p className="mt-8 flex items-baseline gap-2">
                <span className="text-4xl font-semibold tracking-tight">{plan.price}</span>
                <span className="text-sm text-muted">{plan.cadence}</span>
              </p>
              <ul className="mt-8 flex flex-1 flex-col gap-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#get-started"
                className={`mt-10 rounded-full px-5 py-2.5 text-center text-sm font-medium transition-opacity hover:opacity-90 ${
                  plan.featured ? "bg-accent text-accent-foreground" : "border border-border text-foreground"
                }`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

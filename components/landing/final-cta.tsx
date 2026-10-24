import { ArrowRight } from "lucide-react";

export function FinalCta() {
  return (
    <section id="get-started" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col items-start justify-between gap-10 rounded-3xl bg-accent p-10 text-accent-foreground md:flex-row md:items-end md:p-16">
          <div className="max-w-xl">
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
              Stop losing deals in the shuffle.
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed opacity-80">
              Join the funds running a tighter process. Onboarding takes an afternoon, and we&apos;ll import your
              existing pipeline for you.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent-foreground px-6 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
          >
            Request access
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

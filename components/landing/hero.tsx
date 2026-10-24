import { ArrowRight } from "lucide-react";
import { PipelinePreview } from "./pipeline-preview";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Now with AI memo drafts
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Every deal, every signal, one pipeline.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted">
            Dealflow is the shared workspace where investment teams source companies, run diligence, and decide faster
            &mdash; without losing context in inboxes and spreadsheets.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Request access
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#product"
              className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
            >
              See how it works
            </a>
          </div>
        </div>
        <div className="mt-16 md:mt-20">
          <PipelinePreview />
        </div>
      </div>
    </section>
  );
}

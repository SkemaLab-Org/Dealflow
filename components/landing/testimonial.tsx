export function Testimonial() {
  return (
    <section id="customers" className="scroll-mt-16 border-b border-border/60">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <figure>
          <blockquote className="text-balance text-2xl font-medium leading-snug tracking-tight md:text-3xl">
            &ldquo;We used to lose great companies in someone&apos;s inbox. Now every partner sees the same pipeline,
            and our Monday meeting is about decisions instead of status updates.&rdquo;
          </blockquote>
          <figcaption className="mt-8 flex flex-col items-center gap-1">
            <span className="font-medium">Priya Raman</span>
            <span className="text-sm text-muted">General Partner, Meridian Ventures</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

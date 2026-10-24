import { SiteHeader } from "@/components/landing/site-header";
import { Hero } from "@/components/landing/hero";
import { LogoStrip } from "@/components/landing/logo-strip";
import { Features } from "@/components/landing/features";
import { Workflow } from "@/components/landing/workflow";
import { Testimonial } from "@/components/landing/testimonial";
import { Pricing } from "@/components/landing/pricing";
import { FinalCta } from "@/components/landing/final-cta";
import { SiteFooter } from "@/components/landing/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <LogoStrip />
        <Features />
        <Workflow />
        <Testimonial />
        <Pricing />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}

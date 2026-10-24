import { CurrentYear } from "./current-year";
import { Logo } from "./logo";

const groups = [
  { title: "Product", links: ["Pipeline", "Sourcing", "Diligence", "Integrations"] },
  { title: "Company", links: ["About", "Customers", "Careers", "Contact"] },
  { title: "Resources", links: ["Docs", "Security", "Changelog", "Privacy"] },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 md:flex-row md:justify-between">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted">
            The operating system for venture deal flow.
          </p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-medium">{group.title}</h2>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-muted">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition-colors hover:text-foreground">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="mx-auto max-w-6xl border-t border-border/60 px-6 py-6">
        <p className="font-mono text-xs text-muted">&copy; <CurrentYear /> Dealflow, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

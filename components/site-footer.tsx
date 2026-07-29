const legalLinks = [
  { label: "Privacy Policy", href: "https://aisingapore.org/home/privacy-policy/" },
  { label: "Legal", href: "https://aisingapore.org/home/legal/" },
  { label: "Terms of Use", href: "https://aisingapore.org/home/terms-of-use/" },
];

/**
 * The deployed bundle carried this as a literal, not a `getFullYear()` call,
 * so it does not roll over on its own. Swap in `new Date().getFullYear()` if
 * you would rather it did.
 */
const COPYRIGHT_YEAR = 2026;

/** Legal links and copyright line. */
export function SiteFooter() {
  return (
    <footer className="section-mid border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center gap-6">
          <nav
            aria-label="Legal"
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8"
          >
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <p className="text-sm text-muted-foreground">
            ©️ {COPYRIGHT_YEAR} AI Singapore. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

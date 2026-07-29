import { ExternalLink, Globe } from "lucide-react";

/** Contact details and outbound links to AI Singapore properties. */
export function ContactSection() {
  return (
    <section id="contact" className="section-warm py-24 border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            Contact Us
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <p className="text-center text-sm sm:text-base text-muted-foreground">
              For further enquiries, please email{" "}
              <a href="mailto:chandra@aisingapore.org" className="text-primary underline">
                chandra@aisingapore.org
              </a>
              .
            </p>
          </div>
        </div>
        <div className="grid gap-4">
          <a
            href="https://aisingapore.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-background card-hover-glow group reveal-scale"
            data-delay="1"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
              <Globe className="w-5 h-5 text-primary" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                AI Singapore
                <ExternalLink className="w-3 h-3 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              </p>
              <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                Explore all of AI Singapore's programmes and initiatives
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

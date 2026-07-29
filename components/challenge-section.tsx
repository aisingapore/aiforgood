import { BookOpen, Briefcase, Globe } from "lucide-react";

/** Frames the problem the programme addresses, with supporting statistics. */
export function ChallengeSection() {
  return (
    <section id="approach" className="section-mid py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance heading-underline">
            The AI Era is Here — Are We Ready?
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div
            className="relative group p-8 bg-background rounded-2xl border border-border card-hover-glow cursor-default reveal-left"
            data-delay="1"
            style={{ willChange: "transform" }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <BookOpen className="w-7 h-7 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Learn
              </h3>
              <p className="text-sm font-medium text-primary mb-3 group-hover:text-primary/80 transition-colors">
                AI is reshaping how we learn
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                AI is redefining how knowledge is created, accessed, and applied. We are moving from passive tools to intelligent collaborators — transforming every learning environment.
              </p>
            </div>
          </div>
          <div
            className="relative group p-8 bg-background rounded-2xl border border-border card-hover-glow cursor-default reveal"
            data-delay="2"
            style={{ willChange: "transform" }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Briefcase className="w-7 h-7 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Work
              </h3>
              <p className="text-sm font-medium text-primary mb-3 group-hover:text-primary/80 transition-colors">
                AI is reshaping jobs
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Automation is reshaping roles, skills, and economic participation. AI literacy is no longer optional — it defines how we work, collaborate, and remain relevant.
              </p>
            </div>
          </div>
          <div
            className="relative group p-8 bg-background rounded-2xl border border-border card-hover-glow cursor-default reveal-right"
            data-delay="3"
            style={{ willChange: "transform" }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Globe className="w-7 h-7 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Participate
              </h3>
              <p className="text-sm font-medium text-primary mb-3 group-hover:text-primary/80 transition-colors">
                AI is reshaping access
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Without deliberate intervention, the AI divide will exclude underserved communities from opportunities in the global digital economy, widening existing inequalities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
